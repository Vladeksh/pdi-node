import {ApiInterface} from "../types/Api";
import buildUrl from "build-url";

export class BaseApi implements ApiInterface {
    protected baseUrl: string | undefined;

    constructor() {
        let queryParams = {
            key: `${process.env.API_KEY}`,
            type: 'video',
            part: 'snippet',
            maxResults: '10',
        };
        this.baseUrl = buildUrl(`${process.env.API_BASE_URL}`, {
            path: 'youtube/v3/search',
            queryParams: queryParams
        });
    }

    async fetch(url: string): Promise<any> {}
}
