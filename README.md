# Simple Coding Test for AIA Nodejs Fullstack Engineer (Backend Repo)

### GET Images

https://api.flickr.zull.my.id/images

| Parameters  | Description                                  |
| ----------- | -------------------------------------------- |
| currentPage | Page number of paginated data. Default is 1. |
| pageSize    | Number of item in every page. Default is 4.  |
| tags        | Keyword to search images                     |

| Response field | Description                         |
| -------------- | ----------------------------------- |
| data           | Array of images data                |
| meta           | Information about data & pagination |

#### Example response

```javascript
{
   "data": [
      {
         "title": "D-2021-01-12-1400_f",
         "link": "https://www.flickr.com/photos/ncsm-sky/50826484698/",
         "media": {
            "m": "https://live.staticflickr.com/65535/50826484698_9d28f3f4e5_m.jpg"
         },
         "date_taken": "2021-01-12T14:00:00-08:00",
         "description": " <p><a href=\"https://www.flickr.com/people/ncsm-sky/\">ncsmsky</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/ncsm-sky/50826484698/\" title=\"D-2021-01-12-1400_f\"><img src=\"https://live.staticflickr.com/65535/50826484698_9d28f3f4e5_m.jpg\" width=\"240\" height=\"240\" alt=\"D-2021-01-12-1400_f\" /></a></p> ",
         "published": "2021-01-12T05:00:18Z",
         "author": "nobody@flickr.com (\"ncsmsky\")",
         "author_id": "97102756@N07",
         "tags": "20210112"
      }
   ],
   "meta": {
      "currentPage": 1,
      "totalPage": 20,
      "pageSize": 1,
      "totalData": 20,
      "modified": "2021-01-12T05:00:18Z"
   }
}
```
