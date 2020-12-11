import mongoose from 'mongoose';

const NarutoSchema = new mongoose.Schema({
  name: String,
  surname: String,
  country: String,
  hiddenVilage: String,
  clan: String,
  rank: String,
  age: Number,
  notableFeatures: String,
  currentStatus: String,
  personalData: {
    birthday: String,
    height: Number,
    weight: Number,
    bloodType: String,
  },
 image: String,
})

export const Naruto = mongoose.model("Naruto", NarutoSchema)