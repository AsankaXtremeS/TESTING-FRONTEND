// app/(auth)/login/page.tsx

import Link from 'next/link';
import { GraduationCap, User, Building2, X } from 'lucide-react';
import { Button } from '../../../components/ui/SignButton';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 p-4">
      <div className="w-full max-w-5xl h-[600px] bg-white rounded-3xl shadow-2xl p-12 relative">
        {/* Close button */}
        <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-violet-700 mb-4">Talvio</h1>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Sign In</h2>
          <p className="text-gray-600">
            Dont have an account?{' '}
            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Undergraduate Card */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Undergraduate</h3>
            <p className="text-gray-600 text-sm mb-8 flex-grow">
              Kick-start your career with smart job matching
            </p>
            <Link href="/login/undergraduate" className="w-full">
              <Button>Sign in</Button>
            </Link>
          </div>

          {/* Professional Card */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional</h3>
            <p className="text-gray-600 text-sm mb-8 flex-grow">
              Find roles that match your skills instantly
            </p>
            <Link href="/login/professional" className="w-full">
              <Button>Sign in</Button>
            </Link>
          </div>

          {/* Employer Card */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Employer</h3>
            <p className="text-gray-600 text-sm mb-8 flex-grow">
              Hire verified talent faster with AI
            </p>
            <Link href="/login/employer" className="w-full">
              <Button>Sign in</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}