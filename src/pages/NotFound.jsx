import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="max-w-md">
        <div className="text-6xl font-bold text-slate-900 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent mb-6">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
