# Exercice on Youtube API

The goal is to get the top Live video running. By top, means with the maximum concurrent viewer.

## Usage Docker

It required to have docker and Makefile.
```bash
# To build the image
make # or `make build`

# To run the app
make run
```
# Usage locally

It required to have Node.js / npm installed

```bash
npm start
# OR
node ./src/app
```

# Expected result

```javascript

{ kind: 'youtube#searchResult',
  etag: '"_gJQceDMxJ8gP-8T2HLXUoURK8c/Z8s01rPUdQKdjV2dBu7RaxfwQCI"',
  id: { kind: 'youtube#video', videoId: 'wuwEu356Qpg' },
  snippet:
   { publishedAt: '2017-11-14T06:30:10.000Z',
     channelId: 'UCETZFGiZY5B-HbLnmqFKU2Q',
     title: 'Крутим слоты в онлайн казино. Игровые автоматы! Не Вулкан',
     description: '50 фриспинов за регистрацию http://2xcasino.ru ➡   50 фриспинов за регистрацию http://2xcasino.ru ➡   50 фриспинов за реги...',
     thumbnails: { default: [Object], medium: [Object], high: [Object] },
     channelTitle: 'Casino Online',
     liveBroadcastContent: 'live' } }
{ statistics:
   { viewCount: '90105',
     likeCount: '4547',
     dislikeCount: '924',
     favoriteCount: '0',
     commentCount: '0' },
  liveStreamingDetails:
   { actualStartTime: '2017-11-14T06:40:36.000Z',
     concurrentViewers: '138101' } }
```
