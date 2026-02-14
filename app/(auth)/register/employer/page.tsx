// app/(auth)/register/employer/page.tsx

import Link from "next/link"
import { Sparkles, Target, ShieldCheck, X } from "lucide-react"
import EmployerSignupForm from "./RegisterForm"

export default function EmployerSignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
      <div className="w-full max-w-6xl h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden flex">

        {/* Left Panel */}
        <div
          className="flex flex-col justify-center w-1/2 p-12"
          style={{
            background: `linear-gradient(135deg, rgba(233, 212, 255, 0.4) 0%, rgba(190, 219, 255, 0.3) 50%, rgba(162, 244, 253, 0.4) 100%)`,
          }}
        >
          <div className="mb-16">
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              Join <span className="text-purple-700">Talvio</span>
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-slate-700">
              Sign up to start your smart job matching journey — unlock career-enhancing tools, apply for jobs, and access verified employers.
            </p>
          </div>

          <div className="space-y-4">
            <Feature 
              icon={<Sparkles className="w-5 h-5 text-purple-600" />} 
              text="AI matching tools" 
            />
            <Feature 
              icon={<Target className="w-5 h-5 text-blue-600" />} 
              text="Hire with confidence" 
            />
            <Feature 
              icon={<ShieldCheck className="w-5 h-5 text-purple-600" />} 
              text="Accelerate recruiting" 
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative flex flex-col w-1/2 px-12 py-10 bg-white">
          {/* Close Button */}
          <Link href="/register"> 
          <button className="absolute text-gray-400 top-8 right-8 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
          </Link>

          <div className="flex flex-col justify-center flex-1 w-full max-w-lg mx-auto">
            <h2 className="mb-4 text-3xl font-bold text-center text-slate-900">
              Sign Up
            </h2>

            <EmployerSignupForm />

            <p className="mt-1 text-sm text-center text-slate-600">
              Already have an account?{" "}
              <Link
                href="/login/employer"
                className="font-medium text-blue-600 hover:text-blue-700"
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
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-800">{text}</span>
    </div>
  )
}