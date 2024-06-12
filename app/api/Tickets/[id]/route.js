import Ticket from "../../../(models)/ticket"
import { NextResponse } from "next/server"

export async function GET(req,{params}) {
    try {
        const {id} = params
       const res =  await Ticket.findOne({_id:id})
        return NextResponse.json(res,{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error in GET",error},{status:500})
    }
}
export async function PUT(req,{params}) {
    try {
        const {id} = params
        const body = await req.json()
        const ticketdata = body.formData
       const updateTicket = await Ticket.findByIdAndUpdate(id,{
        ...ticketdata
       })
        return NextResponse.json({message:"Ticket Updated"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error in Update",error},{status:500})
    }
}
export async function DELETE(req,{params}) {
    try {
        const {id} = params
        await Ticket.findByIdAndDelete(id)
       
        return NextResponse.json({message:"Ticket Deleted"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error in DELETE",error},{status:500})
    }
}
