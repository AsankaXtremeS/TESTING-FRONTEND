// app/(auth)/register/undergraduate/page.tsx

import Link from "next/link"
import { Sparkles, Target, ShieldCheck, X } from "lucide-react"
import SignupForm from "./RegisterForm"

export default function UndergraduateSignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
      <div className="w-full max-w-6xl h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden flex">

        {/* Left Panel */}
        <div
          className="w-1/2 p-10 flex flex-col justify-center"
          style={{
            background: `linear-gradient(135deg, rgba(233, 212, 255, 0.4) 0%, rgba(190, 219, 255, 0.3) 50%, rgba(162, 244, 253, 0.4) 100%)`,
          }}
        >
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Join <span className="text-purple-700">Talvio</span>
            </h1>
            <p className="text-sm text-slate-700 leading-relaxed max-w-md">
              Sign up to start your smart job matching journey — unlock career-enhancing tools, apply for jobs, and access verified employers.
            </p>
          </div>

          <div className="space-y-3">
            <Feature 
              icon={<Sparkles className="w-4 h-4 text-purple-600" />} 
              text="AI Resume tools" 
            />
            <Feature 
              icon={<Target className="w-4 h-4 text-blue-600" />} 
              text="Smart matching" 
            />
            <Feature 
              icon={<ShieldCheck className="w-4 h-4 text-purple-600" />} 
              text="Verified employers" 
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 px-10 py-8 relative bg-white overflow-y-auto">
          {/* Close Button */}
          <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Sign Up
            </h2>

            <SignupForm />

            <p className="text-center text-xs text-slate-600 mt-4 mb-6">
              Already have an account?{" "}
              <Link
                href="/login/professional"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <span className="text-sm text-slate-800 font-medium">{text}</span>
    </div>
  )
}