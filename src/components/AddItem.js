import React, { useState } from 'react'

const AddItem = ({ itemAdd }) => {
    const [text, setText] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        if(text) {
          itemAdd(text);
          e.target.reset();
          setText(null);
        }
    };

  return (
    <div className="w-full rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="max-w-sm mx-auto">
        <div className="flex items-center py-2 px-2 rounded-lg bg-white/5">
          <input
            onChange={e => {
                setText(e.target.value.trim());
            }}
            className="appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add Todo"
          />
          <button
            className="text-[#1e1e1e] py-1 px-3 border-l-2 hover:text-gray-400"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddItem