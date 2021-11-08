import { Router } from 'express'
import * as tattwasCtrl from '../controllers/tattwaCards.js'
const router = Router()

router.get('/tattwaCards', tattwasCtrl.index)
router.get('/tattwaCards/:id', tattwasCtrl.show)
router.post('/tattwaCards', tattwasCtrl.create)
router.put('/tattwaCards/id', tattwasCtrl.update)
router.delete('/tattwaCards/:id', tattwasCtrl.delete)

export {
  router
}
