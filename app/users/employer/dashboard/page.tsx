"use client";

import { Plus, CalendarDays , LayoutDashboard } from "lucide-react";
import StatsRow from "@/components/employer/dashboard/StatsRow";
import AIMatchedWidget from "@/components/employer/dashboard/AIMatchedWidget";
import UpcomingInterviewsWidget from "@/components/employer/dashboard/UpcomingInterviewsWidget";
import JobsPreviewWidget from "@/components/employer/dashboard/JobsPreviewWidget";
import RecentActivityFeed from "@/components/employer/dashboard/RecentActivityFeed";

export default function DashboardPage() {
	return (
		<div className="flex-1 bg-[#E9F3FD] min-h-screen p-7 overflow-auto">
			<div className="bg-white rounded-2xl px-7 py-5 mb-6 flex items-center justify-between shadow-sm">
				<div>
					<h1 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
						<span className="text-2xl">< LayoutDashboard /></span> Dashboard
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

			<StatsRow />

			<div className="grid grid-cols-2 gap-5">
				<AIMatchedWidget />
				<UpcomingInterviewsWidget />
				<JobsPreviewWidget />
				<RecentActivityFeed />
			</div>
		</div>
	);
}
