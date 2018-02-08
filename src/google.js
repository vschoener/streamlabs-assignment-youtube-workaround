const axios = require('axios');

module.exports = (apiKey) => {
    const googleBaseURL = 'https://www.googleapis.com/youtube/v3';

    return {
        fetchLiveTopVideo: () => {
            return axios.get(`${googleBaseURL}/search`, {
                params: {
                    key: apiKey,
                    part: 'snippet',
                    eventType: 'live',
                    type: 'video',
                    order: 'viewCount'
                }
            }).then((response) => {
                // Get the top one
                const topLiveVideo = response.data.items[0];

                // Small check in case of there is no index 0
                if (topLiveVideo === undefined) {
                    throw new Error('No top video available');
                }

                return topLiveVideo;
            });
        },
        fetchLiveVideoAnalytic: (videoId) => {
            return axios.get(`${googleBaseURL}/videos`, {
                params: {
                    key: apiKey,
                    id:  videoId,
                    part: 'liveStreamingDetails,statistics'
                }
            }).then(response => {
                const videoInfo = response.data.items[0];
                if (videoInfo === undefined) {
                    throw new Error('No video detail available');
                }

                return {
                    statistics: videoInfo.statistics,
                    liveStreamingDetails: videoInfo.liveStreamingDetails
                };
            });
        },
        fetchLiveChatMessages: (liveChatId) => {
            return axios.get(`${googleBaseURL}/liveChat/messages`, {
                params: {
                    key: apiKey,
                    liveChatId,
                    part: 'snippet'
                }
            }).then(response => {
                let messages = [];

                response.data.items.forEach(item => {
                    messages.push({
                        author: item.snippet.liveChatId,
                        publishedAt: item.snippet.publishedAt,
                        displayMessage: item.snippet.displayMessage
                    });
                });

                return {
                    messages,
                    nextCallIn: response.data.pollingIntervalMillis,
                    nextPageToken: response.data.nextPageToken
                };
            });
        }
    };
};
