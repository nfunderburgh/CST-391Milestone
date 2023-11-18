import { Request,RequestHandler,Response } from "express";
import { Prayer } from './prayers.model';
import * as PrayerDao from './prayers.dao';
import { OkPacket } from "mysql";

export const readPrayers: RequestHandler = async (req: Request, res: Response) => {
    try{
        let prayers;
        let prayerId = parseInt(req.query.prayerId as string);
        
        console.log('prayerId', prayerId);
        
        prayers = await PrayerDao.readPrayers();
        
        res.status(200).json(
            prayers
        );
    } catch (error){
        console.error('[prayers.controller][readPrayers][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching prayers'
        });
    }
};

export const createPrayer: RequestHandler = async (req: Request, res: Response) => {
    try{
        const okPacket: OkPacket = await PrayerDao.createPrayer(req.body);

        console.log('req.body', req.body);
        console.log('prayer', okPacket);

        res.status(200).json(
            okPacket
        );  
    } catch (error){
        console.error('[prayers.controller][createPrayer][Error]', error,);
        res.status(500).json({
            message: 'There was an error when writing prayers.'
        });
    }
};

export const updatePrayer: RequestHandler = async (req: Request, res: Response) => {
    try{
        const okPacket: OkPacket = await PrayerDao.updatePrayer(req.body);

        console.log('req.body', req.body);
        console.log('prayer', okPacket);
        
        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[prayers.controller][updatePrayer][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating prayers'
        });
    }
};

export const deletePrayer: RequestHandler = async (req: Request, res: Response) => {
    try{
        let prayerId = parseInt(req.params.prayerId as string);
        
        console.log('prayerId', prayerId);
        if(!Number.isNaN(prayerId)){
            const response = await PrayerDao.deletePrayer(prayerId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for prayerId");
        }
    } catch (error) {
        console.error('[prayers.controller][deletePrayer][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting prayers'
        });
    }
};