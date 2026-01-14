
import React, { useState } from 'react';

interface MaintenanceRecord {
  id: string;
  recordId: string;
  title: string;
  date: string;
  techShort: string;
  icon: string;
  status: string;
  description: string;
  technician: string;
  duration: string;
  nextDue: string;
  workOrder: string;
  parameters: Array<{
    label: string;
    before: string;
    after: string;
    ok: boolean;
  }>;
  gallery: Array<{
    src: string;
    label: string;
  }>;
}

const MAINTENANCE_DATA: MaintenanceRecord[] = [
  {
    id: 'rec-1',
    recordId: '#REC-2023-8942',
    title: 'Annual Certification',
    date: 'Oct 24, 2023',
    techShort: 'J. Doe',
    icon: 'verified',
    status: 'PASS',
    description: 'Complete teardown and inspection performed. Replaced O-rings and gaskets. Seat tightness test passed within ANSI/FCI 70-2 Class IV standards.',
    technician: 'John Doe',
    duration: '4h 15m',
    nextDue: 'Oct 24, 2024',
    workOrder: 'WO-9921',
    parameters: [
      { label: 'Set Pressure (PSI)', before: '142.5', after: '150.0', ok: true },
      { label: 'Seat Tightness', before: 'Moderate Leak', after: 'Zero Bubble', ok: true },
      { label: 'Stroke Time (sec)', before: '4.2s', after: '3.8s', ok: true },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop', label: 'Inlet Flange - As Found (Control Valve)' },
      { src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop', label: 'Actuator Teardown & Internal Inspection' },
      { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', label: 'Final Calibration - Digital Positioner Setup' },
    ]
  },
  {
    id: 'rec-2',
    recordId: '#REC-2023-4410',
    title: 'Seal Replacement',
    date: 'Aug 12, 2023',
    techShort: 'A. Smith',
    icon: 'warning',
    status: 'PASS',
    description: 'Emergency replacement of stem packing due to fugitive emission leak detection. Used high-performance Graphite Packing set.',
    technician: 'Alice Smith',
    duration: '2h 45m',
    nextDue: 'Aug 12, 2024',
    workOrder: 'WO-8842',
    parameters: [
      { label: 'Packing Friction (lbf)', before: '450', after: '310', ok: true },
      { label: 'Stem Velocity (in/s)', before: '0.8', after: '1.2', ok: true },
      { label: 'Emission (ppm)', before: '540', after: '< 10', ok: true },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1531266752426-aad472b7bdf4?q=80&w=800&auto=format&fit=crop', label: 'Old Packing Removal' },
      { src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop', label: 'New Stem Polish' },
      { src: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop', label: 'Leak Test Completion' },
    ]
  },
  {
    id: 'rec-3',
    recordId: '#REC-2023-1022',
    title: 'Routine Inspection',
    date: 'Feb 02, 2023',
    techShort: 'M. Jones',
    icon: 'assignment',
    status: 'INFO',
    description: 'Visual inspection and signature analysis. Component is in fair condition with expected wear for current cycle count (125k).',
    technician: 'Mike Jones',
    duration: '1h 30m',
    nextDue: 'Feb 02, 2024',
    workOrder: 'WO-7710',
    parameters: [
      { label: 'Deadband (%)', before: '0.8', after: '0.8', ok: true },
      { label: 'Supply Pressure', before: '32.4', after: '32.4', ok: true },
      { label: 'Stiction (%)', before: '1.2', after: '1.2', ok: true },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1542367592-8849eb950fd8?q=80&w=800&auto=format&fit=crop', label: 'External Housing Inspection' },
      { src: 'https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?q=80&w=800&auto=format&fit=crop', label: 'Linkage Alignment Check' },
      { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop', label: 'Diagnostic Data Capture' },
    ]
  },
  {
    id: 'rec-4',
    recordId: '#REC-2022-0012',
    title: 'Installation',
    date: 'Jan 15, 2022',
    techShort: 'System Log',
    icon: 'check_circle',
    status: 'PASS',
    description: 'Initial site commissioning and FAT verification. Device calibrated to specific plant process parameters.',
    technician: 'Dave Wilson',
    duration: '6h 00m',
    nextDue: 'Jan 15, 2023',
    workOrder: 'WO-1001',
    parameters: [
      { label: 'Hysteresis (%)', before: 'N/A', after: '0.2', ok: true },
      { label: 'Linearity (%)', before: 'N/A', after: '99.8', ok: true },
      { label: 'Bench Set (psi)', before: 'N/A', after: '15-45', ok: true },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=800&auto=format&fit=crop', label: 'Unboxing & Inspection' },
      { src: 'https://images.unsplash.com/photo-1527666466760-f6a7a2b31176?q=80&w=800&auto=format&fit=crop', label: 'Site Mounting' },
      { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop', label: 'Initial Configuration' },
    ]
  }
];

const MaintenanceView: React.FC = () => {
  const [selectedRecordId, setSelectedRecordId] = useState<string>(MAINTENANCE_DATA[0].id);

  const activeRecord = MAINTENANCE_DATA.find(r => r.id === selectedRecordId) || MAINTENANCE_DATA[0];

  return (
    <div className="flex h-full overflow-hidden bg-background-light">
      {/* Timeline Sidebar */}
      <div className="w-80 flex-none overflow-y-auto border-r border-slate-200 bg-white p-6 scroll-smooth">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Timeline</h3>
        <div className="relative pl-2">
          <div className="absolute left-[19px] top-2 bottom-0 w-[2px] bg-slate-100"></div>
          {MAINTENANCE_DATA.map((item) => (
            <TimelineItem 
              key={item.id}
              title={item.title} 
              date={item.date} 
              tech={item.techShort} 
              icon={item.icon} 
              active={selectedRecordId === item.id} 
              onClick={() => setSelectedRecordId(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Detail View Pane */}
      <div className="flex-1 overflow-y-auto p-6 lg:p-10">
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
          
          {/* Summary Card */}
          <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                  activeRecord.status === 'PASS' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'
                }`}>
                  {activeRecord.status}
                </span>
                <span className="text-slate-400 text-sm font-medium">ID: {activeRecord.recordId}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Calibration Data: {activeRecord.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl font-medium">
                {activeRecord.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full md:w-auto min-w-[280px]">
              <InfoBox label="Technician" val={activeRecord.technician} />
              <InfoBox label="Duration" val={activeRecord.duration} />
              <InfoBox label="Next Due" val={activeRecord.nextDue} />
              <InfoBox label="Work Order" val={activeRecord.workOrder} />
            </div>
          </div>

          {/* Analysis Table Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">compare_arrows</span> Before vs After Analysis
            </h3>
            <div className="rounded-xl border border-slate-200 shadow-sm bg-white overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-bold w-1/3">Parameter</th>
                    <th className="px-6 py-4 font-bold text-orange-600">As Found (Before)</th>
                    <th className="px-6 py-4 font-bold text-primary">As Left (After)</th>
                    <th className="px-6 py-4 font-bold text-center w-24">Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {activeRecord.parameters.map((param, idx) => (
                    <TableRow key={idx} label={param.label} before={param.before} after={param.after} ok={param.ok} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Gallery Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">photo_library</span> Visual Inspection Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeRecord.gallery.map((img, idx) => (
                <GalleryImg 
                  key={idx}
                  src={img.src} 
                  label={img.label} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem: React.FC<{ title: string; date: string; tech: string; icon: string; active?: boolean; onClick: () => void }> = ({ title, date, tech, icon, active, onClick }) => (
  <div 
    onClick={onClick}
    className={`relative flex gap-4 mb-6 group cursor-pointer transition-all ${active ? 'scale-[1.02]' : 'opacity-60 hover:opacity-100'}`}
  >
    <div className="relative z-10 flex flex-col items-center">
      <div className={`size-10 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white transition-all ${active ? 'bg-primary text-white scale-110' : 'bg-white border-2 border-slate-200 text-slate-400'}`}>
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
    </div>
    <div className="flex-1 pt-1">
      <div className={`p-4 rounded-xl border transition-all duration-300 ${active ? 'bg-blue-50/50 border-primary shadow-sm' : 'bg-white/50 border-transparent'}`}>
        <p className={`text-sm font-bold tracking-tight ${active ? 'text-primary' : 'text-slate-800'}`}>{title}</p>
        <p className={`text-xs mt-1 font-semibold ${active ? 'text-blue-600/70' : 'text-slate-500'}`}>{date}</p>
        <p className="text-[11px] text-slate-400 mt-1 font-medium">{tech}</p>
      </div>
    </div>
  </div>
);

const InfoBox: React.FC<{ label: string; val: string }> = ({ label, val }) => (
  <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">{label}</p>
    <p className="text-slate-800 font-bold text-sm truncate">{val}</p>
  </div>
);

const TableRow: React.FC<{ label: string; before: string; after: string; ok?: boolean }> = ({ label, before, after, ok }) => (
  <tr className="group hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 font-bold text-slate-700">{label}</td>
    <td className="px-6 py-4 text-slate-600 font-medium">{before}</td>
    <td className="px-6 py-4 font-bold text-primary">{after}</td>
    <td className="px-6 py-4 text-center">
      {ok && (
        <span className="inline-flex items-center justify-center size-6 rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
          <span className="material-symbols-outlined text-[14px] filled">check_circle</span>
        </span>
      )}
    </td>
  </tr>
);

const GalleryImg: React.FC<{ src: string; label: string }> = ({ src, label }) => (
  <div className="group relative rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-md transition-all">
    <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={label} />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
      <p className="text-white font-bold text-xs leading-relaxed">{label}</p>
    </div>
  </div>
);

export default MaintenanceView;
