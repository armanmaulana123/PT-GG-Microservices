const express = require('express')
const apiRouter = express.Router()
const cors = require('cors');
const controller = require('../app/controllers')

apiRouter.use(express.json())
apiRouter.use(cors())

apiRouter.post('/iklan', controller.iklanController.tambahIklan)
apiRouter.get('/iklan', controller.iklanController.listIklan)
apiRouter.get('/iklan/:id', controller.iklanController.showIklan)

apiRouter.use(controller.onLost);
apiRouter.use(controller.onError);

module.exports = apiRouter;