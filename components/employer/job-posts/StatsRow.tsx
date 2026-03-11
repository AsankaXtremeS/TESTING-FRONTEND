import { ClipboardList, CheckCircle, FileText, XCircle } from "lucide-react";

interface StatCard {
  label: string;
  value: string;
  icon: React.ReactNode;
  bg: string;
}

const statCards: StatCard[] = [
  {
    label: "Total Posts",
    value: "32",
    icon: <ClipboardList size={20} className="text-indigo-500" />,
    bg: "bg-indigo-200",
  },
  {
    label: "Active",
    value: "08",
    icon: <CheckCircle size={20} className="text-indigo-500" />,
    bg: "bg-indigo-300",
  },
  {
    label: "Applications",
    value: "20",
    icon: <FileText size={20} className="text-indigo-200" />,
    bg: "bg-indigo-500",
  },
  {
    label: "Closed",
    value: "04",
    icon: <XCircle size={20} className="text-white opacity-70" />,
    bg: "bg-indigo-700",
  },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {statCards.map((card, index) => (
        <div
          key={card.label}
          className={`${card.bg} rounded-2xl p-5 flex items-center justify-between`}
        >
          <div>
            <p
              className={`text-xs font-medium mb-1 ${
                index >= 2 ? "text-indigo-100" : "text-indigo-700"
              }`}
            >
              {card.label}
            </p>
            <p
              className={`text-4xl font-bold ${
                index >= 2 ? "text-white" : "text-indigo-900"
              }`}
            >
              {card.value}
            </p>
          </div>
          <div>{card.icon}</div>
        </div>
      ))}
    </div>
  );
}