const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    validate: {
      validator: username => User.doesNotExist({ username }),
      message: "Username already exists"
    }
  },
  email: {
    type: String,
    validate: {
      validator: email => User.doesNotExist({ email }),
      message: "Email already exists"
    }
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    } catch (error) {
      throw error;
    }
  }
});

UserSchema.statics.doesNotExist = async function (field) {
  try {
    return await this.where(field).countDocuments() === 0;
  } catch (error) {
    throw error;
  }
};

UserSchema.methods.comparePasswords = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', UserSchema);
export default User;