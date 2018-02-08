/*
** Small App to get the top live video on Youtube and print 
** information on the console
*/

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
    }).catch(error => console.error(error));
