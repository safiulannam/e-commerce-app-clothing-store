import connectToDB from "@/database";
import User from "@/models/user";
import { hash } from "bcryptjs";
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

    const { error } = schema.validate({ name, email, password, role });

    if (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: error.details[0].message,
        });
    }

    try {
        const isUserAlreadyExists = await User.findOne({ email });

        if (isUserAlreadyExists) {
            return NextResponse.json({
                success: false,
                message: "Email sudah ada nih. silakan coba dengan email yang berbeda yah.",
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
                    message: "yeeaayy.... Selamat!:) Akun anda berhasil dibuat",
                });
            }
        }
    } catch (error) {
        console.log("Kesalahan saat pendaftaran akun. Silakan coba lagi nanti ya");
        
        return NextResponse.json({
            success: false,
            message: "uppss... ada yang salah! Silakan coba lagi nanti yah",
        });
    }
}
