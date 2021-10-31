import express from 'express'


const router = express.Router();

import {
    getAllTopics
} from '../controllers/topic'


router.get('/', getAllTopics)



export default router;