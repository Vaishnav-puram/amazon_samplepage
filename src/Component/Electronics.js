import React from 'react'
import data from './Object'
import ElectronicsComp from "./MobileComp"
export default function Electronics() {
 const Arr=data.filter(name=>name.type==="electronics").map((ele)=>{
    return (
      <>
      <ElectronicsComp ele={ele}/>
      </>
    )
  })
  return (
    <div>
      <section className="lists">
        {Arr}
      </section>
    </div>
  )
}