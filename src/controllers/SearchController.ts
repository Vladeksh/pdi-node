import { NextFunction, Request, Response, Router } from 'express';
import qs from "qs";
import LocalSearchDao from "../dao/LocalSearchDao";
import {Api} from "../api/Api";
import {YouTubeData} from "../types/YoutubeData";
import YoutubeToLocalMapper from "../mapper/YoutubeToLocalMapper";

export const SearchController: Router = Router();

SearchController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {

        let querySearch = qs.stringify({ q: req.query.q });
        const api = new Api();
        const apiResult = await api.fetch(querySearch);

        let result: LocalSearchDao[] = [];
        const { items } = apiResult;
        items.forEach((value: YouTubeData) => result.push(YoutubeToLocalMapper.Map(value)));

        res.status(200).type('application/json').send(result);
    } catch (e) {
        console.error(e.message);
        next(e);
    }
});
