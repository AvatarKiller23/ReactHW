import { useId, useState } from 'react';
import './CheckListItem.css';
import Button from '../../Button/Button';
import { useDispatch } from 'react-redux';
import { destroyTask, editTask } from '../../../App/Slices/checklistSlice'

function ChecklistItem({
    taskData
}) {
    const id = useId();
    const dispatch = useDispatch();

    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

    return (
        <li>
            <input className='checkBox' type="checkbox" id={id} checked={isChecked} onChange={handleCheckboxChange}/>
            <label htmlFor={id}>{taskData.title}</label>
            <Button clickHandler={() => dispatch(editTask(taskData.id))}>Edit</Button>
            <Button clickHandler={() => dispatch(destroyTask(taskData.id))}>Delete</Button>
        </li>
    )
}

export default ChecklistItem;