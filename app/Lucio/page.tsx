import React from 'react'
import Head from 'next/head'

const Lucio = () => {
  return (
    <>
      <Head>
        <meta content="01010111 01101001 01000110 01101001" property="og:description" />
        <meta content="Regalo" property="og:title"/>
        <meta content="https://fuffo.net" property="og:url" />
        <meta content="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Fgift-boxes-clipart-28.png&f=1&nofb=1&ipt=3d6aa1d6d96a93e1b4cbabae3030e7a7310f91f08c3fa393aef9ed9e35f43edd&ipo=images" property="og:image" />
        <meta content="#AABBFF" data-react-helmet="true" name="theme-color" />
      </Head>
      <p>Grazie dell&apos;aiuto Lucio<br></br> fai buon uso di quest&apos;informazione.</p>
      <div className="mx-auto w-fit relative mt-72">
        <div className='relative w-fit mx-auto bg-black p-10 rounded-3xl'>
          <p>ZucDoc2020!</p>
          <p>valentina.nappi</p>
          <p>NPPVNT81</p>
        </div>
        <img className="relative w-64 -top-60 active:top-64 transition-all" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fgift-transparent%2Fgift-transparent-15.png&f=1&nofb=1&ipt=7e5caccb801dfd42dc07885382af8d105f6fc2e363a824b0145002ad16cd5a18&ipo=images" alt="regalo"></img>
      </div>
    </>
    
  )
}

export default Lucio