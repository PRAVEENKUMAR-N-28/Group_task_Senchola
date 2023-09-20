import React from 'react';
import "./Part_2.css";
import { BsBook } from "react-icons/bs";

const Part_2 = () => {
  return (
    <div>
        <div className="Why_part_2">
            <p className='part_2_title_why'>Why Senchola <br /> University ?</p>
            <div className="part2_why">
                <div className="content_left_why">
                    <ul>
                        <li className='list_why'>What we teach is much more relevant for real software careers</li>
                        <li className='list_why'>At Senchhola, we look for skillsets and abilities more than for paper credentials</li>
                        <li className='list_why'>We do not charage our students any fees.</li>
                        <li className='list_why'>After the successful completion of the internship, you are automatically inducted as an employee into Senchola TechnologiesSolution</li>
                    </ul>
                </div>
                <div className="content_right_why">
                    <p className="right_line_1">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi expedita tempora accusantium minima odit ipsa?
                        
                    </p>
                    <p className="right_line_2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dicta quidem ratione ipsam est deleniti consequuntur nemo temporibus, neque quasi debitis laudantium saepe! Ducimus sint omnis quibusdam porro corporis doloremque.
                    </p>
                </div>
            </div>
        </div>
        <div className="part_2_icone">
            <BsBook className='i_p_2 i_2_1 i' />
        </div>
    </div>
  )
}

export default Part_2