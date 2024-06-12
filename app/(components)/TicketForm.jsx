"use client";

import { faL } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState, React } from "react";

const TicketForm = ({ ticket }) => {
  const router = useRouter();
  const EDITMODE = ticket._id === "new" ? false : true;
  const startingTicketData = {
    title: "",
    description: "",
    catrgory: "Hardware Problem",
    priority: 1,
    progress: 0,
    status: "Not started",
  };
  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["catrgory"] = ticket.catrgory;
  }
  const [formData, setFormData] = useState(startingTicketData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(EDITMODE){
console.log("updated")
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Error in Updating a Ticket");
      }
    }else{
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Error in creating a Ticket");
    }
  }
    router.push("/");
    router.refresh();
  };
  return (
    <>
      <div className="lg:flex lg:justify-center">
        <form
          className="flex flex-col mx-8 lg:w-1/2 gap-2 mb-10 "
          method="POST"
          onSubmit={handleSubmit}
        >
          <h3 className=" text-white font-bold mt-5 text-center text-2xl">
            {EDITMODE ? "Update your Ticket" : "Create your Ticket"}
          </h3>
          <label htmlFor="title" className="text-white mt-5">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required={true}
            value={formData.title}
            onChange={handleChange}
            className="p-1 rounded-md bg-slate-700 border text-white"
          />
          <label htmlFor="title" className="text-white ">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            required={true}
            rows={5}
            value={formData.description}
            onChange={handleChange}
            className="p-1 rounded-md bg-slate-700 border text-white"
          />
          <label htmlFor="category" className="text-white ">
            Category
          </label>
          <select
            name="catrgory"
            id="catrgory"
            className="p-1 rounded-md bg-slate-700 border  text-white"
            value={formData.catrgory}
            onChange={handleChange}
          >
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Schedule Problem">Schedule Problem</option>
            <option value="Work-Load Problem">Work Load Problem</option>
          </select>
          <label htmlFor="priority" className=" text-white mr-2 ">
            Priority
          </label>
          <div className="  ">
            <input
              type="radio"
              name="priority"
              id="priority-1"
              value={1}
              checked={formData.priority == 1}
              onChange={handleChange}
            />
            <label htmlFor="priority-1" className="text-white mr-2 ">
              1
            </label>
            <input
              type="radio"
              name="priority"
              id="priority-2"
              value={2}
              checked={formData.priority == 2}
              onChange={handleChange}
            />
            <label htmlFor="priority-2" className="text-white mr-2 ">
              2
            </label>
            <input
              type="radio"
              name="priority"
              id="priority-3"
              value={3}
              checked={formData.priority == 3}
              onChange={handleChange}
            />
            <label htmlFor="priority-3" className="text-white mr-2 ">
              3
            </label>
            <input
              type="radio"
              name="priority"
              id="priority-4"
              value={4}
              checked={formData.priority == 4}
              onChange={handleChange}
            />
            <label htmlFor="priority-4" className="text-white mr-2 ">
              4
            </label>
            <input
              type="radio"
              name="priority"
              id="priority-5"
              value={5}
              checked={formData.priority == 5}
              onChange={handleChange}
            />
            <label htmlFor="priority-5" className="text-white ">
              5
            </label>
          </div>
          <label htmlFor="progress" className="text-white ">
            Progress
          </label>
          <input
            type="range"
            name="progress"
            id="progress"
            value={formData.progress}
            onChange={handleChange}
          />
          <label htmlFor="status" className="text-white ">
            Status
          </label>
          <select
            name="status"
            id="status"
            className="p-1 rounded-md bg-slate-700 border text-white"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Not Started">Not Started</option>
            <option value="Working">Working</option>
            <option value="Done">Done</option>
          </select>
          {/* <div className="justify-center flex items-center "> */}
          <input
            type="submit"
            value={EDITMODE ? "Update Ticket" : "Create Ticket"}
            className="bg-slate-300 cursor-pointer  my-4  p-2 rounded-md text-slate-900 font-semibold hover:bg-neutral-300  text-center"
          />
          {/* </div> */}
        </form>
      </div>
    </>
  );
};
export default TicketForm;
