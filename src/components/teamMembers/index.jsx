import React from 'react'
import Title from "../shared/Title/Title";
import Wp from '../../../public/W_Rook.png';
import TeamTree from './TeamTree';
function TeamSection() {
  return (
    <div
      id="TeamSection"
      className="px-8 sm:px-20 lg:px-[9vw]  pt-16 bg-secondary flex flex-col justify-center md:justify-start "
    >
        <Title title="Club Members" image={Wp} />
      
      <TeamTree />
    </div>
  )
}

export default TeamSection