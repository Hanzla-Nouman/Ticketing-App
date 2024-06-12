"use client";
const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get Ticket");
  }
  return res.json();
};
import TicketForm from "@/app/(components)/TicketForm";
let updateTicketData = {};

const page = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData;
    console.log(updateTicketData);
  }else{
    updateTicketData = {
      _id:"new"
    }
  }
  return (
    <>
      <TicketForm ticket={updateTicketData} />
    </>
  );
};

export default page;
