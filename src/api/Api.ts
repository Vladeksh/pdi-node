import { BaseApi } from "./BaseApi";
import { AxiosApi } from "./AxiosApi";
import { ApiInterface } from "../types/Api";

export class Api extends BaseApi implements ApiInterface {
    private provider = new AxiosApi();

    async fetch(url: string): Promise<any> {
        return await this.provider.fetch(url);
    }
}
