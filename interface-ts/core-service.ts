/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Transaction, Request } from './transaction';
import { Project, Request as Request1 } from './project';
import { Nft, Request as Request2 } from './nft';

export const protobufPackage = 'CoreService';

export const CORE_SERVICE_PACKAGE_NAME = 'CoreService';

export interface CoreServiceClient {
  updateTransactionById(request: Request, ...rest: any): Observable<Transaction>;

  updateProjectById(request: Request1, ...rest: any): Observable<Project>;

  updateNftById(request: Request2, ...rest: any): Observable<Nft>;
}

export interface CoreServiceController {
  updateTransactionById(request: Request, ...rest: any): Promise<Transaction> | Observable<Transaction> | Transaction;

  updateProjectById(request: Request1, ...rest: any): Promise<Project> | Observable<Project> | Project;

  updateNftById(request: Request2, ...rest: any): Promise<Nft> | Observable<Nft> | Nft;
}

export function CoreServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['updateTransactionById', 'updateProjectById', 'updateNftById'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('CoreService', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('CoreService', method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CORE_SERVICE_NAME = 'CoreService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
