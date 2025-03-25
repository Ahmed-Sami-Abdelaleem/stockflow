"use client";

import React from "react";
import Link from "next/link";
import Cart from "./cart";
import { useRouter } from "next/navigation";

const RightSection = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/users/logout", { method: "POST" });
    router.refresh(); // Refresh the page to clear the session
  };

  return (
    <div className="lg:w-1/4 p-4 bg-gray-800 h-full fixed top-0 right-0 w-full border-t border-gray-200 z-20 flex flex-col justify-between">
      {/* Top Section */}
      <div className="lg:flex flex-col gap-4 hidden">
        <Link
          href="/"
          className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          المبيعات
        </Link>
        <Link
          href="/inventory"
          className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          المخزن
        </Link>
        <Cart />
      </div>

      {/* Logout Button for Large Screens */}
      <div className="hidden lg:block mt-auto">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md transition"
        >
          تسجيل الخروج 🚪
        </button>
      </div>

      {/* Bottom Navigation Bar for Small Screens */}
      <div className="fixed bottom-0 left-0 w-full lg:hidden bg-white border-t border-gray-200">
        <div className="flex justify-around items-center py-2">
          <Link href="/" className="text-blue-500">مبيعات</Link>
          <Link href="/inventory" className="text-green-500">مخزن</Link>
          <button
            onClick={handleLogout}
            className="text-red-500 font-semibold"
          >
            تسجيل الخروج
          </button>
        </div>
      </div>

      {/* Cart Icon for Small Screens */}
      <div className="fixed bottom-16 left-0 w-full lg:hidden bg-white shadow-md">
        <div className="flex justify-center items-center py-2">
          <span>🛒 Cart</span>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
