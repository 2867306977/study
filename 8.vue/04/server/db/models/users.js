const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", UsersSchema);
// Users.create({
//   username: "Sam",
//   nickname: "ss",
//   password: "123456",
// });

module.exports = Users;
