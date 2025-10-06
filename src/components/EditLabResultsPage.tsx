import { useState } from 'react';
import svgPaths from "../imports/svg-k9dhsgihmt";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface EditLabResultsPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onSave: (formData: any) => void;
  onLogout: () => void;
  record: {
    id: string;
    patientId: string;
    patientName: string;
    recordId: string;
    personnelId: string;
    appointmentId: string;
    underlyingCondition: string;
    prescriptionId: string;
    diagnosis: string;
    treatmentPlanId: string;
    allergies: string;
    notes: string;
    status: string;
    labTestType: string;
    testDate: string;
    results: string;
  };
}

export function EditLabResultsPage({ currentUser, onBack, onSave, onLogout, record }: EditLabResultsPageProps) {
  const [formData, setFormData] = useState({
    patientName: record.patientName,
    patientId: record.patientId,
    recordId: record.recordId,
    personnelId: record.personnelId,
    appointmentId: record.appointmentId,
    underlyingCondition: record.underlyingCondition,
    prescriptionId: record.prescriptionId,
    diagnosis: record.diagnosis,
    treatmentPlanId: record.treatmentPlanId,
    allergies: record.allergies,
    labTestType: record.labTestType,
    testDate: record.testDate,
    results: record.results,
    notes: record.notes
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    onSave(formData);
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

            {/* Online Status Indicator */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <div className="w-3 h-3 md:w-4 md:h-4">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p130267c0} fill="#2BFF0A" />
                </svg>
              </div>
            </div>
          </div>

          {/* Page Title and Line */}
          <div className="relative px-4 md:px-8 py-4 md:py-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Lab Results & Patient History</h2>
            <div className="w-full h-px bg-black"></div>
          </div>

          {/* Edit Lab Results Component */}
          <div className="relative px-4 md:px-8 pb-20">
            <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
              {/* Header Section */}
              <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                  Edit Lab Results & Patient History
                </h3>
              </div>

              {/* Edit Form */}
              <div className="space-y-6 text-white">
                {/* First Row - Patient Information */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Patient Name:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.patientName}
                        onChange={(e) => handleInputChange('patientName', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter patient name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Patient ID:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.patientId}
                        onChange={(e) => handleInputChange('patientId', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter patient ID"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Record ID:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.recordId}
                        onChange={(e) => handleInputChange('recordId', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter record ID"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Personnel ID:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.personnelId}
                        onChange={(e) => handleInputChange('personnelId', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter personnel ID"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Row - Lab and Appointment Information */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Lab Test Type:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.labTestType}
                        onChange={(e) => handleInputChange('labTestType', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter lab test type"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Test Date:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="date"
                        value={formData.testDate}
                        onChange={(e) => handleInputChange('testDate', e.target.value)}
                        className="w-full bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Appointment ID:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.appointmentId}
                        onChange={(e) => handleInputChange('appointmentId', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter appointment ID"
                      />
                    </div>
                  </div>
                </div>

                {/* Third Row - Medical Information */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Treatment Plan ID:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.treatmentPlanId}
                        onChange={(e) => handleInputChange('treatmentPlanId', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter treatment plan ID"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Prescription ID:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.prescriptionId}
                        onChange={(e) => handleInputChange('prescriptionId', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter prescription ID"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Diagnosis:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.diagnosis}
                        onChange={(e) => handleInputChange('diagnosis', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter diagnosis"
                      />
                    </div>
                  </div>
                </div>

                {/* Fourth Row - Medical Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Underlying Condition:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.underlyingCondition}
                        onChange={(e) => handleInputChange('underlyingCondition', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter underlying condition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Allergies:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={formData.allergies}
                        onChange={(e) => handleInputChange('allergies', e.target.value)}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter allergies"
                      />
                    </div>
                  </div>
                </div>

                {/* Lab Results Section */}
                <div>
                  <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                    Lab Results:
                  </label>
                  <div className="bg-white text-black p-4 rounded">
                    <textarea
                      value={formData.results}
                      onChange={(e) => handleInputChange('results', e.target.value)}
                      className="w-full bg-transparent outline-none resize-none"
                      rows={3}
                      placeholder="Enter lab results here..."
                    />
                  </div>
                </div>

                {/* Notes Section */}
                <div>
                  <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                    Notes:
                  </label>
                  <div className="bg-white text-black p-4 rounded">
                    <textarea
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="w-full bg-transparent outline-none resize-none"
                      rows={3}
                      placeholder="Enter additional notes here..."
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
              className="flex items-center space-x-2 text-black hover:text-[#2a7a6e] transition-colors bg-white bg-opacity-80 px-3 py-2 rounded-lg hover:bg-opacity-100 shadow-md"
            >
              <div className="w-3 h-3 md:w-4 md:h-4">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
                  <path d={svgPaths.p4cb50f2} fill="currentColor" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-semibold">logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}