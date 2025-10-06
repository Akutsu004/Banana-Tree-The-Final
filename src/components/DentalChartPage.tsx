import { useState } from 'react';
import svgPaths from "../imports/svg-sdbw27ua7j";
import imgVitalSigns21 from "figma:asset/44b4baf1b77716433605deebefe78561633c9dd5.png";
import imgExperimentResults1 from "figma:asset/33823922dddacff3e43beed20b5a0dbd30c82cfa.png";
import imgDashboard11 from "figma:asset/4d09bee6bfa0c32612bff38a59758df3d7138ef9.png";
import imgInfo1 from "figma:asset/8a429c8ceef6cb44f2be6652b8837246507ab528.png";
import imgChart1 from "figma:asset/7d04115f16b591b3f1f302f1dedd740d7cea4b23.png";
import imgPrescription1 from "figma:asset/59fa633d9a05b98f8f1565a899fd2021e68efbf8.png";
import imgDentalTreatment1 from "figma:asset/8ba03e4cd1254caaad70bd3d0ee583046a420e3c.png";
import imgList1 from "figma:asset/895ab3cb750bb969d743dd367f141b1eb652e89f.png";
import imgMultiAgentSystem11 from "figma:asset/b5bdc0bca85a20ca93e01dc956f98a8e2975f360.png";
import imgPatient from "figma:asset/54876f29d7d2448648833f0ded884967d53e60ce.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface DentalChartPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onEdit: () => void;
  onLogout: () => void;
}

export function DentalChartPage({ currentUser, onBack, onEdit, onLogout }: DentalChartPageProps) {
  // Mock dental chart data
  const [chartData] = useState({
    patientName: "Mihoyo Bloodborne",
    patientId: "2000001",
    dentalChartId: "DC-2024-001",
    toothNumber: "14",
    condition: "Cavity - Occlusal Surface",
    surface: "Occlusal",
    statusDate: "2024-10-05",
    notes: "Patient reports mild sensitivity to cold beverages. Recommend fluoride treatment after restoration. Schedule follow-up in 2 weeks to monitor healing progress."
  });

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

  return (
    <div className="h-screen bg-[#e0e0e0] overflow-hidden">
      {/* Main Content */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Use Figma Import with overlays for navigation */}
        <div className="relative w-full h-full">
          {/* Import the actual Figma dental chart component */}
          <div className="relative w-full h-full bg-[#e0e0e0]">
            {/* Header */}
            <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={onBack}
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

            {/* Page Title and Line */}
            <div className="relative px-4 md:px-8 py-4 md:py-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Patient Dental Charting</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Dental Chart Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Patient Chart: {chartData.patientName} (ID: {chartData.patientId})
                  </h3>
                </div>

                {/* Chart Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-white">
                  {/* Left Column - Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2">
                        Dental Chart ID:
                      </label>
                      <div className="bg-white text-black p-3 rounded min-h-[40px] flex items-center">
                        <span className="text-sm md:text-base">{chartData.dentalChartId}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2">
                        Tooth Number:
                      </label>
                      <div className="bg-white text-black p-3 rounded min-h-[40px] flex items-center">
                        <span className="text-sm md:text-base">{chartData.toothNumber}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2">
                        Condition:
                      </label>
                      <div className="bg-white text-black p-3 rounded min-h-[40px] flex items-center">
                        <span className="text-sm md:text-base">{chartData.condition}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2">
                        Surface:
                      </label>
                      <div className="bg-white text-black p-3 rounded min-h-[40px] flex items-center">
                        <span className="text-sm md:text-base">{chartData.surface}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2">
                        Status Date:
                      </label>
                      <div className="bg-white text-black p-3 rounded min-h-[40px] flex items-center">
                        <span className="text-sm md:text-base">{chartData.statusDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Tooth Diagram */}
                  <div className="flex items-center justify-center">
                    <div className="bg-white text-black p-8 rounded text-center min-h-[300px] w-full flex items-center justify-center">
                      <div>
                        <p className="font-bold text-lg md:text-xl lg:text-2xl mb-2">[Tooth Diagram]</p>
                        <p className="text-sm md:text-base">(optional)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="mt-6">
                  <label className="block font-bold text-lg md:text-xl lg:text-2xl text-white tracking-[2px] md:tracking-[3.6px] mb-2">
                    Notes:
                  </label>
                  <div className="bg-white text-black p-4 rounded min-h-[120px]">
                    <p className="text-sm md:text-base leading-relaxed">{chartData.notes}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={onEdit}
                      className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-3 rounded-[50px] transition-colors font-bold text-sm md:text-base lg:text-lg tracking-wider"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-3 rounded-[50px] transition-colors font-bold text-sm md:text-base lg:text-lg tracking-wider"
                    >
                      Print
                    </button>
                  </div>
                </div>
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
        </div>
      </div>
    </div>
  );
}