const mongoose = require ('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  name: String,
  description: String,
  finished: Boolean,
  userId: String
});

const Task = model('Task', taskSchema);

module.exports = Task;