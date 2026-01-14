
import React, { useState } from 'react';

const AssetBrowser: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState('Heat Exchangers');

  return (
    <div className="flex flex-1 overflow-hidden h-full bg-[#f8fafc]">
      {/* Hierarchy Sidebar */}
      <aside className="w-[320px] flex flex-col border-r border-slate-200 bg-white shrink-0 overflow-hidden">
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-bold text-[11px] text-slate-500 uppercase tracking-widest">Hierarchy</h3>
            <div className="flex gap-2">
              <button className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined text-[20px]">unfold_less</span>
              </button>
              <button className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <span className="material-symbols-outlined text-[18px]">filter_alt</span>
            </span>
            <input 
              className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md text-sm bg-slate-50/50 placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="Filter hierarchy..." 
              type="text"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-2 py-2 select-none">
          <TreeItem label="Chevron Corp" icon="domain" isOpen>
            <TreeItem label="Texas Refinery" icon="factory" warning isOpen>
              <TreeItem label="Crude Unit 1" icon="propane_tank" />
              <TreeItem label="Distillation Unit 4" icon="propane_tank" critical isOpen>
                <TreeItem label="Pumps" icon="valve" />
                <TreeItem 
                  label="Heat Exchangers" 
                  icon="heat_pump" 
                  selected={selectedAsset === 'Heat Exchangers'} 
                  badge="3" 
                  onClick={() => setSelectedAsset('Heat Exchangers')}
                />
              </TreeItem>
            </TreeItem>
            <TreeItem label="Storage Yard B" icon="warehouse" />
          </TreeItem>
        </div>

        <div className="p-4 border-t border-slate-100 bg-white">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm shadow-red-200"></div>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">System Status: <span className="text-slate-700 font-bold">Degraded</span></span>
          </div>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Breadcrumbs and Actions */}
        <div className="px-8 pt-6 pb-4">
          <nav className="flex items-center gap-2 text-[12px] text-slate-400 mb-2 font-medium">
            <a className="hover:text-primary transition-colors" href="#">Chevron Corp</a>
            <span className="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
            <span className="hover:text-slate-600 cursor-pointer">Texas Refinery</span>
            <span className="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
            <span className="text-slate-800 font-bold">Heat Exchangers</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Heat Exchangers</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Found 48 assets in this category. 3 critical alerts.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[20px]">upload</span> Export
              </button>
              <button className="flex items-center gap-2 px-5 py-2 bg-primary hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-all shadow-md shadow-blue-100 active:scale-95">
                <span className="material-symbols-outlined text-[20px]">add</span> Add Asset
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="px-8 pb-5">
          <div className="flex items-center justify-between gap-4 p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center flex-1 gap-1">
              <div className="relative flex-1 max-w-md">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </span>
                <input 
                  className="block w-full pl-10 pr-3 py-2 border-none rounded-md bg-transparent text-slate-900 placeholder:text-slate-400 focus:ring-0 text-sm" 
                  placeholder="Search by Tag, Material, or ID..." 
                  type="text"
                />
              </div>
              <div className="h-6 w-px bg-slate-100 mx-2"></div>
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-slate-50 text-slate-600 text-[13px] font-bold transition-colors">
                <span className="material-symbols-outlined text-[18px]">tune</span> Advanced Filter
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg">
                <button className="p-1.5 bg-white text-primary rounded-md shadow-sm border border-slate-200">
                  <span className="material-symbols-outlined text-[20px] filled">list</span>
                </button>
                <button className="p-1.5 hover:bg-white/50 text-slate-400 rounded-md transition-all">
                  <span className="material-symbols-outlined text-[20px]">grid_view</span>
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-slate-50 text-slate-600 text-[13px] font-bold transition-colors">
                <span className="material-symbols-outlined text-[18px]">view_column</span> Columns
              </button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 px-8 pb-8 overflow-hidden">
          <div className="h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex-1 overflow-auto">
              <table className="min-w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50/80 sticky top-0 z-10 border-b border-slate-200">
                  <tr className="text-slate-500 font-bold uppercase text-[11px] tracking-wider">
                    <th className="px-6 py-4 w-10 text-center"><input className="rounded border-slate-300 text-primary h-4 w-4 focus:ring-primary" type="checkbox"/></th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Tag ID</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Size</th>
                    <th className="px-6 py-4">Material</th>
                    <th className="px-6 py-4">Install Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <AssetRow tag="HE-102-A" status="Critical" desc="Shell & Tube Exchanger" size="24 in" mat="Stainless 316" date="2019-04-12" />
                  <AssetRow tag="HE-102-B" status="Normal" desc="Shell & Tube Exchanger" size="24 in" mat="Carbon Steel" date="2018-11-05" />
                  <AssetRow tag="HE-104-C" status="Warning" desc="Plate Exchanger" size="18 in" mat="Titanium" date="2020-02-20" />
                  <AssetRow tag="HE-105-D" status="Critical" desc="Air Cooled Exchanger" size="36 in" mat="Carbon Steel" date="2015-08-10" />
                  <AssetRow tag="HE-108-F" status="Normal" desc="Shell & Tube Exchanger" size="24 in" mat="Stainless 304" date="2021-01-15" />
                  <AssetRow tag="HE-112-G" status="Normal" desc="Double Pipe Exchanger" size="12 in" mat="Carbon Steel" date="2022-03-24" />
                  <AssetRow tag="HE-115-H" status="Normal" desc="Shell & Tube Exchanger" size="30 in" mat="Stainless 316" date="2019-11-18" />
                  <AssetRow tag="HE-118-J" status="Normal" desc="Plate Exchanger" size="14 in" mat="Stainless 304" date="2023-01-05" />
                </tbody>
              </table>
            </div>
            
            <div className="border-t border-slate-100 bg-white px-8 py-4 flex items-center justify-between">
              <div className="text-[13px] text-slate-500 font-medium">
                Showing <span className="font-bold text-slate-800">1</span> to <span className="font-bold text-slate-800">5</span> of <span className="font-bold text-slate-800">48</span> results
              </div>
              <div className="flex items-center gap-1.5">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold bg-primary text-white shadow-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors">3</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const TreeItem: React.FC<{ 
  label: string; 
  icon: string; 
  selected?: boolean; 
  badge?: string; 
  warning?: boolean; 
  critical?: boolean; 
  isOpen?: boolean; 
  onClick?: () => void;
  children?: React.ReactNode 
}> = ({ label, icon, selected, badge, warning, critical, isOpen, onClick, children }) => (
  <div>
    <div 
      onClick={onClick}
      className={`group flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-all ${selected ? 'bg-primary/10' : 'hover:bg-slate-50'}`}
    >
      <div className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
        <span className={`material-symbols-outlined text-[18px] ${children ? 'text-slate-400' : 'invisible'}`}>arrow_right</span>
      </div>
      <span className={`material-symbols-outlined text-[20px] ${selected ? 'text-primary' : 'text-slate-500'} ${selected ? 'filled' : ''}`}>
        {icon}
      </span>
      <span className={`text-[13px] truncate flex-1 font-medium ${selected ? 'text-primary' : 'text-slate-700'}`}>
        {label}
      </span>
      {warning && <span className="material-symbols-outlined text-amber-500 text-[18px] filled">warning</span>}
      {critical && <span className="material-symbols-outlined text-red-500 text-[18px] filled">error</span>}
      {badge && (
        <span className="flex items-center justify-center size-5 rounded-full bg-red-100 text-red-600 text-[10px] font-black">
          {badge}
        </span>
      )}
    </div>
    {isOpen && children && <div className="ml-[25px] border-l border-slate-100 pl-1.5 my-1 flex flex-col gap-0.5">{children}</div>}
  </div>
);

