"use client";

import { useRouter } from "next/navigation";
import { useState, React } from "react";

const TicketForm = () => {
    const router = useRouter()
  const startingTicketData = {
    title: "",
    description: "",
    catrgory: "Hardware Problem",
    priority: 1,
    progress: 0,
    status: "Not started",
  };
const MONGODB_URI = process.env.MONGODB_URI 
  const [formData, setFormData] = useState(startingTicketData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    console.log("submit")
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({formData}),
      headers: {
        "Content-Type": "application/json",
      },  
      
    });
    console.log("submit2")
    if(!res.ok){
        throw new Error("Error in creating a Ticket")
    }
    router.refresh()
    router.push("/")
  };
  return (
    <>
      <div className="flex justify-center">
        <form
          className="flex flex-col w-1/2 gap-2 mb-10 "
          method="POST"
          onSubmit={handleSubmit}
        >
          <h3 className="text-lg text-white font-bold mt-5">
            Create Your Ticket
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
            className="p-1 rounded-md bg-slate-400 text-white"
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
            className="p-1 rounded-md bg-slate-400 text-white"
          />
          <label htmlFor="category" className="text-white ">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="p-1 rounded-md bg-slate-400 text-white"
            value={formData.catrgory}
            onChange={handleChange}
          >
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Schedule Problem">Schedule Problem</option>
            <option value="Work-Load Problem">Work Load Problem</option>
          </select>
          <label htmlFor="priority" className="text-white ">
            Priority
          </label>
          <div>
            <input
              type="radio"
              name="priority"
              id="priority-1"
              value={1}
              checked={formData.checked == 1}
              onChange={handleChange}
            />
            <label htmlFor="priority-1" className="text-white ">
              1
            </label>
            <input
              type="radio"
              name="priority"
              id="priority-2"
              value={2}
              checked={formData.checked == 2}
              onChange={handleChange}
            />
            <label htmlFor="priority-2" className="text-white ">
              2
            </label>
            <input
              type="radio"
              name="priority"
              id="priority-3"
              value={3}
              checked={formData.checked == 3}
              onChange={handleChange}
            />
            <label htmlFor="priority-3" className="text-white ">
              3
            </label>
            <input
              type="radio"
              name="priority"
              id="priority-4"
              value={4}
              checked={formData.checked == 4}
              onChange={handleChange}
            />
            <label htmlFor="priority-4" className="text-white ">
              4
            </label>
            <input
              type="radio"
              name="priority"
              id="priority-5"
              value={5}
              checked={formData.checked == 5}
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
            className="p-1 rounded-md bg-slate-400 text-white"
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
            value="Create Ticket"
            className="bg-slate-300 cursor-pointer  my-4  p-2 rounded-md text-slate-900 font-semibold hover:bg-neutral-300  text-center"
          />
          {/* </div> */}
        </form>
      </div>
    </>
  );
};
export default TicketForm;
