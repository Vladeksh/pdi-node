export interface YouTubeData {
    kind: string;
    etag: string;
    id: YouTubeDataId;
    snippet: YouTubeDataSnippet;
}

export interface YouTubeDataId {
    kind: string;
    videoId: string;
}

export interface YouTubeDataSnippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: YouTubeDataThumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
}

export interface YouTubeDataThumbnails {
    default: YouTubeDataThumbnailsDefault;
    medium: YouTubeDataThumbnailsDefault;
    high: YouTubeDataThumbnailsDefault;
}

export interface YouTubeDataThumbnailsDefault {
    url: string;
    width: number;
    height: number;
}
