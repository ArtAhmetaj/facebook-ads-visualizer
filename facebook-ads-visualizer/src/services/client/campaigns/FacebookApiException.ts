export default class FacebookApiException extends Error {
  private status: string;

  constructor(status: string | undefined, message: string) {
    super();
    this.status =
      status ?? "Oh no! Something went wrong fetching the facebook ads data";
    this.message = message;
  }
}
