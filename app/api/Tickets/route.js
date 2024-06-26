import Ticket from "../../(models)/ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket Created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error in POST", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find({});
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error in GET", error }, { status: 500 });
  }
} 
