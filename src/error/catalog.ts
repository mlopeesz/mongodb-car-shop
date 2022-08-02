export enum ErrorTypes {
  InvalidMongoId = 'InvalidMongoId',
  NotFound = 'NotFound',
}

type ObjectErrorResponse = {
  httpStatus: number,
  message: string,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ObjectErrorResponse
};

export const errorCatalog: ErrorCatalog = {
  InvalidMongoId: {
    httpStatus: 400,
    message: 'Id must have 24 hexadecimal characters',
  },
  NotFound: {
    httpStatus: 404,
    message: 'Object not found',
  },
};