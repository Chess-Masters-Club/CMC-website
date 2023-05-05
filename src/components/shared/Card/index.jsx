import React from 'react'
import Knight from "../../../../public/W_Knight.png";
function Card(props) {
  return (
        <div className='w-[150px] h-auto justify-between bg-secondary flex flex-col items-center p-2 transition-colors duration-300 transform border cursor-pointer rounded-xl group hover:bg-tertiary dark:border-gray-700 dark:hover:border-transparent'>
            <img className="imageRendering w-[80px] h-[80px] rounded-full ring-4 ring-gray-300" src={props.image} alt="" />
            <h3 className="text-base translate-y-[10px]  text-gray-50 capitalize dark:text-white group-hover:text-white">{props.name}</h3>
            <div className='flex justify-between flex-col items-center h-auto' style={{
                transform: 'translateY(-12px)'
            }}>
            <img
                    className="lg:w-8 md:w-8 w-7 object-contain h-auto"
                    src={props.icon}
                />
                <p className="text-[12px] whitespace-nowrap mt-2 text-amber-300 capitalize dark:text-gray-300 group-hover:text-amber-400">{props.role}</p>
            </div>
        </div>
  )
}

export default Card