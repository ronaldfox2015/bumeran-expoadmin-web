import {
  COMPANY_STANDS_TYPE
} from '../../components/companies/companies.constants';

export class DrawCanvasLibrary {
  private context: CanvasRenderingContext2D;
  private canvas: any;
  private ratio: any;
  private imageLoadedCount: number;
  private exportWidth: number;
  private currentStand: any;
  private imagesCollectionKey: Array<any>;
  private imagesCollectionCache: any;

  constructor(canvas, exportWidth) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.imageLoadedCount = 0;
    this.exportWidth = exportWidth;
    this.currentStand = {
      'imageStands': {}
    };
    this.ratio = 0;
    this.imagesCollectionCache = {};
  }

  public allImagesLoaded() {
    if (this.imageLoadedCount === this.imagesCollectionKey.length) {
      this.imageLoadedCount = 0;
      this.drawOrderCanvas();
    }
  }

  private drawOrderCanvas() {
    for (const item of this.currentStand['drawOrder']) {
      if (item['type'] === 'image' && this.currentStand.imageStands[item['alias']].source !== '') {
        this.drawImage(this.currentStand.imageStands[item['alias']]);
      } else if (item['type'] === 'rectangle') {
        this.createRectangle(this.currentStand.pathsStands[item['alias']]);
      } else if (item['type'] === 'diagonal') {
        this.createQuadrilateral(this.currentStand.pathsStands[item['alias']]);
      }
    }
  }

  private drawImage(objImage) {
    const canvasParams = this.adjustParameters({
      objWidth: objImage.image.width,
      objHeight: objImage.image.height,
      x: objImage.position_x,
      y: objImage.position_y,
      w: this.canvas.width * objImage.size_width,
      h: this.canvas.height * objImage.size_height
    });

    this.context.save();
    if (objImage.flip) {
      this.context.scale(-1, 1);
      canvasParams.x = canvasParams.x * -1;
    }
    this.context.drawImage(
      objImage.image,
      canvasParams.cx,
      canvasParams.cy,
      canvasParams.cw,
      canvasParams.ch,
      canvasParams.x * this.ratio,
      canvasParams.y * this.ratio,
      canvasParams.w,
      canvasParams.h);

    this.context.restore();
  }

  private createImage(params) {
    const image = new Image();
    image.src = params.source;
    image.onload = () => {
      params.image = image;
      this.imageLoadedCount++;
      this.allImagesLoaded();
    }
  }

  private createRectangle(params) {
    let x1, y2, width, height;
    x1 = params.posX * this.ratio;
    y2 = params.posY * this.ratio;
    width = params.width * this.ratio;
    height = params.height * this.ratio;

    this.context.save();
    this.context.beginPath();
    this.context.fillStyle = params.color;
    this.context.fillRect(x1, y2, width, height);
    this.context.fill();
    this.context.restore();
  }

  private createQuadrilateral(params) {
    let x1, x2, x3, x4, y1, y2, y3, y4;
    x1 = params.pos1[0] * this.ratio;
    y1 = params.pos1[1] * this.ratio;

    x2 = params.pos2[0] * this.ratio;
    y2 = params.pos2[1] * this.ratio;

    x3 = params.pos3[0] * this.ratio;
    y3 = params.pos3[1] * this.ratio;

    x4 = params.pos4[0] * this.ratio;
    y4 = params.pos4[1] * this.ratio;

    this.context.save();
    this.context.beginPath();
    this.context.moveTo(x1, y1); // primera posición
    this.context.lineTo(x2, y2); // linea abajo
    this.context.lineTo(x3, y3); // linea derecha
    this.context.lineTo(x4, y4); // linea arriba
    this.context.fillStyle = params.color;
    this.context.fill();
    this.context.restore();
  }

  private setConfigs(dataAjax) {
    // Se actualiza tamaño del canvas
    this.ratio = this.exportWidth / dataAjax.width;
    this.canvas.height = dataAjax.height * this.ratio;
    this.canvas.width = dataAjax.width * this.ratio;
    this.imageLoadedCount = 0;
    this.currentStand = Object.assign({}, dataAjax);
  }

  private setColorPaths(colors: Array<string>) {
    Object.keys(this.currentStand.pathsStands).forEach((key) => {
      let color;
      color = this.currentStand.pathsStands[key]['type'] === 'color_1' ? colors[0] : colors[1];
      this.currentStand.pathsStands[key]['color'] =  color;
    });
  }

  private loadImagesCollection(imageStands: object) {
    this.imagesCollectionKey = [];
    // Reviso solo las imágenes que tienen URL
    Object.keys(imageStands).forEach((key) => {
      if (imageStands[key].source) {
        this.imagesCollectionKey.push(key);
        // Actualizo la cache
        this.imagesCollectionCache[key] = {};
        this.imagesCollectionCache[key].source = imageStands[key].source;
      } else if (typeof this.imagesCollectionCache[key] !== 'undefined') {
        this.imagesCollectionKey.push(key);
        // Obtengo imagen de cache
        imageStands[key].source = this.imagesCollectionCache[key].source;
      }
    });

    for (const key of this.imagesCollectionKey) {
      this.createImage(imageStands[key]);
    }
  }

  private clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  cleanCache() {
    this.imagesCollectionCache = {};
  }

  buildStand(colors: Array<string>, dataAjax) {
    // Seteo configuración
    this.setConfigs(dataAjax);
    // Seteo color a cada vector del request
    this.setColorPaths(colors);
    // Cargo imagenes para el canvas
    this.loadImagesCollection(this.currentStand.imageStands);
    return
  }

  validUndefinedField(key) {
    if (typeof this.currentStand.imageStands[key] === 'undefined') {
      this.currentStand.imageStands[key] = {};
    }
  }

  setAmphitryon(image) {
    this.clearCanvas();
    // Seteo color a cada vector del request
    this.validUndefinedField('amphitryon');
    this.currentStand['imageStands']['amphitryon']['source'] = image;
    this.loadImagesCollection(this.currentStand.imageStands);
    this.context.restore()
  }

  setCurrentColor(colors) {
    this.setColorPaths(colors);
    this.drawOrderCanvas();
  }

  setImageStands(folder, link) {
    let currentImageKey;
    this.clearCanvas();
    currentImageKey = folder.replace('image_', '');
    this.validUndefinedField(currentImageKey);
    this.currentStand.imageStands[currentImageKey]['source'] = link;
    this.loadImagesCollection(this.currentStand.imageStands);
    return
  }

  private adjustParameters(params) {
    let imageWidth, imageHeight, ratio, newImageWidth, newImageHeight;
    let canvasX, canvasY, canvasWidth, canvasHeight, ar = 1;
    /// default offset is center
    params.offsetX = typeof params.offsetX === 'number' ? params.offsetX : 0.5;
    params.offsetY = typeof params.offsetY === 'number' ? params.offsetY : 0.5;

    /// keep bounds [0.0, 1.0]
    if (params.offsetX < 0) {params.offsetX = 0}
    if (params.offsetY < 0) {params.offsetY = 0}
    if (params.offsetX > 1) {params.offsetX = 1}
    if (params.offsetY > 1) {params.offsetY = 1}

    imageWidth = params.objWidth;
    imageHeight = params.objHeight;
    ratio = Math.min(params.w / imageWidth, params.h / imageHeight);
    newImageWidth = imageWidth * ratio;
    newImageHeight = imageHeight * ratio;

    // decide whicanvasHeight gap to fill
    if (newImageWidth < params.w) {ar = params.w / newImageWidth}
    if (newImageHeight < params.h) {ar = params.h / newImageHeight}
    newImageWidth *= ar;
    newImageHeight *= ar;

    // calc source rectangle
    canvasWidth = imageWidth / (newImageWidth / params.w);
    canvasHeight = imageHeight / (newImageHeight / params.h);

    canvasX = (imageWidth - canvasWidth) * params.offsetX;
    canvasY = (imageHeight - canvasHeight) * params.offsetY;

    // make sure source rectangle is valid
    if (canvasX < 0) {canvasX = 0}
    if (canvasY < 0) {canvasY = 0}
    if (canvasWidth > imageWidth) {canvasWidth = imageWidth}
    if (canvasHeight > imageHeight) {canvasHeight = imageHeight}

    return {
      cx: canvasX,
      cy: canvasY,
      cw: canvasWidth,
      ch: canvasHeight,
      w: params.w,
      h: params.h,
      x: params.x,
      y: params.y
    }
  }

}
