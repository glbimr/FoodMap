export type DeviceType = 'mobile' | 'desktop';

export interface ModuleData {
  id: string;
  title: string;
  description: string;
  x: number;
  y: number;
  colorTheme: string;
}

export interface Connection {
  from: string;
  to: string;
  label?: string;
}

export interface ScreenProps {
  device: DeviceType;
}
