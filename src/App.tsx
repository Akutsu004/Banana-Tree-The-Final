import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { Dashboard } from './components/Dashboard';

type View = 'login' | 'register';
type UserType = 'doctor' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ type: UserType; data: any } | null>(null);

  const handleLogin = (username: string, password: string) => {
    // Mock login validation
    if (username && password) {
      console.log('Login attempt:', { username, password });
      
      // Mock successful login
      setCurrentUser({
        type: 'doctor', // This would be determined by the backend
        data: { username, loginTime: new Date() }
      });
      setIsLoggedIn(true);
      alert(`Welcome ${username}! Login successful.`);
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleRegister = (userType: UserType, formData: any) => {
    console.log(`${userType} registration:`, formData);
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Mock successful registration
    alert(`${userType} registration successful! You can now log in.`);
    setCurrentView('login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentView('login');
  };

  const navigateToRegister = () => {
    setCurrentView('register');
  };

  const navigateToLogin = () => {
    setCurrentView('login');
  };

  // If logged in, show the dashboard
  if (isLoggedIn && currentUser) {
    return (
      <Dashboard
        currentUser={currentUser}
        onLogout={handleLogout}
        onBack={handleLogout}
      />
    );
  }

  // Show appropriate view based on current state
  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'login' ? (
        <LoginPage 
          onNavigateToRegister={navigateToRegister}
          onLogin={handleLogin}
        />
      ) : (
        <RegistrationPage 
          onNavigateToLogin={navigateToLogin}
          onRegister={handleRegister}
        />
      )}
    </div>
  );
}