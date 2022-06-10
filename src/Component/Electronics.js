import React from 'react'
import data from './Object'
import ElectronicsComp from "./MobileComp"
export default function Electronics() {
  let mobileData=data.filter((obj)=>obj.type==="electronics");
  return (
    <div>
      {/* <Header />
      <Subheader />
      <Cart /> */}
      <section className="lists">
        <ElectronicsComp data={mobileData}/>
      </section>
    </div>
  )
}