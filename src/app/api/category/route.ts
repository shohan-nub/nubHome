import {
    createCategoryService,
    getAllCategoriesService
} from "@/services/category.service";

import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {

        const categories = await getAllCategoriesService();

        return NextResponse.json({
            success: true,
            data: categories
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("get categories error", error);

        return NextResponse.json({
            success: false,
            message: "failed to fetch categories"
        }, {
            status: 500
        });
    }
}


export async function POST(req: NextRequest) {
    try {

        const body = await req.json();

        const newCategory =
            await createCategoryService(body);

        return NextResponse.json({
            data: newCategory,
            success: true
        }, {
            status: 201
        });

    } catch (error) {

        console.log(error);
        console.error("Category post function error", error);

        return NextResponse.json({
            success: false,
            message: "failed to create category"
        }, {
            status: 500
        });
    }
}