# Valorant-discord-bot-api
This repository for competitive data by using player tag (public only)

#How to use temple

Simply if you want to use slash command temple you can install it in your own

#How to use API

Our api ends point is: https://api.stoweteam.dev
API request list
|  Method |  Query | Detals  |
| :------------ | :------------ | :------------ |
|  `GET`  | /profile/global/<username>?number=<tagid>  |  Check global profile |
|  `GET` | /profile/last-act/<username>?number=<tagid>  | Check current rank act  |
|  `GET` | /profile/last-match/<username>?number=<tagid>  | Check last match played  |
|  `GET` | /profile/list-match/<username>?number=<tagid>  | List 20 match history  |
|  `GET` | /profile/match-detail/<username>?number=<tagid>&matchid=<matchid>  | Get detail match start 1 - 20  |


