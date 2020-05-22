import {getConnection} from "typeorm";
import {User} from "../src/entities/User";
import {getConnection} from "typeorm";

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('User', function() {
  it('canCreateAndSaveUser', function(done)  {
    let user = new User();
    user.userName = "John";
    user.email = "Fake@example.com";
    user.password = "SomeHashedSecret";

    let connection = getConnection();
    // console.log("Called getConnection")
    let userRepository = connection.getRepository(User);
    userRepository.save(user).then ((r) => {
            console.log(r);
            done();
        })
  });
});