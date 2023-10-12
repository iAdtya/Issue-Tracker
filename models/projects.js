import mongoose from "mongoose";


const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
      },
    ],
    labels: [
      {
        type: String,
      },
    ],
  },
<<<<<<< HEAD
  description: {
    type: String,
    required: true,
  },
  issues:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Issue',
  }],
  author: {
    type: String,
    required: true,
  },
},{timestamps: true});
=======
  {
    timestamps: true,
  }
);
>>>>>>> new-branch

const Project = mongoose.model("Project", projectSchema);

export default Project;