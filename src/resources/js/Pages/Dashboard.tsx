import React from 'react';
import DashboardIndex from '@/Pages/DashboardIndex';
import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {
  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      )}
    >
            <DashboardIndex />
    </AppLayout>
  );
}
