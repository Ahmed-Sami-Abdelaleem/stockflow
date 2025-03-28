"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/auth/auth";
import { useActionState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function LoginForm() {
  const router = useRouter(); // Initialize useRouter()
  const [state, formAction] = useActionState(async (prevState, formData) => {
    const result = await login(prevState, formData);

    if (!result.error) {
      router.push("/"); // Navigate to home after successful login
    }

    return result;
  }, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" dir="rtl">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">صباح الخير</h2>
        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">موبيل</label>
            <Input type="tel" id="phone" name="phone" placeholder="لو سمحت اكتب رقم موبيل" className="mt-1 w-full" />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            ابداء الشيفت
          </Button>

          {state?.error && <p className="text-red-500 text-sm text-center">{state.error}</p>}
        </form>
      </div>
    </div>
  );
}
