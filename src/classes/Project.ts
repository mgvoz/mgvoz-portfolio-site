export class Project {
  title: string;
  image: string;
  description: string;
  photoCredit: PhotoCredit;
  link: string;
  tags: string[];
  disableClick: boolean;

  public constructor(
    title: string,
    image: string,
    description: string,
    photoCredit: PhotoCredit,
    link: string,
    tags: string[],
    disableClick: boolean
  ) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.photoCredit = photoCredit;
    this.link = link;
    this.tags = tags;
    this.disableClick = disableClick;
  }
}

export class PhotoCredit {
  link: string;
  text: string;

  public constructor(link: string, text: string) {
    this.link = link;
    this.text = text;
  }
}
