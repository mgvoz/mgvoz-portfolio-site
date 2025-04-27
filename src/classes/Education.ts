export default class Education {
  college: string;
  degree: string;
  years: string;
  major: string;

  public constructor(
    college: string,
    degree: string,
    years: string,
    major: string
  ) {
    this.college = college;
    this.degree = degree;
    this.years = years;
    this.major = major;
  }
}
