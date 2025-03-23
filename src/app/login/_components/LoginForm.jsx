// src/app/login/_components/LoginForm.js

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/auth/auth";


export default function LoginForm() {
   
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/mobile-phone.png')" }}
            dir="rtl"
        >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">صباح الخير</h2>
                <form
                  action={login}
                    className="space-y-4"
                >
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            موبيل
                        </label>
                        <Input
                            type="tel" // Correct type for phone number
                            id="phone"
                            name="phone" // Ensure the name attribute is set
                            placeholder="لو سمحت اكتب رقم موبيل"
                            className="mt-1 w-full"
                        />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        ابداء الشيفت
                    </Button>
                </form>
            </div>
        </div>
    );
}