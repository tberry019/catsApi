import { catsService } from "../services/CatsService"
import BaseController from "../utils/BaseController"

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router
      .get('', this.getAll)
  }
  async getAll(req, res, next) {
    try {
      res.send('it works')
      const cats = await catsService.getAll()
      return res.send(cats)
    } catch (error) {
      next(error)

    }
  }

}

