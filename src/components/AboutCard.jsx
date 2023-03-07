import React from 'react'

const AboutCard = ({icon,title,paragraph}) => {
  return (
    <div className='flex flex-col border text-left rounded-lg py-12 px-8 transition duration-150 ease-out hover:scale-105'>
    <div>
    <div className='bg-[var(--primary-blue)] inline-flex p-2 rounded-full'>{icon}</div>
    <h3 className='text-xl font-bold py-4'>{title}</h3>
    <p>
        {paragraph}
    </p>
    </div>
  </div>
  )
}

export default AboutCard


