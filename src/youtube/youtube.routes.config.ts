import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import buildUrl from 'build-url';
import axios from 'axios';
import qs from 'qs';

import debug from "debug";
const debugLog: debug.IDebugger = debug('yt-routes');

export class YoutubeRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'YouTubeRoutes');
    }

    configureRoutes() {
        this.app.route(`/youtube`)
            // Middleware
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                debugLog('llego petición');
                next();
            })
            .get(async (req: express.Request, res: express.Response) => {
                let querySearch = qs.stringify({ q: req.query.q });
                let queryParams = {
                    key: `${process.env.API_KEY}`,
                    type: 'video',
                    part: 'snippet',
                    maxResults: '1',
                };
                queryParams = Object.assign(queryParams, { q: querySearch });

                let endpoint = buildUrl(`${process.env.API_BASE_URL}`, {
                    path: 'youtube/v3/search',
                    queryParams: queryParams
                });

                let result = await axios.get(endpoint);
                debugLog(result.data);
                res.status(200).type('application/json').send(result.data.items);
            });
        return this.app;
    }
}
