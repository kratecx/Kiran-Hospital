"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const [secretKey, setSecretKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secretKey }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Invalid Secret Key");
      }

      // Redirect to main admin panel
      router.push("/admin/manage");
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e2e3dd] text-[#1c1c1c] font-sans flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-[#F7F5F0] border border-[#d6d3cb] rounded-3xl p-8 shadow-xl flex flex-col">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-[#2563eb] text-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-black uppercase tracking-tight">Admin Authentication</h1>
          <p className="text-xs text-[#555555] mt-1 font-medium">Enter your ADMIN_SECRET_KEY to proceed.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs font-bold">
              ⚠️ {error}
            </div>
          )}

          <div>
            <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
              Secret Key <span className="text-[#2563eb]">*</span>
            </label>
            <input
              type="password"
              required
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              placeholder="Enter secret key..."
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group w-full py-4 px-6 bg-transparent border border-[#b8b4ab] hover:border-[#2563eb] rounded-xl flex items-center justify-between text-[#1c1c1c] hover:text-[#2563eb] transition-all cursor-pointer disabled:opacity-50"
          >
            <span className="font-extrabold text-xs uppercase tracking-widest">
              {loading ? "Verifying..." : "Access Admin Panel"}
            </span>
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}