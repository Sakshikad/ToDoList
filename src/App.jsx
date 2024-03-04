import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle('');
    setDesc('');
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h1 className='font-bold'>No tasks available</h1>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <ul key={i} className='flex items-center justify-between mb-5 mr-5 ml-5 bg-gray-200 p-3 rounded'>
        <div className='flex items-center justify-around w-2/3'>
          <li className='text-xl font-semibold'>Task {i + 1}</li>
          <li className='text-xl font-semibold'>{t.title}</li>
          <li className='text-xl font-medium'>{t.desc}</li>
        </div>
        <button onClick={() => deleteHandler(i)} className='bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </ul>
    ));
  }

  return (
    <>
      <h1 className='text-2xl p-5 bg-black text-white font-bold text-center'>My ToDo List</h1>

      <form onSubmit={submitHandler} className='flex flex-col items-center'>

        <div className='border-gray-300 border-2 mx-auto my-5 px-4 py-3 w-1/2 rounded-lg'>

          <div className='flex flex-row items-center'>
            <label className='m-5 px-4 py-3 w-1/5 text-right font-bold text-gray-700'>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-gray-300 border-2 m-5 px-4 py-3 w-4/5 rounded-md focus:outline-none focus:ring focus:border-blue-300'
              type="text"
              placeholder='Enter title here'
              required
            />
          </div>

          <div className='flex flex-row items-center'>
            <label className='m-5 px-4 py-3 w-1/5 text-right font-bold text-gray-700'>Description</label>
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className='border-gray-300 border-2 m-5 px-4 py-3 w-4/5 rounded-md focus:outline-none focus:ring focus:border-blue-300'
              type="text"
              placeholder='Enter description here'
              required
            />
          </div>

          <div className='flex justify-center'>
          <button type="submit" className='bg-black text-white hover:bg-slate-400 hover:text-black text-center rounded font-bold mx-auto my-5 px-4 py-3 w-36'>
            Add Task
          </button>
          </div>

        </div>

      </form>
      <hr/>
      <div className='p-8 bg-gray-50 rounded-md'>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default App;
