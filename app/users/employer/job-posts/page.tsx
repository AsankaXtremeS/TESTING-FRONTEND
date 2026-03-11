"use client";

import { Plus, MessageSquareText } from "lucide-react";
import { useState, useMemo } from "react";
import FilterBar, { FilterValues } from "@/components/employer/job-posts/FilterBar";
import StatsRow from "@/components/employer/job-posts/StatsRow";
import JobPostsTable from "@/components/employer/job-posts/JobPostsTable";

interface JobPost {
  title: string;
  dept: string;
  type: string;
  closed: string;
  status: "Draft" | "Active" | "Closed";
  closedCount?: number;
}

const jobs: JobPost[] = [
  { title: "Frontend Developer", dept: "Engineering", type: "Job", closed: "Apr 26, 2024", status: "Draft" },
  { title: "UI/UX Designer", dept: "Design", type: "Internship", closed: "Apr 26, 2024", status: "Active" },
  { title: "Data Analyst", dept: "Engineering", type: "Job", closed: "Apr 26, 2024", status: "Active" },
  { title: "Marketing Intern", dept: "Marketing", type: "Job", closed: "Apr 26, 2024", status: "Closed", closedCount: 210 },
  { title: "QA Engineer", dept: "Engineering", type: "Job", closed: "Apr 26, 2024", status: "Active" },
  { title: "Product Manager", dept: "Management", type: "Job", closed: "Apr 26, 2024", status: "Active" },
];

const defaultFilters: FilterValues = {
  search: "",
  status: "All",
  jobRole: "All",
  sort: "Newest",
  time: "All Time",
};

export default function JobPostsPage() {
  const [filters, setFilters] = useState<FilterValues>(defaultFilters);

  const filteredJobs = useMemo(() => {
    let filtered = [...jobs];

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Status filter
    if (filters.status !== "All") {
      filtered = filtered.filter(post => post.status === filters.status);
    }

    // Job Role filter (using dept as jobRole for this example)
    if (filters.jobRole !== "All") {
      filtered = filtered.filter(post => post.dept === filters.jobRole);
    }

    // Time filter (example: only "This Week")
    if (filters.time === "This Week") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      filtered = filtered.filter(post => new Date(post.closed) >= oneWeekAgo);
    }

    // Sort
    if (filters.sort === "Newest") {
      filtered.sort((a, b) => new Date(b.closed).getTime() - new Date(a.closed).getTime());
    } else {
      filtered.sort((a, b) => new Date(a.closed).getTime() - new Date(b.closed).getTime());
    }

    return filtered;
  }, [filters]);

  return (
    <div className="flex-1 bg-[#E9F3FD] min-h-screen overflow-auto">
      <FilterBar filters={filters} onChange={setFilters} />

      <div className="p-7">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
            <span>< MessageSquareText /></span> Job Posts
          </h1>
          <button className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
            <Plus size={16} />
            Post New Job
          </button>
        </div>

        <StatsRow />
        <JobPostsTable jobs={filteredJobs} />
      </div>
    </div>
  );
}
