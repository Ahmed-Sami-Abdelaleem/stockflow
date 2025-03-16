import { addUser } from "@/lib/actions/user/addUser";

export async function POST(req) {
    try {
        const data = await req.json();
     
        const user = await addUser(data);
        return Response.json(user, { status: 201 });
    } catch (e) {
        return Response.json({ message: e.message }, { status: 500 });
    }
}