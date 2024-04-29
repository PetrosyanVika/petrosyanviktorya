
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import './Todo.scss'


export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
    if (newTask.trim() === "") return
    const task = {
        id: nanoid(5),
        value: newTask,
        completed:false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
};

    const handleDelete=(id)=>{
      const filtered=tasks.filter((elm)=>elm.id!==id)
      setTasks(filtered)
    }
       const handleToggleComplete = (id) => {
        const updatedTasks = tasks.map((elm) =>
            elm.id === id ? { ...elm, completed: !elm.completed } : elm
        );
        setTasks(updatedTasks);
    };

    return (
        <>
            <div className='Todo'>
                <h1>To Do List</h1>
                <div>
                    <input
                  
                        type="text"
                        placeholder='Enter your task ...'
                        value={newTask}
                        onChange={handleChange}
                        
                    />
                    <button className='Todo__add' onClick={addTask}
                    type='submit'>Add</button>
                </div>

                <div className='Todo__content'>
                    {tasks.map((elm) => (
                        <li key={elm.id} className={elm.completed ?'comlated':''}>
                            <span>{elm.value}</span>
                            <input type="checkbox"
                             checked={elm.completed} 
                             onChange={() => handleToggleComplete(elm.id)}/>

                            <button
                             onClick={()=>handleDelete(elm.id)}
                            className='Todo__delete'
                            >Delete</button>
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
}





// import { nanoid } from 'nanoid';
// import React, { useState } from 'react';
// import './Todo.scss';

// export default function Todo() {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState("");

//     const handleChange = (e) => {
//         setNewTask(e.target.value);
//     };

//     const addTask = () => {
//         if (newTask.trim() === "") return;
//         const task = {
//             id: nanoid(5),
//             value: newTask,
//             completed: false,
//         };
//         setTasks([...tasks, task]);
//         setNewTask("");
//     };

//     const handleDelete = (id) => {
//         const filtered = tasks.filter((elm) => elm.id !== id);
//         setTasks(filtered);
//     };

//     const handleToggleComplete = (id) => {
//         const updatedTasks = tasks.map((task) =>
//             task.id === id ? { ...task, completed: !task.completed } : task
//         );
//         setTasks(updatedTasks);
//     };

//     return (
//         <>
//             <div className='Todo'>
//                 <h1>To Do List</h1>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder='Enter your task ...'
//                         value={newTask}
//                         onChange={handleChange}
//                     />
//                     <button className='Todo__add' onClick={addTask} type='submit'>Add</button>
//                 </div>

//                 <div className='Todo__content'>
//                     {tasks.map((task) => (
//                         <li key={task.id} className={task.completed ? 'completed' : ''}>
//                             <input
//                                 type="checkbox"
//                                 checked={task.completed}
//                                 onChange={() => handleToggleComplete(task.id)}
//                             />
//                             <span>{task.value}</span>
//                             <button onClick={() => handleDelete(task.id)} className='Todo__delete'>Delete</button>
//                         </li>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }
