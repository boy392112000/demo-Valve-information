
export enum AppView {
  LOGIN = 'LOGIN',
  OVERVIEW = 'OVERVIEW',
  ASSETS = 'ASSETS',
  DIAGNOSTICS = 'DIAGNOSTICS',
  MAINTENANCE = 'MAINTENANCE',
  DOCUMENTS = 'DOCUMENTS'
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  status: 'Normal' | 'Warning' | 'Critical' | 'Offline';
  tag: string;
  location: string;
  installDate: string;
}
