

/* global describe, it */

var assert = require('chai').assert,
    resolveSshKey = require('../'),
    path = require('path');


describe('#resolve-ssh-key', function () {

  describe('filePathToKeyName()', function () {
    it('should find the right key name from a correct file path', function () {
      var keyName = resolveSshKey._filePathToKeyName('sample/path/to/key/hello-key.pem');
      
      assert.strictEqual(keyName, 'hello-key');
    });

    it('should return undefined from an invalid filePath', function () {
      var keyName = resolveSshKey._filePathToKeyName('sample/path/to/key/');
      
      assert.strictEqual(keyName, undefined);
    });
  });


  describe('isSshKey()', function () {
    var validKey = path.resolve(__dirname, 'fixtures/keys/some_key.pem'),
        invalidKey = path.resolve(__dirname, 'fixtures/keys/invalid_key.pem');

    assert.ok(resolveSshKey._isSshKey(validKey));
    assert.notOk(resolveSshKey._isSshKey(invalidKey));
  });


  it('should find the correct ssh key from its name', function () {
    var keyPath = resolveSshKey(__dirname + '/fixtures/keys', 'some_key');

    assert.strictEqual(keyPath, path.resolve(__dirname, 'fixtures/keys/some_key.pem'));
  });

  it('should return undefined when the key does not exist', function () {
    var keyPath = resolveSshKey(__dirname + '/fixtures/keys', 'some_unexisting_key');

    assert.strictEqual(keyPath, undefined);
  });
});
