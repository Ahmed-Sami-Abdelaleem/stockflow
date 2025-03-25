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
    try {
        const user = await req.json();
        
        if (!user?.id) {
          return Response.json({ message: "User ID is required" }, { status: 400 });
        }
        
        const res = await editUser(user);
        return Response.json(res, { status: 200 });
      } catch(e) {
        return Response.json({ message: e.message }, { status: 500 });
      }
}

export async function DELETE(req){
    try {
        const { id } = await req.json(); // Parse the body first
        if (!id) {
          return Response.json({ message: "User ID is required" }, { status: 400 });
        }
        const user = await deleteUser(id);
        return Response.json(user, { status: 200 });
      } catch(e) {
        return Response.json({ message: e.message }, { status: 500 });
      }
}