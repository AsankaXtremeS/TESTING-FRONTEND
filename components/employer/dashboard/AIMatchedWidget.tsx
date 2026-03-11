import { ChevronDown } from "lucide-react";

interface Candidate {
	name: string;
	role: string;
	score: number;
}

const candidates: Candidate[] = [
	{ name: "John Deb", role: "Software Engineer", score: 78 },
	{ name: "John Deb", role: "Software Engineer", score: 78 },
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

export default function AIMatchedWidget() {
	return (
		<div className="bg-white rounded-2xl p-5 shadow-sm">
			<div className="flex items-center justify-between mb-4">
				<h2 className="font-semibold text-gray-800">Top AI-Matched Candidates</h2>
				<button className="flex items-center gap-1.5 text-sm text-indigo-600 border border-indigo-200 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors">
					Select Role <ChevronDown size={14} />
				</button>
			</div>
			<div className="space-y-4">
				{candidates.map((candidate, index) => (
					<div key={index} className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
						<Avatar />
						<div className="flex-1">
							<p className="text-sm font-semibold text-gray-800">{candidate.name}</p>
							<p className="text-xs text-gray-400">{candidate.role}</p>
						</div>
						<div className="text-right min-w-[120px]">
							<p className="text-xs text-gray-500 mb-1">AI match score</p>
							<div className="flex items-center gap-2">
								<div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
									<div
										className="h-full bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"
										style={{ width: `${candidate.score}%` }}
									/>
								</div>
								<span className="text-sm font-bold text-gray-700">{candidate.score}%</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
