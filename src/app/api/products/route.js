import {getAllProducts} from "../../../lib/actions/product/getAllProducts";
import {deleteProduct} from "../../../lib/actions/product/deleteProduct";
import {addProduct} from "../../../lib/actions/product/addProduct";
import {editProduct} from "../../../lib/actions/product/editProdict";



export async function GET() {
  try{
    const products =await getAllProducts();
  return  Response.json(products,{status:200});
  }catch(e){
    return Response.json({message:e.message},{status:500});
  }
  
}
export async function POST(request) {
  try{
    const product = await request.json();
    const newProduct = await addProduct(product);
    return  Response.json(newProduct,{status:201});
  }catch(e){
    return Response.json({message:e.message},{status:500});
  }
 
}
export async function PUT(request) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const id = +searchParams.get('id');

    // Extract updated product data from the request body
    const { updatedProduct } = await request.json();

    // Call the editProduct function with the id and updated product data
    const result = await editProduct(id, updatedProduct);

    return Response.json(result, { status: 200 });
  } catch (e) {
    return Response.json({ message: e.message }, { status: 500 });
  }

}
export async function DELETE(request) {
  try{
    const { searchParams } = new URL(request.url);
    const id = +searchParams.get('id');
    await deleteProduct(id);
    return Response.json({message:"Product deleted successfully"},{status:200});
  }catch(e){
    return Response.json({message:e.message},{status:500});
  }
 
}
