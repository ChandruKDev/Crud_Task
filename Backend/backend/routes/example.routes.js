const express = require('express')
const router = express.Router()
const ExampleController = require('../controllers/exampleControllers')

router.post('/new',ExampleController.postExample);
router.get('/',ExampleController.getExample)
router.get('/:id',ExampleController.getExampleById)
router.put('/update/:id',ExampleController.updateExample)
router.delete('/delete/:id',ExampleController.deleteExample)

module.exports= router;