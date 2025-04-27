export default class Contact {
  type: string;
  icon: string;
  content: string;
  link: string;
  download: string;

  public constructor(
    type: string,
    icon: string,
    content: string,
    link: string,
    download: string
  ) {
    this.type = type;
    this.icon = icon;
    this.content = content;
    this.link = link;
    this.download = download;
  }
}
