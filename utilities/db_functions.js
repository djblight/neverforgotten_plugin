const bcrypt = require('bcryptjs');

module.exports = {
  comparePassword(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
    });
  }
};
