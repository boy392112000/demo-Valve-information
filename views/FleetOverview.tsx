import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const FleetOverview: React.FC = () => {
  const healthData = [{ value: 87 }, { value: 13 }];
  
  return (
    <div className="p-6 lg:p-8 space-y-8 bg-slate-50/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Good Morning, Jason</h2>
          <div className="flex items-center gap-2 mt-1 text-slate-500 text-sm">
            <span className="material-symbols-outlined text-[16px]">sync</span>
            <span>Last ERP Sync: Today, 10:42 AM EST</span>
            <span className="mx-1 text-slate-300">|</span>
            <span className="text-primary font-medium">Fleet Efficiency: 94%</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">cloud_download</span>
            Export Report
          </button>
          <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-blue-200 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add Asset
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[80px] text-primary">inventory_2</span>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Total Assets</p>
            <h3 className="text-4xl font-bold text-slate-900 mt-2">1,245</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 5%
            </span>
            <span className="text-slate-400 text-sm">vs. last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between h-40">
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Maintenance Health</p>
              <h3 className="text-4xl font-bold text-slate-900 mt-2">87%</h3>
            </div>
            <span className="text-primary text-sm font-medium">Status: Stable</span>
          </div>
          <div className="relative w-24 h-24 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={healthData}
                  innerRadius={30}
                  outerRadius={40}
                  startAngle={90}
                  endAngle={450}
                  dataKey="value"
                  stroke="none"
                >
                  <Cell fill="#005fb8" />
                  <Cell fill="#f1f5f9" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[28px]">health_and_safety</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Active Warranties</p>
              <h3 className="text-4xl font-bold text-slate-900 mt-2">42</h3>
            </div>
            <span className="material-symbols-outlined text-amber-500 bg-amber-50 p-2 rounded-lg">verified_user</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-amber-500 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <p className="text-slate-500 text-xs mt-1">
              <span className="text-slate-900 font-bold">5</span> expiring in next 30 days
            </p>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Asset Categories</h3>
            <a className="text-primary text-sm font-medium hover:underline" href="#">View All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CategoryCard title="Masoneilan SVI3 Series" subtitle="Digital Valve Positioners" count="450 Units" status="2 Critical" statusColor="red" />
            <CategoryCard title="Consolidated Safety Valves" subtitle="Pressure Relief Valves" count="310 Units" status="All Healthy" statusColor="emerald" />
            <CategoryCard title="NovaLT™ Gas Turbines" subtitle="Power Generation" count="12 Units" status="1 Maint. Req" statusColor="amber" />
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-center items-center gap-2 border-dashed">
              <div className="bg-slate-50 p-4 rounded-full">
                <span className="material-symbols-outlined text-slate-400 text-[32px]">add</span>
              </div>
              <span className="text-slate-500 text-sm font-medium">Add New Category</span>
            </div>
          </div>
        </div>

        {/* Taiwan Map Section */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Regional Plant Status (Taiwan)</h3>
            <button className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">fullscreen</span>
            </button>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex-1 relative overflow-hidden flex flex-col min-h-[520px]">
            <div className="flex-1 w-full bg-slate-50/30 relative p-8 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full max-w-[280px] flex items-center justify-center">
                
                {/* 專業級精確地圖 - 基於您提供的 SimpleMaps 數據 */}
                <svg 
                  viewBox="0 0 1000 1000" 
                  className="h-full w-auto drop-shadow-md" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M181.2 423.5l0 0.1-1.1-0.4-0.3-0.4 0.2-0.4 0.4-0.8-1.3-0.9-0.2-0.3-0.1-0.1-2.5-1.9-1.8-1.9-2.7 1-1.3 1.6 0.2 0.7-0.1 0.6-0.3 0.2-0.3-0.1-0.4 2.4-5 5.9-11.4-4.1 0.2 1-0.2 1-0.3 0.1 1.1 1.1-0.4 8.2-3.3 2.6 2.5 2.7-1.4-0.6-1.9-0.2-1.7-0.7-0.9-1.5 0.3-0.6 1.6-1.9 0.5-1 0.1-1.4 0-1.8-0.6-3.1-1.2-3-0.2-1.6 1.1-0.6 5.5-2.7 7.2 4.7 5-0.6 0.8-6.3 1.7-3.9 5.3-1.1 5.2 4.7 2 5.3z m0.2 10.5l0.3-2.1 0.3 0-0.2 1.7-0.4 0.4z m0.9-5l-1-3 0.1-0.7 0.3-0.4 0.8 2.4-0.2 1.7z" id="TWKIN" name="Kinmen" />
                    <path d="M471.2 47.6l0.1 0.6-0.3 0-0.7 0.1-0.5 0.1-0.1-0.9 0.3-0.4 0.1-0.1-0.1-0.3-0.1 0-0.1-0.1 0.4-0.5 0.2-0.1 0.4-0.2 0.2-0.3 0.6 1.3-0.6 0.7 0.2 0.1z m-12.4 22.5l-0.1-0.3-0.2 0.5 0.2 0.7 0.3 0.3 0.3 0.1 0.4 0.1 0.3 0 0.5 0.1 0.3 0.2 0.1 0.5 0.2-0.3 0.6-0.1 0.4-0.3 0.3-0.2 0-0.5 0.1-0.5 0.6-0.7 0.1 0 0.2-0.1 0.6 0.1 0.5 0 0.3 0.1 0.1 0 0.5 0 0.7 0.1 0.8-0.5 0 0.3-0.3 0.3-0.2 0.4-0.3 0-0.2 0.2-0.2 0.4 0 0.5-0.1 0.3 0 0.1-0.3 0.4-0.3 0.5-0.1 0.1-0.3 0.2-0.2-0.4-0.2 0-0.7 0.1-0.2 0.3-0.4 0.6-1 1-0.2 0-0.4-0.3-0.7-0.1-0.6 0.1-0.2 1.2-0.2 0.1-0.7 0.1-0.1-0.3-0.4-0.5-0.2-0.2-0.5 0.1-0.6 0.1-0.9-0.3-0.3-1 0.3-0.6 0.4-0.3 0.4-0.4 0.3-0.7-0.7-0.5 0.4-0.5 0.4 0 0.2 0 0.1-0.5-0.5-0.8 0-0.8 0.3-0.4 0.4 0 0.3 0.4 0.3 0.1 0.1 0 0.1 0 0.5 0.3-0.3 0.9-0.1 0.2z m12.6-10.9l-0.4 0-0.6 0-1.1-0.3-0.4 0.7-0.4 0.1-0.2 0.2-0.3 0.4 0 0.7 0.2 0.7 0 0.6-0.2 0.9 0.1 0.4 0.3 0.1 0.1 0.3-0.5 0.2-0.9-0.2-0.5 0.2 0-1 0.1-1.5 0.3-1.4 0.3-0.5-0.2-0.4 0-0.6 0.1-0.2 1.1-0.1 0.5-0.6 0.5-0.2 0.6-0.3 1-0.9 0.3-1 0.5-0.3 0.6-0.1 0.4-0.3 0.6 0.1 0.1 0.5 0.3 0.4 0.1 0 0.3 0 0 0.9 0 0.9 0.7-0.7 0.2 0 0.6 0 0.1 0.1 0 0.3 0 0.9-0.7 0.2 0.1 0.5 0.3 0.2 0 0.3 0 0.7-0.5-0.7-0.2-0.7-0.5-0.7-0.7 0-0.5 0-0.3 0.2-0.4 0.3-0.5 0.1-0.4 0.6z m2.1-5.6l-0.4 0.2-0.3 0-0.7 0 0.1-0.7 0.7-0.2 0.1-0.4 0.7-0.1 0.7-0.2-0.9 1.4z" id="TWLIE" name="Matsu Islands" />
                    <path d="M409.7 611.6l0.9 2.9-0.4 2.2-1.4-1.4-1.9-1.3-2-0.4-2.8 1.6-2.1 0.3-1 0.5-0.5 1.1-0.8 2.9-0.5 0.9-3.4 2-3.4 0.5-3.5-1.4-3.5-3.5 0.9-1.8 1.9 2.3 2.9 0.6 3.1-0.8 2.6-2.1-1.8-0.7-1.4-0.8-1.1-1.2-1-1.6-0.4 0.7 0 0.2-0.2 0.2-0.7 0.4-0.2-2.9 0.2-2.9 1.3 0 1.5 0.4 5.3-3.4 3.4-1.1-0.9 3.2-0.4 0.9 2.9-0.9 2.2 0.3 1.6-0.2 1.2-1.9 3.4 6.2z m-35.8-6.2l2.3-7.5 2.3-2.2 3 2.6-1.8 1.1-1.2 2.6-2 6.1-0.1 1.6 0.5 1.4-0.2 1-2.2 0.3-1.6 0.1-1.1 0.2-0.9 0.4-0.9 0.8-2.7 0 0.5-1.5 0.9-0.9 1.3-0.5 1.8-0.1 1.6-0.6 0.4-1.5 0.1-3.4z m18.1-5l-0.6-2.5-1.5-2.1-3.1-3.1 4-3 2.4 1.3 2.3 2 1 2.1-1.8 1.7 0.7 2.5-1 1.7-1.6 0.5-0.8-1.1z" id="TWPEN" name="Penghu" />
                    <path d="M657.2 325.1l6.4-10.3 5-5.9 5.2-4.4 13.2-4.4 3.1-1.9 2.7-2.4 3.3-1.8 6.4-2.3 14.5-2.6 3 3.3 4.6 2.2 3.4 2.2 2.3 2.1 2.9 0.7 3.1 1.6 3.7 5.4 0.3 2.9-0.7 3-2.4 2.5-9.4 2.8-2.7 2.9 0.2 4.5-0.8 4.1 0.8 3.7 3.8 3.7 0.8 3.7-1 4.8 3.7 2.1 5.3-0.3 3.7 1.4 6 8.9-1 3.8-2.3 2.7 0.6 3.7 1 4.1 6.4 6 1.8 4-2.2 0.6-3.9 2.8 2.3 9-1.6 2.7-2.5 1-2.3-0.5-2.9 1.1-0.3 1.1-3.5-1.5-5.2-3-2.9-2.1-4-0.7-4.5-2.6-3.7-2.9-0.4-3.1 3.3-4.7 1.4-5.6-1.2-5.2-0.2-3.6-2.5-1.9-3.1-1.6-1.9-3.3-2.4-2.5-2.8 0.2-2.8-0.5-2.2-2.2-3-2.2-4.8-1.5-2.4-2.7 0.8-4.2-2.6-3-4.9-1.6-3-1.4-3.1-0.9-3.6-1.4-2.9-6.3-3.3-2.2-9.8 0.7-2.3-0.8z" id="TWTAO" name="Taoyuan" />
                    <path d="M657.2 325.1l2.3 0.8 9.8-0.7 3.3 2.2 2.9 6.3 3.6 1.4 3.1 0.9 3 1.4 4.9 1.6 2.6 3-0.8 4.2 2.4 2.7 4.8 1.5 3 2.2 2.2 2.2 2.8 0.5 2.8-0.2 2.4 2.5 1.9 3.3 3.1 1.6 2.5 1.9 0.2 3.6 1.2 5.2-1.4 5.6-3.3 4.7 0.4 3.1 3.7 2.9 4.5 2.6 4 0.7 2.9 2.1 5.2 3 3.5 1.5-1.7 4.7-1 3.4 0.4 3.2-2.7 4.2-10.1 10.2-3.1 7.5-2-0.5-7.7 0.7-0.5 0.4-0.5-3.5-3.3-5.6-2.3-2.4-1-3.1-3.6-2.9-9.1 2.3-3.4-0.4-4.9 0.4-5.5 1.5-3-0.7 0.7-3.7 0.9-3.3-0.7-2.9-0.7-2.1 0.7-2.3 0.5-2.4 0.3-2.8-0.6-3.8-2.7-2.4-8.8-4.2-4.3-3.2-2.8-3.2-3.2-8 1.8-2.2 1.6-4.1 2.5-3.1 4.2-1.7 3.7-0.6 1.7-1 0.7-2.7-1.3-2.6-2.8-2.8-3.9-2-10.9-3.5-6-2.6 0.1-0.1 1.1-1.6 0.4-2.7 0.6-2.1 1.5-2.1 1.9-1.6 1.8-0.6-0.1-0.9 0.5-2.1 1.6-4.4 1.5-2.3z" id="TWHSQ" name="Hsinchu" />
                    <path d="M646.3 345.6l6 2.6 10.9 3.5 3.9 2 2.8 2.8 1.3 2.6-0.7 2.7-1.7 1-3.7 0.6-4.2 1.7-2.5 3.1-1.6 4.1-1.8 2.2-0.2 0.2-3.3 0.8-3.1-1.3-2-2.7-3-1.9-5-1.9 0.8-3 4-8.2 1.6-2.1 0.5-1.2 0-1.2-0.5-1.3-0.8-1.6 1.1-2.2 1.2-1.3z" id="TWHSZ" name="Hsinchu City" />
                    <path d="M655 374.5l3.2 8 2.8 3.2 4.3 3.2 8.8 4.2 2.7 2.4 0.6 3.8-0.3 2.8-0.5 2.4-0.7 2.3 0.7 2.1 0.7 2.9-0.9 3.3-0.7 3.7 3 0.7 5.5-1.5 4.9-0.4 3.4 0.4 9.1-2.3 3.6 2.9 1 3.1 2.3 2.4 3.3 5.6 0.5 3.5-2.7 1.9-1.3 4-3.5 1.5-3.9-0.1-3 2.2-3.3 3.1-4.2 2.4-8.4 6.6-4.9 2-6.4 3.5-3.9-1.6-3.6-4-4.4-1.7-7.1-0.6-4 2.4-0.6 5.3-3.7 2-8.8 0.5-8.4-4.8-4.7-0.9-5.3-2.6-10.9-8-4.5-3.9-3.4-3.6-6.6-10.3 5.2-5.8 1.3-2.9 0.7-4.8 1.5-4 4.3-7.5 1.2-4.5 1.1-2 4.8-1.4 1.4-1.5 0.8-1.9 1-1.8 3-3.2 3.4-2.4 4-1.1 5.2 1-0.7-3.9 1.9-2.7 2.7-2.7 1.3-4.2 0.6-1.3 2.6-1.3 0.3-0.9 5 1.9 3 1.9 2 2.7 3.1 1.3 3.3-0.8 0.2-0.2z" id="TWMIA" name="Miaoli" />
                    <path d="M712.3 433.2l0.5-0.4 7.7-0.7 2 0.5 2.6 0.8-0.5 4 1.1 2.6 3.5 0.8 3.2 1.9 2.7 1.8 2.8-0.4 3.4-1.7 3.6 0 4.2 3.4-3.4 3.5-0.3 3-1.7 4.5-5.4 3.4-2.2 3.6-0.9 3.7-2.2 2.7-2.5 1.3-0.9 1.4-2 1.5-9.6-0.9-3.4-0.8-3.4 0.2-8 3.2-4.5 0.7-4.4 0.2-6.4 3.3-3.2 0.6-3.6 2.1-5.7 5.5-3.6 1.4-4.8-0.1-3.4 2.8-1.9 3.9-2.5 0.7-6.4-4.8-2.2 1.4-4.2 5.5-4.3 0.2-7.3-1.1-4.6 2.2-2.7 6.1-5.4 10.4-3.6 3.4-3 0.5-13-1.8-3-0.1-0.1-1-3.9-2.6-3.1-0.5-0.9-2.5 0-2.8-1.4-2.9-2.3-3.6-3.2-2.6-8.5-2.5-3.3-3.9-0.7-5.5-1.9-4.6-2.9-2.5-4.2-1.3 0.5-0.6 0.5-2.4 2.4-1.9 1.6-4.7 1.9-8.8 6.7-11.7 2.1-7.1 2.4-4 9.6-10.6 6.6 10.3 3.4 3.6 4.5 3.9 10.9 8 5.3 2.6 4.7 0.9 8.4 4.8 8.8-0.5 3.7-2 0.6-5.3 4-2.4 7.1 0.6 4.4 1.7 3.6 4 3.9 1.6 6.4-3.5 4.9-2 8.4-6.6 4.2-2.4 3.3-3.1 3-2.2 3.9 0.1 3.5-1.5 1.3-4 2.7-1.9z" id="TWTXG" name="Taichung City" />
                    <path d="M563.1 480.3l4.2 1.3 2.9 2.5 1.9 4.6 0.7 5.5 3.3 3.9 8.5 2.5 3.2 2.6 2.3 3.6 1.4 2.9 0 2.8 0.9 2.5 3.1 0.5 3.9 2.6 0.1 1 0 2.6-3.1 1.1-0.9 2.1 0.4 2.9-1.4 3.3-1.2 3.9-0.1 4.1-0.8 4.7-0.7 9.7 1.5 4.5 2.6 2.4 2.8 1 4.1 2.1-0.7 2.5-2.8 1.1-1.8 1.7-1.7 1.1-0.7 0.5-8.7-1.7-4.2 0.1-8.7-4.4-14.2-1.6-8.4-3.2-4.8-1.3-5.4-0.3-15.9 1.9-5.5-3.2 0.6-1 1.1-5.1 0.9-2.1 5.1-4.9 1.5-2.1 1.9-5.6 3-5.6 4.2-11.6 1.9-3.3 2.2-2.2 1.8-1.2 1.5-0.8 1.2-1 0.4-2.2 0.9-2 3.7-2.9 0.8-2.2 0.4-7.2 0.7-2 1.9-1.9 8.2-9.5z" id="TWCHA" name="Changhua" />
                    <path d="M519.2 556.7l5.5 3.2 15.9-1.9 5.4 0.3 4.8 1.3 8.4 3.2 14.2 1.6 8.7 4.4 4.2-0.1 8.7 1.7 0.7-0.5 1.4 5.2-1.5 3.4-0.7 5.2 0.7 5.5-1.3 3.7-0.7 4.2 2.8 3.4 4.2 1.8 4.9-1.5 6-0.6 1.9 2.5-0.4 0-0.3 3.6 0 2.5-2.8 0.9-8.4 1.7-4.6 0.5-1.7-2.9-3.4-2.4-6 1.7-2.7 0.4-9.1-3.3-3.6-4.2-3.8-3.4-4.9 0.3-9.1 1.7-5.2 1.4-11.8 6.8-2.7 2.7-3.2 1.7-5 4.1-3.9 0.6-1.4 2.2-1.3 3.5-2.8 2.3-4.4-0.1-6-3.3-7.6 0.8-0.1 0.1-0.7 0 3.4-3.7-0.2-11.8 0.5-8.9 2-7 3.2-5.6 0.9-7.2 1.7-6.3 0.9-2.2 4.4-5.8 0.7-2 0.6-1.1 4-3.1 0.6-1.2z" id="TWYUN" name="Yunlin" />
                    <path d="M496.5 622.6l0.7 0 0.1-0.1 7.6-0.8 6 3.3 4.4 0.1 2.8-2.3 1.3-3.5 1.4-2.2 3.9-0.6 5-4.1 3.2-1.7 2.7-2.7 11.8-6.8 5.2-1.4 9.1-1.7 4.9-0.3 3.8 3.4 3.6 4.2 9.1 3.3 2.7-0.4 6-1.7 3.4 2.4 1.7 2.9 4.6-0.5 8.4-1.7 2.8-0.9 0-2.5 0.3-3.6 0.4 0 4.4 0.5 4.8 1.9 3 0.8 3.7 2.1-0.3 3.8-2.1 3.7 0.9 3.4 1.9 4.7 0.3 4.2 0.8 2.8 5.5 1 18.4 0.1 0.6 0.2-13.3 6.8-6.1 4.8-2.5 4.9-3.1 3.7-5.5 3.1-5.8 4.4-3.2 3.8-8.9 5.3-4.2 0.4-4.9-0.5-2.6 2.6-0.1 3.5 1 3.3 0.7 4.8-6-0.7-2.7-0.8-3.6 0.5-3.8 1.7-2.7 0-3.3-2.5-1.1-3.3 1.2-10.3-0.7-5.4-7.1-7.3-1.3-3.6-1.5-3.1-2.9-1.7-5.1-1.7-6.1 0.3-11 2.1-5.6 2.5-4.4 3.3-3.4 3.4-4.8 3.7-4.1 2.6-1.8 3.6-4.5 2-5.3-1.3-6.3-1-3.8-1.4 2.8-0.2 2.3-1 1 0.3-0.6-2.3-1.6 1.2-1.3-0.4-1.8-0.1 0-2.3 1.8-4.1 2.6-0.2 3.9 0-2.6-7.5-3.1-5.8 1.4-2.6 0-1.4-2.2-1.1 0.3-1.2 1.3-1.5 0.6-1.9 3-3.8-6.2 0.4-0.2-6.3z m62.7 15.5l4.9-2 3.2-0.4 2.2-1.6-1.9-4.9-1.7-2.9-3-1.6-4-1.5-5.7 0.5-6.7 1.2-2.7 2.9 0.6 4.1 4.4 1.7 5.1 3.3 5.3 1.2z m-82.1-1.3l10.1-10.2 7.6-9.7 1.8-0.5-6.5 10.5-3.2 3.2-2.1 2.6-2.7 2.7-2.2 1.5-3.2 2.6-2.2 1.2 2.6-3.9z" id="TWCYQ" name="Chiayi" />
                    <path d="M495.1 664.4l3.8 1.4 6.3 1 5.3 1.3 4.5-2 1.8-3.6 4.1-2.6 4.8-3.7 3.4-3.4 4.4-3.3 5.6-2.5 11-2.1 6.1-0.3 5.1 1.7 2.9 1.7 1.5 3.1 1.3 3.6 7.1 7.3 0.7 5.4-1.2 10.3 1.1 3.3 3.3 2.5 2.7 0 3.8-1.7 3.6-0.5 2.7 0.8 6 0.7-1.6 4.8-7.5 10.9-7.2 12.2-4.7 6-5.4 5.3-4.6 3.9-4.5 4.6-3.8 5.1-2.1 3.7-1.7 4-4.6 3.2-4.6 1.9-2.6 1.8-3 1.1-6.1-0.7-5.9 0.6-11.3-1.6-3.5-1.8-2.8-6.2-0.1-0.3-4.5 2.6-0.7-4.5-1.3-2.6-2.8-2.8 3.5-2.5 1.9-4.3-0.8-3.8-4.6-0.7-0.8 1.4-0.8 2.4-1.3 1.9-2.4-0.1-0.9-1.6 0.3-5-0.5-1.8-3-1.3-1.6 1.5-1.4 2.1-1.9 0.5-2.1-1.8-0.6-2.5 0.5-2.4 0.9-1.7 2.1-1.1 2.7-0.4 2.2-0.7 0.7-2.2-1-1.1-6.7-1.7 0-1.4 5.6 0-0.5-1.9-3.1-2.7-2-2.3 0.5-2.9 1.8-1 1.9-0.7 1-1.8-0.6-2.8-1-2.3 0.7-2.2 1-2.6 1.6-1.9-0.3-1.7 0.3-1.6 2.4-6.5 1.2-1.2 1.8-0.5-2.7-1.8 1.2-2.9z" id="TWTNN" name="Tainan City" />
                    <path d="M596.8 682.8l-0.7-4.8-1-3.3 0.1-3.5 2.6-2.6 4.9 0.5 4.2-0.4 8.9-5.3 3.2-3.8 5.8-4.4 5.5-3.1 3.1-3.7 2.5-4.9 6.1-4.8 13.3-6.8 3.2 0.7 4.2 1.6 3 4.2 0.5 1.5 1.4 4.2-2.2 3.5-4 1.8-1 2.3 0.7 2.9 4 2.6 4.6 3.7 2 5.5 0.2 1.8-11.2 2.8-4.7 2.9-2.9 2.8-5.6 3.7-0.6 4.1 1.6 4.3-1.9 3.5-5.3 2.9-0.7 5 1.6 7.1-2.2 9.5 0 8.1-3.1 4.2-6.2 5.3-1.7 7 1 5.9 2.2 3.3 4.4 4.6 0.9 3.5-2.8 0.4-3.8-0.7-3.1 0.2-6.1 4.8-4.3-4-5.4-6.4-5.2 1.3-4.8 4.3-9.4-4.8-6.8 3.2-4.6 5.1-5.7 2.1-12.9-0.8-1.3 3.5-0.9 5.2-1.9 5.7 0.4 5-0.1 6.9-4 15.3-0.2 5.1 2 5.4 0.3 5.9-5.8 14.8-1.9-0.8-1.1 0-1.4 0.5-1.5 0.1-9.4-7.4-8.8-12.4 9.2 11.1-1-5.2-1.6-2.9-1.2-2.3-3.8-4.4-6.5-6-2.5-3.1-1.2-3.4 1.6-3.3 0.8-3-1.1-4.1-1.9-4.1-3.6-5.5-3.3-7.4-0.7-3.3 0-2.1 1.1-2.6 0.3-1.7-0.4-0.9-1-0.7-0.9-0.9-0.4-1.7-2.1-3.5-0.5-1.4-1.6-9.9 4.5-2.6 0.1 0.3 2.8 6.2 3.5 1.8 11.3 1.6 5.9-0.6 6.1 0.7 3-1.1 2.6-1.8 4.6-1.9 4.6-3.2 1.7-4 2.1-3.7 3.8-5.1 4.5-4.6 4.6-3.9 5.4-5.3 4.7-6 7.2-12.2 7.5-10.9 1.6-4.8z" id="TWKHH" name="Kaohsiung City" />
                    <path d="M551.1 836.2l5.8-14.8-0.3-5.9-2-5.4 0.2-5.1 4-15.3 0.1-6.9-0.4-5 1.9-5.7 0.9-5.2 1.3-3.5 12.9 0.8 5.7-2.1 4.6-5.1 6.8-3.2 9.4 4.8 4.8-4.3 5.2-1.3 5.4 6.4 4.3 4 6.1-4.8 3.1-0.2 3.8 0.7 2.5 4.7 0.5 3.5 3.9 1 4 2.6-2 9.9-0.1 3.8-1.5 3.5-7 3-3.5 2-5.5 1.2-3.9 3.2-1.7 4.7-2.6 4.8-2.2 5.4-0.6 10.6 0.9 4.7 1.4 4.4 0.8 5.1 0 3.8 1.9 3.7 3.3 4-1.8 2.7-3.8 2.3-1.5 2.8-0.4 3.3 2 2.8 2.4 1.2 2.3 3.2-0.1 4.1 0.4 4.4 2.3 4.3 3.3 3.5 7.4 3.4 3.2-0.3 0.6 37.2-1.1 5.3-1.8 4.3-2.4 1.8-2.9 2.7 0.1 6 1 6.6-0.2 4.2-3.3-4.9-4.9-3.7-5.7-2.5-5.7-1.4-0.2 4.7-1.7 1.7-2.4-0.6-2.7-2.2-0.1-1.7 0.9-5-4-6.7-0.3-1.8 0-1.4 0.3-2.4 0-7.7 0.4-2.3 1.8-2.5 0.4-2.2-14.4-37.2-1.1-2.1-4-4.9-3.2-7.1-1.4-2.1-5.9-4.6-2.3-1.3-0.8-0.3-0.8-0.6-0.7-2.6-0.5-1-3.1-2.1-7.3-3.4-3.2-2.3-3.5-3-1.6-1-0.2-0.1z" id="TWPIF" name="Pingtung" />
                    <path d="M634.7 759.1l2.8-0.4-0.9-3.5-4.4-4.6-2.2-3.3-1-5.9 1.7-7 6.2-5.3 3.1-4.2 0-8.1 2.2-9.5-1.6-7.1 0.7-5 5.3-2.9 1.9-3.5-1.6-4.3 0.6-4.1 5.6-3.7 2.9-2.8 4.7-2.9 11.2-2.8 0.8 5.3 3.7 5.9 5.6 2 4.4 2.1 3.6 3.4 4.5 0.7 4.1 1.1 6.6 11.5 8.5 7 5.9 0.8 4.7-2.7 0.6-4.4 0-4.9 2.2-4.3 3.5-9.6 2.6-5.5 1.8-6.1 1.9-4.8 2.5-3.7 2.6-5-0.4-4.9-1.3-5 2.8-3.9 7.8-3.8 2.5 0.8-3.3 19-1.6 3.5-5.1 6.8-1.9 3.5-1.5 4.4-1 8.3 0.1 7.3-0.8 6.9-3.5 7.2-1.5 1.6-3.4 2.5-1.5 1.6-0.8 1.6-1.2 4.2-3.5 6.1-2.1 9.4-1.5 4.2-7.4 10.7-0.9 2-10 8.4-2.4 2.8-0.4 1.9 0.5 4.5-0.1 2-0.9 2.3-1.6 2.6-3.4 4.3-3.4 3.2-11.6 7.8-7.8 8.5-1.9 1-1.5 2-3.8 9.7-1.8 3.6-5.8 7.3-2.4 4.3-1.3 8.8-3.5 12.1-6.9 12.1-1 4.1-1.2 11.6 0.2 10.5-3.2 0.3-7.4-3.4-3.3-3.5-2.3-4.3-0.4-4.4 0.1-4.1-2.3-3.2-2.4-1.2-2-2.8 0.4-3.3 1.5-2.8 3.8-2.3 1.8-2.7-3.3-4-1.9-3.7 0-3.8-0.8-5.1-1.4-4.4-0.9-4.7 0.6-10.6 2.2-5.4 2.6-4.8 1.7-4.7 3.9-3.2 5.5-1.2 3.5-2 7-3 1.5-3.5 0.1-3.8 2-9.9-4-2.6-3.9-1-0.5-3.5-2.5-4.7z m134.6 166.8l3.3 2.6 1.5 1.7-0.2 2-3.9 1.3-5.3-2.2-4.9-3.4-2.8-2.7 0.8-1.9 0-1.9-0.7-1.6-1.3-1.5 14.1 0 0 1.2-0.4 0.8-0.6 1.7-0.2 2.1 0.6 1.8z m-19.5-125.9l-1-3 0.4-0.4 7.3-0.6 0.8 0.5 0.5 1.4-0.6 2.8-0.6 1.2-0.3 1.2 0.3 1.1-0.1 0.8-0.5-0.1-1.3 0-0.6-0.2-0.3-0.4-1.9-0.7-2.1-3.6z" id="TWTTT" name="Taitung" />
                    <path d="M727.6 474.4l2-1.5 0.9-1.4 2.5-1.3 2.2-2.7 0.9-3.7 2.2-3.6 5.4-3.4 1.7-4.5 0.3-3 3.4-3.5 1.8 1.5 4.7 2.2 10.8 2.8 6 2.3 4.7 0 3.5-3.3 1.7-4.3 2.7-0.6 13.4 7.9 8 1.3 0.8 0 0.5 0.5 0.6 1.1 0.5 1.1 0.2 0.7-1 1.7-4.2 4.1-4.6 6.3-3.3 2.7-1 1.4 0.5 1.5-0.6 1.1-4.9 3.6-1.8 1.8-2 4.3-2 8.8-5.4 7.8-1.1 3.2 0.2 3.4 1.3 3.8 1.1 1.6 0.9 0.7 0.6 1 0.1 2.3-0.8 2.7-2.7 4.1-0.5 2.5-0.3 4.6-2.3 11.7-4.6 12.4-5.8 28.8-3.4 7.1-8 46.2-2.5-0.8-7.8 3.8-2.8 3.9 1.3 5 0.4 4.9-2.6 5-2.5 3.7-1.9 4.8-1.8 6.1-2.6 5.5-3.5 9.6-2.2 4.3 0 4.9-0.6 4.4-4.7 2.7-5.9-0.8-8.5-7-6.6-11.5-4.1-1.1-4.5-0.7-3.6-3.4-4.4-2.1-5.6-2-3.7-5.9-0.8-5.3-0.2-1.8-2-5.5-4.6-3.7-4-2.6-0.7-2.9 1-2.3 4-1.8 2.2-3.5-1.4-4.2 4.3-2.5 2.2-2.1-1.2-4.4 1.1-1.9 1.1-3 3.7-2.7 5.4-1.2 5.3-0.2 3.8-3.4 1-6.2 2.8-3.7 5.5-2 3.3-2.3 1.1-3.6 2.3-9.1 0.9-6-0.7-5.2-0.8-3.9-2.3-2.9-1.5-2.9 4.1-6.8 0.1-2.7 1.8-5.1 2.8-6.1 2.2-6.3 1.1-7.2 0.5-5.4-1.3-3.2-1.5-2.4 1.7-5.5 3.7-7.7 5.8-7.6 0.1-2.7-1-3.3-3.8-2.4-2-2.2-0.2-7.2 2.7-2.1 4.7-1.6 3.8-1.7-0.2-2.6-1-4.5z" id="TWHUA" name="Hualien" />
                    <path d="M740.7 399.4l0.3-1.1 2.9-1.1 2.3 0.5 2.5-1 1.6-2.7-2.3-9 3.9-2.8 2.2-0.6 4.2-1.2 3.5-1.3 2.7-2.4 3.6-2.5 4.8-2.3 2.8-2-0.3-1.4-0.7-2.3-0.1-3 1.4-3.6 3.4-2.9 2.7-1.6 9.4-3.8 9.7-5.9 4.5-1.3 3.6-2.6 2.3-3.7 2.3-2.9 2.7-1.4 2.5-0.9 3.3-2.1 1.2-2.8-1.8-2.5 1-2.2 8.1-1.6 2.6-1.8 6-3.2 4.3-0.9 2.4 1.4 0.6 0.8-8.6 4.3-4 3.4-13.5 16.4-2.1 3.5-1.7 4.8-1.1 5.6-0.4 5.5 0.2 5.3 2.4 11.2-0.2 2.9-1 2.8 0.2 5.8 2.4 4.5 4.7 2.9 5.5 1.1 0 1.2-2.3-0.2-2.2 0.2-1.9 0.6-1.3 1 1.9 3.6 0.9 4.7-0.6 4.1-4.3 2.4-0.3 1.8 0.6 2.1 1.2 2 0.4 2-1.8 1.7-4.5 2.6-5 5.8-0.2 2.3 0.3 5-0.8 2-1 1.6-0.6 2.3-0.3 4.6-0.4 1.2-0.7 0.9-0.4 1 0.7 1.2 0.2 0.2-0.8 0-8-1.3-13.4-7.9-2.7 0.6-1.7 4.3-3.5 3.3-4.7 0-6-2.3-10.8-2.8-4.7-2.2-1.8-1.5-4.2-3.4-3.6 0-3.4 1.7-2.8 0.4-2.7-1.8-3.2-1.9-3.5-0.8-1.1-2.6 0.5-4-2.6-0.8 3.1-7.5 10.1-10.2 2.7-4.2-0.4-3.2 1-3.4 1.7-4.7" id="TWILA" name="Yilan" />
                    <path d="M754.1 381.6l-1.8-4-6.4-6-1-4.1-0.6-3.7 2.3-2.7 1-3.8-6-8.9-3.7-1.4-5.3 0.3-3.7-2.1 1-4.8-0.8-3.7-3.8-3.7-0.8-3.7 0.8-4.1-0.2-4.5 2.7-2.9 9.4-2.8 2.4-2.5 0.7-3-0.3-2.9-3.7-5.4-3.1-1.6-2.9-0.7-2.3-2.1-3.4-2.2-4.6-2.2-3-3.3 8.1-1.5 3.4-1.3 4.5-3.7 1.3-0.7 1.6-0.3 2.2 0 2.6 0.8 1.3 1.9 0.9 2 1.1 1.1 2.5-1-2.6-4.1-4.2-4.2-2.2-1.4 0.7-1.9 1.3-1.1 1.3-0.7 0.6-0.6 1.5-3.8 2.3-4.2 4.7-4.3 7-3.5 7.9-1.8 7.8 0.9 3.2 2.5 7.3 10.1 2.5 5.4 0.9-0.3 1.9-0.6 2.3-0.2 1.5 0.4-0.1 0.7-0.7 0.9-0.7 1.3 0 1.5 0.8 0.9 1.6 1.2-3.1 2.1-5.2 2.3-2.3 1.5 0.4 2.1 2.1 2.7 1.2 2.5 2.1 2.5 2.6 2.5 2.2 1.6 7.6 3.1 3.7 0.5 2.9-1.1 1.8-1.3 0.3-1.8-2.7-2.8-0.1-2.2 0.2-8.6 24.9 6.1 2.4 1.5-1.2 2.6-0.3 2.1 0.5 3.8 1.7 6.2 1.9 3 1.6 0.7 5-0.8 2.6 0.3 3 0.8 2.7 1.3 1.5 1.9-6.3 3.1-0.6-0.8-2.4-1.4-4.3 0.9-6 3.2-2.6 1.8-8.1 1.6-1 2.2 1.8 2.5-1.2 2.8-3.3 2.1-2.5 0.9-2.7 1.4-2.3 2.9-2.3 3.7-3.6 2.6-4.5 1.3-9.7 5.9-9.4 3.8-2.7 1.6-3.4 2.9-1.4 3.6 0.1 3 0.7 2.3 0.3 1.4-2.8 2-4.8 2.3-3.6 2.5-2.7 2.4-3.5 1.3-4.2 1.2" id="TWNWT" name="New Taipei City" />
                    <path d="M806.8 285.1l-0.2 8.6 0.1 2.2 2.7 2.8-0.3 1.8-1.8 1.3-2.9 1.1-3.7-0.5-7.6-3.1-2.2-1.6-2.6-2.5-2.1-2.5-1.2-2.5-2.1-2.7-0.4-2.1 2.3-1.5 5.2-2.3 3.1-2.1 1.1 0.7 0.5 0.8 1.2 1.1 2.8 1.1 8.1 1.9" id="TWKEE" name="Keelung City" />
                    <path d="M599.5 519.1l3 0.1 13 1.8 3-0.5 3.6-3.4 5.4-10.4 2.7-6.1 4.6-2.2 7.3 1.1 4.3-0.2 4.2-5.5 2.2-1.4 6.4 4.8 2.5-0.7 1.9-3.9 3.4-2.8 4.8 0.1 3.6-1.4 5.7-5.5 3.6-2.1 3.2-0.6 6.4-3.3 4.4-0.2 4.5-0.7 8-3.2 3.4-0.2 3.4 0.8 9.6 0.9 1 4.5 0.2 2.6-3.8 1.7-4.7 1.6-2.7 2.1 0.2 7.2 2 2.2 3.8 2.4 1 3.3-0.1 2.7-5.8 7.6-3.7 7.7-1.7 5.5 1.5 2.4 1.3 3.2-0.5 5.4-1.1 7.2-2.2 6.3-2.8 6.1-1.8 5.1-0.1 2.7-4.1 6.8 1.5 2.9 2.3 2.9 0.8 3.9 0.7 5.2-0.9 6-2.3 9.1-1.1 3.6-3.3 2.3-5.5 2-2.8 3.7-1 6.2-3.8 3.4-5.3 0.2-5.4 1.2-3.7 2.7-1.1 3-1.1 1.9 1.2 4.4-2.2 2.1-4.3 2.5-0.5-1.5-3-4.2-4.2-1.6-3.2-0.7-0.6-0.2-18.4-0.1-5.5-1-0.8-2.8-0.3-4.2-1.9-4.7-0.9-3.4 2.1-3.7 0.3-3.8-3.7-2.1-3-0.8-4.8-1.9-4.4-0.5-1.9-2.5-6 0.6-4.9 1.5-4.2-1.8-2.8-3.4 0.7-4.2 1.3-3.7-0.7-5.5 0.7-5.2 1.5-3.4-1.4-5.2 1.7-1.1 1.8-1.7 2.8-1.1 0.7-2.5-4.1-2.1-2.8-1-2.6-2.4-1.5-4.5 0.7-9.7 0.8-4.7 0.1-4.1 1.2-3.9 1.4-3.3-0.4-2.9 0.9-2.1 3.1-1.1 0-2.6" id="TWNAN" name="Nantou" />
                    <path d="M776.8 321.1l-4.2 0-3.5-0.8-2.6-2.3-2.8-3.2-4.1-3.2-2.9-4.9 1.1-5.3-0.8-4.5-4.2-4-2.7-3.1 1.2-2.1 1.3-1.7 1.5-3.3 2.6-2.9 7.8-4.7 2.1-1.8 2.9-1.4 2.8 0.9 1.5 1.6-0.4 2.6 0.3 2.4 1.1 2.4 1.2 2.6 1.8 7.2 2.8 2.5 1.1 3.2-1.1 4.8 0.1 3.6 3.3 1.9 2.7 2.3-1.4 3-5.5 7-3 1.2" id="TWTPE" name="Taipei City" />
                    <path d="M559.2 638.1l-5.3-1.2-5.1-3.3-4.4-1.7-0.6-4.1 2.7-2.9 6.7-1.2 5.7-0.5 4 1.5 3 1.6 1.7 2.9 1.9 4.9-2.2 1.6-3.2 0.4-4.9 2" id="TWCYI" name="Chiayi City" />
                  </g>
                </svg>

                {/* --- 精確對位的站點標記 --- */}

                {/* 北部 - 新竹 (坐標 693.7, 378.3) */}
                <div className="absolute top-[37.8%] left-[69.3%] group">
                  <div className="relative flex flex-col items-center">
                    <div className="absolute -inset-2 bg-emerald-500/20 rounded-full animate-ping"></div>
                    <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg z-20"></div>
                  </div>
                </div>

                {/* 中部 - 台中 (坐標 604.9, 482.7) */}
                <div className="absolute top-[48.2%] left-[60.4%] group">
                  <div className="relative flex flex-col items-center">
                    <div className="absolute -inset-2 bg-amber-500/20 rounded-full animate-ping"></div>
                    <div className="w-4 h-4 bg-amber-500 rounded-full border-2 border-white shadow-lg z-20"></div>
                  </div>
                </div>

                {/* 南部 - 高雄 (坐標 605.1, 724.8) */}
                <div className="absolute top-[72.4%] left-[60.5%] group">
                  <div className="relative flex flex-col items-center">
                    <div className="absolute -inset-4 bg-red-500/30 rounded-full animate-ping duration-[1000ms]"></div>
                    <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-xl z-20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Legend */}
            <div className="p-4 border-t border-slate-100 bg-white z-20">
              <div className="flex justify-between items-center text-[11px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm"></div>
                  <span className="text-slate-600 font-bold">1 Critical</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm"></div>
                  <span className="text-slate-600 font-bold">1 Warning</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm"></div>
                  <span className="text-slate-600 font-bold">12 Normal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  subtitle: string;
  count: string;
  status: string;
  statusColor: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle, count, status, statusColor }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-4">
    <div className="flex items-start justify-between">
      <div className="bg-slate-100 p-3 rounded-lg">
        <span className="material-symbols-outlined text-slate-500">settings_input_component</span>
      </div>
      <span className={`bg-${statusColor}-50 text-${statusColor}-700 text-xs font-bold px-2 py-1 rounded-full border border-${statusColor}-100`}>
        {status}
      </span>
    </div>
    <div>
      <h4 className="text-base font-bold text-slate-900">{title}</h4>
      <p className="text-slate-500 text-sm">{subtitle}</p>
    </div>
    <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-auto">
      <span className="text-slate-600 text-sm font-medium">{count}</span>
      <span className="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
    </div>
  </div>
);

export default FleetOverview;