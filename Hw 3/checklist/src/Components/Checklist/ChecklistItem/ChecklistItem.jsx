import { useId } from 'react';
import Button from '../../Button/Button';

function ChecklistItem({taskData, taskDel}) {
    const id = useId();

    return (
        <li>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{taskData.title}</label>
            <Button>Edit</Button>
            <Button clickHandler={() => taskDel({id: taskData.id})}>Delete</Button>
        </li>
    )
}

export default ChecklistItem;