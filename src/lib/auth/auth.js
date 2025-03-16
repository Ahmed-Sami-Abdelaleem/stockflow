
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
const key = new TextEncoder().encode(secretKey);





export async function login(formData) {
  "use server"; // This is a server action

  // Extract the phone number from the form data
  const phone = formData.get("phone");

  // Call the API route to check if the user exists
  const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
  });

  // Handle the API response
  if (!response.ok) {
     console.log(response);
      throw new Error( "Login failed");
  }

  const user = await response.json();

 
  cookies().set("session", JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  redirect("/");
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  try {
    const cookieStore = await cookies(); // Await the cookies function
    const session = cookieStore.get("session")?.value;
    if (!session) return null;
    return JSON.parse(session); // Parse the session value if it's a JSON string
  } catch (error) {
    console.log(error);
    return null;
  }
}

