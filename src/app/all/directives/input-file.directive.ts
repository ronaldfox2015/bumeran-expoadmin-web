import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appInputFile]'
})

export class InputFileDirective {
  fileType: any;

  @Output('initUpload') initUpload: EventEmitter<any> = new EventEmitter();
  @Output('resetInput') resetInput: EventEmitter<any> = new EventEmitter();
  @Input() appInputFileMethod: string; // [image, office_file]

  constructor() {
    this.fileType = {
      'image': ['image/png', 'image/jpg', 'image/jpeg'],
      'office_file': ['pdf', 'docx', 'doc', 'xlsx', 'xls', 'ppt', 'pptx']
    }
  }

  @HostListener('change', ['$event']) onChange(event) {
    let file;
    file = event.target.files[0] || {};
    event.target.value = '';
    switch (this.appInputFileMethod) {
      case 'image':
        this.handlerImageUpload(file);
        break;
      case 'office_file':
        const id = event.target.id;
        this.handlerOfficeFileUpload(file, id);
        break;
    }
  }

  // Al elegir un nuevo archivo se valida que el archivo sea correcto
  private handlerOfficeFileUpload(file, id) {
    let formData;
    if (file) {
      if (this.isValidOfficeFileExtension(file)) {
        formData = new FormData();
        formData.append('file', file);
        formData.append('folder', 'document');
        this.initUpload.emit({ formData, type: 'document', id });
      } else {
        this.resetInputFile();
      }
    }
  }

  // Al elegir un nuevo archivo se valida que el archivo sea correcto
  private handlerImageUpload(file) {
    let formData;
    if (this.isValidImageExtension(file)) {
      formData = new FormData();
      formData.append('file', file);
      this.initUpload.emit({ formData, file });
    } else {
      this.resetInputFile();
    }
  }
  // Valida la extension del archivo
  private isValidOfficeFileExtension(file) {
    let isValid;
    const myfile = file.name;
    const arrTmp = myfile.split('.');
    const ext = arrTmp[arrTmp.length - 1];
    isValid = this.fileType[this.appInputFileMethod].indexOf(ext) !== -1;
    return isValid;
  }

  // Valida la extension de la imagen
  private isValidImageExtension(file) {
    let isValid;
    isValid = this.fileType[this.appInputFileMethod].indexOf(file.type) !== -1;
    return isValid;
  }

  // Resetea el input file y si es necesario los datos de carga de imagen
  private resetInputFile() {
    this.resetInput.emit('Extensión no permitida');
  }
}
