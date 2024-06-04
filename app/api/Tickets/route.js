// import { Ticket } from "../../(models)/ticket";
import { Ticket } from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        console.log("pohnch gyi hai") 
        const body = await req.json()
        console.log("pohnch gyi hai 2") 
        const ticketData = body.formData; 
        console.log("pohnch gyi hai 3") 
        await  Ticket.create(ticketData)
        console.log("pohnch gyi hai neechay")

        return NextResponse.json({message:"Ticket Created"},{status: 200})
    } catch (error) {
        return NextResponse.json({message:"Error",error},{status: 500})

    }
}