import React from 'react'
function Card(props) {
  return (
        <div className='ml-1 ml-r1 w-[230px] h-auto justify-between bg-secondary flex flex-col items-center p-4 transition-colors duration-300 transform cursor-pointer rounded-xl group hover:bg-tertiary dark:border-gray-700 dark:hover:border-transparent'>
            <img className="ring-4 ring-white imageRendering  w-[150px] h-[150px] rounded-full " src={props.image} alt="" />
            <h3 className="text-center mb-2 mt-2  text-base translate-y-[10px]  text-gray-50 capitalize dark:text-white group-hover:text-white">{props.name}</h3>
            <p className="text-[12px] whitespace-nowrap mt-2 text-sky-400 capitalize dark:text-gray-300 group-hover:text-amber-400">{props.role}</p>
        </div>
  )
}

export default Card