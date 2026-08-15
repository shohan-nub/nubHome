import {
    deleteUserService,
    getUserByIdService,
    updateUserService,
} from "@/services/user.service";

import { NextRequest, NextResponse } from "next/server";


export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {

        const { id } = await params;

        const userId = Number(id);

        if (Number.isNaN(userId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const user =
            await getUserByIdService(userId);

        return NextResponse.json({
            data: user,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("get user by id error", error);

        return NextResponse.json({
            success: false,
            message: "failed to get user"
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

        const userId = Number(id);

        if (Number.isNaN(userId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const body = await req.json();

        const updatedUser =
            await updateUserService(
                userId,
                body
            );

        return NextResponse.json({
            data: updatedUser,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("update user error", error);

        return NextResponse.json({
            success: false,
            message: "failed to update user"
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

        const userId = Number(id);

        if (Number.isNaN(userId)) {
            return NextResponse.json({
                message: "Invalid id",
                success: false
            }, {
                status: 400
            });
        }

        const deletedUser =
            await deleteUserService(userId);

        return NextResponse.json({
            data: deletedUser,
            success: true
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("delete user error", error);

        return NextResponse.json({
            success: false,
            message: "failed to delete user"
        }, {
            status: 500
        });
    }
}