import { useState } from 'react';
import svgPaths from "../imports/svg-810mbz6n7g";

import imgVitalSigns21 from "figma:asset/44b4baf1b77716433605deebefe78561633c9dd5.png";
import imgMultiAgentSystem11 from "figma:asset/b5bdc0bca85a20ca93e01dc956f98a8e2975f360.png";
import imgExperimentResults1 from "figma:asset/33823922dddacff3e43beed20b5a0dbd30c82cfa.png";
import imgDentalTreatment1 from "figma:asset/8ba03e4cd1254caaad70bd3d0ee583046a420e3c.png";
import imgPrescription1 from "figma:asset/59fa633d9a05b98f8f1565a899fd2021e68efbf8.png";
import imgChart1 from "figma:asset/7d04115f16b591b3f1f302f1dedd740d7cea4b23.png";
import imgInfo1 from "figma:asset/8a429c8ceef6cb44f2be6652b8837246507ab528.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";
import imgPatient from "figma:asset/54876f29d7d2448648833f0ded884967d53e60ce.png";
import imgDashboard11 from "figma:asset/4d09bee6bfa0c32612bff38a59758df3d7138ef9.png";
import { PatientChartingPage } from './PatientChartingPage';
import { PrescriptionsPage } from './PrescriptionsPage';
import { TreatmentPlanPage } from './TreatmentPlanPage';
import { EmployeeInfoPage } from './EmployeeInfoPage';
import { LabResultsListPage } from './LabResultsListPage';
import { ReferralSystemPage } from './ReferralSystemPage';
import { DailyRoundsListPage } from './DailyRoundsListPage';
import { PatientListPage } from './PatientListPage';

interface DashboardProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onLogout: () => void;
  onBack?: () => void;
}

type DashboardView = 
  | 'main'
  | 'patient-list'
  | 'patient-charting'
  | 'prescriptions'
  | 'treatment-plan'
  | 'lab-results'
  | 'referral-system'
  | 'daily-rounds'
  | 'employee-info';

