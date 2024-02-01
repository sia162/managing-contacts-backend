const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the username!"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "Email address already exists!"],
    },
    password: {
      type: String,
      required: [true, "Please add the userpassword"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
