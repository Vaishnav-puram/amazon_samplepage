/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import l1 from "./images/boat.PNG";
// import l2 from "./images/mobile1.PNG"
// import l3 from "./images/tv.PNG";
// import l4 from "./images/WM.PNG";
// import l5 from "./images/WM2.PNG";
export default function Info({ info }) {
    return (
        <div className="Grid">
            <div className="main">
                <img src={l1} className="img" />
                <div className="obj">
                    <div className="d">{info.name}</div>
                    <div className="price">{info.price} </div>
                    <div className="rating"> {info.rating}</div>
                    <div className="save">{info.save}</div>
                    <div className="deli"><b>{info.deli}</b></div>
                    <div className="prime">{info.prime}</div>
                </div>
            </div>
        </div>
    )
}