const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  title : String,
  timestamp : {
   type : Date,
   default : Date.now
 },
  author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : User
  },
  votes : {
    type : Number,
    default : 0
  },
  level : String
})

const Complaint = mongoose.model('complaint', complaintSchema);
module.exports = Complaint;
