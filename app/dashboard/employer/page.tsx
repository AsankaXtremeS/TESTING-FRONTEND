"use client";
import {
  Plus,
  CalendarDays,
  ClipboardList,
  Briefcase,
  Sparkles,
  MapPin,
  User,
  ChevronDown,
  FileText,
} from "lucide-react";

interface StatCard {
  label: string;
  value: string;
  icon: React.ReactNode;
  bg: string;
}

interface Candidate {
  name: string;
  role: string;
  score: number;
}

interface Interview {
  name: string;
  role: string;
  time: string;
  icon: React.ReactNode;
}

interface Job {
  title: string;
  dept: string;
  status: string;
  type: string;
  location: string;
  salary: string;
  applicants: number;
  posted: string;
}

interface Activity {
  text: string;
  time: string;
}

const statCards: StatCard[] = [
  {
    label: "Active Job Posts",
    value: "32",
    icon: <ClipboardList size={22} className="text-indigo-400" />,
    bg: "bg-indigo-200",
  },
  {
    label: "Interview Schedule",
    value: "08",
    icon: <CalendarDays size={22} className="text-indigo-400" />,
    bg: "bg-indigo-300",
  },
  {
    label: "Applications",
    value: "20",
    icon: <Briefcase size={22} className="text-indigo-400" />,
    bg: "bg-indigo-400",
  },
  {
    label: "AI Matched Candidates",
    value: "04",
    icon: <Sparkles size={22} className="text-indigo-200" />,
    bg: "bg-indigo-600",
  },
];

const candidates: Candidate[] = [
  { name: "John Deb", role: "Software Engineer", score: 78 },
  { name: "John Deb", role: "Software Engineer", score: 78 },
];

const interviews: Interview[] = [
  {
    name: "John Deb",
    role: "Software Engineer",
    time: "Today - 2:00 PM",
    icon: <MapPin size={16} className="text-gray-400" />,
  },
  {
    name: "John Deb",
    role: "Software Engineer",
    time: "Today - 2:00 PM",
    icon: <User size={16} className="text-gray-400" />,
  },
];

const jobs: Job[] = [
  {
    title: "UX/UI Designer",
    dept: "Software",
    status: "Active",
    type: "Full-time",
    location: "On site",
    salary: "$1000 - $1100",
    applicants: 24,
    posted: "5 days ago",
  },
];

const activities: Activity[] = [
  { text: "John Deb applied for senior software engineer", time: "2 hours ago" },
  { text: "John Deb applied for senior software engineer", time: "2 hours ago" },
];

function Avatar() {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-indigo-100 flex items-center justify-center shrink-0">
      <img
        src="https://api.dicebear.com/7.x/personas/svg?seed=JohnDeb"
        alt="avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex-1 bg-[#E9F3FD] min-h-screen p-7 overflow-auto">
      {/* Header */}
      <div className="bg-white rounded-2xl px-7 py-5 mb-6 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
            <span className="text-2xl">⊞</span> Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-0.5 flex items-center gap-1.5">
            <CalendarDays size={14} />
            Wednesday, December 20, 2025
          </p>
        </div>
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
            <div className="opacity-70">{card.icon}</div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 gap-5">
        {/* Top AI-Matched Candidates */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Top AI-Matched Candidates</h2>
            <button className="flex items-center gap-1.5 text-sm text-indigo-600 border border-indigo-200 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors">
              Select Role <ChevronDown size={14} />
            </button>
          </div>
          <div className="space-y-4">
            {candidates.map((c, i) => (
              <div key={i} className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <Avatar />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.role}</p>
                </div>
                <div className="text-right min-w-[120px]">
                  <p className="text-xs text-gray-500 mb-1">AI match score</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"
                        style={{ width: `${c.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{c.score}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Upcoming Interviews</h2>
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              <CalendarDays size={16} className="text-gray-500" />
            </div>
          </div>
          <div className="space-y-3">
            {interviews.map((iv, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-3.5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{iv.name}</p>
                      <p className="text-xs text-indigo-500 font-medium">{iv.role}</p>
                    </div>
                  </div>
                  <div className="text-gray-400">{iv.icon}</div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500 flex items-center gap-1.5">
                    <CalendarDays size={12} />
                    {iv.time}
                  </span>
                  <button className="text-xs border border-gray-200 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                    Reschedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jobs */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Jobs</h2>
            <button className="text-sm text-indigo-600 font-medium hover:underline">View all</button>
          </div>
          {jobs.map((job, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-800 text-white flex items-center justify-center text-sm font-bold">
                    R
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{job.title}</p>
                    <p className="text-xs text-indigo-500">{job.dept}</p>
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {job.status}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">{job.type}</span>
                <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">{job.location}</span>
                <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full flex items-center gap-1">
                  <User size={10} /> {job.salary}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <User size={12} />
                  {job.applicants} Applicants
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                  Posted {job.posted}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Recent Activities</h2>
            <button className="text-sm text-indigo-600 font-medium hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            {activities.map((act, i) => (
              <div key={i} className="flex items-start gap-3 border border-gray-100 rounded-xl p-3.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  <FileText size={15} className="text-indigo-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 leading-snug">{act.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{act.time}</p>
                </div>
                <button className="text-xs border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg whitespace-nowrap hover:bg-gray-50 transition-colors">
                  View application
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}