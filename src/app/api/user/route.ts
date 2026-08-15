import {
    createUserService,
    getAllUsersService,
} from "@/services/user.service";

import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {

        const users = await getAllUsersService();

        return NextResponse.json({
            success: true,
            data: users
        }, {
            status: 200
        });

    } catch (error) {

        console.log(error);
        console.error("get users error", error);

        return NextResponse.json({
            success: false,
            message: "failed to fetch users"
        }, {
            status: 500
        });
    }
}


export async function POST(req: NextRequest) {
    try {

        const body = await req.json();

        const newUser =
            await createUserService(body);

        return NextResponse.json({
            data: newUser,
            success: true
        }, {
            status: 201
        });

    } catch (error) {

        console.log(error);
        console.error("user post function error", error);

        return NextResponse.json({
            success: false,
            message: "failed to create user"
        }, {
            status: 500
        });
    }
}