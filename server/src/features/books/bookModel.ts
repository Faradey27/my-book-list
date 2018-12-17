import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
  author: {
    type: String,
    required: 'Enter author name'
  },
  name: {
    type: String,
    required: 'Enter book name'
  },
  genres: [String],
  series: [String],
  yearOfPublishing: String,
  annotation: String,
  rating: Number,
  avatar: String,
});
