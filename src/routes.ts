import { Application, Router } from 'express';
import {SearchController} from "./controllers/SearchController";

const _routes: [string, Router][] = [
    ['/search', SearchController],
];

export const routes = (app: Application) => {
    _routes.forEach((route) => {
        const [url, controller] = route;
        app.use(url, controller);
    });
};
