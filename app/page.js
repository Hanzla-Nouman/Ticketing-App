import TicketCard from "./(components)/TicketCard";


export default function Home() {
  return (
   <div className='grid  lg:grid-cols-3 text-center mt-6 font-bold p-3 text-3xl '>
    
 
    <TicketCard/>
    <TicketCard/>
    <TicketCard/>
    <TicketCard/>
   </div>
  )
}
