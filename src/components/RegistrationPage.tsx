import { useState } from 'react';
import svgPathsDoctor from "../imports/svg-4215pobdy5";
import svgPathsAdmin from "../imports/svg-mcluuyz340";
import imgImage5 from "figma:asset/5017518084d8e2da3eb7a4d8843f9a47b53a628c.png";
import { supabase } from '../supabaseClient';

interface RegistrationPageProps {
  onNavigateToLogin: () => void;
  onRegister: (userType: 'doctor' | 'admin', formData: any) => void;
}

export function RegistrationPage({ onNavigateToLogin, onRegister }: RegistrationPageProps) {
  const [activeTab, setActiveTab] = useState<'doctor' | 'admin'>('doctor');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [doctorForm, setDoctorForm] = useState({
    fullName: '',
    doctorId: '',
    email: '',
    contactNumber: '',
    department: '',
    licenseNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [adminForm, setAdminForm] = useState({
    fullName: '',
    adminId: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: ''
  });

  const svgPaths = activeTab === 'doctor' ? svgPathsDoctor : svgPathsAdmin;
  const currentForm = activeTab === 'doctor' ? doctorForm : adminForm;
  const setCurrentForm = activeTab === 'doctor' ? setDoctorForm : setAdminForm;

  const handleInputChange = (field: string, value: string) => {
    setCurrentForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const form = activeTab === "doctor" ? doctorForm : adminForm;

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Step 1: Create user in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email: form.email,
    password: form.password,
    options: {
      data: {
        fullName: form.fullName,
        userType: activeTab,
        contactNumber: form.contactNumber,
        department: form.department,
        licenseNumber: form.licenseNumber,
      },
    },
  });

  if (error) {
    alert(`Registration failed: ${error.message}`);
    return;
  }

  // Step 2: Insert into `profiles` table
  if (data.user) {
    const profileData = {
      id: data.user.id, // same as auth.users.id
      name: form.fullName,
      age: null,
      sex: null,
      address: null,
      employee_id:
        activeTab === "doctor" ? form.doctorId : form.adminId,
      position: activeTab,
      department: form.department || null,
      license_number: form.licenseNumber || null,
      start_date: new Date().toISOString().split("T")[0],
    };

    const { error: insertError } = await supabase
      .from("profiles")
      .insert([profileData]);

    if (insertError) {
      console.error("Profile insert error:", insertError);
      alert(`Failed to save profile: ${insertError.message}`);
      return;
    }
  }

  alert(
    "Registration successful! Please check your email for confirmation."
  );
  onNavigateToLogin();
};

  const FormField = ({ 
  label, 
  icon, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  showToggle = false,
  isPasswordVisible = false,
  onTogglePassword 
}: {
  label: string;
  icon: React.ReactNode;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  showToggle?: boolean;
  isPasswordVisible?: boolean;
  onTogglePassword?: () => void;
}) => (
  <div className="space-y-1 sm:space-y-2">
    {/* Label */}
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0">
        {icon}
      </div>
      <label className="text-xs sm:text-sm lg:text-base font-bold text-black">
        {label}
      </label>
    </div>

    {/* Input field with background */}
    <div className="relative">
      {/* background layer now ignores mouse/touch events */}
      <div className="absolute inset-0 bg-[rgba(143,208,198,0.2)] rounded-xl shadow-md pointer-events-none"></div>

      <input
        type={showToggle ? (isPasswordVisible ? "text" : "password") : type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="relative w-full h-8 sm:h-10 lg:h-12 bg-transparent px-3 sm:px-4 outline-none text-black placeholder-gray-500 text-xs sm:text-sm lg:text-base rounded-xl"
        placeholder={placeholder}
        required
      />

      {/* Toggle password visibility */}
      {showToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="mi:eye-off">
              <path d={svgPaths.p20746200} fill="black" id="Vector" />
            </g>
          </svg>
        </button>
      )}
    </div>
  </div>
);


  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src={imgImage5} 
        />
      </div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[rgba(143,208,198,0.32)]" />
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <div className="lg:w-80 xl:w-96 bg-[#2a7a6e] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
          {/* Logo Container */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 bg-[#d9d9d9] rounded-full flex items-center justify-center mb-6 lg:mb-12">
            <span className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-bold text-black">Logo</span>
          </div>
          
          {/* Register Text */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center">
            Register an Account
          </h2>
        </div>
        
        {/* Main Form Area */}
        <div className="flex-1 flex flex-col order-1 lg:order-2">
          {/* Tab Headers */}
          <div className="flex justify-center items-center p-4 sm:p-6 lg:p-8">
            <div className="flex space-x-8 sm:space-x-12 lg:space-x-16">
              <button
                onClick={() => setActiveTab('doctor')}
                className={`relative text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal transition-colors ${
                  activeTab === 'doctor' ? 'text-black' : 'text-gray-500'
                } hover:text-black`}
              >
                Doctor
                {activeTab === 'doctor' && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 sm:h-1.5 lg:h-2 bg-[#2A7A6E] rounded-full"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`relative text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal transition-colors ${
                  activeTab === 'admin' ? 'text-black' : 'text-gray-500'
                } hover:text-black`}
              >
                Admin
                {activeTab === 'admin' && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 sm:h-1.5 lg:h-2 bg-[#2A7A6E] rounded-full"></div>
                )}
              </button>
            </div>
          </div>
          
          {/* Form Container */}
          <div className="flex-1 flex items-start justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="bg-[rgba(255,255,255,0.56)] backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {activeTab === 'doctor' ? (
                    <>
                      <FormField
                        label="Full Name"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g id="Group">
                              <path d={svgPaths.p36395980} id="Vector" stroke="black" strokeLinejoin="round" strokeWidth="2" />
                              <path d={svgPaths.p372d2a00} id="Vector_2" stroke="black" strokeWidth="2" />
                            </g>
                          </svg>
                        }
                        value={doctorForm.fullName}
                        onChange={(value) => handleInputChange('fullName', value)}
                        placeholder="Enter full name"
                      />
                      
                      <FormField
                        label="Doctor ID"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
                            <g id="Group">
                              <path clipRule="evenodd" d={svgPaths.p20d62900} fill="black" fillRule="evenodd" id="Vector" />
                              <path clipRule="evenodd" d={svgPaths.p11871580} fill="black" fillRule="evenodd" id="Vector_2" />
                            </g>
                          </svg>
                        }
                        value={doctorForm.doctorId}
                        onChange={(value) => handleInputChange('doctorId', value)}
                        placeholder="Enter doctor ID"
                      />
                      
                      <FormField
                        label="Email Address"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g clipPath="url(#clip0_1_91)" id="clarity:email-line">
                              <path d={svgPaths.p2bc1fc00} fill="black" id="Vector" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_91">
                                <rect fill="white" height="18" width="18" />
                              </clipPath>
                            </defs>
                          </svg>
                        }
                        type="email"
                        value={doctorForm.email}
                        onChange={(value) => handleInputChange('email', value)}
                        placeholder="Enter email address"
                      />
                      
                      <FormField
                        label="Contact Number"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="solar:phone-outline">
                              <path clipRule="evenodd" d={svgPaths.p2b48b300} fill="black" fillRule="evenodd" id="Vector" />
                            </g>
                          </svg>
                        }
                        type="tel"
                        value={doctorForm.contactNumber}
                        onChange={(value) => handleInputChange('contactNumber', value)}
                        placeholder="Enter contact number"
                      />
                      
                      <FormField
                        label="Department"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
                            <g id="Group">
                              <path clipRule="evenodd" d={svgPaths.p18cc0d00} fill="black" fillRule="evenodd" id="Vector_2" />
                            </g>
                          </svg>
                        }
                        value={doctorForm.department}
                        onChange={(value) => handleInputChange('department', value)}
                        placeholder="Enter department"
                      />
                      
                      <FormField
                        label="License Number"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="material-symbols-light:license-outline">
                              <path d={svgPaths.p10569e00} fill="black" id="Vector" />
                            </g>
                          </svg>
                        }
                        value={doctorForm.licenseNumber}
                        onChange={(value) => handleInputChange('licenseNumber', value)}
                        placeholder="Enter license number"
                      />
                      
                      <FormField
                        label="Password"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="mdi:password-outline">
                              <path d={svgPaths.p17ca7b80} fill="black" id="Vector" />
                            </g>
                          </svg>
                        }
                        value={doctorForm.password}
                        onChange={(value) => handleInputChange('password', value)}
                        placeholder="Enter password"
                        showToggle={true}
                        isPasswordVisible={showPassword}
                        onTogglePassword={() => setShowPassword(!showPassword)}
                      />
                      
                      <FormField
                        label="Confirm Password"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="mdi:password-outline">
                              <path d={svgPaths.p17ca7b80} fill="black" id="Vector" />
                            </g>
                          </svg>
                        }
                        value={doctorForm.confirmPassword}
                        onChange={(value) => handleInputChange('confirmPassword', value)}
                        placeholder="Confirm password"
                        showToggle={true}
                        isPasswordVisible={showConfirmPassword}
                        onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                      />
                    </>
                  ) : (
                    <>
                      <FormField
                        label="Full Name"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g id="Group">
                              <path d={svgPaths.p36395980} id="Vector" stroke="black" strokeLinejoin="round" strokeWidth="2" />
                              <path d={svgPaths.p372d2a00} id="Vector_2" stroke="black" strokeWidth="2" />
                            </g>
                          </svg>
                        }
                        value={adminForm.fullName}
                        onChange={(value) => handleInputChange('fullName', value)}
                        placeholder="Enter full name"
                      />
                      
                      <FormField
                        label="Admin ID"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="material-symbols-light:id-card-outline">
                              <path d={svgPaths.p2d528740} fill="black" id="Vector" />
                            </g>
                          </svg>
                        }
                        value={adminForm.adminId}
                        onChange={(value) => handleInputChange('adminId', value)}
                        placeholder="Enter admin ID"
                      />
                      
                      <FormField
                        label="Email Address"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g clipPath="url(#clip0_1_91)" id="clarity:email-line">
                              <path d={svgPaths.p2bc1fc00} fill="black" id="Vector" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_91">
                                <rect fill="white" height="18" width="18" />
                              </clipPath>
                            </defs>
                          </svg>
                        }
                        type="email"
                        value={adminForm.email}
                        onChange={(value) => handleInputChange('email', value)}
                        placeholder="Enter email address"
                      />
                      
                      <FormField
                        label="Contact Number"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="solar:phone-outline">
                              <path clipRule="evenodd" d={svgPaths.p2b48b300} fill="black" fillRule="evenodd" id="Vector" />
                            </g>
                          </svg>
                        }
                        type="tel"
                        value={adminForm.contactNumber}
                        onChange={(value) => handleInputChange('contactNumber', value)}
                        placeholder="Enter contact number"
                      />
                      
                      <FormField
                        label="Password"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="mdi:password-outline">
                              <path d={svgPaths.p17ca7b80} fill="black" id="Vector" />
                            </g>
                          </svg>
                        }
                        value={adminForm.password}
                        onChange={(value) => handleInputChange('password', value)}
                        placeholder="Enter password"
                        showToggle={true}
                        isPasswordVisible={showPassword}
                        onTogglePassword={() => setShowPassword(!showPassword)}
                      />
                      
                      <FormField
                        label="Confirm Password"
                        icon={
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="mdi:password-outline">
                              <path d={svgPaths.p17ca7b80} fill="black" id="Vector" />
                            </g>
                          </svg>
                        }
                        value={adminForm.confirmPassword}
                        onChange={(value) => handleInputChange('confirmPassword', value)}
                        placeholder="Confirm password"
                        showToggle={true}
                        isPasswordVisible={showConfirmPassword}
                        onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                      />
                    </>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="space-y-3 sm:space-y-4 pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#2a7a6e] h-10 sm:h-12 lg:h-14 rounded-xl hover:bg-[#245a50] transition-colors cursor-pointer flex items-center justify-center shadow-lg"
                    >
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white">
                        SignUp
                      </span>
                    </button>
                    
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={onNavigateToLogin}
                        className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-[#2a7a6e] hover:underline transition-all"
                      >
                        Back to Log In
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}