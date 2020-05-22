import {getConnection} from "typeorm";
import {User, UserService} from "../src/entities/User";
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
  it('can create and save user in test', function(done)  {
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

  it('can be saved using user service', function(done) {
    let user = new User();
    user.userName = "Jenniffer";
    user.email = "Jenniffer@hotmail.com";
    user.password = "SomeOtherHashedSecret";
    let service = new UserService();
    service.save(user).then((r) => {
      console.log("Saved user via service!");
      console.log(r);
      done();
    })
  });

});
