import { Directive, HostListener, Output, EventEmitter, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[pluginTinyMCE]',
})

export class tinyMCEDirective implements AfterViewInit {

  @Input('pluginTinyMCE') element;
  @Output() onEditorKeyup = new EventEmitter<any>();

  constructor() {}

  ngAfterViewInit() {
    tinymce.init({
      target   : this.element,
      plugins  : ['lists', 'link'],
      menubar  : false,
      skin_url : '/assets/skins/lightgray',
      statusbar: false,
      setup    : editor => {
        editor.on('blur', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      }
    });
  }
}
