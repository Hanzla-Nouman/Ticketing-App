import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) =>{
    switch (status) {
      case "Not started":
        return "bg-red-200";
      case "Working":
        return "bg-yellow-200";
      case "Done":
        return "bg-green-200";
    }
  }
  return (
    <div className={"inline-block rounded-full py-1 px-2 text-xs font-semibold text-gray-700 "+getColor(status)}>
      {status}
    </div>
  );
};

export default StatusDisplay;
