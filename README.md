## Query Engine

#### A minimal service to structure all services data to be passed to client. Currently parses [Natter](https://github.com/qasimabdullah404/natter-away) and [Cross Natter](https://github.com/qasimabdullah404/cross-natter)

Run:

```
docker build . -t query-engine
docker run --network host -p 5002:5002 -d query-engine
```

### cURL requests

```
[GET]  curl -H 'Content-Type: application/json' http://127.0.0.1:5002/natters/
```

###### NO DB IMPLEMENTATION YET!
