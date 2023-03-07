    import React from 'react'
    import {useState} from 'react'
  import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
  
  
    const Navbar = () => {

      const [ nav, setNav] =useState(false);

      return (
        <div className='w-full h-[90px] bg-black'>
          <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full cursor-pointer' >
            <div><h1 className="text-[var(--primary-blue)]">DEFI</h1></div>
            <div className="hidden md:flex">
              <ul className='flex text-white items-center'>
                <li  className='hover:text-[var(--primary-blue)]'><a href="#platform">Platform</a></li>
                <li className='hover:text-[var(--primary-blue)]'><a href="#developers"> Developers</a></li>
                <li className='hover:text-[var(--primary-blue)]'> <a href="#subscribe"> Community</a></li>
                <li className='hover:text-[var(--primary-blue)]'><a href="#footer">About</a></li>
              <button className='ml-4'>Use Defi</button>
              </ul>
            </div>

            <div className="block md:hidden">
              {nav ?<AiOutlineClose onClick={()=>{
                setNav(!nav)
              }} className=" text-white"size={30} />: <AiOutlineMenu onClick={()=>{
                setNav(!nav)
              }} className="text-white"size={30} />
}



            </div>


            <div style={{display: nav? 'block': "none"}} className='hidden  w-full bg-[rgba(0,0,0,1)] text-white absolute top-[90px] left-0 h-screen flex justify-center text-center'>
              <ul>
                <li className="text-2xl">Platform</li>
                <li className="text-2xl">Developers</li>
                <li className="text-2xl">Community</li>
                <li className="text-2xl">About</li>
              <button className='m-8'>Use Defi</button>

              </ul>
            </div>

          </div>
        </div>
      )
    }

    export default Navbar
