export enum ErrorTypes {
  InvalidMongoId = 'InvalidMongoId',
  NotFound = 'NotFound',
}

type ObjectErrorResponse = {
  error: string,
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ObjectErrorResponse
};

export const errorCatalog: ErrorCatalog = {
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
  NotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
};