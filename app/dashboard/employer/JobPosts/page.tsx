"use client";
import {
  Plus,
  Search,
  ChevronDown,
  ClipboardList,
  CheckCircle,
  FileText,
  XCircle,
} from "lucide-react";

interface StatCard {
  label: string;
  value: string;
  icon: React.ReactNode;
  bg: string;
}

interface JobPost {
  title: string;
  dept: string;
  type: string;
  closed: string;
  status: "Draft" | "Active" | "Closed";
  closedCount?: number;
}

const statCards: StatCard[] = [
  {
    label: "Total Posts",
    value: "32",
    icon: <ClipboardList size={20} className="text-indigo-400" />,
    bg: "bg-indigo-200",
  },
  {
    label: "Active",
    value: "08",
    icon: <CheckCircle size={20} className="text-indigo-400" />,
    bg: "bg-indigo-300",
  },
  {
    label: "Applications",
    value: "20",
    icon: <FileText size={20} className="text-indigo-400" />,
    bg: "bg-indigo-400",
  },
  {
    label: "Closed",
    value: "04",
    icon: <XCircle size={20} className="text-white opacity-70" />,
    bg: "bg-indigo-600",
  },
];

const jobs: JobPost[] = [
  { title: "Frontend Developer", dept: "Engineering", type: "Job", closed: "Apr 26, 2024", status: "Draft" },
  { title: "UI/UX Designer", dept: "Design", type: "Internship", closed: "Apr 26, 2024", status: "Active" },
  { title: "Data Analyst", dept: "Engineering", type: "Job", closed: "Apr 26, 2024", status: "Active" },
  { title: "Marketing Intern", dept: "Marketing", type: "Job", closed: "Apr 26, 2024", status: "Closed", closedCount: 210 },
  { title: "QA Engineer", dept: "Engineering", type: "Job", closed: "Apr 26, 2024", status: "Active" },
  { title: "Product Manager", dept: "Management", type: "Job", closed: "Apr 26, 2024", status: "Active" },
];

const statusStyles: Record<JobPost["status"], string> = {
  Active: "text-emerald-600 border-emerald-300 bg-emerald-50",
  Draft: "text-amber-600 border-amber-300 bg-amber-50",
  Closed: "text-red-600 border-red-300 bg-red-50",
};

function StatusBadge({ status }: { status: JobPost["status"] }) {
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-md border ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

const filters = ["Status", "Job Role", "Newest", "This Week"] as const;
const columns = ["Job Title", "Department", "Type", "Closed Date", "Status", "Action"] as const;

export default function JobPostsPage() {
  return (
    <div className="flex-1 bg-[#E9F3FD] min-h-screen overflow-auto">
      {/* Top Filter Bar */}
      <div className="bg-white border-b border-gray-100 px-7 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white w-52">
          <Search size={14} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Posts"
            className="text-sm text-gray-600 bg-transparent outline-none flex-1 placeholder:text-gray-400"
          />
        </div>
        {filters.map((f) => (
          <button
            key={f}
            className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors bg-white"
          >
            {f} <ChevronDown size={14} />
          </button>
        ))}
      </div>

      <div className="p-7">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
            <span>💬</span> Job Posts
          </h1>
          <button className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
            <Plus size={16} />
            Post New Job
          </button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {statCards.map((card, i) => (
            <div key={i} className={`${card.bg} rounded-2xl p-5 flex items-center justify-between`}>
              <div>
                <p className={`text-xs font-medium mb-1 ${i >= 3 ? "text-indigo-100" : "text-indigo-700"}`}>
                  {card.label}
                </p>
                <p className={`text-4xl font-bold ${i >= 3 ? "text-white" : "text-indigo-900"}`}>
                  {card.value}
                </p>
              </div>
              <div>{card.icon}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Job Posts</h2>
            <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              View
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {columns.map((col) => (
                  <th key={col} className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                    <span className="flex items-center gap-1">
                      {col}
                      {col !== "Job Title" && <ChevronDown size={12} />}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{job.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.dept}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.closed}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={job.status} />
                  </td>
                  <td className="px-6 py-4">
                    {job.status === "Closed" ? (
                      <button className="text-xs font-semibold text-red-500 border border-red-200 bg-red-50 px-4 py-1.5 rounded-lg hover:bg-red-100 transition-colors">
                        Closed ({job.closedCount})
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button className="text-xs text-gray-600 border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                          View
                        </button>
                        <button className="text-xs text-gray-600 border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                          Edit
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}