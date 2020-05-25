export class Stand {
  list: List;
  rules: Rules;
}

export class List {
  model: Model[];
  amphitryon: Amphitryon[];
}

export class Basic {
  id: number;
  value: string;
}

export class Model extends Basic {}

export class Amphitryon extends Basic {}

export class Rules {
  image_monitor: Control;
  image_totem: Control;
  image_banderole_left: Control;
  image_banderole_right: Control;
  image_top: Control;
  image_counter: Control;
  color_1: Control;
  color_3: Control;
  amphitryon: Control;
  video: Control;
}

export class Control {
  required: boolean;
}
