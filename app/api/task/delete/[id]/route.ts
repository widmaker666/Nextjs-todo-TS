import Task from "@/models/tasks";

import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

import { IDeleteTaskRequestParam } from "@/types";

export const DELETE = async (
  request: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDB();

    await Task.findByIdAndRemove(params.id);

    return NextResponse.json("Task deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Error deleting task", { status: 500 });
  }
};
