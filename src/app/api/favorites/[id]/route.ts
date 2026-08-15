import {
    deleteFavoriteService,
} from "@/services/favorite.service";

import { NextRequest, NextResponse } from "next/server";


export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {

        const { id } = await params;

        const favoriteId = Number(id);

        if (Number.isNaN(favoriteId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const deletedFavorite =
            await deleteFavoriteService(favoriteId);

        return NextResponse.json({
            data: deletedFavorite,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("delete favorite error", error);

        return NextResponse.json({
            success: false,
            message: "failed to delete favorite"
        }, {
            status: 500
        });
    }
}