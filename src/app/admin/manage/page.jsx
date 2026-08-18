import { Suspense } from "react";
import AdminDashboardContent from "@/components/AdminDashboardContent"; // Adjust path if needed, or keep it inline below

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#e2e3dd] flex items-center justify-center text-xs font-bold uppercase tracking-widest text-[#555555]">
        Loading Admin Panel...
      </div>
    }>
      <AdminDashboardContent />
    </Suspense>
  );
}