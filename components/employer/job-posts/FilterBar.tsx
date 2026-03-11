import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const statusOptions = ["All", "Active", "Closed", "Draft"];
const jobRoleOptions = ["All", "Job", "Internship"];
const sortOptions = ["Newest", "Oldest"];
const timeOptions = ["This Week", "This Month", "All Time"];

export interface FilterValues {
  search: string;
  status: string;
  jobRole: string;
  sort: string;
  time: string;
}

interface FilterBarProps {
  filters: FilterValues;
  onChange: (filters: FilterValues) => void;
}

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const [open, setOpen] = useState<string | null>(null);

  const handleDropdown = (name: string) => setOpen(open === name ? null : name);

  const handleSelect = (name: keyof FilterValues, value: string) => {
    onChange({ ...filters, [name]: value });
    setOpen(null);
  };

  return (
    <div className="bg-white border-b border-gray-100 px-7 py-3 flex items-center gap-3 relative">
      {/* Search */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white w-52">
        <Search size={14} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search Posts"
          className="text-sm text-gray-600 bg-transparent outline-none flex-1 placeholder:text-gray-400"
          value={filters.search}
          onChange={e => onChange({ ...filters, search: e.target.value })}
        />
      </div>

      {/* Status Dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors bg-white"
          onClick={() => handleDropdown("status")}
        >
          {filters.status} <ChevronDown size={14} />
        </button>
        {open === "status" && (
          <ul className="absolute z-10 mt-2 bg-white border rounded shadow w-32">
            {statusOptions.map(option => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect("status", option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Job Role Dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors bg-white"
          onClick={() => handleDropdown("jobRole")}
        >
          {filters.jobRole} <ChevronDown size={14} />
        </button>
        {open === "jobRole" && (
          <ul className="absolute z-10 mt-2 bg-white border rounded shadow w-32">
            {jobRoleOptions.map(option => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect("jobRole", option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sort Dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors bg-white"
          onClick={() => handleDropdown("sort")}
        >
          {filters.sort} <ChevronDown size={14} />
        </button>
        {open === "sort" && (
          <ul className="absolute z-10 mt-2 bg-white border rounded shadow w-32">
            {sortOptions.map(option => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect("sort", option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Time Dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors bg-white"
          onClick={() => handleDropdown("time")}
        >
          {filters.time} <ChevronDown size={14} />
        </button>
        {open === "time" && (
          <ul className="absolute z-10 mt-2 bg-white border rounded shadow w-32">
            {timeOptions.map(option => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect("time", option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}