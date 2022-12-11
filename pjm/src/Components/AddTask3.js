import Task from './AddTask2';
import "./AddTask4.css"
const Tasks = ({ tasks, onDelete, onEdit }) => {
  return (
    <>
      {
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </>
    )
}
export default Tasks;