import { getAllUsers } from "../../../lib/actions/user/getAllUsers";
import { addUser } from "../../../lib/actions/user/addUser"
import { editUser } from "../../../lib/actions/user/editUser";
import { deleteUser } from "../../../lib/actions/user/deleteUser";
export async function GET(){
try{
    const users= await getAllUsers();
    return Response.json(users,{status:200});
}catch(e){
 return Response.json({message:e.message},{status:500});
}
}



export async function PUT(req){
    try{
        const user = await editUser(req.body);
        return Response.json(user,{status:200});
    }catch(e){
        return Response.json({message:e.message},{status:500});
    }
}

export async function DELETE(req){
    try{
        const user = await deleteUser(req.body.id);
        return Response.json(user,{status:200});
    }catch(e){
        return Response.json({message:e.message},{status:500});
    }
}