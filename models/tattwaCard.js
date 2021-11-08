import mongoose from "mongoose";

const Schema = mongoose.Schema

const elementSchema = new Schema({
  element: {
    type: String,
    enum: ['Ether', 'Air', 'Fire', 'Water', 'Earth']
  },
  color: {
    type: String,
    enum: ['Violet', 'Sky Blue', 'Ref', 'Silver', 'Yellow']
  },
  shape: {
    type: String,
    enum: ['Oval', 'Circle', 'Triangle', 'Crescent', 'Square']
  }
})

const TattwaCardSchema = new Schema ({
  element: {
    type: [elementSchema]
  },
  seed: {
    type: [elementSchema],
  },
  mechanicalProcess: String,
  alchemicalProcess: String,
})

const TattwaCard = mongoose.model('TattwaCard', TattwaCardSchema)

export {
  TattwaCard
}