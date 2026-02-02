import React from 'react';
import { ChevronRight, Clock, Users, Target, Activity } from 'lucide-react';

const PRDDocument: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-[#F9F9FB] flex justify-center py-4 md:py-8">
      <div className="bg-white w-full max-w-[900px] min-h-[100vh] md:min-h-[1200px] shadow-sm border border-slate-200 text-slate-800 font-sans mx-2 md:mx-0">
        
        {/* Document Header */}
        <div className="px-6 py-8 md:px-12 md:py-12 border-b border-slate-100">
          <div className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold px-2 py-1 mb-6 uppercase tracking-wider rounded-sm">
            PRD Template
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">[Food Delivery App Revamp]</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-slate-500 mt-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700 w-28 md:w-32">Direct questions to:</span>
              <span className="bg-slate-50 px-1.5 py-0.5 rounded text-slate-600 border border-slate-100">@product-owner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700 w-28 md:w-32">Last updated:</span>
              <span>Feb 02, 2026</span>
            </div>
             <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700 w-28 md:w-32">Status:</span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                In Progress
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 md:px-12 md:py-8 space-y-12">
          
          {/* Section 1: Context */}
          <section className="space-y-8">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2 border-l-4 border-orange-500 pl-3">What</h2>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                A comprehensive revamp of the consumer-facing food delivery mobile and web application. 
                The initiative focuses on streamlining the user journey from login to live tracking, introducing a new high-fidelity UI design system, 
                and optimizing the "Happy Path" for conversion.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2 border-l-4 border-orange-500 pl-3">Why</h2>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                Current user drop-off rates at the "Discovery" phase are 15% higher than industry average. 
                User research indicates friction in the restaurant filtering process and lack of trust indicators during checkout.
                This redesign aligns with the Q4 goal of increasing Order Conversion Rate (OCR) by 2.5%.
              </p>
            </div>
          </section>

          {/* Section 2: Success Criteria */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Success Criteria</h2>
            <div className="border border-slate-200 rounded-lg overflow-x-auto shadow-sm">
              <table className="w-full text-sm text-left min-w-[600px]">
                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 w-1/4">Metric</th>
                    <th className="px-6 py-3 w-1/4">Baseline (Date)</th>
                    <th className="px-6 py-3 w-1/4">Target (Date)</th>
                    <th className="px-6 py-3 w-1/4">Latest (Updated On)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-3 font-medium text-slate-900">Conversion Rate</td>
                    <td className="px-6 py-3 text-slate-500">12.5% (Aug 1)</td>
                    <td className="px-6 py-3 text-slate-500">15.0% (Jan 1)</td>
                    <td className="px-6 py-3"><span className="text-emerald-700 font-semibold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded text-xs">13.2% (Oct 20)</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-3 font-medium text-slate-900">Avg Session Time</td>
                    <td className="px-6 py-3 text-slate-500">4m 20s (Aug 1)</td>
                    <td className="px-6 py-3 text-slate-500">3m 30s (Jan 1)</td>
                    <td className="px-6 py-3"><span className="text-amber-700 font-semibold bg-amber-50 border border-amber-100 px-2 py-0.5 rounded text-xs">4m 05s (Oct 20)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Overview / Roadmap Visual */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Overview</h2>
            <div className="border border-slate-300 rounded-lg overflow-x-auto shadow-sm select-none">
              <div className="min-w-[700px]">
                {/* Grid Container - 6 Columns for perfect vertical alignment */}
                <div className="grid grid-cols-6 border-b border-slate-300">
                    {/* Header Row */}
                    <div className="col-span-2 py-2.5 bg-[#65A30D] text-white text-[11px] font-bold uppercase tracking-wider text-center border-r border-white/20">
                        Problem Space
                    </div>
                    <div className="col-span-2 py-2.5 bg-[#0284C7] text-white text-[11px] font-bold uppercase tracking-wider text-center border-r border-white/20">
                        Solution Space
                    </div>
                    <div className="col-span-1 py-2.5 bg-[#475569] text-white text-[11px] font-bold uppercase tracking-wider text-center border-r border-white/20">
                        Observing
                    </div>
                    <div className="col-span-1 py-2.5 bg-[#CA8A04] text-white text-[11px] font-bold uppercase tracking-wider text-center">
                        Archived
                    </div>
                </div>

                {/* Stages Row */}
                <div className="grid grid-cols-6 text-xs font-semibold text-slate-700 text-center divide-x divide-slate-300 border-b border-slate-300 bg-slate-50">
                    <div className="py-2.5 hover:bg-slate-100 transition-colors">Discover</div>
                    <div className="py-2.5 hover:bg-slate-100 transition-colors">Define</div>
                    <div className="py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">Explore</div>
                    <div className="py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">Deliver</div>
                    <div className="py-2.5 hover:bg-slate-100 transition-colors">Learn</div>
                    <div className="py-2.5 hover:bg-slate-100 transition-colors">Move On</div>
                </div>

                {/* Marker Row */}
                <div className="relative h-14 bg-white border-b border-slate-200">
                    {/* Grid lines for visual guidance */}
                    <div className="absolute inset-0 grid grid-cols-6 divide-x divide-slate-100 pointer-events-none">
                      <div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                    
                    {/* Pin Positioned at 'Deliver' (Column 4) */}
                    {/* Column 4 center is approx 58.33% (3.5/6) */}
                    <div className="absolute top-1/2 left-[58.33%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-help z-10">
                        <div className="w-3 h-3 bg-red-500 rounded-full border-[3px] border-white shadow-md animate-pulse ring-1 ring-red-200" />
                        <div className="h-4 w-0.5 bg-red-300 -mt-0.5"></div>
                        <span className="text-[9px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-100 uppercase tracking-tight shadow-sm">We are here</span>
                    </div>
                </div>

                {/* Documents Row */}
                <div className="grid grid-cols-6 text-[10px] text-slate-500 text-center divide-x divide-slate-200 bg-slate-50/30">
                  <div className="py-3 px-1 hover:text-slate-800 transition-colors cursor-pointer">1 Pager</div>
                  <div className="py-3 px-1 hover:text-slate-800 transition-colors cursor-pointer">Product Spec</div>
                  <div className="py-3 px-1 hover:text-slate-800 transition-colors cursor-pointer">Design Exploration</div>
                  <div className="py-3 px-1 font-bold text-slate-800 bg-white shadow-inner ring-1 ring-black/5 z-10">Epic / Issues</div>
                  <div className="py-3 px-1 hover:text-slate-800 transition-colors cursor-pointer">XP Template</div>
                  <div className="py-3 px-1 hover:text-slate-800 transition-colors cursor-pointer opacity-50">N/A</div>
                </div>
              </div>
            </div>
          </section>

           {/* Section 4: Team */}
           <section className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Team</h2>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                        <span className="text-slate-500 font-medium">Product Management</span>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-bold">AM</div>
                            <span className="font-semibold text-slate-800">Ankur M.</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                        <span className="text-slate-500 font-medium">Product Design</span>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-[10px] font-bold">AM</div>
                            <span className="font-semibold text-slate-800">Ankur M.</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                        <span className="text-slate-500 font-medium">User Research</span>
                        <span className="text-slate-400 italic">TBD</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                        <span className="text-slate-500 font-medium">Analytics</span>
                        <span className="text-slate-400 italic">TBD</span>
                    </div>
                     <div className="flex justify-between items-center pt-1">
                        <span className="text-slate-500 font-medium">Engineering</span>
                        <span className="text-slate-400 italic">TBD</span>
                    </div>
                </div>
            </div>
           </section>

           {/* Section 5: Product Spec */}
           <section className="pt-10 border-t border-slate-200">
               <h2 className="text-2xl font-bold text-slate-900 mb-8">Product Spec</h2>
               
               <div className="space-y-10">
                   <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6">
                       <h3 className="text-sm font-bold text-slate-900 pt-0.5 uppercase tracking-wide md:text-right text-left">Alignment</h3>
                       <div className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-200 pl-4">
                         This initiative ties to the Q4 Strategy: "Operational Excellence". By reducing friction in the ordering process, we directly impact the "Time to Order" KPI, a core company metric for 2024.
                       </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6">
                       <h3 className="text-sm font-bold text-slate-900 pt-0.5 uppercase tracking-wide md:text-right text-left">Key Insights</h3>
                       <div className="text-slate-600 text-sm leading-relaxed space-y-3 border-l-2 border-slate-200 pl-4">
                           <p className="bg-slate-50 p-2 rounded-md">"I just want to reorder my usual, but the app forces me to search every time." <br/><span className="text-slate-400 text-xs">- User Interview, Sept '23</span></p>
                           <p>• <span className="font-semibold">Quantitative:</span> 40% of sessions end on the search results page without a click.</p>
                       </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6">
                       <h3 className="text-sm font-bold text-slate-900 pt-0.5 uppercase tracking-wide md:text-right text-left">Hypothesis</h3>
                       <div className="text-slate-600 text-sm leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm">
                           We believe <span className="font-bold text-blue-800">grouping restaurants by "Cuisines" and "Past Orders"</span> will lead to <span className="font-bold text-blue-800">faster decision making</span>, which will result in <span className="font-bold text-blue-800">a 15% increase in conversion</span> by <span className="font-bold text-blue-800">Q1 2024</span>.
                       </div>
                   </div>
               </div>
           </section>

           {/* Section 6: Design Exploration */}
           <section className="pt-10 border-t border-slate-200">
               <h2 className="text-2xl font-bold text-slate-900 mb-8">Design Exploration</h2>
               
               <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-900 mb-4">Initial Ideas</h3>
                  <div className="border border-slate-200 rounded-lg overflow-x-auto">
                      <table className="w-full text-sm min-w-[500px]">
                          <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                              <tr>
                                  <th className="px-4 py-3 text-left w-1/3">Idea</th>
                                  <th className="px-4 py-3 text-left">Description</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                              <tr>
                                  <td className="px-4 py-3 font-medium text-slate-800">Map-First Discovery</td>
                                  <td className="px-4 py-3 text-slate-600">Open the app directly to a map view showing nearby open restaurants.</td>
                              </tr>
                               <tr>
                                  <td className="px-4 py-3 font-medium text-slate-800">"Spin the Wheel"</td>
                                  <td className="px-4 py-3 text-slate-600">Gamified random restaurant selector for indecisive users.</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
               </div>

               <div className="mb-6">
                   <h3 className="text-sm font-bold text-slate-900 mb-4">Key Decisions</h3>
                   <div className="space-y-4">
                       <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                           <div className="mt-1 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                           <div className="text-sm text-slate-600">
                               <span className="font-bold text-slate-900 block mb-1">Decision: Discarded "Map-First Discovery"</span>
                               <span className="italic text-slate-500">Rationale: User testing showed high cognitive load; users prefer lists for scanning options.</span>
                           </div>
                       </div>
                       <div className="flex gap-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                           <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                           <div className="text-sm text-slate-600">
                               <span className="font-bold text-emerald-900 block mb-1">Decision: Proceed with "Smart Lists"</span>
                               <span className="italic text-emerald-700">Rationale: Personalization based on time-of-day performed best in A/B prototypes.</span>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

        </div>
      </div>
    </div>
  );
};

export default PRDDocument;