// app/dashboard/SettingsToggle.tsx
// This is a Client Component. It lets you switch between dark and light mode.
// It uses useState for interactivity. The theme is just for demo (not global).
'use client';
import React, { useState } from 'react';

export default function SettingsToggle() {
  // useState to track theme
  const [dark, setDark] = useState(false);
  return (
    <div style={{ marginTop: 20 }}>
      <label>
        <input
          type="checkbox"
          checked={dark}
          onChange={() => setDark(!dark)}
        />
        Dark mode
      </label>
      <div
        style={{
          marginTop: 10,
          padding: 10,
          background: dark ? '#222' : '#fff',
          color: dark ? '#fff' : '#222',
          border: '1px solid #ccc',
        }}
      >
        This is the dashboard panel.
      </div>
    </div>
  );
}
