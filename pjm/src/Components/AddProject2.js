import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "./AddProject4.css"
const Task = ({ task, onDelete, onEdit }) => {
    return (
      <div>
        <div className="task">
          <div>
            <p className="project name">
              <span className="textBold">Project Name:</span> {task.text}
            </p>
            <p className="starting date "><span className="textBold">Stating Date & Ending Date:</span>  {task.date}
            </p>
            </div>
            <div>
            <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
          <p><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
          </div>
        </div>
      </div>
    )
}
export default Task;