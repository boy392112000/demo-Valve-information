
import React from 'react';
import { AppView } from '../types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentView: AppView;
  setView: (view: AppView) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, currentView, setView }) => {
  const navItems = [
    { view: AppView.OVERVIEW, icon: 'dashboard', label: 'Overview' },
    { view: AppView.ASSETS, icon: 'precision_manufacturing', label: 'Assets' },
    { view: AppView.DIAGNOSTICS, icon: 'monitoring', label: 'Diagnostics' },
    { view: AppView.MAINTENANCE, icon: 'build', label: 'Maintenance' },
    { view: AppView.DOCUMENTS, icon: 'description', label: 'Reports' },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="w-[280px] h-full flex flex-col bg-sidebar text-white flex-shrink-0 z-20 shadow-xl hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="size-8 text-white">
              <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-lg font-bold leading-none tracking-tight">Baker Hughes</h1>
              <span className="text-white/60 text-xs font-normal mt-1">Industrial SaaS</span>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-left w-full ${
                currentView === item.view ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
          <div className="my-2 border-t border-white/10 mx-3"></div>
          <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors text-left w-full">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </button>
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold">JE</div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium truncate">Jason Engineer</span>
              <span className="text-xs text-white/50 truncate">jason.e@bakerhughes.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-slate-400 cursor-pointer md:hidden">menu</span>
            <h2 className="text-slate-800 text-lg font-bold">
              {navItems.find(i => i.view === currentView)?.label || 'Overview'}
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
              </div>
              <input
                className="block w-64 pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Search assets, IDs, or locations..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="relative p-2 text-slate-500 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              <button className="p-2 text-slate-500 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[22px]">help</span>
              </button>
              <button
                onClick={() => window.location.reload()}
                className="p-2 text-slate-500 hover:text-red-500 hover:bg-slate-50 rounded-lg transition-colors"
                title="Logout"
              >
                <span className="material-symbols-outlined text-[22px]">logout</span>
              </button>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto bg-background-light">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
