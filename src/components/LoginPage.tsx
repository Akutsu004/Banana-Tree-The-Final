import { useState } from 'react';
import svgPaths from "../imports/svg-jz2xrexjqy";
import imgImage4 from "figma:asset/5017518084d8e2da3eb7a4d8843f9a47b53a628c.png";
import imgInstagram from "figma:asset/f84727ee43d25ab1ff7ed6cb4ad7423f545650d3.png";
import imgFacebook from "figma:asset/9e84bcc22ab8ec23ae4971f225dee1b960d2f65f.png";
import imgTwitterX from "figma:asset/82a634843217f18585931b768ead7c64b575403b.png";

interface LoginPageProps {
  onNavigateToRegister: () => void;
  onLogin: (username: string, password: string) => void;
}

export function LoginPage({ onNavigateToRegister, onLogin }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginForm.username, loginForm.password);
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src={imgImage4} 
        />
      </div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[rgba(143,208,198,0.32)] opacity-70" />
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:flex lg:flex-1 items-center justify-center p-8">
          {/* This space can be used for branding or additional content */}
        </div>
        
        {/* Right Side - Login Form */}
        <div className="flex-1 lg:max-w-2xl xl:max-w-3xl flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
            {/* Main Login Container */}
            <div className="bg-[rgba(255,251,251,0.56)] backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full">
              {/* Login Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-black mb-6 lg:mb-8">
                Login
              </h1>
              
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                {/* Username Field */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 lg:w-7 lg:h-7">
                      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 26">
                        <path clipRule="evenodd" d={svgPaths.p38675700} fill="black" fillRule="evenodd" id="Vector" />
                      </svg>
                    </div>
                    <label className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black opacity-70">
                      User
                    </label>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#8FD0C6] opacity-20 rounded-2xl shadow-lg"></div>
                    <input
                      type="text"
                      value={loginForm.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      className="relative w-full h-12 sm:h-14 lg:h-16 bg-transparent px-4 lg:px-6 outline-none text-black placeholder-gray-500 text-sm sm:text-base lg:text-lg rounded-2xl"
                      placeholder="Enter username"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 lg:w-8 lg:h-8">
                      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                        <g id="solar:lock-bold">
                          <path clipRule="evenodd" d={svgPaths.p1c8a4280} fill="black" fillRule="evenodd" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <label className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black opacity-70">
                      Password
                    </label>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#8FD0C6] opacity-20 rounded-2xl shadow-lg"></div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginForm.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="relative w-full h-12 sm:h-14 lg:h-16 bg-transparent px-4 lg:px-6 pr-12 lg:pr-16 outline-none text-black placeholder-gray-500 text-sm sm:text-base lg:text-lg rounded-2xl"
                      placeholder="Enter password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 27">
                        <g id="mdi:eye">
                          <path d={svgPaths.p23e3b500} fill="black" id="Vector" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-[#2a7a6e] h-12 sm:h-14 lg:h-16 rounded-xl hover:bg-[#245a50] transition-colors cursor-pointer flex items-center justify-center shadow-lg"
                >
                  <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
                    Login
                  </span>
                </button>

                {/* Forgot Password */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-[#2a7a6e] hover:underline transition-all"
                  >
                    Forgot Password
                  </button>
                </div>

                {/* Sign Up Navigation */}
                <div className="text-center space-y-2 sm:space-y-0 sm:space-x-2 sm:flex sm:items-center sm:justify-center">
                  <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-black block sm:inline">
                    Don't have an account?
                  </span>
                  <button
                    type="button"
                    onClick={onNavigateToRegister}
                    className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-[#2a7a6e] hover:underline transition-all block sm:inline"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#2a7a6e] h-16 sm:h-20 lg:h-24">
        {/* Social Media Icons */}
        <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 flex items-center space-x-3 sm:space-x-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
            <img alt="Facebook" className="w-full h-full object-contain" src={imgFacebook} />
          </div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
            <img alt="Instagram" className="w-full h-full object-contain" src={imgInstagram} />
          </div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
            <img alt="Twitter/X" className="w-full h-full object-contain" src={imgTwitterX} />
          </div>
        </div>
      </div>
    </div>
  );
}