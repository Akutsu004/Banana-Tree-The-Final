import { useState } from 'react';
import svgPaths from "../imports/svg-hpdckt3snh";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface EditPatientChartingPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
  chartRecord?: {
    dentalChartId: string;
    toothNumber: string;
    condition: string;
    surface: string;
    statusDate: string;
    notes: string;
  };
}

export function EditPatientChartingPage({ currentUser, onBack, onLogout, chartRecord }: EditPatientChartingPageProps) {
  const [formData, setFormData] = useState({
    dentalChartId: chartRecord?.dentalChartId || '',
    toothNumber: chartRecord?.toothNumber || '',
    condition: chartRecord?.condition || '',
    surface: chartRecord?.surface || '',
    statusDate: chartRecord?.statusDate || '',
    notes: chartRecord?.notes || ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Validate required fields
    if (!formData.toothNumber || !formData.condition) {
      alert('Please fill in all required fields (Tooth Number and Condition)');
      return;
    }

    // Mock save functionality
    alert(`Chart record saved successfully!\nTooth: ${formData.toothNumber}\nCondition: ${formData.condition}`);
    onBack();
  };

  return (
    <div className="h-screen bg-[#e0e0e0] overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
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

          {/* Edit Charting Component */}
          <div className="relative px-4 md:px-8 pb-20">
            <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
              {/* Header Section */}
              <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                  Edit Patient Dental Charting
                </h3>
              </div>

              {/* Edit Form */}
              <div className="space-y-6 text-white">
                {/* Top Row - Dental Chart ID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Dental Chart ID (optional):
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        className="w-full bg-transparent outline-none"
                        value={formData.dentalChartId}
                        onChange={(e) => handleInputChange('dentalChartId', e.target.value)}
                        placeholder="Value"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Row - Tooth Number and Condition */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Tooth Number: *
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        className="w-full bg-transparent outline-none"
                        value={formData.toothNumber}
                        onChange={(e) => handleInputChange('toothNumber', e.target.value)}
                        placeholder="Value"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Condition: *
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        className="w-full bg-transparent outline-none"
                        value={formData.condition}
                        onChange={(e) => handleInputChange('condition', e.target.value)}
                        placeholder="Value"
                      />
                    </div>
                  </div>
                </div>

                {/* Third Row - Surface */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Surface:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        className="w-full bg-transparent outline-none"
                        value={formData.surface}
                        onChange={(e) => handleInputChange('surface', e.target.value)}
                        placeholder="Value"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Status Date:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="date"
                        className="w-full bg-transparent outline-none"
                        value={formData.statusDate}
                        onChange={(e) => handleInputChange('statusDate', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                    Notes:
                  </label>
                  <div className="bg-white text-black p-4 rounded">
                    <textarea
                      className="w-full bg-transparent outline-none resize-none"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="[Edit Notes Here]"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <button
                    onClick={handleSave}
                    className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-3 rounded-[50px] transition-colors font-bold text-sm md:text-base lg:text-lg tracking-wider"
                  >
                    Save
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
  );
}