import React from 'react';
import { DeviceType } from '../types';
import { 
  Search, Star, Clock, MapPin, ShoppingBag, 
  Plus, CreditCard, User, ChevronRight, CheckCircle2,
  Bike, Navigation, Flame, ArrowRight, MoreVertical
} from 'lucide-react';

// --- UNIFIED DESIGN SYSTEM ---
const THEME = {
  // Brand Colors (Orange)
  primary: 'orange',
  bgPrimary: 'bg-orange-600',
  textPrimary: 'text-orange-600',
  bgPrimaryLight: 'bg-orange-50',
  borderPrimary: 'border-orange-100',
  
  // Neutrals (Slate)
  textMain: 'text-slate-800',
  textSub: 'text-slate-500',
  textLight: 'text-slate-400',
  bgSurface: 'bg-white',
  bgBackground: 'bg-slate-50',
  borderLight: 'border-slate-100',
  borderMedium: 'border-slate-200',

  // Components
  card: 'bg-white border border-slate-100 shadow-sm rounded-xl',
  buttonPrimary: 'bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-200 transition-all active:scale-[0.98]',
  buttonOutline: 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors',
  input: 'bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-100 outline-none transition-all',
};

/* --- SCREEN 1: LOGIN & ONBOARDING --- */
export const LoginScreen: React.FC<{ device: DeviceType }> = () => (
  <div className={`h-full flex flex-col justify-center px-6 relative bg-white overflow-hidden`}>
    {/* Decorative Background */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60" />
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60" />

    <div className="relative z-10 w-full max-w-[280px] mx-auto">
      {/* Brand */}
      <div className="flex flex-col items-center mb-8">
        <div className={`w-12 h-12 ${THEME.bgPrimary} rounded-xl flex items-center justify-center shadow-lg shadow-orange-200 mb-4`}>
          <ShoppingBag className="text-white w-6 h-6" />
        </div>
        <h2 className={`text-lg font-bold ${THEME.textMain}`}>FoodApp</h2>
        <p className={`text-[10px] ${THEME.textSub} mt-1`}>Delicious meals, delivered.</p>
      </div>

      {/* Form */}
      <div className="space-y-3">
        <div className="space-y-1">
          <label className={`text-[9px] font-semibold ${THEME.textMain} ml-1`}>Email Address</label>
          <div className={`${THEME.input} rounded-lg px-3 py-2.5 flex items-center`}>
            <User size={12} className="text-slate-400 mr-2" />
            <span className={`text-[10px] ${THEME.textMain}`}>user@example.com</span>
            <CheckCircle2 size={10} className="text-emerald-500 ml-auto" />
          </div>
        </div>

        <button className={`w-full ${THEME.buttonPrimary} rounded-lg py-2.5 flex items-center justify-center gap-2 mt-2`}>
          <span className="text-[10px] font-bold">Continue</span>
          <ArrowRight size={12} />
        </button>
      </div>

      {/* Social Divider */}
      <div className="relative my-6">
        <div className={`absolute inset-0 flex items-center`}>
          <div className={`w-full border-t ${THEME.borderMedium}`}></div>
        </div>
        <div className="relative flex justify-center text-[9px]">
          <span className={`bg-white px-2 ${THEME.textLight}`}>or continue with</span>
        </div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-3">
        <button className={`${THEME.buttonOutline} py-2 rounded-lg flex items-center justify-center gap-2`}>
          <div className="w-3 h-3 bg-slate-800 rounded-full flex items-center justify-center text-[6px] text-white font-serif font-bold">G</div>
          <span className="text-[9px] font-semibold">Google</span>
        </button>
        <button className={`${THEME.buttonOutline} py-2 rounded-lg flex items-center justify-center gap-2`}>
           <div className="w-3 h-3 bg-black rounded-full flex items-center justify-center text-[6px] text-white font-serif"></div>
          <span className="text-[9px] font-semibold">Apple</span>
        </button>
      </div>
    </div>
  </div>
);

/* --- SCREEN 2: RESTAURANT DISCOVERY --- */
export const DiscoveryScreen: React.FC<{ device: DeviceType }> = () => (
  <div className={`${THEME.bgBackground} min-h-full flex flex-col`}>
    {/* Header */}
    <div className={`bg-white px-4 pt-4 pb-3 sticky top-0 z-10 border-b ${THEME.borderLight}`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className={`text-[8px] font-bold ${THEME.textLight} uppercase tracking-wider`}>Deliver to</span>
          <div className={`flex items-center gap-1 text-[11px] font-bold ${THEME.textPrimary}`}>
            Home • 123 Tech Blvd
            <ChevronRight size={10} />
          </div>
        </div>
        <div className={`w-7 h-7 ${THEME.bgBackground} rounded-full flex items-center justify-center border ${THEME.borderMedium}`}>
          <User size={12} className={THEME.textMain} />
        </div>
      </div>

      {/* Search Bar */}
      <div className={`${THEME.input} rounded-xl px-3 py-2 flex items-center gap-2`}>
        <Search size={12} className={THEME.textLight} />
        <span className={`text-[10px] ${THEME.textLight}`}>Find restaurants, items...</span>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-hidden mt-3 pb-1">
        {['All', 'Burgers', 'Pizza', 'Healthy', 'Asian'].map((cat, i) => (
          <div key={cat} className={`
            px-3 py-1.5 rounded-full text-[9px] font-semibold whitespace-nowrap border
            ${i === 1 ? `${THEME.bgPrimary} ${THEME.textPrimary} bg-opacity-10 ${THEME.borderPrimary}` : `bg-white ${THEME.textSub} ${THEME.borderMedium}`}
          `}>
            {cat}
          </div>
        ))}
      </div>
    </div>

    {/* List Content */}
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-end">
        <h3 className={`text-[11px] font-bold ${THEME.textMain}`}>Popular Near You</h3>
        <span className={`text-[9px] ${THEME.textPrimary} font-medium`}>View all</span>
      </div>

      {/* Restaurant Cards */}
      {[1, 2, 3].map((i) => (
        <div key={i} className={`${THEME.card} overflow-hidden group`}>
          <div className="h-24 bg-slate-200 relative">
             {/* Abstract Food Image Placeholder */}
            <div className={`w-full h-full bg-slate-200 flex items-center justify-center text-slate-300`}>
                <ShoppingBag size={24} />
            </div>
             <img src={`https://picsum.photos/400/200?random=${i}`} className="absolute inset-0 w-full h-full object-cover" alt="Restaurant" />
            
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
              <Clock size={8} className={THEME.textSub} />
              <span className={`text-[8px] font-bold ${THEME.textMain}`}>20-30m</span>
            </div>
            {i === 1 && (
              <div className={`absolute top-2 left-2 ${THEME.bgPrimary} text-white px-2 py-0.5 rounded text-[8px] font-bold shadow-sm`}>
                Promo
              </div>
            )}
          </div>
          
          <div className="p-2.5">
            <div className="flex justify-between items-start">
              <div>
                <h4 className={`text-[10px] font-bold ${THEME.textMain}`}>Burger & Co.</h4>
                <div className={`text-[9px] ${THEME.textSub} flex items-center gap-1 mt-0.5`}>
                  <span>$$</span>
                  <span className="w-0.5 h-0.5 bg-slate-300 rounded-full" />
                  <span>American, Fast Food</span>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                <span className="text-[8px] font-bold text-emerald-700">4.8</span>
                <Star size={6} className="fill-emerald-700 text-emerald-700" />
              </div>
            </div>
            
            <div className={`mt-2 pt-2 border-t ${THEME.borderLight} flex items-center gap-1.5`}>
              <Bike size={10} className={THEME.textPrimary} />
              <span className={`text-[8px] ${THEME.textSub}`}>Free delivery on orders over $15</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* --- SCREEN 3: MENU & CART --- */
export const MenuScreen: React.FC<{ device: DeviceType }> = () => (
  <div className="bg-white min-h-full flex flex-col">
    {/* Restaurant Hero - Compact */}
    <div className="h-32 bg-slate-800 relative shrink-0">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
      <img src="https://picsum.photos/400/200?random=10" className="w-full h-full object-cover opacity-60" alt="Restaurant Header" />
      
      {/* Navbar overlay */}
      <div className="absolute top-0 left-0 right-0 p-3 z-20 flex justify-between text-white">
        <div className="w-6 h-6 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <ArrowRight size={12} className="rotate-180" />
        </div>
        <div className="flex gap-2">
            <div className="w-6 h-6 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <Search size={12} />
            </div>
             <div className="w-6 h-6 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <MoreVertical size={12} />
            </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-4 right-4 z-20 text-white">
        <h1 className="text-sm font-bold shadow-sm">Gourmet Burger Kitchen</h1>
        <div className="flex items-center gap-2 text-[9px] mt-1 text-white/90">
           <Star size={9} className="fill-amber-400 text-amber-400" /> 
           <span className="font-semibold">4.8</span>
           <span>(1.2k+)</span>
           <span>•</span>
           <span>Burgers</span>
        </div>
      </div>
    </div>

    {/* Menu Items */}
    <div className={`flex-1 overflow-y-auto p-4 ${THEME.bgBackground}`}>
      <div className="flex items-center gap-1.5 mb-3">
        <Flame size={12} className="text-orange-500 fill-orange-500" />
        <h3 className={`text-[10px] font-bold ${THEME.textMain}`}>Popular Items</h3>
      </div>

      <div className="space-y-3">
        {[1, 2].map(i => (
          <div key={i} className={`${THEME.card} p-2 flex gap-3`}>
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <div>
                <div className="flex items-start gap-1">
                    <div className="bg-amber-100 text-amber-700 text-[6px] px-1 rounded font-bold uppercase tracking-wide self-start mt-0.5">Best Seller</div>
                </div>
                <h4 className={`text-[10px] font-bold ${THEME.textMain} mt-1`}>Classic Smash Burger</h4>
                <p className={`text-[8px] ${THEME.textSub} mt-0.5 line-clamp-2 leading-relaxed`}>
                  Double beef patty, american cheese, pickles, onions, secret sauce on brioche.
                </p>
              </div>
              <div className={`text-[10px] font-bold ${THEME.textMain} mt-1`}>$12.50</div>
            </div>
            
            <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 group">
              <img src={`https://picsum.photos/100/100?random=${20+i}`} className="w-full h-full object-cover" alt="Food" />
              <button className={`absolute bottom-0 right-0 ${THEME.bgPrimary} p-1.5 rounded-tl-lg shadow-sm active:scale-90 transition-transform`}>
                <Plus size={10} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Sticky Cart Button */}
    <div className="p-3 bg-white border-t border-slate-100 sticky bottom-0 z-30">
      <button className={`w-full ${THEME.buttonPrimary} rounded-xl py-2.5 px-4 flex justify-between items-center`}>
        <div className="bg-white/20 px-1.5 py-0.5 rounded text-[8px] font-bold">2</div>
        <span className="text-[10px] font-bold tracking-wide">View Order</span>
        <span className="text-[10px] font-bold">$24.00</span>
      </button>
    </div>
  </div>
);

/* --- SCREEN 4: CHECKOUT & PAYMENT --- */
export const PaymentScreen: React.FC<{ device: DeviceType }> = () => (
  <div className={`${THEME.bgBackground} min-h-full p-4 flex flex-col gap-4`}>
    
    {/* Address Section */}
    <div className={`${THEME.card} p-3`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 ${THEME.bgPrimaryLight} rounded-full`}>
          <MapPin size={10} className={THEME.textPrimary} />
        </div>
        <h4 className={`text-[10px] font-bold ${THEME.textMain}`}>Delivery Address</h4>
        <button className={`ml-auto text-[8px] font-bold ${THEME.textPrimary} hover:underline`}>CHANGE</button>
      </div>
      <div className="pl-8">
        <div className={`text-[9px] font-bold ${THEME.textMain}`}>Home</div>
        <div className={`text-[9px] ${THEME.textSub} mt-0.5 leading-tight`}>
          123 Tech Park, Innovation Blvd<br/>Suite 400
        </div>
        <div className={`mt-2 inline-flex items-center gap-1 bg-slate-100 px-1.5 py-0.5 rounded text-[8px] ${THEME.textSub}`}>
            <Clock size={8} />
            <span>15-25 min</span>
        </div>
      </div>
    </div>

    {/* Payment Section */}
    <div className={`${THEME.card} p-3`}>
      <h4 className={`text-[10px] font-bold ${THEME.textMain} mb-3`}>Payment Method</h4>
      <div className={`border ${THEME.borderPrimary} ${THEME.bgPrimaryLight} bg-opacity-30 rounded-lg p-2.5 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded border border-slate-100">
             <CreditCard size={12} className={THEME.textMain} />
          </div>
          <div className="flex flex-col">
            <span className={`text-[9px] font-bold ${THEME.textMain}`}>Visa ending 4242</span>
            <span className={`text-[8px] ${THEME.textSub}`}>Expires 12/26</span>
          </div>
        </div>
        <div className={`w-3 h-3 rounded-full border-[3px] border-orange-600 bg-white`} />
      </div>
      
      <button className="w-full mt-2 py-2 text-[9px] text-slate-500 font-medium border border-dashed border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
        <Plus size={10} /> Add New Method
      </button>
    </div>

    {/* Total Breakdown */}
    <div className="flex-1 flex flex-col justify-end">
        <div className={`${THEME.card} p-3 mb-3`}>
            <div className="space-y-1.5">
                <div className={`flex justify-between text-[9px] ${THEME.textSub}`}>
                    <span>Subtotal</span>
                    <span>$24.00</span>
                </div>
                <div className={`flex justify-between text-[9px] ${THEME.textSub}`}>
                    <span>Delivery Fee</span>
                    <span>$2.99</span>
                </div>
                 <div className="flex justify-between text-[9px] text-emerald-600 font-medium">
                    <span>Discount</span>
                    <span>-$5.00</span>
                </div>
                <div className={`h-px ${THEME.borderMedium} my-1`} />
                <div className={`flex justify-between text-[11px] font-bold ${THEME.textMain}`}>
                    <span>Total</span>
                    <span>$21.99</span>
                </div>
            </div>
        </div>

        <button className={`w-full ${THEME.buttonPrimary} rounded-xl py-3 flex items-center justify-between px-4 group`}>
            <span className="text-[10px] font-bold opacity-90">Total: $21.99</span>
            <div className="flex items-center gap-1 font-bold text-[10px]">
                Place Order <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
        </button>
    </div>
  </div>
);

/* --- SCREEN 5: LIVE TRACKING --- */
export const TrackingScreen: React.FC<{ device: DeviceType }> = ({ device }) => {
  const isDesktop = device === 'desktop';

  return (
    <div className="bg-white h-full flex flex-col font-sans relative overflow-hidden">
      
      <div className={`flex-1 bg-slate-100 relative overflow-hidden ${isDesktop ? 'flex flex-row' : 'flex flex-col'}`}>
          
          {/* MAP SECTION */}
          <div className={`relative ${isDesktop ? 'flex-1 h-full border-r border-slate-200' : 'flex-1 w-full'}`}>
              {/* Map Pattern */}
              <div className="absolute inset-0 opacity-[0.08]" style={{
                  backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
              }}></div>
              
              {/* Abstract Roads */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                   <path d="M -20 120 Q 80 120 150 180 T 350 220" fill="none" stroke="white" strokeWidth="24" strokeLinecap="round" />
                   <path d="M 220 -20 L 220 450" fill="none" stroke="white" strokeWidth="18" />
                   <path d="M 80 450 L 150 180" fill="none" stroke="white" strokeWidth="14" />
              </svg>

              {/* Route Visualization */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md">
                   {/* Path Shadow */}
                   <path d="M60 90 Q 160 130 210 260" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="6" strokeLinecap="round" />
                   {/* Actual Path */}
                   <path d="M60 90 Q 160 130 210 260" fill="none" stroke="#ea580c" strokeWidth="4" strokeDasharray="6 4" strokeLinecap="round" className="animate-[dash_2s_linear_infinite]" />
                   
                   {/* Start Point (Restaurant) */}
                   <circle cx="60" cy="90" r="8" fill="white" stroke="#ea580c" strokeWidth="3" />
                   <circle cx="60" cy="90" r="3" fill="#ea580c" />
                   
                   {/* End Point (User) */}
                   <circle cx="210" cy="260" r="8" fill="#ea580c" stroke="white" strokeWidth="2" />
              </svg>
              
              {/* Desktop ETA Overlay (Minimal) */}
              {isDesktop && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded shadow-sm border border-slate-100">
                      <div className={`text-[10px] font-bold ${THEME.textMain}`}>12:45 PM</div>
                      <div className={`text-[8px] ${THEME.textSub}`}>Estimated Arrival</div>
                  </div>
              )}
              
               {/* Mobile Floating ETA Card */}
              {!isDesktop && (
                <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg border border-slate-100/50">
                     <div className="flex justify-between items-center mb-2">
                         <span className={`text-[8px] font-bold ${THEME.textSub} uppercase tracking-wider`}>Estimated Arrival</span>
                         <span className={`text-[11px] font-bold ${THEME.textMain}`}>12:45 PM</span>
                     </div>
                     <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden flex">
                         <div className="w-[30%] bg-orange-200" />
                         <div className={`w-[45%] ${THEME.bgPrimary}`} />
                     </div>
                     <div className="mt-2 flex justify-between items-center">
                         <span className={`text-[9px] ${THEME.textSub}`}>Preparing</span>
                         <span className={`text-[9px] font-bold ${THEME.textPrimary}`}>On the way</span>
                         <span className={`text-[9px] ${THEME.textSub}`}>Delivered</span>
                     </div>
                </div>
              )}
          </div>

          {/* SIDEBAR / SHEET CONTENT */}
          <div className={`
              bg-white z-10
              ${isDesktop ? 'w-[180px] h-full p-4 flex flex-col overflow-y-auto' : 'rounded-t-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.04)] p-5 -mt-6 relative'}
          `}>
              {!isDesktop && <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4" />}
              
              {/* Driver Info */}
              <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${THEME.bgPrimaryLight} border border-orange-100 flex items-center justify-center shrink-0`}>
                      <User size={18} className={THEME.textPrimary} />
                  </div>
                  <div className="flex-1 min-w-0">
                      <h4 className={`text-[11px] font-bold ${THEME.textMain} truncate`}>Michael R.</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                          <Star size={10} className="fill-amber-400 text-amber-400" />
                          <span className={`text-[9px] font-bold ${THEME.textMain}`}>4.9</span>
                          {isDesktop ? null : <><span className="text-[9px] text-slate-300">•</span><span className={`text-[9px] ${THEME.textSub}`}>Honda Civic</span></>}
                      </div>
                      {isDesktop && <div className={`text-[8px] ${THEME.textSub} truncate mt-0.5`}>Honda Civic (XYZ-123)</div>}
                  </div>
                  {!isDesktop && (
                      <div className="flex gap-2">
                          <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-600">
                              <Navigation size={14} />
                          </button>
                          <button className={`w-8 h-8 rounded-full ${THEME.bgPrimary} flex items-center justify-center text-white shadow-sm hover:bg-orange-700 transition-colors`}>
                              <div className="w-3 h-3 bg-current rounded-[1px]" />
                          </button>
                      </div>
                  )}
              </div>
              
              {/* Desktop Actions */}
              {isDesktop && (
                  <div className="flex gap-2 mt-3 mb-1">
                      <button className="flex-1 py-1.5 rounded-md bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-600">
                          <Navigation size={12} />
                      </button>
                      <button className={`flex-1 py-1.5 rounded-md ${THEME.bgPrimary} flex items-center justify-center text-white shadow-sm hover:bg-orange-700 transition-colors`}>
                          <div className="w-2.5 h-2.5 bg-current rounded-[1px]" />
                      </button>
                  </div>
              )}

              {/* Status List */}
              <div className={`pt-4 border-t ${THEME.borderLight} space-y-3 ${isDesktop ? 'mt-3' : 'mt-4'}`}>
                   <div className="flex gap-3">
                      <div className="mt-0.5 relative">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 z-10 relative" />
                          <div className="w-0.5 h-6 bg-slate-100 absolute top-2 left-[3px]" />
                      </div>
                      <div>
                          <div className={`text-[10px] font-bold ${