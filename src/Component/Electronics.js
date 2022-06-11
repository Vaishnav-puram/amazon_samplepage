import React from 'react'
import data from './Object'
import ElectronicsComp from "./ElectrnoicsComp"
export default function Electronics({cart}) {
  let electronicsData=data.filter((obj)=>obj.type=="electronics");
  return (
    <div>
      {/* <Header />
      <Subheader />
      <Cart /> */}
      <section className="lists">
        <ElectronicsComp cart={{cart,electronicsData}}/>
      </section>
    </div>
  )
}