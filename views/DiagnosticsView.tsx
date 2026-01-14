
import React from 'react';
// Added missing PieChart, Pie, and Cell imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const DiagnosticsView: React.FC = () => {
  const mainChartData = Array.from({ length: 20 }, (_, i) => ({
    signal: i * 5,
    baseline: Math.sin((i / 20) * Math.PI) * 100,
    latest: Math.sin((i / 20) * Math.PI) * 100 * (1 - Math.random() * 0.2),
  }));

  const trendData = Array.from({ length: 15 }, (_, i) => ({ day: i, val: 50 + Math.random() * 50 }));

  return (
    <div className="p-6 md:p-8 space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-slate-200 pb-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Control Valve CV-2094</h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
              <span className="material-symbols-outlined text-[16px]">warning</span> WARNING
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">tag</span> Tag: #8829-AZ</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> Unit 4, Refinery B</span>
            <span className="text-slate-700 font-medium">Last Scan: 10 mins ago</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">download</span> Export Analysis
          </button>
          <button className="flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-700">
            <span className="material-symbols-outlined text-[20px]">build</span> Create Work Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Hysteresis Signature Analysis</h3>
              <p className="text-sm text-slate-500">Comparing As-Built Baseline vs. Latest Diagnostic Scan</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 border-t-2 border-dashed border-slate-400"></span>
                <span className="text-slate-600">As-Built</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-1 rounded-full bg-primary"></span>
                <span className="text-slate-900 font-medium">Latest Scan</span>
              </div>
            </div>
          </div>
          <div className="p-6 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mainChartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="signal" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} label={{ value: 'Command Signal (%)', position: 'insideBottom', offset: -5 }} />
                <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} label={{ value: 'Valve Position (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="baseline" stroke="#94a3b8" strokeDasharray="5 5" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="latest" stroke="#005fb8" dot={false} strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="xl:col-span-1 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 text-lg mb-4">Diagnostic Health Score</h3>
            <div className="flex items-center gap-6">
              <div className="relative size-24 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{ val: 72 }, { val: 28 }]} innerRadius={30} outerRadius={40} dataKey="val" stroke="none">
                      <Cell fill="#f59e0b" />
                      <Cell fill="#f1f5f9" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-slate-900">72</span>
                  <span className="text-[10px] font-bold text-amber-600 uppercase">Fair</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Device performance has degraded by <span className="font-bold text-red-600">12%</span> due to mechanical friction.</p>
                <a className="text-primary text-sm font-semibold hover:underline" href="#">View Historical Log</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col">
            <div className="p-5 border-b border-slate-200"><h3 className="font-bold text-slate-900 text-lg">Key Parameters</h3></div>
            <div className="flex-1 divide-y divide-slate-100">
              <MetricItem label="Stiction" value="2.4%" status="CRITICAL" trend="+0.8%" trendUp />
              <MetricItem label="Avg Hysteresis" value="1.8%" status="HIGH" trend="+0.2%" trendUp />
              <MetricItem label="Linearity" value="98.2%" status="NORMAL" trend="Stable" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <h3 className="text-xl font-bold text-slate-900">Trend Matrix (30 Days)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TrendCard label="Friction Trend" value="High" color="#EF4444" data={trendData} />
          <TrendCard label="Deadband Stability" value="0.4%" color="#005fb8" type="area" data={trendData} />
          <TrendCard label="T86 Response" value="1.2s" color="#10b981" type="bar" data={trendData} />
        </div>
      </div>
    </div>
  );
};

const MetricItem: React.FC<{ label: string; value: string; status: string; trend: string; trendUp?: boolean }> = ({ label, value, status, trend, trendUp }) => (
  <div className="p-5 flex items-center justify-between group hover:bg-slate-50 transition-colors">
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${status === 'CRITICAL' ? 'bg-red-50 text-red-600' : status === 'HIGH' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
        <span className="material-symbols-outlined">{status === 'CRITICAL' ? 'report_problem' : status === 'HIGH' ? 'sync_problem' : 'straight'}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="text-lg font-bold text-slate-900">{value}</p>
      </div>
    </div>
    <div className="text-right">
      <span className={`inline-block px-2 py-1 text-xs font-bold rounded ${status === 'CRITICAL' ? 'bg-red-100 text-red-700' : status === 'HIGH' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
        {status}
      </span>
      <p className={`text-xs mt-1 font-medium flex items-center justify-end gap-0.5 ${trendUp ? 'text-red-600' : 'text-slate-400'}`}>
        {trendUp && <span className="material-symbols-outlined text-[14px]">trending_up</span>} {trend}
      </p>
    </div>
  </div>
);

const TrendCard: React.FC<{ label: string; value: string; color: string; data: any[]; type?: 'line' | 'area' | 'bar' }> = ({ label, value, color, data, type = 'line' }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
    <div className="flex justify-between items-start mb-4">
      <div><p className="text-sm font-medium text-slate-500">{label}</p><p className="text-2xl font-bold text-slate-900">{value}</p></div>
      <div className="bg-slate-50 rounded p-1"><span className="material-symbols-outlined text-[20px]" style={{ color }}>{type === 'line' ? 'trending_up' : type === 'area' ? 'show_chart' : 'timer'}</span></div>
    </div>
    <div className="h-24 w-full">
      <ResponsiveContainer width="100%" height="100%">
        {type === 'line' ? (
          <LineChart data={data}><Line type="monotone" dataKey="val" stroke={color} strokeWidth={2} dot={false} /></LineChart>
        ) : type === 'area' ? (
          <AreaChart data={data}><Area type="monotone" dataKey="val" stroke={color} fill={`${color}20`} /></AreaChart>
        ) : (
          <BarChart data={data}><Bar dataKey="val" fill={color} radius={[2, 2, 0, 0]} /></BarChart>
        )}
      </ResponsiveContainer>
    </div>
  </div>
);

export default DiagnosticsView;
