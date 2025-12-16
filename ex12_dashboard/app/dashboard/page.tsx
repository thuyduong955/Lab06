// app/dashboard/page.tsx
// This is a Server Component. It fetches user profile data (simulated with setTimeout).
// The SettingsToggle is a Client Component for switching dark/light mode.
import SettingsToggle from './SettingsToggle';

async function getUserProfile() {
  // Simulate API delay
  await new Promise(res => setTimeout(res, 1000));
  // Return fake user data
  return {
    name: 'Student User',
    email: 'student@example.com',
    role: 'Web Dev Learner'
  };
}

export default async function DashboardPage() {
  const user = await getUserProfile();
  return (
    <div>
      <h1>Dashboard</h1>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Role:</b> {user.role}</p>
      {/* SettingsToggle is a Client Component for UI theme */}
      <SettingsToggle />
    </div>
  );
}
