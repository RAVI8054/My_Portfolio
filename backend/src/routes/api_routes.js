import express from 'express';
import { contactRouter } from './contact_routes.js';

export const apiRouter=express();

apiRouter.use('/contact',contactRouter);