import { useState } from 'react';
import Swal from "sweetalert2";
const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text  && !date) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill all the details'
            })
        } else if (!text  && date) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task!'
            })
        } else if (text  && !date) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your date!'
            })
        } else {
            onSave({ text,date });
        }
        setText('');
        setDate('');
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Project Name</label>
                <input type="text" placeholder="project name" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Starting Date & Ending Date</label>
                <input type="text" placeholder="starting date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}
export default AddTask;