import React from 'react'

function EventsCard(props) {
  return (
    <div className='ml-1 mb-4  rounded ml-r1 w-[250px] raduis-1 shadow-sm hover:shadow-md shadow-white hover:shadow-sky-200 hover:border-sky-400 h-auto justify-between bg-secondary flex flex-col border-solid border-[0.5px] border-color-grey-200 items-center transition-colors duration-700 transform cursor-pointer group '>
            <img className="imageRendering w-[100%] h-[250px] object-fit" src={props.image} alt="" />
            <p className=" text-sm translate-y-[10px]  text-gray-300 dark:text-white group-hover:text-white">{props.date}</p>
            <h3 className=" text-lg translate-y-[10px]  text-sky-400 capitalize dark:text-white">{props.type}</h3>
            <p className="text-center mt-2 mb-2  text-[14px] mt-2 text-white capitalize dark:text-gray-300">{props.title}</p>
    </div>
  )
}

export default EventsCard