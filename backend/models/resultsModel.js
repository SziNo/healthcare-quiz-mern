import mongoose from "mongoose";
const { Schema } = mongoose;

const responseSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: Number, required: true },
});

const resultsSchema = new Schema(
  {
    type: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    responses: [responseSchema],
  },
  { timestamps: true }
);

const Result = mongoose.model("Result", resultsSchema, "results");

export default Result;
