    
    
    
    import React from 'react'
    import heroVid from '../assets/video.mp4'
    const Hero = () => {
      return (
        <div className='w-full h-[90vh] top-[90px]'>
          <video className='object-cover h-[90vh] w-full absolute -z-10' src={heroVid} autoPlay loop muted></video>
          <div className='w-full h-full flex justify-center items-center flex-col text-white p-4 text-center'>
            <h1>Decentralized</h1>
            <h1 className='py-2'><span className='text-[var(--primary-blue)]'>Trading</span> Protocol</h1>
            <p className='text-xl py-4'>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
            <div>
              <button className='m-2'>Use Defi</button>
              <button className='m-2 text-[var(--primary-blue)] bg-[transparent]'>FAQ</button>
            </div>
            <div>
            <p className='text-center mt-32 text-white text-2xl font-bold'>Total Volume Secure $42,104,783,662.47</p>
          </div>
          </div>

        </div>
      )
    }

    export default Hero
