"use client"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteBlock = ({ id }) => {
  console.log("deleted")
  const router = useRouter();
  const deleteTicket = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.push('/');
      router.refresh();
    }
  };
  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="text-red-400 h-5  hover:cursor-pointer hover:text-red-200"
        onClick={()=>{deleteTicket(id);console.log(id,"tobeDel")}}
      />
    </div>
  );
};

export default DeleteBlock;
