import React from 'react'
import { Tree , TreeNode } from 'react-organizational-chart'
import Card from '../shared/Card';
import { data } from './TeamData';
import { useNavigate } from 'react-router-dom';
import './teamSectionStyle.css'
function TeamTree() {
    const divRef = React.useRef(null);
    const navigate = useNavigate();
    React.useEffect(()=>{
        console.log(divRef.current)
        divRef.current.scrollIntoView({
            behavior: "smooth",
            inline:"center",
            
        })
    })
  return (
    <div className='overflow-x-scroll teamTree pb-6' >
                <Tree lineWidth='4px'  lineColor='#ffe082' lineBorderRadius='10px' 
                label={<div ref={divRef} className='inline-block'>
                    <Card icon={data[0].icon} image={data[0].image} name={data[0].name} role={data[0].role}  />
                </div>}>
                    {
                        data[0].team.map(item2 =>
                            <TreeNode label={<div className='inline-block'>
                            <Card icon={item2.icon} image={item2.image} name={item2.name} role={item2.role}  />
                        </div>} >
                                {
                                    item2.team.map(item3=>
                                        <TreeNode label={<div className='inline-block'>
                                            <Card icon={item3.icon} image={item3.image} name={item3.name} role={item3.role}  />
                                        </div>} />
                                    )
                                }
                            </TreeNode>
                        )
                    }
                </Tree>
    </div>
  )
}

export default TeamTree