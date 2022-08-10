import React from 'react'
import { GrTrash } from "react-icons/gr";

const Item = ({ listItem, itemDelete }) => {

  const deleteItem = e => {
    e.preventDefault();
    
    if(e.target.classList.contains('delete')) {
      itemDelete(e.target);
      // console.log(e.target.classList);
    }
    if(e.target.parentElement.classList.contains('delete')) {
      itemDelete(e.target.parentElement);
      // console.log(e.target.parentNode.classList);
    }
  };

  return (
    <div className='flex bg-white/30 px-4 py-3 rounded-lg justify-between items-center mb-4 overflow-hidden' onClick={deleteItem}>
        <span className='overflow-x-auto'>{listItem}</span>
        <GrTrash size={25} className="delete cursor-pointer mx-2 transition-all duration-100 ease-in-out hover:-translate-y-1" />
    </div>
  )
}

export default Item