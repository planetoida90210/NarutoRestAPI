import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
export interface ICharacter extends mongoose.Document {
  name?: any,
  surname?: any,
  country?: any,
  hiddenVilage?: any,
  clan?: any,
  rank?: any,
  age?: any,
  notableFeatures?: any,
  currentStatus?: any,
  personalDAta: {
    brithday?: any,
    height?: any,
    weight?: any,
    bloodType?: any,
  },
  image?: any
}



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

export const Naruto = mongoose.model<ICharacter>("ICharacter", NarutoSchema)