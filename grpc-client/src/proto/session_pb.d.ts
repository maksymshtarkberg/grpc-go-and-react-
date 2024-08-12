import * as jspb from 'google-protobuf'



export class AddSessionRequest extends jspb.Message {
  getId(): number;
  setId(value: number): AddSessionRequest;

  getSession(): string;
  setSession(value: string): AddSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSessionRequest): AddSessionRequest.AsObject;
  static serializeBinaryToWriter(message: AddSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSessionRequest;
  static deserializeBinaryFromReader(message: AddSessionRequest, reader: jspb.BinaryReader): AddSessionRequest;
}

export namespace AddSessionRequest {
  export type AsObject = {
    id: number,
    session: string,
  }
}

export class AddSessionResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): AddSessionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSessionResponse): AddSessionResponse.AsObject;
  static serializeBinaryToWriter(message: AddSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSessionResponse;
  static deserializeBinaryFromReader(message: AddSessionResponse, reader: jspb.BinaryReader): AddSessionResponse;
}

export namespace AddSessionResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class GetSessionRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionRequest): GetSessionRequest.AsObject;
  static serializeBinaryToWriter(message: GetSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionRequest;
  static deserializeBinaryFromReader(message: GetSessionRequest, reader: jspb.BinaryReader): GetSessionRequest;
}

export namespace GetSessionRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetSessionResponse extends jspb.Message {
  getSession(): string;
  setSession(value: string): GetSessionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionResponse): GetSessionResponse.AsObject;
  static serializeBinaryToWriter(message: GetSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionResponse;
  static deserializeBinaryFromReader(message: GetSessionResponse, reader: jspb.BinaryReader): GetSessionResponse;
}

export namespace GetSessionResponse {
  export type AsObject = {
    session: string,
  }
}

export class DelSessionRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DelSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelSessionRequest): DelSessionRequest.AsObject;
  static serializeBinaryToWriter(message: DelSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelSessionRequest;
  static deserializeBinaryFromReader(message: DelSessionRequest, reader: jspb.BinaryReader): DelSessionRequest;
}

export namespace DelSessionRequest {
  export type AsObject = {
    id: number,
  }
}

export class DelSessionResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DelSessionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DelSessionResponse): DelSessionResponse.AsObject;
  static serializeBinaryToWriter(message: DelSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelSessionResponse;
  static deserializeBinaryFromReader(message: DelSessionResponse, reader: jspb.BinaryReader): DelSessionResponse;
}

export namespace DelSessionResponse {
  export type AsObject = {
    success: boolean,
  }
}

