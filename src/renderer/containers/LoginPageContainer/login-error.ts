export enum ErrorCode {
  HostNotFound = "ENOTFOUND",
  Unauthorized = "401",
  Unknown = "UNKNOWN"
}

export interface LoginError {
  code: ErrorCode;
  message: string;
}

const hostNotFound = (error: any) => ({
  code: ErrorCode.HostNotFound,
  message: `Could not connect to host ${error.hostname}`
});

const unknown = (error: any) => ({
  code: ErrorCode.Unknown,
  message: `Unkown error occured ${error.message ? " :" + error.message : ""}`
});

const unauthorized = (error: any) => ({
  code: ErrorCode.Unauthorized,
  message: `Could not authorize to host ${error.request.uri.hostname}`
});

export const loginError = (error: any): LoginError => {
  console.error(error);
  const errorObject = typeof error === "string" ? JSON.parse(error) : error;
  if (errorObject.code === ErrorCode.HostNotFound) {
    return hostNotFound(errorObject);
  } else if (
    errorObject.statusCode &&
    errorObject.statusCode.toString() === ErrorCode.Unauthorized
  ) {
    return unauthorized(errorObject);
  }
  return unknown(errorObject);
};
