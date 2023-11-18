import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Prayer } from "./prayers.model";
import { prayerQueries } from './prayers.queries';

export const readPrayers = async () => {
    return execute<Prayer[]>(prayerQueries.readPrayers, []);
};

export const createPrayer = async (prayer: Prayer) => {
    return execute<OkPacket>(prayerQueries.createPrayer,
        [prayer.name, prayer.anonymous, prayer.prayerRequest]);
};

export const updatePrayer = async (prayer: Prayer) => {
    return execute<OkPacket>(prayerQueries.updatePrayer,
        [prayer.name, prayer.anonymous, prayer.prayerRequest, prayer.prayerId]);
};

export const deletePrayer = async (prayerId: number) => {
    return execute<OkPacket>(prayerQueries.deletePrayer, [prayerId]);
};

