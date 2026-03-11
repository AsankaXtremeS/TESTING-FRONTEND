import { JobStatus } from "@/types/employer/jobPost.types";

interface JobStatusBadgeProps {
  status: JobStatus;
}

const statusStyles: Record<JobStatus, string> = {
  Active: "text-emerald-600 border-emerald-300 bg-emerald-50",
  Draft: "text-amber-600 border-amber-300 bg-amber-50",
  Closed: "text-red-600 border-red-300 bg-red-50",
};

export default function JobStatusBadge({ status }: JobStatusBadgeProps) {
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-md border ${statusStyles[status]}`}>
      {status}
    </span>
  );
}