import {YouTubeData} from "../types/YoutubeData";
import LocalSearchDao from "../dao/LocalSearchDao";

export default class YoutubeToLocalMapper {
    static Map(source: YouTubeData) {
        const dao = new LocalSearchDao();
        dao.id = source.id.videoId;
        dao.title = source.snippet.title;
        dao.description = source.snippet.description;
        dao.thumbnail = source.snippet.thumbnails.default.url;
        return dao;
    }
}
