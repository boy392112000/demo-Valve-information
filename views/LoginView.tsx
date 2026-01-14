
import React from 'react';

interface LoginViewProps {
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-sidebar overflow-x-hidden selection:bg-primary selection:text-white">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(at 70% 20%, hsla(168,76%,35%,1) 0px, transparent 50%), radial-gradient(at 10% 80%, hsla(210,100%,36%,1) 0px, transparent 50%)' }}>
      </div>
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="mb-8 flex flex-col items-center gap-4 text-white">
          <div className="flex items-center gap-3">
            <div className="size-10 text-white">
              <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white leading-tight">Baker Hughes</h1>
          </div>
          <p className="text-slate-300 font-medium text-sm tracking-wide uppercase opacity-80">Industrial Asset Management</p>
        </div>

        <div className="w-full max-w-[440px] rounded-xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="mb-8">
              <h2 className="text-[#0c151d] text-2xl font-bold leading-tight tracking-[-0.015em]">Sign in to your account</h2>
              <p className="text-[#4574a1] text-sm mt-2">Enter your credentials to access the diagnostic portal.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="flex flex-col gap-5">
              <label className="flex flex-col w-full">
                <p className="text-[#0c151d] text-sm font-semibold leading-normal pb-2">Customer ID</p>
                <select className="form-select flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#0c151d] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cddcea] bg-slate-50 focus:border-primary h-12 px-4 text-base font-normal leading-normal transition-all hover:bg-slate-100">
                  <option value="">Select Customer ID</option>
                  <option value="bh-global">BH-Global-Enterprise</option>
                  <option value="na-ops">NorthAm-Industrial-Ops</option>
                </select>
              </label>

              <label className="flex flex-col w-full">
                <p className="text-[#0c151d] text-sm font-semibold leading-normal pb-2">Site Location</p>
                <select className="form-select flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#0c151d] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cddcea] bg-slate-50 focus:border-primary h-12 px-4 text-base font-normal leading-normal transition-all hover:bg-slate-100">
                  <option value="">Select Site Location</option>
                  <option value="houston">Houston, TX - Main Hub</option>
                  <option value="dubai">Dubai, UAE - Regional HQ</option>
                </select>
              </label>

              <label className="flex flex-col w-full group">
                <div className="flex justify-between items-center pb-2">
                  <p className="text-[#0c151d] text-sm font-semibold leading-normal">Password</p>
                  <a className="text-sm font-medium text-primary hover:text-primary-dark hover:underline" href="#">Forgot password?</a>
                </div>
                <div className="relative flex items-center">
                  <input
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#0c151d] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cddcea] bg-slate-50 focus:border-primary h-12 px-4 text-base font-normal leading-normal transition-all hover:bg-slate-100"
                    placeholder="Enter your password"
                    type="password"
                    required
                  />
                  <button className="absolute right-3 text-[#4574a1] hover:text-primary focus:outline-none p-1 rounded-full" type="button">
                    <span className="material-symbols-outlined text-[20px] align-middle">visibility</span>
                  </button>
                </div>
              </label>

              <button className="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 focus:ring-4 focus:ring-primary/30 transition-all shadow-md active:transform active:scale-[0.99]">
                <span className="truncate">Sign In</span>
              </button>
            </form>
          </div>
          <div className="bg-[#f8fafd] border-t border-[#e6edf4] px-8 py-5 text-center">
            <p className="text-sm text-[#4574a1]">
              Need help accessing your site? <br />
              <a className="text-[#0c151d] font-semibold hover:text-primary transition-colors inline-flex items-center gap-1 mt-1" href="#">
                Contact Support
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </p>
          </div>
        </div>

        <footer className="mt-12 w-full max-w-[480px] flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-300 font-medium">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Security</a>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            <span>Secure Asset Management Gateway</span>
          </div>
          <p className="text-xs text-slate-500">© 2024 Baker Hughes Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginView;
