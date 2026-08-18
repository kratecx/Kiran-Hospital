"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Trash2, Edit3, ShieldAlert, Layers } from "lucide-react";

export default function AdminDashboardContent() {
  const formRef = useRef(null);

  const [activeTab, setActiveTab] = useState("admissionforms");
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [admissionForm, setAdmissionForm] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    phone: "",
    cnic: "",
    dob: "",
    gender: "Male",
    course: "General Nursing",
    qualification: "",
    address: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    fatherName: "",
    email: "",
    courseAdmission: "General Nursing",
  });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const endpoint = activeTab === "admissionforms" ? "/api/admissionforms" : "/api/contactforms";
      const res = await fetch(endpoint);
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to load data");
      setDataList(result.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = activeTab === "admissionforms" ? "/api/admissionforms" : "/api/contactforms";
      const method = editingId ? "PUT" : "POST";
      const payload = activeTab === "admissionforms" 
        ? (editingId ? { id: editingId, ...admissionForm } : admissionForm)
        : (editingId ? { id: editingId, ...contactForm } : contactForm);

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error);

      alert(editingId ? "Record updated successfully!" : "Record created successfully!");
      resetForm();
      fetchData();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    if (activeTab === "admissionforms") {
      setAdmissionForm({
        fullName: item.full_name || item.name || "",
        fatherName: item.father_name || "",
        email: item.email || "",
        phone: item.phone || "",
        cnic: item.cnic || "",
        dob: item.dob ? item.dob.split("T")[0] : "",
        gender: item.gender || "Male",
        course: item.course || item.course_admission || "General Nursing",
        qualification: item.qualification || "",
        address: item.address || "",
      });
    } else {
      setContactForm({
        name: item.name || "",
        fatherName: item.father_name || "",
        email: item.email || "",
        courseAdmission: item.course_admission || "General Nursing",
      });
    }

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this record?")) return;
    try {
      const endpoint = activeTab === "admissionforms" ? "/api/admissionforms" : "/api/contactforms";
      const res = await fetch(`${endpoint}?id=${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      fetchData();
    } catch (err) {
      alert(err.message);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setAdmissionForm({
      fullName: "", fatherName: "", email: "", phone: "", cnic: "", dob: "", gender: "Male", course: "General Nursing", qualification: "", address: "",
    });
    setContactForm({
      name: "", fatherName: "", email: "", courseAdmission: "General Nursing",
    });
  };

  return (
    <div className="min-h-screen bg-[#e2e3dd] text-[#1c1c1c] font-sans py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#2563eb] selection:text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header & Tabs */}
        <div className="bg-[#E8E4DA] border border-[#d6d3cb] p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#2563eb]">Secure Administration</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1c1c1c]">Unified Admin Panel</h1>
            <p className="text-xs text-[#555555] font-medium mt-1">
              Manage database records for <code className="bg-[#EFECE6] border border-[#d6d3cb] px-2 py-0.5 rounded text-[#2563eb]">admissionforms</code> & <code className="bg-[#EFECE6] border border-[#d6d3cb] px-2 py-0.5 rounded text-[#2563eb]">contactforms</code>
            </p>
          </div>
          
          <div className="flex bg-[#EFECE6] p-1.5 rounded-2xl border border-[#d6d3cb] shadow-inner">
            <button
              onClick={() => { setActiveTab("admissionforms"); resetForm(); }}
              className={`px-5 py-2.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
                activeTab === "admissionforms" ? "bg-[#2563eb] text-white shadow-md" : "text-[#555555] hover:text-[#1c1c1c]"
              }`}
            >
              Admission Forms
            </button>
            <button
              onClick={() => { setActiveTab("contactforms"); resetForm(); }}
              className={`px-5 py-2.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
                activeTab === "contactforms" ? "bg-[#2563eb] text-white shadow-md" : "text-[#555555] hover:text-[#1c1c1c]"
              }`}
            >
              Contact Forms
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div ref={formRef} className="bg-[#F7F5F0] border border-[#d6d3cb] p-8 sm:p-10 rounded-3xl shadow-xl scroll-mt-8">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#1c1c1c]">
                {editingId ? `Edit Record (#${editingId})` : `Add New Entry to ${activeTab}`}
              </h2>
              <p className="text-xs text-[#555555] font-medium mt-0.5">
                {editingId ? "Modify the fields below to update the system record." : "Fill out the fields below to push a new entry into the backend."}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === "admissionforms" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Full Name *</label>
                  <input type="text" name="fullName" required value={admissionForm.fullName} onChange={(e) => setAdmissionForm({...admissionForm, fullName: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Father's Name *</label>
                  <input type="text" name="fatherName" required value={admissionForm.fatherName} onChange={(e) => setAdmissionForm({...admissionForm, fatherName: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="Father's Name" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Email Address *</label>
                  <input type="email" name="email" required value={admissionForm.email} onChange={(e) => setAdmissionForm({...admissionForm, email: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="Email" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Phone Number *</label>
                  <input type="tel" name="phone" required value={admissionForm.phone} onChange={(e) => setAdmissionForm({...admissionForm, phone: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="Phone" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">CNIC / B-Form *</label>
                  <input type="text" name="cnic" required value={admissionForm.cnic} onChange={(e) => setAdmissionForm({...admissionForm, cnic: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="CNIC" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Date of Birth *</label>
                  <input type="date" name="dob" required value={admissionForm.dob} onChange={(e) => setAdmissionForm({...admissionForm, dob: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] focus:outline-none focus:border-[#2563eb] text-xs font-medium" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Gender *</label>
                  <select name="gender" value={admissionForm.gender} onChange={(e) => setAdmissionForm({...admissionForm, gender: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] focus:outline-none focus:border-[#2563eb] text-xs font-medium cursor-pointer">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Select Course *</label>
                  <select name="course" value={admissionForm.course} onChange={(e) => setAdmissionForm({...admissionForm, course: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] focus:outline-none focus:border-[#2563eb] text-xs font-semibold cursor-pointer">
                    <option value="General Nursing">General Nursing</option>
                    <option value="BSN (Post RN)">BSN (Post RN)</option>
                    <option value="Certified Nursing Assistant">Certified Nursing Assistant</option>
                    <option value="Lady Health Visitor">Lady Health Visitor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Last Academic Qualification *</label>
                  <input type="text" name="qualification" required value={admissionForm.qualification} onChange={(e) => setAdmissionForm({...admissionForm, qualification: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="Qualification" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Residential Address *</label>
                  <input type="text" name="address" required value={admissionForm.address} onChange={(e) => setAdmissionForm({...admissionForm, address: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="Address" />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Name *</label>
                  <input type="text" name="name" required value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="Name" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Father Name *</label>
                  <input type="text" name="fatherName" required value={contactForm.fatherName} onChange={(e) => setContactForm({...contactForm, fatherName: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="Father Name" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Email *</label>
                  <input type="email" name="email" required value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] text-xs font-medium" placeholder="Email" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">Course Admission *</label>
                  <select name="courseAdmission" value={contactForm.courseAdmission} onChange={(e) => setContactForm({...contactForm, courseAdmission: e.target.value})} className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] focus:outline-none focus:border-[#2563eb] text-xs font-semibold cursor-pointer">
                    <option value="General Nursing">General Nursing</option>
                    <option value="BSN (Post RN)">BSN (Post RN)</option>
                    <option value="Certified Nursing Assistant">Certified Nursing Assistant</option>
                    <option value="Lady Health Visitor">Lady Health Visitor</option>
                  </select>
                </div>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="group flex-1 w-full py-4 px-6 bg-transparent border border-[#b8b4ab] hover:border-[#2563eb] rounded-xl flex items-center justify-between text-[#1c1c1c] hover:text-[#2563eb] transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span className="font-extrabold text-xs uppercase tracking-widest">
                  {editingId ? "Update Record 💾" : "Submit New Record ➕"}
                </span>
                <div className="w-9 h-9 rounded-lg bg-[#2563eb] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 font-bold" />
                </div>
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto py-4 px-6 bg-[#EFECE6] border border-[#d6d3cb] hover:border-red-500 text-red-600 font-extrabold rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer shadow-sm text-center"
                >
                  Cancel Edit ❌
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Data Table */}
        <div className="bg-[#F7F5F0] border border-[#d6d3cb] p-8 sm:p-10 rounded-3xl shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#1c1c1c]">
              Entries in <span className="text-[#2563eb]">{activeTab}</span> ({dataList.length})
            </h2>
          </div>

          {loading ? (
            <p className="text-[#555555] text-xs font-medium py-6 text-center">Loading entries...</p>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl text-xs font-bold shadow-sm flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" /> Error: {error}
            </div>
          ) : dataList.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-[#d6d3cb] rounded-2xl">
              <Layers className="w-8 h-8 text-[#888888] mx-auto mb-2" />
              <p className="text-xs font-bold text-[#555555] uppercase tracking-wider">No records found in this table.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#d6d3cb] text-[#555555] font-extrabold uppercase tracking-widest bg-[#EFECE6]">
                    <th className="p-3.5">Name</th>
                    <th className="p-3.5">Father Name</th>
                    <th className="p-3.5">Email</th>
                    <th className="p-3.5">{activeTab === "admissionforms" ? "Phone & Course" : "Course Admission"}</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d6d3cb]/60 font-medium text-[#1c1c1c]">
                  {dataList.map((item) => (
                    <tr key={item.id} className="hover:bg-[#EFECE6]/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#1c1c1c]">{item.full_name || item.name}</td>
                      <td className="p-3.5 text-[#555555]">{item.father_name}</td>
                      <td className="p-3.5 text-[#555555]">{item.email}</td>
                      <td className="p-3.5 text-[#555555]">
                        {activeTab === "admissionforms" ? (
                          <div className="space-y-0.5">
                            <span className="block font-bold text-[#1c1c1c]">{item.course || item.course_admission}</span>
                            <span className="text-[10px] text-[#777777]">Ph: {item.phone}</span>
                          </div>
                        ) : (
                          item.course_admission
                        )}
                      </td>
                      <td className="p-3.5 text-right">
                        <div className="inline-flex items-center gap-2">
                          <button 
                            onClick={() => handleEdit(item)} 
                            className="px-3 py-1.5 bg-[#EFECE6] border border-[#d6d3cb] hover:border-[#2563eb] text-[#1c1c1c] hover:text-[#2563eb] font-extrabold rounded-xl text-[10px] uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-1"
                          >
                            <Edit3 className="w-3 h-3" /> Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)} 
                            className="px-3 py-1.5 bg-red-50 border border-red-200 hover:bg-red-100 text-red-700 font-extrabold rounded-xl text-[10px] uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-1"
                          >
                            <Trash2 className="w-3 h-3" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}