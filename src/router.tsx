import { Routes, Route, Navigate } from "react-router-dom";
import { TasksNew } from "./pages/tasks";

export default function Router() {
  return (
    <Routes>
      <Route path="/tasks/new" element={<TasksNew />} />

      <Route path="*" element={<Navigate to="/tasks/new" />} />
    </Routes>
  );
}
