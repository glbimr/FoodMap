import { ModuleData, Connection } from './types';

export const MODULES: ModuleData[] = [
  {
    id: 'login',
    title: 'User Onboarding',
    description: 'Authentication & Profile Creation',
    x: 150,
    y: 200,
    colorTheme: 'blue'
  },
  {
    id: 'discovery',
    title: 'Restaurant Discovery',
    description: 'Search, Filter & Browse',
    x: 900,
    y: 200,
    colorTheme: 'emerald'
  },
  {
    id: 'menu',
    title: 'Menu & Cart',
    description: 'Item Selection & Customization',
    x: 1650,
    y: 200,
    colorTheme: 'orange'
  },
  {
    id: 'payment',
    title: 'Checkout Gateway',
    description: 'Payment Processing & Address',
    x: 1650,
    y: 1000,
    colorTheme: 'violet'
  },
  {
    id: 'tracking',
    title: 'Live Tracking',
    description: 'Real-time Status Updates',
    x: 900,
    y: 1000,
    colorTheme: 'indigo'
  }
];

export const CONNECTIONS: Connection[] = [
  { from: 'login', to: 'discovery', label: 'Auth Success' },
  { from: 'discovery', to: 'menu', label: 'Select Restaurant' },
  { from: 'menu', to: 'payment', label: 'Proceed to Checkout' },
  { from: 'payment', to: 'tracking', label: 'Payment Verified' },
  // Optional loop back
  { from: 'tracking', to: 'discovery', label: 'Order Complete' }
];

export const DEVICE_DIMENSIONS = {
  mobile: { width: 320, height: 600 },
  desktop: { width: 480, height: 320 }
};