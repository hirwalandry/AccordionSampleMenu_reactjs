import React, {useState} from 'react';

import {faqs} from "../dummyData"
import AccordionItem from '../Component/AccordionItem';


function Accordion(props) {
  const [clicked, setClicked] = useState("0")

 const handleClick = (index) => {
   if (clicked === index) {
    console.log("inside");
    return setClicked("0");
  
   }
   console.log("outside");
  setClicked(index);
 };
    
    return (
      <div>
       
        {faqs.map((faq, index) => {
              // console.log(index);
              return <AccordionItem key={index} onClick={() => handleClick(index)} active={ clicked === index} question={faq.question} answer={faq.answer} />;
        })}
      </div>
    );
}

export default Accordion;