import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient"; // fixed import path
import { LoginPage } from "./components/LoginPage";
import { RegistrationPage } from "./components/RegistrationPage";
import { Dashboard } from "./components/Dashboard";

type View = "login" | "register";
type UserType = "doctor" | "admin";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ type: UserType; data: any } | null>(null);

  // ✅ Check if user is already logged in (persisted session)
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        setCurrentUser({
          type: "doctor", // you could query profile to get role
          data: data.session.user,
        });
        setIsLoggedIn(true);
      }
    };

    getSession();

    // ✅ Re-run when auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setCurrentUser({
          type: "doctor",
          data: session.user,
        });
        setIsLoggedIn(true);
      } else {
        setCurrentUser(null);
        setIsLoggedIn(false);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // ✅ Real Supabase Login
  const handleLogin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(`Login failed: ${error.message}`);
      return;
    }

    setCurrentUser({
      type: "doctor", // In real use, determine from DB
      data: data.user,
    });
    setIsLoggedIn(true);
    alert(`Welcome ${email}!`);
  };

  // ✅ Real Supabase Registration
  const handleRegister = async (userType: UserType, formData: any) => {
    if (!formData.email || !formData.password) {
      alert("Please fill in all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: { fullName: formData.fullName, type: userType },
      },
    });

    if (error) {
      alert(`Registration failed: ${error.message}`);
      return;
    }

    // Insert profile row if signUp succeeded and user exists
    if (data.user) {
      await supabase.from('profiles').insert([{
        id: data.user.id,
        name: formData.fullName,
        age: formData.age || null,
        sex: formData.sex || null,
        address: formData.address || null,
        employee_id: formData.doctorId || formData.adminId || null,
        position: userType,
        department: formData.department || null,
        license_number: formData.licenseNumber || null,
        start_date: formData.startDate || null,
      }]);
    }

    alert("Registration successful! Please check your email to confirm your account.");
    setCurrentView("login");
  };

  // ✅ Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentView("login");
  };

  const navigateToRegister = () => setCurrentView("register");
  const navigateToLogin = () => setCurrentView("login");

  // ✅ If logged in, show dashboard
  if (isLoggedIn && currentUser) {
    return (
      <Dashboard
        currentUser={currentUser}
        onLogout={handleLogout}
        onBack={handleLogout}
      />
    );
  }

  // ✅ Otherwise show login/register
  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === "login" ? (
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
