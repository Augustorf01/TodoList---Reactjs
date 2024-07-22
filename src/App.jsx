import logo from './assets/logo.svg'

import { Header } from "./components/Header";
import { CreateTask } from "./components/create-task";
import { TaskList } from "./components/List/task-list";
import { CounterTask } from "./components/List/counter-task";
import { EmptyList } from "./components/List/Empty/empty-list";

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function App() {
  const [task, setTask] = useState([ // armazena as tasks
    {
        id: uuidv4().toString(),
        Title: 'Task 1',
        IsCompleted: false
    },
    {
        id: uuidv4().toString(),
        Title: 'Task 2',
        IsCompleted: false
    },
    {
        id: uuidv4().toString(),
        Title: 'Task 3',
        IsCompleted: false
    }
])

  const addNewTask = (taskTitle) => {
    const newTask = {
      id: uuidv4().toString(),
      Title: taskTitle, 
      IsCompleted: false 
    } 
      setTask([...task, newTask])
    }

  // remove a task do array e atualiza o estado.
  const taskDelete = (taskId) => {
    // filter() cria um novo array sem o item desejado.
    // setTask() atualiza o estado do componente.
    const updatedTasksById = setTask(task.filter(t => t.id !== taskId))

    return updatedTasksById;
  }

  const concluidas = (taskId, checkedTask) => {
    const updatedTasks = task.map(task => {
      if (task.id === taskId) {
        return { ...task, IsCompleted: !checkedTask };
      }
      return { ...task };
    });
  
    setTask(updatedTasks);
    console.log(updatedTasks);
  }

  const checkedTasksCounter = task.reduce((prevValue, currentTask) => {
    if (currentTask.IsCompleted) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  return (
    <main>
      <Header img={logo} />

        <div>
          <CreateTask handleList={addNewTask}/>
        </div>

        <CounterTask 
          createdTasks={task.length}
          finishedTasks={checkedTasksCounter}
        />

        {task.length === 0 ? <hr /> : ''}

        {
        task.length > 0 
        ? <TaskList 
            task={task} 
            newTask={task.id} 
            removeTask={taskDelete}
            IsCompleted={concluidas}
          /> 
        : <EmptyList />
        }

    </main>
  )
}
