export interface AddTaskPropos {
  task: string;
  setTask: (task: string) => void;
  handleCreateTask: () => void;
}

export interface Itask {
  _id: string;
  task: string;
  completed: boolean;
}

export interface TaskProps {
  individualTask: Itask;
  handleCompleteTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}


export interface IDeleteTaskRequestParam {
    params: {
        id: string;
    }
}