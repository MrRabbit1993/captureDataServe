//异常基类
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

//参数错误
export class ParameterException extends HttpException {
  constructor(msg = "参数错误", errorCode = 10000) {
    super();
    this.code = 400;
    this.message = msg;
    this.errorCode = errorCode;
  }
}
