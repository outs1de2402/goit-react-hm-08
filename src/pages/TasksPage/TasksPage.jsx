import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskList } from "../../components/TaskList/TaskList";
import { TaskEditor } from "../../components/TaskEditor/TaskEditor";
import { fetchTasks } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <title>Your tasks</title>
      <TaskEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <TaskList />
    </>
  );
}
