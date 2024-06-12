import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ticket}) => {
  function getDateAndTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-indexed, so January is 0
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedData = `${year}-${month}-${day}, ${formattedHours}:${minutes}:${seconds} ${period}`;


    return  formattedData
   
}

// Example usage


  return (
    <>
    <Link href={`/ticket-page/${ticket._id}`}>
      <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
        <div className="flex mb-3 justify-between">
          <div className="flex">
            <PriorityDisplay className="ml-4" priority={ticket.priority}/>
          </div>
          <DeleteBlock id={ticket._id}/>
        </div>
        <h4 className="text-white text-left text-2xl">{ticket.title}</h4>
        <hr className="border-0 h-px bg-page " />
        <p className="text-sm font-normal fon text-left m-1 text-white">
         {ticket.description}
        </p>
        <div className=" flex justify-between items-end">
          <div className="">
            <p className="text-sm font-medium text-left m-1 text-white">
             {getDateAndTime(ticket.createdAt)}
            </p>
            {/* {ticket.progress} */}
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div>
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default TicketCard;
