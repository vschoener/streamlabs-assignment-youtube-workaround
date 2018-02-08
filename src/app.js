/*
** Small App to get the top live video on Youtube and print 
** information on the console
*/
/*eslint no-console: ["error", { allow: ["log", "error"] }] */
const config = require('./config/loader');
const apiKey = config.apiKey;
const google = require('./google')(apiKey);

// Return the top live video
google.fetchLiveTopVideo()
    .then(topLiveVideo => {
        console.log(topLiveVideo);
        // Get analytic information (concurrent view and more)
        return google.fetchLiveVideoAnalytic(topLiveVideo.id.videoId);
    }).then(analytic => {
        console.log(analytic);
        // liveChatId is sometimes missing because the chat is disabled for example
        if (analytic.liveStreamingDetails.activeLiveChatId != undefined) {
            return google.fetchLiveChatMessages(analytic.liveStreamingDetails.activeLiveChatId);
        } else {
            console.log('No LiveChatId available, maybe the chat is disabled ?');
        }
    }).then(messages => {
        console.log(messages);
    }).catch(error => console.error(error));
