import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <>
      <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
        <div className="flex mb-3 justify-between">
          <div className="flex">
          <PriorityDisplay className="ml-4" />
          <PriorityDisplay className="ml-4" />
          <PriorityDisplay className="ml-4" />
          <PriorityDisplay className="ml-4" />
          </div>
          <DeleteBlock />
        </div>
        <h4>Ticket Title</h4>
        <hr className="border-0 h-px bg-page m-2" />
        <p className="text-sm text-left m-1 text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
          nihil!
        </p>
        <div className=" flex justify-between items-end">
          <div className="">
            <p className="text-sm text-left m-1 text-neutral-400">
              12/04/2034 04:48 PM
            </p>
            <ProgressDisplay />
          </div>
          <div >
            <StatusDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
