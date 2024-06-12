import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Error fetching tickets", error);
  }
};
const Home = async () => {
  const { tickets } = await getTickets();
  const uniqueCategory = [...new Set(tickets?.map(({ catrgory }) => catrgory))];
  console.log(uniqueCategory);
  return (
    <>
      <div className="p-5">
        {uniqueCategory.map((category, index) => {
          return (
            <div key={index} className="mb-4">
              <h1 className="text-2xl font-semibold text-white">{category}</h1>
              <div className="grid  lg:grid-cols-3 text-center md:grid-cols-2 sm:grid-cols-2 font-bold text-3xl ">
                {tickets
                  .filter((ticket) => ticket.catrgory === category)
                  .map((filteredTicket, _index) => {
                    return (
                      <TicketCard
                        key={_index}
                        ticket={filteredTicket}
                        id={_index}
                      />
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </>
    // <div className="grid  lg:grid-cols-3 text-center mt-6 font-bold p-3 text-3xl ">
    //   <TicketCard />
    //   <TicketCard />
    //   <TicketCard />
    //   <TicketCard />
    // </div>
  );
};
export default Home;
