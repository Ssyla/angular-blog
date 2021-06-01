export class CreatePostModel {
  public title: string = "";
  public content : string = "";
  public author : string = "";
  public banner : string | ArrayBuffer | null = null;
  public tag: string = "";
}
