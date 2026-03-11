import { CalendarDays, MapPin, User } from "lucide-react";

interface Interview {
	name: string;
	role: string;
	time: string;
	icon: React.ReactNode;
}

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

export default function UpcomingInterviewsWidget() {
	return (
		<div className="bg-white rounded-2xl p-5 shadow-sm">
			<div className="flex items-center justify-between mb-4">
				<h2 className="font-semibold text-gray-800">Upcoming Interviews</h2>
				<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
					<CalendarDays size={16} className="text-gray-500" />
				</div>
			</div>
			<div className="space-y-3">
				{interviews.map((interview, index) => (
					<div key={index} className="border border-gray-100 rounded-xl p-3.5">
						<div className="flex items-start justify-between">
							<div className="flex items-center gap-3">
								<Avatar />
								<div>
									<p className="text-sm font-semibold text-gray-800">{interview.name}</p>
									<p className="text-xs text-indigo-500 font-medium">{interview.role}</p>
								</div>
							</div>
							<div className="text-gray-400">{interview.icon}</div>
						</div>
						<div className="flex items-center justify-between mt-3">
							<span className="text-xs text-gray-500 flex items-center gap-1.5">
								<CalendarDays size={12} />
								{interview.time}
							</span>
							<button className="text-xs border border-gray-200 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors">
								Reschedule
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
