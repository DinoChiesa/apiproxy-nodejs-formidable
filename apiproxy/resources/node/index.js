// index.js

var http = require('http'),
    util = require('util'),
    formidable = require('formidable'),
    uploadDir = "./",
    port = 8080;

process.on('exit', function (code) {
   console.log('Script terminating with code %s', code);
});

process.on('uncaughtException', function (err) {
    console.log(err.stack);
});

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();
    form.uploadDir = uploadDir;

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });

    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/nodejs-formidable/upload" enctype="multipart/form-data" method="post">'+
    'Text field: <input type="text" name="title"><br>'+
    'File(s): <input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(port);
