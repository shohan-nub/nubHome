import {
    createHouseImageService,
    getAllHouseImagesService,
} from "@/services/houseImage.service";

import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {

        const images = await getAllHouseImagesService();

        return NextResponse.json({
            success: true,
            data: images
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("get house images error", error);

        return NextResponse.json({
            success: false,
            message: "failed to fetch house images"
        }, {
            status: 500
        });
    }
}


export async function POST(req: NextRequest) {
    try {

        const body = await req.json();

        const newImage =
            await createHouseImageService(body);

        return NextResponse.json({
            data: newImage,
            success: true
        }, {
            status: 201
        });

    } catch (error) {

        console.log(error);
        console.error("house image post function error", error);

        return NextResponse.json({
            success: false,
            message: "failed to create house image"
        }, {
            status: 500
        });
    }
}