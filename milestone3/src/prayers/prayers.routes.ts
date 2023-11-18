import { Router } from "express";
import * as PrayersController from './prayers.controller';

const router = Router();
router.
    route('/prayers').
    get(PrayersController.readPrayers);

router.
    route('/prayers').
    post(PrayersController.createPrayer);

router.
    route('/prayers').
    put(PrayersController.updatePrayer);

router.
    route('/prayers/:prayerId').
    delete(PrayersController.deletePrayer);

export default router;
