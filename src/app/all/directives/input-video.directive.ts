import {OnChanges, Directive, HostListener, Input, AfterViewChecked} from '@angular/core';

const _window: any = window;

@Directive({
  selector: '[appInputVideo]'
})
export class InputVideoDirective implements OnChanges, AfterViewChecked {

  @Input('appInputVideo') options;
  @Input('appInputVideoValue') value;

  private playerYT: any;
  private created: boolean;
  private firstLoaded: boolean;

  constructor() {
    this.created = false;
    this.firstLoaded = false;
  }

  ngOnChanges() {
    if (!this.created) {
      this.created = true;
      this.loadScript();
      this.createElementDiv();
    }
  }

  ngAfterViewChecked() {
    if (this.value === '') {return}
    if (this.firstLoaded) {return}
    let videoUrl;
    videoUrl = this.value;
    this.loadVideo(videoUrl);
  }

  @HostListener('input', ['$event']) onInput(event) {
    let videoUrl;
    videoUrl = event.target.value;
    this.loadVideo(videoUrl);
  }

  loadVideo(videoUrl) {
    let videoID;
    if (videoUrl === null) { return false; }
    videoID = this.getVideoID(videoUrl);
    if (videoID) {
      this.createPlayer(videoID);
    }
    if (videoUrl.length === 0) {
      // Remuevo el elemento IFRAME
      this.options.preview.removeChild(this.options.preview.firstChild);

      // Creo el elemento DIV
      this.createElementDiv();
    }
  }

  getVideoID (videoUrl) {
    let videoId;
    videoId = videoUrl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    if (videoId) {
      return videoId[1];
    } else {
      return false;
    }
  }

  createElementDiv () {
    let newDiv, newContent;
    newDiv = document.createElement('div');
    newContent = document.createTextNode('Preview del video');
    newDiv.appendChild(newContent);
    this.options.preview.appendChild(newDiv);
  }

  createPlayer (videoID): void {
    if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
      this.firstLoaded = true;
      this.playerYT = new _window.YT.Player(this.options.preview.children[0], {
        height    : 200,
        width     : 300,
        playerVars: {
          showinfo: 0,
          rel     : 0,
          autohide: 1
        },
        videoId: videoID,
        events : {
          onReady: (event) => {
            let volume;
            volume = 100;
            event.target.setVolume(volume);
          }
        }
      });
    }
  }

  loadScript() {
    let doc, playerApi;
    doc = _window.document;
    playerApi = doc.createElement('script');
    playerApi.type = 'text/javascript';
    playerApi.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApi);
  }

}
