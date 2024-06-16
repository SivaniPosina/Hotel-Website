import mongoose from "mongoose";
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: { // Add this field to your schema
    type: String,
    default: 'Unknown'
  }
});

export default mongoose.model("user", userSchema);
