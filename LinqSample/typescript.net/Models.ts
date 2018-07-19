export class Province {
  name: string;
  city: City[];
  /**
   *
   */
  constructor() {
    this.name = "";
    this.city = [];
  }
}

export class City {
  name: string;
  area: string[];
  /**
   *
   */
  constructor() {
    this.area = [];
    this.name = "";
  }
}
