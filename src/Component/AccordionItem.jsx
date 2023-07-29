import React from "react";

function AccordionItem({ question, answer, onClick, active }) {
  return (
    <div className="w-[30%]  shadow-md bg-blue-600">
      <div onClick={onClick} className="bg-blue-400 p-2 text-left">
        {question}
        <span className="float-right">{`${active ? "-" : "+"}`}</span>
      </div>
      <div className={`${active ? "h-auto" : "h-0 overflow-hidden"}`}>
        {answer}{" "}
      </div>
    </div>
  );
}

export default AccordionItem;
