
import React, { useState, useMemo, useEffect } from 'react';

type DocType = 'report' | 'manual' | 'certificate' | 'log';

interface Document {
  id: string;
  title: string;
  type: DocType;
  info: string;
  date: string;
  badge?: string;
  badgeColor?: string;
}

const DocumentsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDocId, setActiveDocId] = useState('doc-1');
  const [isLoading, setIsLoading] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [showAnnotations, setShowAnnotations] = useState(true);

  // 模擬文件數據庫
  const documents: Document[] = [
    { id: 'doc-1', title: 'Final Inspection Report #892', type: 'report', info: 'Asset CV-2094 • Reports • 2.8 MB', date: 'Oct 24, 2023' },
    { id: 'doc-2', title: 'Centrifugal Pump A-102 Manual', type: 'manual', info: 'V-2.4 • Manuals • 15 MB', date: 'Oct 12, 2023' },
    { id: 'doc-3', title: 'FAT Report Q3 - 2023', type: 'report', info: 'Asset P-100 • Reports • 5.1 MB', date: 'Sep 10, 2023', badge: 'ARCHIVED' },
    { id: 'doc-4', title: 'Valve Health Certificate #9920', type: 'certificate', info: 'V-402 • Certificates • 2.4 MB', date: 'Aug 04, 2023', badge: 'EXPIRING', badgeColor: 'amber' },
  ];

  // 過濾搜尋結果
  const filteredDocs = useMemo(() => {
    return documents.filter(doc => doc.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  // 切換文件時的模擬加載效果
  const handleDocClick = (id: string) => {
    if (id === activeDocId) return;
    setIsLoading(true);
    setActiveDocId(id);
    setTimeout(() => setIsLoading(false), 600);
  };

  const activeDoc = documents.find(d => d.id === activeDocId) || documents[0];

  return (
    <div className="p-6 h-full flex flex-col min-h-0 bg-slate-50">
      {/* 標頭區 */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Document Center</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and view critical industrial asset documentation.</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary hover:bg-blue-700 text-white text-sm font-semibold h-10 px-6 shadow-md transition-all active:scale-95">
          <span className="material-symbols-outlined text-[20px]">upload_file</span>
          <span>Upload Document</span>
        </button>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
        {/* 左側列表：搜尋與文件導航 */}
        <div className="col-span-12 md:col-span-4 xl:col-span-3 flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-white sticky top-0 z-10">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </span>
              <input 
                className="w-full h-10 pl-10 pr-4 rounded-lg border-slate-200 text-sm focus:ring-primary focus:border-primary placeholder:text-slate-400 transition-all" 
                placeholder="Search by ID or title..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-slate-100">
              {filteredDocs.map((doc) => (
                <DocListItem 
                  key={doc.id} 
                  doc={doc} 
                  isActive={activeDocId === doc.id} 
                  onClick={() => handleDocClick(doc.id)}
                />
              ))}
              {filteredDocs.length === 0 && (
                <div className="p-8 text-center text-slate-400 text-sm">No documents found.</div>
              )}
            </ul>
          </div>
        </div>

        {/* 右側預覽器 */}
        <div className="col-span-12 md:col-span-8 xl:col-span-9 flex flex-col bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden relative">
          {/* 工具欄 */}
          <div className="flex-none px-6 py-3 border-b border-slate-200 flex items-center justify-between bg-white z-20 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                <button 
                  onClick={() => setZoom(prev => Math.max(50, prev - 10))}
                  className="p-1.5 hover:bg-white hover:shadow-sm rounded transition-all text-slate-600"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="text-[11px] font-bold text-slate-600 w-12 text-center">{zoom}%</span>
                <button 
                  onClick={() => setZoom(prev => Math.min(200, prev + 10))}
                  className="p-1.5 hover:bg-white hover:shadow-sm rounded transition-all text-slate-600"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
              <div className="h-6 w-px bg-slate-200 mx-1"></div>
              <button 
                onClick={() => setShowAnnotations(!showAnnotations)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${showAnnotations ? 'bg-amber-100 text-amber-700' : 'bg-slate-50 text-slate-500'}`}
              >
                <span className="material-symbols-outlined text-[16px]">comment</span>
                Notes
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 rounded transition-colors"><span className="material-symbols-outlined text-[20px]">download</span></button>
              <button className="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 rounded transition-colors"><span className="material-symbols-outlined text-[20px]">print</span></button>
            </div>
          </div>

          {/* PDF 畫布區域 */}
          <div className="flex-1 bg-slate-200/50 p-8 overflow-auto flex justify-center relative">
            {/* 加載遮罩 */}
            {isLoading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-in fade-in duration-300">
                <div className="w-12 h-12 border-4 border-slate-200 border-t-primary rounded-full animate-spin mb-4"></div>
                <p className="text-sm font-bold text-slate-600 tracking-widest uppercase">Rendering Document...</p>
              </div>
            )}

            {/* 紙張容器 */}
            <div 
              className="bg-white shadow-2xl transition-all duration-300 origin-top p-12 flex flex-col relative"
              style={{ 
                width: `${Math.round(800 * (zoom / 100))}px`, 
                minHeight: `${Math.round(1100 * (zoom / 100))}px`,
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'top center'
              }}
            >
              {/* 根據文件類型渲染內容 */}
              <DocumentContentRenderer type={activeDoc.type} doc={activeDoc} showNotes={showAnnotations} />

              {/* 頁碼腳註 */}
              <div className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-sans">
                <p>© 2024 Baker Hughes. Internal use only. Generated: {new Date().toLocaleDateString()}</p>
                <span>Page 1 of {activeDoc.type === 'manual' ? '24' : '1'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 列表項組件
const DocListItem: React.FC<{ doc: Document; isActive: boolean; onClick: () => void }> = ({ doc, isActive, onClick }) => (
  <li 
    onClick={onClick}
    className={`p-4 cursor-pointer transition-all border-l-4 ${isActive ? 'bg-primary/5 border-primary' : 'border-transparent hover:bg-slate-50 hover:border-slate-200'}`}
  >
    <div className="flex items-start gap-3">
      <div className={`p-2 rounded bg-white shadow-sm border border-slate-200 ${doc.type === 'manual' ? 'text-blue-500' : 'text-red-500'}`}>
        <span className="material-symbols-outlined text-[22px]">{doc.type === 'manual' ? 'menu_book' : 'picture_as_pdf'}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h3 className={`text-sm font-bold truncate pr-2 ${isActive ? 'text-primary' : 'text-slate-800'}`}>{doc.title}</h3>
          {doc.badge && <span className={`inline-flex px-1.5 py-0.5 rounded text-[9px] font-black bg-${doc.badgeColor || 'slate'}-100 text-${doc.badgeColor || 'slate'}-700`}>{doc.badge}</span>}
        </div>
        <p className="text-[11px] text-slate-500 mt-0.5">{doc.info}</p>
        <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">calendar_today</span> {doc.date}</p>
      </div>
    </div>
  </li>
);

// 核心渲染邏輯：根據類型顯示不同的互動內容
const DocumentContentRenderer: React.FC<{ type: DocType; doc: Document; showNotes: boolean }> = ({ type, doc, showNotes }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  if (type === 'report') {
    return (
      <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-center border-b-2 border-slate-900 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-slate-900 text-white flex items-center justify-center rounded shadow-md">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-sans">Asset Health Report</span>
              <span className="text-[10px] text-slate-400 font-sans tracking-widest font-bold">BH-IND-DIAGNOSTICS</span>
            </div>
          </div>
          <div className="text-right font-sans">
            <p className="text-xs font-bold text-slate-800">Ref: {doc.id.toUpperCase()}</p>
            <p className="text-[10px] text-slate-400">Date: {doc.date}</p>
          </div>
        </div>

        <div className="space-y-6 font-sans">
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">1.0 Component Overview</h4>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-1"><span>Target Asset:</span><span className="font-bold">CV-2094 Control Valve</span></div>
              <div className="flex justify-between border-b border-slate-200 pb-1"><span>Manufacturer:</span><span className="font-bold">Masoneilan</span></div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">2.0 Diagnostic Matrix</h4>
            <div className="border border-slate-800 rounded-sm overflow-hidden">
              <table className="w-full text-xs">
                <thead><tr className="bg-slate-800 text-white"><th className="p-3 text-left">Metric</th><th className="p-3 text-left">Status</th><th className="p-3 text-right">Value</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { m: 'Stiction', s: 'Normal', v: '0.8%', c: 'green' },
                    { m: 'Hysteresis', s: 'Warning', v: '2.4%', c: 'amber' },
                    { m: 'Deadband', s: 'Critical', v: '1.2%', c: 'red' },
                  ].map((row, i) => (
                    <tr 
                      key={i} 
                      onClick={() => setSelectedRow(selectedRow === i ? null : i)}
                      className={`cursor-pointer transition-colors ${selectedRow === i ? 'bg-primary/5' : 'hover:bg-slate-50'}`}
                    >
                      <td className="p-3 font-bold">{row.m}</td>
                      <td className="p-3"><span className={`text-${row.c}-600 font-black uppercase text-[10px]`}>{row.s}</span></td>
                      <td className="p-3 text-right font-mono">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {selectedRow !== null && (
              <div className="mt-2 p-3 bg-blue-50 border-l-4 border-blue-500 text-[11px] animate-in slide-in-from-top-2">
                <p className="font-bold text-blue-700">Expert Recommendation:</p>
                <p className="text-blue-800 mt-1">Mechanical adjustment required on the actuator link. Estimated repair time: 2.5 hours.</p>
              </div>
            )}
          </div>
        </div>

        {showNotes && (
          <div className="absolute top-24 -right-4 translate-x-1/2 w-48 bg-amber-50 border border-amber-200 p-3 rounded shadow-xl z-30 font-sans rotate-1 animate-in zoom-in-95">
            <p className="text-[10px] font-bold text-amber-800 mb-1">Eng. Jason</p>
            <p className="text-[11px] text-amber-900 leading-tight">These deadband levels are highly concerning. We need to prioritize this in the next maintenance cycle.</p>
            <div className="absolute top-4 -left-2 size-4 bg-amber-50 border-l border-t border-amber-200 -rotate-45"></div>
          </div>
        )}
      </div>
    );
  }

  if (type === 'manual') {
    return (
      <div className="flex flex-col animate-in fade-in scale-95 duration-500">
        <div className="text-center border-b pb-8 mb-8">
          <span className="text-4xl font-black text-slate-900 uppercase tracking-tighter block mb-2">Technical Operations Manual</span>
          <span className="text-sm text-slate-400 font-sans italic">Rev 2.4 | Publication No: BH-MAN-102-A</span>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 bg-slate-50 p-6 rounded flex flex-col items-center justify-center border border-dashed border-slate-300">
            <span className="material-symbols-outlined text-[64px] text-slate-300 mb-4">settings_input_component</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Schematic View 01</span>
          </div>
          <div className="col-span-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-800">1.1 Installation Procedures</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Before initiating installation, ensure all pressure lines are fully bled. 
              Mount the SVI3 positioner directly onto the actuator following the bracket alignment marks (A-4 to B-2).
            </p>
            <ul className="text-xs space-y-2 list-disc pl-4 text-slate-500 font-sans">
              <li>Verify torque on all 5/16" hex bolts (12 Nm).</li>
              <li>Apply thread sealant only to non-breather ports.</li>
              <li>Connect 4-20mA loop and verify initial handshake.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'certificate') {
    return (
      <div className="flex flex-col items-center animate-in zoom-in-95 duration-700 h-full relative">
        {/* 背景紋路 */}
        <div className="absolute inset-0 opacity-5 border-[12px] border-slate-100 m-8 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-[0.03] text-[100px] font-black pointer-events-none select-none">CERTIFIED</div>
        
        <div className="size-16 text-slate-900 mb-6">
          <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-serif text-slate-800 text-center mb-2">Certificate of Compliance</h1>
        <p className="text-sm text-slate-400 uppercase tracking-widest font-sans mb-12">Quality Assurance & Safety Standards</p>
        
        <div className="text-center space-y-6 max-w-lg mb-16">
          <p className="text-lg italic font-serif text-slate-600">This is to certify that the asset designated as</p>
          <p className="text-2xl font-bold text-slate-900 font-sans underline decoration-slate-300 underline-offset-8">Masoneilan Valve V-402</p>
          <p className="text-sm text-slate-600 leading-loose">
            has been rigorously tested and evaluated according to BH-QA-PROTO-01 and found to be in full compliance with ISO 9001:2015 and ASME Boiler & Pressure Vessel Code standards.
          </p>
        </div>

        <div className="w-full flex justify-around items-end">
          <div className="flex flex-col items-center">
            <div className="w-32 h-px bg-slate-300 mb-2"></div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">QA Director Signature</p>
          </div>
          <div className="size-16 bg-slate-100 flex items-center justify-center rounded border border-slate-200">
            <span className="material-symbols-outlined text-slate-300 text-[32px]">qr_code_2</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-px bg-slate-300 mb-2"></div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Issued Timestamp</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default DocumentsView;
