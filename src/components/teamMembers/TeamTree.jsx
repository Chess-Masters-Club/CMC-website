import React from 'react'
import Card from '../shared/Card';
import { president , teamMembers , leaders } from './TeamData';
import './teamSectionStyle.css'
function TeamTree() {
    React.useEffect(()=>{
    })
  return (
    <div>
        <div className='flex items-center flex-col'>
            <h3 className="mb-8 mt-12 text-white text-[25px] md:text-[30px] lg:text-[35px]">
                President
            </h3>
            <Card name={president.name} role={president.role} image={president.image} />
        </div>
        <div className='flex items-center flex-col' >
            <h3 className="mb-8 mt-12 text-white text-[25px] md:text-[30px] lg:text-[35px]">
                Team leaders
            </h3>
            <div className='w-[100%] flex-wrap flex justify-center flex-row'>
                {leaders.map((item)=>(
                        <Card name={item.name} role={item.role} image={item.image} />
                ))}
            </div>
            
        </div>
        <div className='flex items-center flex-col'>
            <h3 className="mb-8 mt-12 text-white text-[25px] md:text-[30px] lg:text-[35px]">
                Team members
            </h3>
            <div className='w-[100%] flex-wrap flex justify-center flex-row'>
                {teamMembers.map((item)=>(
                        <Card name={item.name} role={item.role} image={item.image} />
                ))}
            </div>
        </div>
    </div>
  )
}
export default TeamTree