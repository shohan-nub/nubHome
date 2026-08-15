import {
    deleteHouseImageService,
    getHouseImageByIdService,
    updateHouseImageService,
} from "@/services/houseImage.service";

import { NextRequest, NextResponse } from "next/server";


export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {

        const { id } = await params;

        const imageId = Number(id);

        if (Number.isNaN(imageId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const image =
            await getHouseImageByIdService(imageId);

        return NextResponse.json({
            data: image,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("get house image by id error", error);

        return NextResponse.json({
            success: false,
            message: "failed to get house image"
        }, {
            status: 500
        });
    }
}


export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {

        const { id } = await params;

        const imageId = Number(id);

        if (Number.isNaN(imageId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const body = await req.json();

        const updatedImage =
            await updateHouseImageService(
                imageId,
                body
            );

        return NextResponse.json({
            data: updatedImage,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("update house image error", error);

        return NextResponse.json({
            success: false,
            message: "failed to update house image"
        }, {
            status: 500
        });
    }
}


export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {

        const { id } = await params;

        const imageId = Number(id);

        if (Number.isNaN(imageId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const deletedImage =
            await deleteHouseImageService(imageId);

        return NextResponse.json({
            data: deletedImage,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("delete house image error", error);

        return NextResponse.json({
            success: false,
            message: "failed to delete house image"
        }, {
            status: 500
        });
    }
}