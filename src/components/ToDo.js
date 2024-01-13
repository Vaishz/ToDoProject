import React from 'react';
import { useState } from 'react';


const ToDo = () => {

    const [val, setVal] = useState("");
   const [task, setTask]= useState([]);


    const handleOnSubmit = (e) => {
        e.preventDefault();
        setTask([...task, {val}])
        console.log(task);
    }

    const deleteHandler =(i)=>{

        let copyTask = [...task];
        copyTask.splice(i,1);
        setTask(copyTask);


    }

    let renderTask = <h2>No tasks available</h2>

    if (task.length>0){
    renderTask = task.map((t,i)=>{
        return(
            <>
            <li key={i}>
        <div className='bg-purple-900 m-5 text-white p-2 rounded-md'>{t.val}
        <button className='p-2 bg-red-500 m-2 rounded-lg font-bold text-white' onClick={()=>{deleteHandler(i)}}>Delete</button>
        </div>
        </li>
        </>
        );
    })
}

    return (
        <>
            <div className="newContainer bg-red-300 h-screen w-screen flex">
                <div className="sec-1 bg-slate-900 h-full w-6/12 flex items-center justify-center">
                    <h1 className='text-slate-50 text-6xl font-bold'>
                        To-Do List
                    </h1>
                </div>
                <div className="sec-2 bg-violet-400 h-full w-6/12 flex justify-center">
                    <div className="mob-container w-9/12 h-6/12 bg-purple-300 mt-10  rounded-lg">

                        <div className="header flex align-center justify-center font-bold">
                            <h1 className='text-6xl'>To Do</h1>
                        </div>
                        <form onSubmit={handleOnSubmit}>
                            <div className="tasks p-5  bg-purple-800 flex align-center justify-center items-center mt-10">
                                <div className="one-task w-5/6  flex bg-red-400">
                                    <input placeholder='What you wanna do today?' className='bg-purple-400 text-center p-3 w-5/6 text-black font-bold placeholder:text-black' onChange={(e) => setVal(e.target.value)}>
                                    </input>
                                    <button className='bg-purple-500 p-3 w-4/12'>Add Task</button>
                                </div>
                            </div>
                        </form>

                    <hr/>
                    <div className="div p-2 bg-purple-500">
                    <ul>
                        {renderTask}
                    </ul>
                    </div>
                    </div>

                </div>
            </div>

    
        </>
    );
};

export default ToDo;
