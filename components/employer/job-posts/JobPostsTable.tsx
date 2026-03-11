"use client";

import { ChevronDown } from "lucide-react";
import JobStatusBadge from "./JobStatusBadge";

interface JobPost {
  title: string;
  dept: string;
  type: string;
  closed: string;
  status: "Draft" | "Active" | "Closed";
  closedCount?: number;
}

interface JobPostsTableProps {
  jobs: JobPost[];
}

const columns = ["Job Title", "Department", "Type", "Closed Date", "Status", "Action"] as const;

export default function JobPostsTable({ jobs }: JobPostsTableProps) {
  return (
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
            {columns.map((column) => (
              <th key={column} className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                <span className="flex items-center gap-1">
                  {column}
                  {column !== "Job Title" && <ChevronDown size={12} />}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm font-semibold text-gray-800">{job.title}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{job.dept}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{job.type}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{job.closed}</td>
              <td className="px-6 py-4">
                <JobStatusBadge status={job.status} />
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
  );
}
