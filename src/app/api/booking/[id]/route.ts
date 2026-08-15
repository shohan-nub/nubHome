
import { deleteBookingService, getBookingByIdService, updateBookingService } from "@/services/booking.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,
    {params}:{params:Promise<{id:string}>}) {
        try{
            const {id}= await params;
            const bookingId=Number(id);

            if(Number.isNaN(bookingId)){
                return NextResponse.json({
                    success:false,
                    message:"invalid booking id "
                },{
                    status:400
                });}
        
         const singleBooking=await getBookingByIdService(bookingId);
         return NextResponse.json({
            data:singleBooking,
            success:true,
            message:"succesfull"
         },{
            status:200
         })

        }catch(error){
            console.log(error);

            return NextResponse.json({
                success:false,
                message:"booking single id api error"
            },{
                status:500
            })

        }
    
};




export async function DELETE(req:NextRequest,
    {params}:{params:Promise<{id:string}>}) {
        try{
            const {id}= await params;
            const bookingId=Number(id);

            if(Number.isNaN(bookingId)){
                return NextResponse.json({
                    success:false,
                    message:"invalid booking id "
                },{
                    status:400
                });}
        
         const deleteBooking=await deleteBookingService(bookingId);
         return NextResponse.json({
            data:deleteBooking,
            success:true,
            message:"succesfull"
         },{
            status:200
         })

        }catch(error){
            console.log(error);

            return NextResponse.json({
                success:false,
                message:"booking delete api error"
            },{
                status:500
            })

        }
    
};




export async function PATCH(req:NextRequest,
    {params}:{params:Promise<{id:string}>}) {
        try{
            const {id}= await params;
            const bookingId=Number(id);
            const body=await req.json()

            if(Number.isNaN(bookingId)){
                return NextResponse.json({
                    success:false,
                    message:"invalid booking id "
                },{
                    status:400
                });}
        
         const updateBooking=await updateBookingService(bookingId,body);

         return NextResponse.json({
            data:updateBooking,
            success:true,
            message:"succesfull"
         },{
            status:200
         })

        }catch(error){
            console.log(error);

            return NextResponse.json({
                success:false,
                message:"booking update api error"
            },{
                status:500
            })

        }
    
};


