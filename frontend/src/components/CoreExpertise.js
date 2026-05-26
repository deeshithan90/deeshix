import React, { useState } from 'react'
import {
  FaNodeJs,
  FaReact,
  FaServer,
  FaUser
} from 'react-icons/fa'

import {
  BiLogoMongodb,
  BiLogoPython,
  BiUser
} from 'react-icons/bi'

const CoreExpertise = () => {

  const [selectedCategory, setSelectedCategory] = useState('Frontend')

  const technologies = {
    Frontend: [
      {
        name: 'React.js',
        icon: <FaReact size={24} color="#61DBFB" />
      }
    ],

    Backend: [
      {
        name: 'Node.js',
        icon: <FaNodeJs size={24} color="#68A063" />
      },
      {
        name: 'Express.js',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width="24"
            height="24"
          >
            <path
              fill="#ffffff"
              d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z"
            />
          </svg>
        )
      },
      {
        name: 'REST API',
        icon: <FaServer size={24} color="#f59e0b" />
      },
      {
        name: 'JWT',
        icon: <FaUser size={24} color="#ec4899" />
      }
    ],

    Database: [
      {
        name: 'MongoDB',
        icon: <BiLogoMongodb size={24} color="#47A248" />
      },
      {
        name: 'Mongoose ODM',
        icon: <BiLogoMongodb size={24} color="#47A248" />
      }
    ],

    Programming: [
      {
        name: 'Python',
        icon: <BiLogoPython size={24} color="#3776AB" />
      }
    ],

    AI: [
      {
        name: 'Artificial Intelligence',
        icon: <BiUser size={24} color="#8b5cf6" />
      }
    ]
  }

  return (
    <div className="mt-10 px-6 mb-20">

      <h2 className="text-2xl  csaa mb-20">Core Expertise</h2>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Sidebar */}
        <div className="w-full md:w-1/4">

          <div className="shadowss rounded-2xl p-4 border border-gray-700">

            {Object.keys(technologies).map((category, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`
                  p-4
                  rounded-xl
                  mb-3
                  cursor-pointer
                  transition-all duration-300
                  text-lg
                  font-medium
                  ${
                    selectedCategory === category
                      ? 'text-white shadowss'
                      : 'text-white shadowss-h'
                  }
                `}
              >
                {category}
              </div>
            ))}

          </div>

        </div>

        {/* Technology Content */}
        <div className="w-full md:w-3/4">

          <div className="shadowss rounded-2xl p-6 border border-gray-700">

            <h3 className="text-2xl csaa mb-10">
              {selectedCategory} Technologies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {technologies[selectedCategory].map((tech, index) => (
                <div
                  key={index}
                  className="
                    shadowss
                    p-5
                    rounded-xl
                    hover:bg-[#374151]
                    transition-all duration-300
                    cursor-pointer
                    w-[300px]
                  "
                >
                  {tech.icon}

                  <br/>

                  <p className="text-white text-lg">
                    {tech.name}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CoreExpertise