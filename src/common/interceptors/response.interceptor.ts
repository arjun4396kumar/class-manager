import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    StreamableFile,
  } from '@nestjs/common';
  import { Observable, map } from 'rxjs';
import { ResponseInterface } from '../interface/Response/response.interface';


  
  /**
   *
   */
  @Injectable()
  export class ResponseInterceptor implements NestInterceptor {
    /**
     *
     * @param context Interface describing details about the current request pipeline.
     * @param next Interface providing access to the response stream.
     * @returns Promise of streams of response (Observable)
     */
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
      return next.handle().pipe(map((response: ResponseInterface) => {
        if (response instanceof StreamableFile)
          return response;
  
        return {
          success: true,
          status: response.status,
          message: response.message,
          data: response.data || new Object(),
        };
      })
      );
    }
  }
  