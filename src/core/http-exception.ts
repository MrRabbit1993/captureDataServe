export class HttpException extends Error{
  message: string;
  code: number;
  errorCode: number;
  constructor(message = '请求出错', errorCode?:number ,code?:number){
      super();
      this.message = message;
      this.code = code|| 400;
      this.errorCode = errorCode || 1000 ;
  }
}
