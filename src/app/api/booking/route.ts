
import { getAllBookingsService, getBookingByIdService } from "@/services/booking.service";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try{
        const allBooking= await getAllBookingsService();

        return NextResponse.json({
            data:allBooking,
            success:true

        },{
            status:200
        })
    }catch(error){
        console.log(error);

        return NextResponse.json({
            success:false,
            message:"booking get api problem "
        },{
            status:500
        });
        
    }
    
};

export async function POST(req:NextRequest) {
    try{
        const body=await req.json();
        const newBooking=await getBookingByIdService(body);

        return NextResponse.json({
            data:newBooking,
            success:true,
            message:"succesfull booking post done"
        },{
            status:201
        })
    }catch(error){
        console.log(error);

        return NextResponse.json({
            success:false,
            message:" booking api problem"
        },{status:500})
    }
    
};
