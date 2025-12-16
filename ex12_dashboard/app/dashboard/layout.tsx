// app/dashboard/layout.tsx
// This layout adds a static sidebar for the dashboard.
// The sidebar is always visible. The main content changes based on the route.
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 200, background: '#eee', padding: 20 }}>
        {/* Sidebar navigation - just static links for demo */}
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/dashboard">Profile</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 20 }}>{children}</main>
    </div>
  );
}
