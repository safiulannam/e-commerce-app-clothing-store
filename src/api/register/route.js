import connectToDB from "@/database";
import Joi from "joi";
import { NextResponse } from "next/server";

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
    await connectToDB();

    const { name, email, password, role } = await req.json();

    //validasi schma
    const { error } = schema.validate({ name, email, password, role });

    if (error) {
        return NextResponse.json({
            success: false,
            message: email.details[0],
        });
    }
    
    try {
        const isUserAlreadyExists = await User.findOne({ email });
        if (isUserAlreadyExists) {
            return NextResponse.json({
                success: false,
                message: "Email sudah ada. silakan coba dengan email yang berbeda.",
            });
        } else {
            const hashPassword = await hash(password, 12);

            const newlyCreatedUser = await User.create({
                name,
                email,
                password: hashPassword,
                role,
            });

            if (newlyCreatedUser) {
                return NextResponse.json({
                    success: true,
                    message: "Selamat!:) Akun anda berhasil dibuat",
                });
            }
        }
    } catch (error) {
        console.log("Error is new user registration");
        return NextResponse.json({
            success: false,
            message: "Ada yang salah! Silakan coba lagi nanti",
        });
    }
}
