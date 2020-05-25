export abstract class BaseEntity {
  private data;

  constructor(data: any = null) {
    this.data = data;
    this.initialize();
  }

  abstract initialize()

  findValue(key: string, defaultValue: any = '') {
    if (this.data !== null) {
      return this.data[key];
    }
    return defaultValue;
  }
}

export class Sponsor extends BaseEntity {
  category: string;
  companyName: string;
  url: string;
  image: string;
  imageUrl: string;
  coords: {
    desktop: string;
    tablet: string;
  }

  initialize() {
    this.category = this.findValue('category');
    this.companyName = this.findValue('companyName');
    this.url = this.findValue('url');
    this.image = this.findValue('image');
    this.imageUrl = this.findValue('url_image');
    this.coords = this.findValue('coords');
  }
}
