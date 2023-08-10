import { Schema, model, models } from "mongoose";

import { Itask } from "@/types";

const taskSchema = new Schema<Itask>({
  task: {
    type: String,
    required: [true, "task is required"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = models.Task || model<Itask>("Task", taskSchema);

export default Task;
