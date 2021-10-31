import express from 'express'


const router = express.Router();


import {
    searchBooksByTopicController
} from '../controllers/search'

import {
    getAllTopics
} from '../controllers/topic'


router.get('/', getAllTopics)
router.get('/:topicId', searchBooksByTopicController)



export default router;