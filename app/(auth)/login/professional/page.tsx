import Image from "next/image"
import Link from "next/link"
import { X, Briefcase, TrendingUp, ShieldCheck } from "lucide-react"
import LoginForm from "../undergraduate/LoginForm"

export default function ProfessionalLoginPage() {
  return (
    <div
  className="min-h-screen flex items-center justify-center p-4"
  style={{ backgroundColor: "#E9F3FD" }}
>

      <div className="w-full max-w-6xl h-[600px] bg-white rounded-3xl shadow-lg overflow-hidden flex">
        {/* Left Panel */}
        <div
          className="w-1/2 p-12 flex flex-col justify-between border-r"
          style={{
            background: `
      linear-gradient(
        135deg,
        rgba(233, 212, 255, 0.4) 0%,
        rgba(190, 219, 255, 0.3) 50%,
        rgba(162, 244, 253, 0.4) 100%
      )
    `,
          }}
        >
          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold text-violet-700 tracking-tight">
              Talvio
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Career & Opportunity Platform
            </p>
          </div>

          {/* Main Message */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Take the next step in your career.
            </h2>

            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Discover full-time opportunities, connect with verified employers,
              and manage your job applications in one place.
            </p>

            <div className="space-y-4">
              <Feature
                icon={<Briefcase className="w-4 h-4 text-indigo-600" />}
                text="Full-time job opportunities"
              />
              <Feature
                icon={<TrendingUp className="w-4 h-4 text-indigo-600" />}
                text="Career growth insights"
              />
              <Feature
                icon={<ShieldCheck className="w-4 h-4 text-indigo-600" />}
                text="Verified companies"
              />
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Built for professionals seeking new career opportunities.
          </p>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-10 relative overflow-y-auto">
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Professional Login
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Access your job dashboard
            </p>

            <LoginForm />

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-gray-400 uppercase tracking-wide">
                  Or continue with
                </span>
              </div>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Image
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                />
                <span className="text-gray-700 font-medium text-sm">
                  LinkedIn
                </span>
              </button>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Image
                  src="/images/google.svg"
                  alt="Google"
                  width={18}
                  height={18}
                />
                <span className="text-gray-700 font-medium text-sm">
                  Google
                </span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don&apos;t have a professional account?{" "}
              <Link
                href="/register/professional"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Create professional account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 bg-white border rounded-lg flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <span className="text-sm text-slate-700">{text}</span>
    </div>
  )
}
