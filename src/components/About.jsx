import React from 'react'
import {SiHiveBlockchain,SiStrapi, SiFsecure} from 'react-icons/si'
import{ VscServerProcess} from 'react-icons/vsc'

import AboutCard from './AboutCard'



const About = () => {
  return (

    <div id="#platform" className=" text-white bg-black text-center w-full">
    <div className='max-w-[1240px] mx-auto px-4 py-16'>
      <div>
        <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
        <p className='py-4 text-xl'>
          The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all
        </p>
        
        <div className='grid sm:grid-cols-2 m:grid-cols-3 lg:grid-cols-4 gap-4'>

        <AboutCard title="Reliable, tamper-proof network" icon={<SiHiveBlockchain className="text-gray-900"size={40}/>} paragraph="   Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/ APIs to any smart contract"/>
        <AboutCard title="Seamless connection to any API" icon={<SiStrapi className='text-gray-900' size={40}/>} paragraph="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future block chain "/>
        <AboutCard title="Proven, ready-made solutions" icon={<SiFsecure className='text-gray-900' size={40}/>} paragraph="Integrate pre-built, time-tested oracle solutions that already contract value for market-leading decentralized applications. "/>
        <AboutCard title="Secure off-chain computation" icon={<VscServerProcess className='text-gray-900' size={40}/>} 
        paragraph="Use a decentralized network of DeFi keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
        />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
