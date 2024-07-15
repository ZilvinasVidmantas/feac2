export { };

declare global {
  type Entity = {
    id: string,
    createdAt: string,
    updatedAt: string,
  };

  type MongooseEntity = {
    _id: string,
    createdAt: string,
    updatedAt: string,
  }
}

