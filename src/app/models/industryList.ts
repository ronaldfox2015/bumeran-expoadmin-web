import { IIndustry } from 'app/interfaces/industryList.interface';

export class IndustryList {
  id: number;
  name: string;

  constructor(industry: IIndustry) {
    this.id = industry.id;
    this.name = industry.name;
  }
}
