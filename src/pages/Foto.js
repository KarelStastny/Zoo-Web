import React from 'react'
import DataFoto from '../data/DataFoto';
import { useState } from 'react';
import "./Foto.scss"
import DataImages from "../data/DataImages"



const Foto = () => {
    const [model, setModel] = useState(false)
    const [imgSrc, setImgSrc] = useState("")

    const openImage = (img) => {
        setImgSrc(img)
        setModel(true)
    }
    const closeImg = () => {
        setModel(false)
        // setImgSrc("")
    }





  return <div className='foto-galerie'>
    <h1>Foto Galerie</h1>
    {/* Zobrazovací okno */}
    <div className={model ? "model open" : "model"}>
        <img src={imgSrc} alt="" />
        <div><img src={DataImages[6]} alt="#" onClick={() => closeImg()} /></div>
        {/* <div onClick={() => closeImg()}>x</div> */}
        {/* <Crosss/> */}



    </div>
  
    <div className="gallery">
        {DataFoto.map( (one, index) => {
            return <div key={index} className="pics" onClick={() => openImage(one.img)}>
                <img src={one.img} alt="" style={{width: "100%"}} />
            </div>
        })
            
        }

    </div>
  </div>

};

export default Foto
