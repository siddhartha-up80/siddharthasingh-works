"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CMSAuthPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple password check
    if (
      password === process.env.NEXT_PUBLIC_CMS_PASSWORD ||
      password === "admin123"
    ) {
      // Store in sessionStorage
      sessionStorage.setItem("cms_auth", "true");
      router.push("/cms/projects");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-light mb-6 text-center text-gray-900 dark:text-white">
          CMS Access
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter CMS password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Access CMS
          </button>
        </form>
        {/* <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
          Default password: admin123
        </p> */}
      </div>
    </div>
  );
}
