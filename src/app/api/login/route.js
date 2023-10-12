import connectToDB from "@/database";
import User from "@/models/user";
import { compare } from "bcryptjs";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
    await connectToDB();

    const { email, password } = await req.json();
    
    const { error } = schema.validate({ email, password });

    if (error) {
        return NextResponse.json({
            success: false,
            message: error.details[0].message,
        });
    }

    try {
        const checkUser = await User.findOne({ email });

        if (!checkUser) {
            return NextResponse.json({
                success: false,
                message:
                    "Hai.. Akun ini tidak ada dengan email ini. Coba isi email dengan benar ya..",
            });
        }

        const checkPassword = await compare(password, checkUser.password);
        if (!checkPassword) {
            return NextResponse.json({
                success: false,
                message: "upps password kamu salah nih.. Isi dengan benar ya..",
            });
        }

        const token = jwt.sign(
            {
                id: checkUser._id,
                email: checkUser?.email,
                role: checkUser?.role,
            },
            "default_secret_key",
            { expiresIn: "id" }
        );

        const finalData = {
            token,
            user: {
                email: checkUser.email,
                name: checkUser.name,
                _id: checkUser._id,
                role: checkUser.role,
            },
        };

        return NextResponse.json({
            success: true,
            message: "yeeaayy kamu berhasil login..:)",
            finalData,
        });
    } catch (e) {
        console.log(
            "hmm sepertinya ada yang salah saat login. Silakan coba lagi nanti yah"
        );
        return NextResponse.json({
            success: false,
            message: "uppsss....Ada yang salah! Silakan coba lagi nanti yah",
        });
    }
}
