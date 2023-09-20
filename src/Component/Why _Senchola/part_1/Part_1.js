import React from 'react';
import "./Part_1.css";
import img1 from '../../../Img/Way_page_img1.png';
import img2 from '../../../Img/why_page_img2.png';
import { BiPlay } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

const Part_1 = () => {
  return (
    <div>
        <div className="why_part1">
        
        <div className="part_1_why">
           <div className="why_title">
               <p className="Why_title_1">
                   Best Learning <br /> Education palatfom is Senchola.
               </p>
               <p className="why_description">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia natus, ab consequuntur eos saepe commodi ad, laboriosam autem sed facilis aspernatur maiores labore ullam. Numquam in magnam perspiciatis nostrum.
               </p>
               <div className='why_page_button'>
                   <a href="#" className="why_leanmor why_button">Lean More</a>
                   <a href="#" className='why_watch why_button'><BiPlay className='play_button'/>Watch Video</a>
               </div>
           </div>
           <div className="why_page_img_1">
               <div className="why">
                   <img src={img1} alt="" className='img_why_1 why_img ' />
                   <img src={img2} alt="" className='img_why_2 why_img' />
               </div>
               <div className="image_content i_c_r">
                  <div className="i_c_1"><BiCheck className='check'/> <p>Build remote teams faster with senchola</p> </div>
                   <div className="i_c_1"><BiCheck className='check'/> <p>Expert Trinee</p></div>
               </div>
           </div>
        </div>
        <div className="icone_why">
           <BsBook className='i-1 i' />
           <BsBook className='i-2 i' />
           <BsBook className='i-3 i' />
   
        </div>
        
       </div>
       <div className="why_page_cicrle">
            <div className="why_cicrle_1 cicrle" ></div>
            <div className="why_cicrle_2 cicrle"></div>
            <div className="why_cicrle_3 cicrle"></div>
        </div>
    </div>
    
  )
}

export default Part_1