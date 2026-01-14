
import React, { useState } from 'react';
import { AppView } from './types';
import LoginView from './views/LoginView';
import DashboardLayout from './components/DashboardLayout';
import FleetOverview from './views/FleetOverview';
import AssetBrowser from './views/AssetBrowser';
import DiagnosticsView from './views/DiagnosticsView';
import MaintenanceView from './views/MaintenanceView';
import DocumentsView from './views/DocumentsView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LOGIN);

  const handleLogin = () => {
    setCurrentView(AppView.OVERVIEW);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.LOGIN:
        return <LoginView onLogin={handleLogin} />;
      case AppView.OVERVIEW:
        return <FleetOverview />;
      case AppView.ASSETS:
        return <AssetBrowser />;
      case AppView.DIAGNOSTICS:
        return <DiagnosticsView />;
      case AppView.MAINTENANCE:
        return <MaintenanceView />;
      case AppView.DOCUMENTS:
        return <DocumentsView />;
      default:
        return <FleetOverview />;
    }
  };

  if (currentView === AppView.LOGIN) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <DashboardLayout currentView={currentView} setView={setCurrentView}>
      {renderView()}
    </DashboardLayout>
  );
};

export default App;
