import React from 'react'
import data from './Object'
import MobileComp from "./MobileComp"
export default function Mobile() {
 const Arr=data.filter(name=>name.type==="mobile").map((ele)=>{
    return (
      <>
      <MobileComp ele={ele}/>
      </>
    )
  })
  return (
    <div>
      {/* <Header />
      <Subheader />
      <Cart /> */}
      <section className="lists">
        {Arr}
      </section>
    </div>
  )
}
 //   let mobileData=data.filter(obj=>obj.type=="mobile");
  // return (
  //     <MobileComp ele={mobileData}/> 
  // )