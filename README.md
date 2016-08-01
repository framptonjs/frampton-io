# Frampton-IO


## Install
```
npm install --save frampton
npm install --save frampton-io
```

## Include
```
<script src="frampton.js"></script>
<script src="frampton-io.js"></script>
```


## Usage

Frampton-IO provides a lazy API for network requests and reading files.

We don't run the request until we call run on the request.

```
const request = Frampton.IO.Http.get('http:://fake.com/api/post/1234');
request.run({
  reject : (err) => console.log('error: ', err),
  resolve : (res) => console.log('response: ', res),
  progress : (prog) => console.log('progress: ', prog)
});
```

The objects returned by Frampton.IO methods are monadic.

We can all 'map' and 'filter' on the request. If the response fails the filter it becomes a failure.

```
const request = Frampton.IO.Http.get('http:://fake.com/api/post/1234');
request
  .map((res) => res.results)
  .filter((results) => results.length > 0)
  .run({
    reject : (err) => console.log('error: ', err),
    resolve : (results) => console.log('results: ', results),
    progress : (prog) => console.log('progress: ', prog)
  });
```

We can also chain requests.

```
const httpGet = Frampton.IO.Http.get;
const userPreferences = httpGet('http://fake.com/api/user/1234/pref');
const userResults = userPreferences.chain((res) => {
  return httpGet('http://fake.com/api/posts/' + res.search);
});

userResults
  .map((res) => res.results)
  .filter((results) => results.length > 0)
  .run({
    reject : (err) => console.log('error: ', err),
    resolve : (results) => console.log('results: ', results),
    progress : (prog) => console.log('progress: ', prog)
  });
```
