'use strict';



var fs = require('fs'),
    path = require('path');



function listSshKeys(searchPath)
{
  return fs.readdirSync(searchPath)
    .filter(function (filename) {
      return filename.indexOf('.') !== 0;
    })
    .map(function (filename) {
      return path.resolve(searchPath, filename);
    });
}



function filePathToKeyName(filePath)
{
  if (/[\\\/]{1}/.test(filePath.substr(-1))) {
    // Directory
    return undefined;
  }

  return path.basename(filePath, path.extname(filePath));
}



function isSshKey(filePath)
{
  var STANDARD_KEY_START = '-----BEGIN RSA PRIVATE KEY-----';

  return fs.readFileSync(filePath, 'utf8')
    .indexOf(STANDARD_KEY_START) === 0;
}



module.exports = function resolveSshKey(searchPath, keyName)
{
  return listSshKeys(searchPath)
    .filter(function (filePath) {
      return filePathToKeyName(filePath) === keyName;
    })
    .filter(function (filePath) {
      return isSshKey(filePath);
    })
    .shift();
};



module.exports._isSshKey = isSshKey;
module.exports._filePathToKeyName = filePathToKeyName;
