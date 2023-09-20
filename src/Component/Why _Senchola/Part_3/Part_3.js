import React from 'react';
import "./Part_3.css";
import {IoIosDocument} from "react-icons/io";
import {FaHandshakeAngle} from "react-icons/fa6";
import {VscSourceControl} from "react-icons/vsc";
import {BsBook} from "react-icons/bs";
import {HiDesktopComputer} from "react-icons/hi";
import {BiSolidMessageAltDetail} from "react-icons/bi";
import {RiTeamFill} from "react-icons/ri";


const Part_3 = () => {
  return (
    <div>
        <div className="part_3_why">
            <div className="why_card_section">
              {/* Card-left */}
              <div className="card_left_why ">
                    <div className='card_1_why card_why'>
                      <div className="card_icon c-i-1">
                        <IoIosDocument className='c-ic-1' />
                      </div>
                      <p className="card_titl">Breadth and Depth for Immediate Scale</p>
                      <p className="card_discription">Lorem vivamus amet. Eu faucibus mattis sit vestibulum velit ut. Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.</p>
                    </div>
                    <div className='card_1_why card_why'>
                      <div className="card_icon c-i-1">
                        <FaHandshakeAngle className='c-ic-2' />
                      </div>
                      <p className="card_titl">Global Pricing <br /> Model</p>
                      <p className="card_discription">Lorem vivamus amet. Eu faucibus mattis sit vestibulum velit ut. Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.</p>
                    </div>
                    
              </div>

              {/* card-center */}
              <div className="card_center_why ">
                    <div className='card_1_why card_why'>
                      <div className="card_icon c-i-3">
                        <VscSourceControl className='c-ic-3' />
                      </div>
                      <p className="card_titl">Scaleable Managed Outsourcing</p>
                      <p className="card_discription">Lorem vivamus amet. Eu faucibus mattis sit vestibulum velit ut. Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.</p>
                    </div>
                    <div className='card_1_why card_why'>
                      <div className="card_icon c-i-4">
                        <RiTeamFill className='c-ic-4' />
                      </div>
                      <p className="card_titl">Jumpstart Your <br /> Business</p>
                      <p className="card_discription">Lorem vivamus amet. Eu faucibus mattis sit vestibulum velit ut. Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.</p>
                    </div>
                    
              </div>
              {/* card-right */}
              <div className="card_right_why ">
                    <div className='card_1_why card_why'>
                      <div className="card_icon c-i-5">
                        <BiSolidMessageAltDetail className='c-ic-5' />
                      </div>
                      <p className="card_titl">Elastic Freelancer <br /> Model</p>
                      <p className="card_discription">Lorem vivamus amet. Eu faucibus mattis sit vestibulum velit ut. Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.</p>
                    </div>
                    <div className='card_1_why card_why'>
                      <div className="card_icon c-i-6">
                        <HiDesktopComputer className='c-ic-6' />
                      </div>
                      <p className="card_titl">Exclusive Professional Marketplace</p>
                      <p className="card_discription">Lorem vivamus amet. Eu faucibus mattis sit vestibulum velit ut. Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.</p>
                    </div>
                    
              </div>
            </div>
            
        </div>
        <div className="part_3_icone">
            <BsBook className='i_p_3 i_3_1 i' />
            <BsBook className='i_p_3 i_3_2 i' />
        </div>
        <div className="part_3_circle">
        <div className="why_cicrle_4 cicrle" ></div>
            <div className="why_cicrle_5 cicrle"></div>
        </div>
    </div>
  )
}

export default Part_3