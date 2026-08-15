import { houses } from "@/db/schemas";

import { createHouseService, getAllHouses } from "@/services/house.service";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try{
        const houses=await getAllHouses();

        return NextResponse.json({
            success:true,
            data:houses
        },{ status:200 });

        }catch(error){
         console.log(error);
         console.error("get houses error",error);

        return NextResponse.json({
            success:false,
            message:"failed to fetch"},{ status:500}) 
        }
};

export async function POST(req:NextRequest) {
    try{
        const body=await req.json();
        const newHouse=await createHouseService(body);

       return NextResponse.json({data:newHouse,success:true},
            {status:201}
        );

    }catch(error){
        console.log(error);
        console.error("House post fuction error ",error)

       return NextResponse.json({success:false},
            {status:500}
        )
    }  
};



