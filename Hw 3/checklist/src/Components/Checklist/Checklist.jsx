import ChecklistItem from "./ChecklistItem/ChecklistItem";

function Checklist({tasks, taskDel}) {

    return (
        <ul>
            {
                tasks.map(taskData => <ChecklistItem taskData={taskData} taskDel={taskDel} key={taskData.id}/>)
            }
        </ul>
    )
}

export default Checklist;