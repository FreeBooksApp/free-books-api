import express from 'express'


const router = express.Router();


import {
    searchBookController,
    searchByAuthorController,
    searchByPublisherController
} from '../controllers/search'


router.get('/book/:bookName', searchBookController);
router.get('/author/:name', searchByAuthorController);
router.get('/publisher/:name', searchByPublisherController);



export default router;