export function Dashboard({ currentUser, onLogout, onBack }: DashboardProps) {
  const [currentView, setCurrentView] = useState<DashboardView>('main');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNavigate = (view: DashboardView) => {
    setCurrentView(view);
  };

  const handleBack = () => {
    if (currentView === 'main') {
      onBack?.();
    } else {
      setCurrentView('main');
    }
  };

  const DashboardButton = ({ 
    title, 
    image, 
    onClick, 
    className = "",
    imageClassName = "left-[100px] size-[160px] top-[40px]" 
  }: {
    title: string;
    image: string;
    onClick: () => void;
    className?: string;
    imageClassName?: string;
  }) => (
    <button
      onClick={onClick}
      className={`relative bg-[#2a7a6e] rounded-[30px] hover:bg-[#245a50] transition-all duration-200 transform hover:scale-105 hover:shadow-lg cursor-pointer group ${className}`}
    >
      <div className="absolute inset-0 bg-[#2a7a6e] rounded-[30px] group-hover:bg-[#245a50] transition-colors" />
      <div className={`absolute ${imageClassName} opacity-50 group-hover:opacity-60 transition-opacity`}>
        <img 
          alt={title} 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={image} 
        />
      </div>
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_79.58%_5.56%] leading-[normal] not-italic text-[clamp(14px,2.5vw,28px)] text-white tracking-[2px] sm:tracking-[4.2px] group-hover:text-gray-100 transition-colors">
        {title.includes('\n') ? (
          title.split('\n').map((line, index) => (
            <p key={index} className={index === 0 ? 'mb-0' : ''}>{line}</p>
          ))
        ) : (
          <p>{title}</p>
        )}
      </div>
    </button>
  );

  const MultiLineButton = ({ 
    lines, 
    image, 
    onClick, 
    className = "",
    imageClassName = "left-[100px] size-[160px] top-[40px]" 
  }: {
    lines: string[];
    image: string;
    onClick: () => void;
    className?: string;
    imageClassName?: string;
  }) => (
    <button
      onClick={onClick}
      className={`relative bg-[#2a7a6e] rounded-[30px] hover:bg-[#245a50] transition-all duration-200 transform hover:scale-105 hover:shadow-lg cursor-pointer group ${className}`}
    >
      <div className="absolute inset-0 bg-[#2a7a6e] rounded-[30px] group-hover:bg-[#245a50] transition-colors" />
      <div className={`absolute ${imageClassName} opacity-50 group-hover:opacity-60 transition-opacity`}>
        <img 
          alt={lines.join(' ')} 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={image} 
        />
      </div>
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_65.42%_5.56%] leading-[normal] not-italic text-[clamp(14px,2.5vw,28px)] text-white tracking-[2px] sm:tracking-[4.2px] group-hover:text-gray-100 transition-colors">
        {lines.map((line, index) => (
          <p key={index} className={index === 0 ? 'mb-0' : ''}>{line}</p>
        ))}
      </div>
    </button>
  );

  const SidebarIcon = ({ image, alt, onClick, isActive = false }: {
    image: string;
    alt: string;
    onClick: () => void;
    isActive?: boolean;
  }) => (
    <button
      onClick={onClick}
      className={`w-[40px] h-[40px] p-1 rounded-lg transition-all duration-200 hover:bg-[#1f5c52] ${
        isActive ? 'bg-[#1f5c52] ring-2 ring-white ring-opacity-30' : ''
      }`}
    >
      <img 
        alt={alt} 
        className="w-full h-full object-cover hover:opacity-80 transition-opacity" 
        src={image} 
      />
    </button>
  );

  const renderMainDashboard = () => (
    <div className="flex-1 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#e0e0e0]" />
      
      {/* Header */}
      <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-[#2a7a6e] hover:text-[#1f5c52] transition-colors"
          >
            <div className="w-6 h-4 md:w-8 md:h-6">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
                <path d={svgPaths.p1ee95700} fill="currentColor" />
              </svg>
            </div>
            <span className="text-base md:text-xl font-semibold">Back</span>
          </button>
        </div>
        
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic text-black text-center tracking-[2px] md:tracking-[4.8px] flex-1">
          MEDICARE - DENTAL CLINIC
        </h1>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden">
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              src={imgRectangle62} 
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm md:text-lg lg:text-xl font-semibold text-black">
              {currentUser?.data?.username || 'Sofia Smith'}
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Title and Line */}
      <div className="relative px-4 md:px-8 py-4 md:py-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Dashboard</h2>
        <div className="w-full h-px bg-black"></div>
      </div>

      {/* Dashboard Grid */}
      <div className="relative px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Row 1 */}
          <MultiLineButton
            lines={["Employee", "Info"]}
            image={imgInfo1}
            onClick={() => handleNavigate('employee-info')}
            className="h-[200px] md:h-[240px]"
            imageClassName="left-[100px] size-[160px] top-[40px]"
          />
          
          <DashboardButton
            title="Patient Charting"
            image={imgChart1}
            onClick={() => handleNavigate('patient-charting')}
            className="h-[200px] md:h-[240px]"
          />
          
          <DashboardButton
            title="Prescriptions"
            image={imgPrescription1}
            onClick={() => handleNavigate('prescriptions')}
            className="h-[200px] md:h-[240px]"
            imageClassName="left-[100px] size-[160px] top-[40px]"
          />

          {/* Row 2 */}
          <MultiLineButton
            lines={["Treatment Plan", "Management"]}
            image={imgDentalTreatment1}
            onClick={() => handleNavigate('treatment-plan')}
            className="h-[200px] md:h-[240px]"
          />
          
          <MultiLineButton
            lines={["Lab Results &", "Patient History"]}
            image={imgExperimentResults1}
            onClick={() => handleNavigate('lab-results')}
            className="h-[200px] md:h-[240px]"
          />
          
          <DashboardButton
            title="Referral System"
            image={imgMultiAgentSystem11}
            onClick={() => handleNavigate('referral-system')}
            className="h-[200px] md:h-[240px]"
          />

          {/* Row 3 */}
          <MultiLineButton
            lines={["Daily Rounds &", "Patient Monitoring", "Dashboard"]}
            image={imgVitalSigns21}
            onClick={() => handleNavigate('daily-rounds')}
            className="h-[200px] md:h-[240px]"
            imageClassName="left-[100px] size-[160px] top-[40px]"
          />
          
          <DashboardButton
            title="Patient List"
            image={imgPatient}
            onClick={() => handleNavigate('patient-list')}
            className="h-[200px] md:h-[240px]"
          />

        </div>
      </div>

      {/* Logout Button */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
        <button
          onClick={onLogout}
          className="flex items-center space-x-2 text-black hover:text-[#2a7a6e] transition-colors bg-white bg-opacity-80 px-3 py-2 rounded-lg hover:bg-opacity-100"
        >
          <div className="w-3 h-3 md:w-4 md:h-4">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
              <path d={svgPaths.p4cb50f2} fill="currentColor" />
            </svg>
          </div>
          <span className="text-xs md:text-sm font-semibold">logout</span>
        </button>
      </div>

      {/* Online Status Indicator */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6">
        <div className="w-3 h-3 md:w-4 md:h-4">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p130267c0} fill="#2BFF0A" />
          </svg>
        </div>
      </div>
    </div>
  );

  const renderSubPage = () => {
    const handleSubPageBack = () => {
      setCurrentView('main');
    };

    switch (currentView) {
      case 'employee-info':
        return (
          <EmployeeInfoPage
            currentUser={currentUser}
            onBack={handleSubPageBack}
            onLogout={onLogout}
          />
        );
      
      case 'patient-charting':
        return (
          <PatientChartingPage
            currentUser={currentUser}
            onBack={handleSubPageBack}
            onLogout={onLogout}
          />
        );
      
      case 'prescriptions':
        return (
          <PrescriptionsPage
            currentUser={currentUser}
            onBack={handleSubPageBack}
            onLogout={onLogout}
          />
        );
      
      case 'treatment-plan':
        return (
          <TreatmentPlanPage
            currentUser={currentUser}
            onBack={handleSubPageBack}
            onLogout={onLogout}
          />
        );
      
      case 'lab-results':
        return (
          <LabResultsListPage
            currentUser={currentUser}
            onBack={handleSubPageBack}
            onLogout={onLogout}
          />
        );
      
      case 'referral-system':
        return (
          <ReferralSystemPage
            currentUser={currentUser}
            onBack={handleSubPageBack}
            onLogout={onLogout}
          />
        );
      
      case 'daily-rounds':
        return (
          <DailyRoundsListPage
            currentUser={currentUser}
            onBack={handleSubPageBack}
            onLogout={onLogout}
          />
        );
      
      case 'patient-list':
        return (
          <PatientListPage
            currentUser={currentUser}
            onBack={handleSubPageBack}
            onLogout={onLogout}
          />
        );
      
      default:
        return (
          <div className="flex-1 bg-[#e0e0e0] p-4 md:p-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setCurrentView('main')}
                  className="flex items-center space-x-2 text-[#2a7a6e] hover:text-[#1f5c52] transition-colors"
                >
                  <div className="w-6 h-4">
                    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
                      <path d={svgPaths.p1ee95700} fill="currentColor" />
                    </svg>
                  </div>
                  <span className="font-semibold">Back to Dashboard</span>
                </button>
                
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <div className="w-4 h-4">
                    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
                      <path d={svgPaths.p4cb50f2} fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">Logout</span>
                </button>
              </div>

              <div className="text-center py-12">
                <h1 className="text-2xl md:text-3xl font-bold text-[#2a7a6e] mb-4 capitalize">
                  {currentView.replace('-', ' ')} Module
                </h1>
                <p className="text-gray-600 mb-8">
                  This {currentView.replace('-', ' ')} section would contain the specific functionality for this module.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-500 mb-4">
                    Available for {currentUser?.type === 'doctor' ? 'Doctor' : 'Admin'} users
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="bg-white p-4 rounded border">
                      <h3 className="font-semibold text-gray-800 mb-2">Feature 1</h3>
                      <p className="text-sm text-gray-600">Detailed functionality would be implemented here</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h3 className="font-semibold text-gray-800 mb-2">Feature 2</h3>
                      <p className="text-sm text-gray-600">Interactive components for this module</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h3 className="font-semibold text-gray-800 mb-2">Feature 3</h3>
                      <p className="text-sm text-gray-600">Data management and reporting tools</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h3 className="font-semibold text-gray-800 mb-2">Feature 4</h3>
                      <p className="text-sm text-gray-600">Integration with other system modules</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#e0e0e0] flex">
      {/* Collapsible Sidebar */}
      <div className={`bg-[#2a7a6e] transition-all duration-300 flex flex-col ${
        sidebarCollapsed 
          ? 'w-16 md:w-20' 
          : 'w-20 md:w-24'
      }`}>
        {/* Dashboard Icon (Home Button) */}
        <div className="p-4 border-b border-[#1f5c52]">
          <SidebarIcon
            image={imgDashboard11}
            alt="Dashboard Home"
            onClick={() => setCurrentView('main')}
            isActive={currentView === 'main'}
          />
        </div>

        {/* Sidebar Icons */}
        <div className="flex-1 p-4 space-y-4">

          <SidebarIcon
            image={imgInfo1}
            alt="Employee Info"
            onClick={() => handleNavigate('employee-info')}
            isActive={currentView === 'employee-info'}
          />
          <SidebarIcon
            image={imgChart1}
            alt="Patient Charting"
            onClick={() => handleNavigate('patient-charting')}
            isActive={currentView === 'patient-charting'}
          />
          <SidebarIcon
            image={imgPrescription1}
            alt="Prescriptions"
            onClick={() => handleNavigate('prescriptions')}
            isActive={currentView === 'prescriptions'}
          />
          <SidebarIcon
            image={imgDentalTreatment1}
            alt="Treatment Plan"
            onClick={() => handleNavigate('treatment-plan')}
            isActive={currentView === 'treatment-plan'}
          />
          <SidebarIcon
            image={imgExperimentResults1}
            alt="Lab Results"
            onClick={() => handleNavigate('lab-results')}
            isActive={currentView === 'lab-results'}
          />
          <SidebarIcon
            image={imgMultiAgentSystem11}
            alt="Referral System"
            onClick={() => handleNavigate('referral-system')}
            isActive={currentView === 'referral-system'}
          />
          <SidebarIcon
            image={imgVitalSigns21}
            alt="Daily Rounds"
            onClick={() => handleNavigate('daily-rounds')}
            isActive={currentView === 'daily-rounds'}
          />
          <SidebarIcon
            image={imgPatient}
            alt="Patient List"
            onClick={() => handleNavigate('patient-list')}
            isActive={currentView === 'patient-list'}
          />
        </div>
      </div>

      {/* Main Content */}
      {currentView === 'main' ? (
        renderMainDashboard()
      ) : (
        <div className="flex-1">
          {renderSubPage()}
        </div>
      )}
    </div>
  );
}