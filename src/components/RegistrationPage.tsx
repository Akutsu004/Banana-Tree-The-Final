import { useState, useCallback, useMemo, memo } from 'react';
import svgPathsDoctor from "../imports/svg-4215pobdy5";
import svgPathsAdmin from "../imports/svg-mcluuyz340";
import imgImage5 from "figma:asset/5017518084d8e2da3eb7a4d8843f9a47b53a628c.png";
import { useStableForm } from './useStableForm';

interface RegistrationPageProps {
  onNavigateToLogin: () => void;
  onRegister: (userType: 'doctor' | 'admin', formData: any) => void;
}

interface FormFieldProps {
  label: string;
  icon: React.ReactNode;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  showToggle?: boolean;
  isPasswordVisible?: boolean;
  onTogglePassword?: () => void;
}

const FormField = memo(({ 
  label, 
  icon, 
  type = "text", 
  value, 
  onChange,
  placeholder, 
  showToggle = false,
  isPasswordVisible = false,
  onTogglePassword 
}: FormFieldProps) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-3">
      <div className="w-6 h-6 lg:w-7 lg:h-7 flex-shrink-0">
        {icon}
      </div>
      <label className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black opacity-70">
        {label}
      </label>
    </div>
    <div className="relative">
      <div className="absolute inset-0 bg-[#8FD0C6] opacity-20 rounded-2xl shadow-lg"></div>
      <input
        type={showToggle ? (isPasswordVisible ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        className={`relative w-full h-12 sm:h-14 lg:h-16 bg-transparent px-4 lg:px-6 ${showToggle ? 'pr-12 lg:pr-16' : ''} outline-none text-black placeholder-gray-500 text-sm sm:text-base lg:text-lg rounded-2xl`}
        placeholder={placeholder}
        required
      />
      {showToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="mi:eye-off">
              <path d={svgPathsDoctor.p20746200} fill="black" id="Vector" />
            </g>
          </svg>
        </button>
      )}
    </div>
  </div>
));

export function RegistrationPage({ onNavigateToLogin, onRegister }: RegistrationPageProps) {
  const [activeTab, setActiveTab] = useState<'doctor' | 'admin'>('doctor');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Initialize stable forms
  const doctorFormHook = useStableForm({
    fullName: '',
    doctorId: '',
    email: '',
    contactNumber: '',
    department: '',
    licenseNumber: '',
    password: '',
    confirmPassword: ''
  });

  const adminFormHook = useStableForm({
    fullName: '',
    adminId: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: ''
  });

  const svgPaths = activeTab === 'doctor' ? svgPathsDoctor : svgPathsAdmin;
  const currentForm = activeTab === 'doctor' ? doctorFormHook.formData : adminFormHook.formData;
  const currentFormHook = activeTab === 'doctor' ? doctorFormHook : adminFormHook;

  // Create stable input change handler
  const handleInputChange = useCallback((field: string, value: string) => {
    if (activeTab === 'doctor') {
      doctorFormHook.handleInputChange(field, value);
    } else {
      adminFormHook.handleInputChange(field, value);
    }
  }, [activeTab, doctorFormHook.handleInputChange, adminFormHook.handleInputChange]);

  // Create stable field handlers for doctor form
  const doctorFieldHandlers = useMemo(() => ({
    fullName: (e: React.ChangeEvent<HTMLInputElement>) => doctorFormHook.handleInputChange('fullName', e.target.value),
    doctorId: (e: React.ChangeEvent<HTMLInputElement>) => doctorFormHook.handleInputChange('doctorId', e.target.value),
    email: (e: React.ChangeEvent<HTMLInputElement>) => doctorFormHook.handleInputChange('email', e.target.value),
    contactNumber: (e: React.ChangeEvent<HTMLInputElement>) => doctorFormHook.handleInputChange('contactNumber', e.target.value),
    department: (e: React.ChangeEvent<HTMLInputElement>) => doctorFormHook.handleInputChange('department', e.target.value),
    licenseNumber: (e: React.ChangeEvent<HTMLInputElement>) => doctorFormHook.handleInputChange('licenseNumber', e.target.value),
    password: (e: React.ChangeEvent<HTMLInputElement>) => doctorFormHook.handleInputChange('password', e.target.value),
    confirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => doctorFormHook.handleInputChange('confirmPassword', e.target.value),
  }), [doctorFormHook.handleInputChange]);

  // Create stable field handlers for admin form
  const adminFieldHandlers = useMemo(() => ({
    fullName: (e: React.ChangeEvent<HTMLInputElement>) => adminFormHook.handleInputChange('fullName', e.target.value),
    adminId: (e: React.ChangeEvent<HTMLInputElement>) => adminFormHook.handleInputChange('adminId', e.target.value),
    email: (e: React.ChangeEvent<HTMLInputElement>) => adminFormHook.handleInputChange('email', e.target.value),
    contactNumber: (e: React.ChangeEvent<HTMLInputElement>) => adminFormHook.handleInputChange('contactNumber', e.target.value),
    password: (e: React.ChangeEvent<HTMLInputElement>) => adminFormHook.handleInputChange('password', e.target.value),
    confirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => adminFormHook.handleInputChange('confirmPassword', e.target.value),
  }), [adminFormHook.handleInputChange]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(activeTab, currentForm);
  };



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
                <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
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
                        value={doctorFormHook.formData.fullName}
                        onChange={doctorFieldHandlers.fullName}
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
                        value={doctorFormHook.formData.doctorId}
                        onChange={doctorFieldHandlers.doctorId}
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
                        value={doctorFormHook.formData.email}
                        onChange={doctorFieldHandlers.email}
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
                        value={doctorFormHook.formData.contactNumber}
                        onChange={doctorFieldHandlers.contactNumber}
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
                        value={doctorFormHook.formData.department}
                        onChange={doctorFieldHandlers.department}
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
                        value={doctorFormHook.formData.licenseNumber}
                        onChange={doctorFieldHandlers.licenseNumber}
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
                        value={doctorFormHook.formData.password}
                        onChange={doctorFieldHandlers.password}
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
                        value={doctorFormHook.formData.confirmPassword}
                        onChange={doctorFieldHandlers.confirmPassword}
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
                        value={adminFormHook.formData.fullName}
                        onChange={adminFieldHandlers.fullName}
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
                        value={adminFormHook.formData.adminId}
                        onChange={adminFieldHandlers.adminId}
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
                        value={adminFormHook.formData.email}
                        onChange={adminFieldHandlers.email}
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
                        value={adminFormHook.formData.contactNumber}
                        onChange={adminFieldHandlers.contactNumber}
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
                        value={adminFormHook.formData.password}
                        onChange={adminFieldHandlers.password}
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
                        value={adminFormHook.formData.confirmPassword}
                        onChange={adminFieldHandlers.confirmPassword}
                        placeholder="Confirm password"
                        showToggle={true}
                        isPasswordVisible={showConfirmPassword}
                        onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                      />
                    </>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="space-y-6 lg:space-y-8 pt-6">
                    <button
                      type="submit"
                      className="w-full bg-[#2a7a6e] h-12 sm:h-14 lg:h-16 rounded-2xl hover:bg-[#245a50] transition-colors cursor-pointer flex items-center justify-center shadow-lg"
                    >
                      <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
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