const AssetRow: React.FC<{ tag: string; status: string; desc: string; size: string; mat: string; date: string }> = ({ tag, status, desc, size, mat, date }) => {
  const statusColors: Record<string, string> = {
    Critical: 'bg-red-50 text-red-700 border-red-100',
    Warning: 'bg-amber-50 text-amber-700 border-amber-100',
    Normal: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  };
  const dotColors: Record<string, string> = { Critical: 'bg-red-500', Warning: 'bg-amber-500', Normal: 'bg-emerald-500' };

  return (
    <tr className="group hover:bg-slate-50/80 transition-all">
      <td className="px-6 py-4 text-center"><input className="rounded border-slate-300 text-primary h-4 w-4 focus:ring-primary" type="checkbox"/></td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold border ${statusColors[status]}`}>
          <span className={`size-2 rounded-full ${dotColors[status]} shadow-sm`}></span>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 font-bold text-primary hover:text-blue-700 hover:underline cursor-pointer transition-colors text-[13px]">{tag}</td>
      <td className="px-6 py-4 text-slate-600 font-medium text-[13px]">{desc}</td>
      <td className="px-6 py-4 text-slate-500 font-medium text-[13px]">{size}</td>
      <td className="px-6 py-4 text-slate-500 font-medium text-[13px]">{mat}</td>
      <td className="px-6 py-4 text-slate-400 font-mono text-[11px]">{date}</td>
      <td className="px-6 py-4 text-right">
        <button className="text-slate-300 hover:text-primary transition-colors p-1 rounded-md hover:bg-white">
          <span className="material-symbols-outlined text-[20px]">more_vert</span>
        </button>
      </td>
    </tr>
  );
};

export default AssetBrowser;
