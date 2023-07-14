import express from 'express';
   
import addRecord, { deleteRecord } from '../controller/Record-controller.js';
import search from '../controller/search.js';
import upload from '../utils/upload.js';
import { getImage, uploadImage } from '../controller/image-controller.js';
  
const route = express.Router(); 
 
route.get('/search',search );
route.post('/addRecord',addRecord);

route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage)

route.post('/delete/records',deleteRecord)


export default route;    