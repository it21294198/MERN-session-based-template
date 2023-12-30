const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
  const user = this
  if (this.isModified('password')) {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    } catch (error) {
      throw error;
    }
  }
  next();
});

const User = mongoose.model('users', UserSchema);

module.exports = User;