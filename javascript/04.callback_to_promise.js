// refactor this code using promises instead of callbacks

function getResourceAsync(param, callback) {
  const request = require('request');
  request.get(`https://foo/bar?baz=${param}`, (err, resp, body) => {
    if (err) throw err;
    callback(body);
  });
}

function parseResourceDataAsync(data, callback) {
  const json = JSON.parse(data);
  callback(json);
}

function putDataAsync(data, callback) {
  const request = require('request');
  request.put('https://foo/bar', {
    body: data
  }, (err, resp, body) => {
    if (err) throw err;
    let status = resp.statusCode;
    callback(status === 200);
  });
}

getResourceAsync('widget', data => {
  parseResourceDataAsync(data, parsed => {
    putDataAsync(parsed, ok => {
      console.log(ok);
    });
  });
});