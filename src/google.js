const axios = require('axios');

module.exports = (apiKey) => {
    return {
        fetchLiveTopVideo: () => {
            return axios.get('https://www.googleapis.com/youtube/v3/search', {
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
            return axios.get('https://www.googleapis.com/youtube/v3/videos', {
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
        }
    };
};
