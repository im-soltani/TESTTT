const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    name: { type: String },
    Rating: { type: Number, default: 0 },
    comment: { type: String},
  },
  {
    timestamps: true,


  }
);

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  profileName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String
  },
  speciality: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  adress: {
    type: String
  },
  codePostal: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  Diploma: {
    type: String
  },
 
  Rating: {
    type: Number,
    default: 0
  },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [reviewSchema],
});
module.exports = Profile = mongoose.model("profile", ProfileSchema);