import React from 'react'
import { FaLeaf, FaNodeJs, FaReact, FaServer, FaUser } from 'react-icons/fa'
import { BiLogoMongodb } from 'react-icons/bi'

const CoreExpertise = () => {
    return (
        <>
        <h1 className='text-3xl font-bold underline'>Core Expertise</h1>
        <div className='grids'>
            {/**MongoDB*/}
            <div className='flex gap-4'>
                <BiLogoMongodb size={20} />
                <p>MongoDB</p>
            </div>
            {/**Express.js*/}
            <div className='flex gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="20" height="20">
                    <path fill="#000000" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 8c30.9 0 56 25.1 56 56s-25.1 56-56 56S8 94.9 8 64 33.1 8 64 8zm-27.8 31.4c-1.6 0-2.9 1.3-2.9 2.9v43.4c0 1.6 1.3 2.9 2.9 2.9h25.6c1.6 0 2.9-1.3 2.9-2.9v-5.8c0-1.6-1.3-2.9-2.9-2.9H43.1V67h16.8c1.6 0 2.9-1.3 2.9-2.9v-5.8c0-1.6-1.3-2.9-2.9-2.9H43.1V45.9h18.7c1.6 0 2.9-1.3 2.9-2.9v-5.8c0-1.6-1.3-2.9-2.9-2.9H36.2zm54.6 0c-1.1 0-2.1.6-2.6 1.5L77.6 63.8 88.2 84c.5.9 1.5 1.5 2.6 1.5h6.6c2.3 0 3.7-2.5 2.6-4.5L87.5 64l12.5-17c1.4-1.9 0-4.5-2.3-4.5h-6.9z" />
                </svg>
                <p>Express.js</p>
            </div>
            {/**React.js*/}
            <div className='flex gap-4'>
                <FaReact size={20}/>
                <p>React.js</p>
            </div>
            {/**Node.js*/}
            <div className='flex gap-4'>
                <FaNodeJs size={20}/>
                <p>Node.js</p>
            </div>
            {/**REST API Development*/}
            <div className='flex gap-4'>
                <FaServer size={20} />
                <p>REST API Development</p>
            </div>
            {/**JWT*/}
            <div className='flex gap-4'>
                <FaUser size={20}/>
                <p>Authentication & Authorization (JWT)</p>
            </div>
            {/**Database Modeling with Mongoose ODM*/}
            <div className='flex gap-4'>
                <BiLogoMongodb size={20}/>
                <p>Database Modeling with Mongoose ODM</p>
            </div>
        </div>
        </>
    )
}

export default CoreExpertise