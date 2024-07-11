import morgan from 'morgan';
import cors from 'cors';
import express, { Express } from 'express';

export function configMiddlewares(server: Express) {
  server.use(express.json());
  server.use(morgan('common'));
  server.use(cors());
}

