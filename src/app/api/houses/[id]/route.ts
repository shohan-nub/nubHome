import { deleteHousesService, getbyIdService, updateHouseService } from "@/services/house.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,
    {params}:{params:Promise<{id:string}>}
) {
    try{
        const {id} =await params;
        const hId=Number(id);
        
        if(Number.isNaN(hId)){
          return  NextResponse.json({
                message:"Invalid id ",
                success:false
            },{status:400})
        };

        const houseId=await getbyIdService(hId);
         
        return NextResponse.json({
            data: houseId,
            success:true
        },{
            status:200
        })
    }catch(error){
        console.log(error);
        console.error("get house by id",error);

        return NextResponse.json({
            success:false,
            message: " get userId house false"

        },{status:500})
    }
    
};

export async function PATCH(req:NextRequest,
    {params}:{params:Promise<{id:string}>}
) {
    try{
        const {id} =await params;
        const hId=Number(id);
        
        if(Number.isNaN(hId)){
            NextResponse.json({
                message:"Invalid id ",
                success:false
            },{status:400})
        };
        
        const body= await req.json();
        const houseId=await updateHouseService(hId,body);
         
        return NextResponse.json({
            data: houseId,
            success:true
        },{
            status:200
        })
    }catch(error){
        console.log(error);
        console.error("get house by update",error);

        return NextResponse.json({
            success:false,
            message: " get userid house update false"

        },{status:500})
    }
    
};

export async function DELETE(req:NextRequest,
    {params}:{params:Promise<{id:string}>}
) {
    try{
        const {id} =await params;
        const hId=Number(id);
        
        if(Number.isNaN(hId)){
            NextResponse.json({
                message:"Invalid id ",
                success:false
            },{status:400})
        };

        const houseId=await deleteHousesService(hId);
         
        return NextResponse.json({
            data: houseId,
            success:true
        },{
            status:200
        })
    }catch(error){
        console.log(error);
        console.error("get house by id",error);

        return NextResponse.json({
            success:false,
            message: " get userId house false"

        },{status:500})
    }
    
}