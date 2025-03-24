import {addOrder} from "../../../lib/actions/order/addOrder";
import {cancelOrder} from "../../../lib/actions/order/cancelOrder";
import {getAllOrders} from "../../../lib/actions/order/getAllOrders";



export async function GET() {
  try{
    const orders =await getAllOrders();
  return  Response.json(orders,{status:200});
  }catch(e){
    return Response.json({message:e.message},{status:500});
  }
  
}
export async function POST(request) {
  try{
    const order = await request.json();
    const newOrder = await addOrder(order);
    return  Response.json(newOrder,{status:201});
  }catch(e){
    return Response.json({message:e.message},{status:500});
  }
 
}

export async function DELETE(request) {
  try{
    const id = request.query.id;
    await cancelOrder(id);
    return Response.end();
  }catch(e){
    return Response.json({message:e.message},{status:500});
  }
 
}
