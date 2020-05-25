export abstract class BaseEntity {
  private data;

  constructor(data: any = null ) {
    this.data = data;
    this.initialize();
  }

  abstract initialize ()

  findValue(key: string, defaultValue: any = '' ) {
    // esperar servicio para quitar esta condicional
    if (key === 'coords') {
      return {
        desktop: (this.data && this.data[key] && this.data[key].desktop) ? this.data[key].desktop : defaultValue,
        tablet: (this.data && this.data[key] && this.data[key].tablet) ? this.data[key].tablet : defaultValue,
      }
    }
    if (this.data !== null) {
      return this.data[key];
    }
    return defaultValue;
  }
}

export class Company extends BaseEntity {
  document_number: string;
  longitude: string;
  latitude: string;
  coords: {
    desktop: string;
    tablet: string;
  };
  trade_name: string;
  business_name: string;
  logo: string;
  slug: string;
  category: string;
  industry_id: number;
  industry_name: string;
  stand: Stand;
  profile: Profile[];
  social_media: SocialMedia[];
  image_gallery: Gallery[];
  document: Document[];
  offer_type: string;

  initialize() {
    this.document_number = this.findValue('document_number');
    this.business_name = this.findValue('business_name');
    this.trade_name = this.findValue('trade_name');
    this.logo = this.findValue('logo');
    this.slug = this.findValue('slug');
    this.category = this.findValue('category');
    this.industry_id = this.findValue('industry_id');
    this.industry_name = this.findValue('industry_name');
    this.stand = this.findValue('stand', new Stand);
    this.longitude = this.findValue('longitude');
    this.latitude = this.findValue('latitude');
    this.coords = this.findValue('coords');
    this.offer_type = this.findValue('offer_type');
    // profile
    const arrayProfile = new Array<Profile>();
    for (let i = 0; i < 3; i++) {
       arrayProfile.push(new Profile());
    }
    this.profile = this.findValue('profile', arrayProfile);
    // social_media
    const arraySocialMedia = new Array<SocialMedia>();
    for (let i = 0; i < 2; i++) {
       arraySocialMedia.push(new SocialMedia());
    }
    this.social_media = this.findValue('social_media', arraySocialMedia);
    // image_gallery
    const arrayGallery = new Array<Gallery>();
    for (let i = 0; i < 2; i++) {
       arrayGallery.push(new Gallery());
    }
    this.image_gallery = this.findValue('image_gallery', arrayGallery);
    // document
    const arrayDocument = new Array<Document>();
    for (let i = 0; i < 2; i++) {
       arrayDocument.push(new Document());
    }
    this.document = this.findValue('document', arrayDocument);
  }
}

export class Stand extends BaseEntity {
  type_id: number;
  model_id: number;
  amphitryon: number;
  colors: Color;
  images: Image[];
  video: string;

  initialize() {
    this.type_id = this.findValue('type_id');
    this.model_id = this.findValue('model_id');
    this.amphitryon = this.findValue('amphitryon');
    this.colors = this.findValue('colors', new Color);
    const arrayImages = new Array<Image>();
    const typeImages = [
      'image_totem', 'image_banderole_1', 'image_banderole_2',
      'image_poster_1', 'image_poster_2', 'image_top', 'image_counter', 'image_monitor'];
    for (let i = 0; i < 8; i++) {
       arrayImages.push(new Image({link: '', type: typeImages[i]}));
    }
    this.images = this.findValue('profile', arrayImages);
    this.video = this.findValue('video');
  }
}

export class Color extends BaseEntity {
  color_1: string;
  color_2: string;

  initialize() {
    this.color_1 = this.findValue('color_1');
    this.color_2 = this.findValue('color_2');
  }
}

export class Image extends BaseEntity {
  link: string;
  type: string;

  initialize() {
    this.link = this.findValue('link');
    this.type = this.findValue('type');
  }
}

export class Profile extends BaseEntity {
  title: string;
  description: string;

  initialize() {
    this.title = this.findValue('title');
    this.description = this.findValue('description');
  }
}

export class SocialMedia extends BaseEntity {
  link: string;
  name: string;

  initialize() {
    this.link = this.findValue('link');
    this.name = this.findValue('name');
  }
}

export class Gallery extends BaseEntity {
  link: string;

  initialize() {
    this.link = this.findValue('link');
  }
}

export class Document extends BaseEntity {
  title: string;
  link: string;
  name: string;

  initialize() {
    this.link = this.findValue('link');
    this.title = this.findValue('title');
    this.name = this.findValue('name');
  }
}
