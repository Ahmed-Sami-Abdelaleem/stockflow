// src/app/api/users/login/route.js
import { userExisting } from "@/lib/actions/user/userExisting";

export async function POST(req) {
    try {
        const { phone } = await req.json(); 
        
        const user = await userExisting(phone);

        if (!user) {
            return Response.json({ message: "User not found" }, { status: 404 });
        }
       
        return Response.json(user, { status: 200 });
    } catch (e) {
        return Response.json({ message: e.message }, { status: 500 });
    }
}