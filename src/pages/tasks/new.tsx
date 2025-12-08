import { useState } from "react";
import TaskForm from "../../components/TaskForm";
import TaskView from "../../components/TaskView";

export default function TasksNew() {
  const [taskCreated, setTaskCreated] = useState(null);

  const liftTaskCreated = (task: any) => {
    setTaskCreated(task);
  };

  return (
    <div className="w-3/4 mx-auto px-4 py-8 text-center">
      <h1 className="govuk-heading-l">
        {" "}
        {taskCreated ? "Successfully Created" : "Create a new Task"}
      </h1>
      {taskCreated ? (
        <TaskView task={taskCreated} />
      ) : (
        <TaskForm liftTaskCreated={liftTaskCreated} />
      )}
    </div>
  );
}
