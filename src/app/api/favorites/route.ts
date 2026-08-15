import {
    createFavoriteService,
    getAllFavoritesService,
} from "@/services/favorite.service";

import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {

        const favorites = await getAllFavoritesService();

        return NextResponse.json({
            success: true,
            data: favorites
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("get favorites error", error);

        return NextResponse.json({
            success: false,
            message: "failed to fetch favorites"
        }, {
            status: 500
        });
    }
}


export async function POST(req: NextRequest) {
    try {

        const body = await req.json();

        const newFavorite =
            await createFavoriteService(body);

        return NextResponse.json({
            data: newFavorite,
            success: true
        }, {
            status: 201
        });

    } catch (error) {

        console.log(error);
        console.error("favorite post function error", error);

        return NextResponse.json({
            success: false,
            message: "failed to create favorite"
        }, {
            status: 500
        });
    }
}