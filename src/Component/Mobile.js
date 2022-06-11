import React from 'react'
import data from './Object'
import MobileComp from "./MobileComp"
export default function Mobile({cart}) {
  let mobileData=data.filter((obj)=>obj.type=="mobile");
  return (
    <div>
      {/* <Header />
      <Subheader />
      <Cart /> */}
      <section className="lists">
        <MobileComp cart={{cart,mobileData}}/>
      </section>
    </div>
  )
}
 //   let mobileData=data.filter(obj=>obj.type=="mobile");
  // return (
  //     <MobileComp ele={mobileData}/> 
  // )