import './App.css';
import Form from './Components/Form/Form';
import Button from './Components/Button/Button';  
import Checklist from './Components/Checklist/Checklist';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './App/Slices/checklistSlice';

function App() {
  const tasks = useSelector(store => store.checklistReducer);
  const dispatch = useDispatch();

  return (
    <>
      <Form onSubmit={(taskData) => dispatch(addTask(taskData))}></Form>
      <Button>All</Button>
      <Button>Done</Button>
      <Button>Remainded</Button>
      <Checklist tasks={tasks}/> 
    </>
  );
}

export default App;
