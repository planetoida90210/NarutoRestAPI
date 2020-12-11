import mongoose from 'mongoose';

const NarutoSchema = new mongoose.Schema({
  name: String,
  surname: String,
  country: String,
  hiddenVilage: String,
  rank: String,
  age: Number,
  personalData: {
    birthday: String,
    height: Number,
    weight: Number,
    bloodType: String,
  }
})