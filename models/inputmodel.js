import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
  field1: String,
  field2: Number,
  // 필요한 다른 필드들...
});

const Example = mongoose.model('Example', exampleSchema);

export default Example;