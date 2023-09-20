import React from 'react';
import "./part_4.css";
import img1 from "../../../Img/part_4_image.png";
import {BiCheck} from "react-icons/bi";
import {BsBook} from "react-icons/bs";


const Part_4 = () => {
  return (
    <div>
        <div className="part_4_why">
            <div className="part_4_why_content">
                <div className='part_4_image_left'>
                    <img src={img1} alt="" className='img_part_4' />
                    <div className="image_content_1">
                        <div className="i_c_1"><BiCheck className='check'/> <p>Build remote teams faster with senchola</p> </div>
                        <div className="i_c_1"><BiCheck className='check'/> <p>Expert Trinee</p></div>
                    </div>
                </div>
                <div className="part_4_content">
                    <p className="content_header_part">
                        Lorem integer dapibus <br /> rhoncus fusce nisi augue <br /> fringilla.
                    </p>
                    <p className="content_part_4">
                        Lorem ipsum dolor sit amet consectetur. Cras lacinia ante tincidunt donec praesent pellentesque bibendum. Consectetur ipsum et id nullam interdum. Lorem vel mauris in a lorem scelerisque mi tempor. Dignissim sed sem ac sagittis elit dolor nisi egestas. Egestas sagittis sagittis odio nisi urna malesuada. Lectus diam id molestie et egestas luctus. Nam venenatis integer purus proin nisl.
                    </p>
                </div>
            </div>
        </div>
        <div className="part_4_circle">
            <div className="why_cicrle_6 cicrle" ></div>
        </div>
        <div className="part_4_icone">
            <BsBook className='i_p_4 i_4_1 i' />
            <BsBook className='i_p_4 i_4_2 i' />
        </div>
    </div>
  )
}

export default Part_4