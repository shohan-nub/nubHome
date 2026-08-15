import {
    deleteCategoryService,
    getCategoryByIdService,
    updateCategoryService
} from "@/services/category.service";

import { NextRequest, NextResponse } from "next/server";


export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {

        const { id } = await params;

        const categoryId = Number(id);

        if (Number.isNaN(categoryId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const category =
            await getCategoryByIdService(categoryId);

        return NextResponse.json({
            data: category,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("get category by id error", error);

        return NextResponse.json({
            success: false,
            message: "failed to get category"
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

        const categoryId = Number(id);

        if (Number.isNaN(categoryId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const body = await req.json();

        const updatedCategory =
            await updateCategoryService(
                categoryId,
                body
            );

        return NextResponse.json({
            data: updatedCategory,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("update category error", error);

        return NextResponse.json({
            success: false,
            message: "failed to update category"
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

        const categoryId = Number(id);

        if (Number.isNaN(categoryId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const deletedCategory =
            await deleteCategoryService(categoryId);

        return NextResponse.json({
            data: deletedCategory,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("delete category error", error);

        return NextResponse.json({
            success: false,
            message: "failed to delete category"
        }, {
            status: 500
        });
    }
};