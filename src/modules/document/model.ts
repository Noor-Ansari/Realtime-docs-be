import mongoose from "mongoose";
const { Schema, model } = mongoose;

const DocSchema = new Schema({
  content: {
    type: String,
    default: "This is new document, start editing it...",
  },
});

const Doc = model("Doc", DocSchema);
export default Doc;
