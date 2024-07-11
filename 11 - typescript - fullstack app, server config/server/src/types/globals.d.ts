export {};

declare global {
  type MongooseEntity = {
    id: string,
    createdAt: string,
    updatedAt: string,
  };
}

