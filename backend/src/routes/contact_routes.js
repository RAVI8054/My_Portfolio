import express from 'express';
import { contactMe } from '../controller/contact_controller.js';

export const contactRouter=express();

contactRouter.post('/',contactMe);

