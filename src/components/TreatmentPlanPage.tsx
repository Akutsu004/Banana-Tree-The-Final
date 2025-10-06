import { useState } from 'react';
import svgPaths from "../imports/svg-pnn5zhc9ew";
import imgDelete2 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";
import imgView12 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import imgEdit1 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface TreatmentPlanPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

interface TreatmentPlanRecord {
  id: string;
  treatmentPlanId: string;
  patientId: string;
  recordId: string;
  personnelId: string;
  treatmentPlan: string;
  notes: string;
  status: string;
}

type ViewMode = 'patient-list' | 'view-treatment-plan' | 'edit-treatment-plan' | 'add-treatment-plan';

export function TreatmentPlanPage({ currentUser, onBack, onLogout }: TreatmentPlanPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('patient-list');
  const [selectedTreatmentPlan, setSelectedTreatmentPlan] = useState<TreatmentPlanRecord | null>(null);
  
  // Form states
  const [treatmentPlanFormData, setTreatmentPlanFormData] = useState({
    patientId: '',
    recordId: '',
    treatmentPlan: '',
    notes: ''
  });
  
  const [treatmentPlanRecords, setTreatmentPlanRecords] = useState<TreatmentPlanRecord[]>([
    {
      id: '1',
      treatmentPlanId: '5000001',
      patientId: '2000001',
      recordId: '4000001',
      personnelId: '1001',
      treatmentPlan: 'Comprehensive orthodontic treatment including braces installation and monthly adjustments for 24 months',
      notes: 'Patient requires regular follow-ups every 4 weeks. Special attention to oral hygiene during treatment.',
      status: 'Active'
    },
    {
      id: '2',
      treatmentPlanId: '5000002',
      patientId: '2000002',
      recordId: '4000002',
      personnelId: '1002',
      treatmentPlan: 'Root canal therapy on tooth #14 followed by crown placement and bite adjustment',
      notes: 'Patient has sensitivity to cold. Recommend special care during healing period.',
      status: 'In Progress'
    },
    {
      id: '3',
      treatmentPlanId: '5000003',
      patientId: '2000003',
      recordId: '4000003',
      personnelId: '1001',
      treatmentPlan: 'Preventive care program including bi-annual cleanings and fluoride treatments',
      notes: 'Patient maintains excellent oral hygiene. Continue current preventive schedule.',
      status: 'Completed'
    }
  ]);

  const filteredRecords = treatmentPlanRecords.filter(record =>
    record.treatmentPlanId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.recordId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.personnelId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.treatmentPlan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.notes.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTreatmentPlan = () => {
    setTreatmentPlanFormData({
      patientId: '',
      recordId: '',
      treatmentPlan: '',
      notes: ''
    });
    setViewMode('add-treatment-plan');
  };

  const handleAddTreatmentPlanSubmit = () => {
    const newRecord: TreatmentPlanRecord = {
      id: String(treatmentPlanRecords.length + 1),
      treatmentPlanId: `500000${treatmentPlanRecords.length + 1}`,
      patientId: treatmentPlanFormData.patientId || `200000${treatmentPlanRecords.length + 1}`,
      recordId: treatmentPlanFormData.recordId || `400000${treatmentPlanRecords.length + 1}`,
      personnelId: '1001',
      treatmentPlan: treatmentPlanFormData.treatmentPlan || 'New treatment plan',
      notes: treatmentPlanFormData.notes || 'New treatment plan notes',
      status: 'Planning'
    };
    setTreatmentPlanRecords([...treatmentPlanRecords, newRecord]);
    setViewMode('patient-list');
  };

  const handleViewTreatmentPlan = (record: TreatmentPlanRecord) => {
    setSelectedTreatmentPlan(record);
    setViewMode('view-treatment-plan');
  };

  const handleEditTreatmentPlan = (record: TreatmentPlanRecord) => {
    setSelectedTreatmentPlan(record);
    setTreatmentPlanFormData({
      patientId: record.patientId,
      recordId: record.recordId,
      treatmentPlan: record.treatmentPlan,
      notes: record.notes
    });
    setViewMode('edit-treatment-plan');
  };

  const handleEditTreatmentPlanFromView = () => {
    if (selectedTreatmentPlan) {
      setTreatmentPlanFormData({
        patientId: selectedTreatmentPlan.patientId,
        recordId: selectedTreatmentPlan.recordId,
        treatmentPlan: selectedTreatmentPlan.treatmentPlan,
        notes: selectedTreatmentPlan.notes
      });
    }
    setViewMode('edit-treatment-plan');
  };

  const handleSaveTreatmentPlanEdit = () => {
    if (selectedTreatmentPlan) {
      const updatedRecords = treatmentPlanRecords.map(record => 
        record.id === selectedTreatmentPlan.id 
          ? { ...record, ...treatmentPlanFormData }
          : record
      );
      setTreatmentPlanRecords(updatedRecords);
      setSelectedTreatmentPlan({ ...selectedTreatmentPlan, ...treatmentPlanFormData });
    }
    setViewMode('view-treatment-plan');
  };

  const handleBackToList = () => {
    setSelectedTreatmentPlan(null);
    setViewMode('patient-list');
  };

  const handleBackToView = () => {
    setViewMode('view-treatment-plan');
  };

  const handleRemove = (recordId: string) => {
    if (confirm('Are you sure you want to remove this treatment plan record?')) {
      setTreatmentPlanRecords(treatmentPlanRecords.filter(record => record.id !== recordId));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'in progress':
        return 'text-blue-600 bg-blue-100';
      case 'completed':
        return 'text-gray-600 bg-gray-100';
      case 'planning':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const ActionButton = ({ type, onClick, className = "" }: {
    type: 'view' | 'edit' | 'remove';
    onClick: () => void;
    className?: string;
  }) => {
    const getImage = () => {
      switch (type) {
        case 'view': return imgView12;
        case 'edit': return imgEdit1;
        case 'remove': return imgDelete2;
      }
    };

    return (
      <button
        onClick={onClick}
        className={`w-6 h-6 sm:w-8 sm:h-8 bg-[#00b7c2] rounded hover:bg-[#008a94] transition-colors flex items-center justify-center ${className}`}
        title={`${type.charAt(0).toUpperCase() + type.slice(1)} record`}
      >
        <img 
          alt={type} 
          className="w-3 h-3 sm:w-4 sm:h-4 object-contain" 
          src={getImage()} 
        />
      </button>
    );
  };

  // Handle view treatment plan mode
  if (viewMode === 'view-treatment-plan' && selectedTreatmentPlan) {
    return (
      <div className="h-screen bg-[#e0e0e0] overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="relative w-full h-full bg-[#e0e0e0]">
            {/* Header */}
            <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToList}
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Treatment Plan Management</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Treatment Plan View Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Patient Chart: John Dela Cruz (ID: {selectedTreatmentPlan.patientId})
                  </h3>
                </div>

                {/* Treatment Plan Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-white mb-6">
                  {/* Left Column - Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2 text-white">
                        Record ID: {selectedTreatmentPlan.recordId}
                      </label>
                    </div>
                  </div>

                  {/* Right Column - Personnel Info */}
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2 text-white">
                        Entered by: Dr. Pinkman
                      </label>
                    </div>
                  </div>
                </div>

                {/* Treatment Plan Section */}
                <div className="mb-6">
                  <label className="block font-bold text-lg md:text-xl lg:text-2xl text-white tracking-[2px] md:tracking-[3.6px] mb-2">
                    Treatment Plan:
                  </label>
                  <div className="bg-white text-black p-4 rounded">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-[2px] md:tracking-[3.6px]">
                      {selectedTreatmentPlan.treatmentPlan}
                    </p>
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <label className="block font-bold text-lg md:text-xl lg:text-2xl text-white tracking-[2px] md:tracking-[3.6px] mb-2">
                    Notes:
                  </label>
                  <div className="bg-white text-black p-4 rounded">
                    <p className="text-base">{selectedTreatmentPlan.notes}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={handleEditTreatmentPlanFromView}
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
    );
  }

  // Handle edit treatment plan mode
  if (viewMode === 'edit-treatment-plan' && selectedTreatmentPlan) {
    return (
      <div className="h-screen bg-[#e0e0e0] overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="relative w-full h-full bg-[#e0e0e0]">
            {/* Header */}
            <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToView}
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Treatment Plan Management</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Edit Treatment Plan Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Edit Patient's Treatment Plan
                  </h3>
                </div>

                {/* Edit Form */}
                <div className="space-y-6 text-white">
                  {/* Record ID */}
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Record ID:
                    </label>
                    <div className="bg-white text-black p-3 rounded">
                      <input
                        type="text"
                        value={treatmentPlanFormData.recordId}
                        onChange={(e) => setTreatmentPlanFormData(prev => ({ ...prev, recordId: e.target.value }))}
                        className="w-full bg-transparent outline-none"
                      />
                    </div>
                  </div>

                  {/* Treatment Plan */}
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Treatment Plan:
                    </label>
                    <div className="bg-white text-black p-4 rounded">
                      <textarea
                        value={treatmentPlanFormData.treatmentPlan}
                        onChange={(e) => setTreatmentPlanFormData(prev => ({ ...prev, treatmentPlan: e.target.value }))}
                        className="w-full bg-transparent outline-none resize-none"
                        rows={4}
                        placeholder="[Edit Treatment Plan Here]"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Notes:
                    </label>
                    <div className="bg-white text-black p-4 rounded">
                      <textarea
                        value={treatmentPlanFormData.notes}
                        onChange={(e) => setTreatmentPlanFormData(prev => ({ ...prev, notes: e.target.value }))}
                        className="w-full bg-transparent outline-none resize-none"
                        rows={4}
                        placeholder="[Edit Notes Here]"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={handleSaveTreatmentPlanEdit}
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

  // Handle add treatment plan mode
  if (viewMode === 'add-treatment-plan') {
    return (
      <div className="h-screen bg-[#e0e0e0] overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="relative w-full h-full bg-[#e0e0e0]">
            {/* Header */}
            <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToList}
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Treatment Plan Management</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Add Treatment Plan Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Add Patient's Treatment Plan
                  </h3>
                </div>

                {/* Add Form */}
                <div className="space-y-6 text-white">
                  {/* Top Row - Patient ID and Record ID */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Patient ID:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          value={treatmentPlanFormData.patientId}
                          onChange={(e) => setTreatmentPlanFormData(prev => ({ ...prev, patientId: e.target.value }))}
                          className="w-full bg-transparent outline-none"
                          placeholder="Value"
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
                          value={treatmentPlanFormData.recordId}
                          onChange={(e) => setTreatmentPlanFormData(prev => ({ ...prev, recordId: e.target.value }))}
                          className="w-full bg-transparent outline-none"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Treatment Plan */}
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Treatment Plan:
                    </label>
                    <div className="bg-white text-black p-4 rounded">
                      <textarea
                        value={treatmentPlanFormData.treatmentPlan}
                        onChange={(e) => setTreatmentPlanFormData(prev => ({ ...prev, treatmentPlan: e.target.value }))}
                        className="w-full bg-transparent outline-none resize-none"
                        rows={4}
                        placeholder="[Add Treatment Plan Here]"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Notes:
                    </label>
                    <div className="bg-white text-black p-4 rounded">
                      <textarea
                        value={treatmentPlanFormData.notes}
                        onChange={(e) => setTreatmentPlanFormData(prev => ({ ...prev, notes: e.target.value }))}
                        className="w-full bg-transparent outline-none resize-none"
                        rows={4}
                        placeholder="[Add Notes Here]"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={handleAddTreatmentPlanSubmit}
                      className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-3 rounded-[50px] transition-colors font-bold text-sm md:text-base lg:text-lg tracking-wider"
                    >
                      Add
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

  // Main list view (default)
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

          {/* Main Content */}
          <div className="flex-1 flex flex-col p-3 md:p-4 overflow-hidden">
            {/* Page Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-1 tracking-wider">Treatment Plan Management (Patient List)</h2>
            <div className="w-full h-0.5 bg-black mb-4"></div>

            {/* Search and Actions Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              {/* Search Bar */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Patient"
                    className="w-full h-10 sm:h-12 bg-[#ece6f0] rounded-full px-4 sm:px-6 pr-12 text-sm sm:text-base text-[#49454f] placeholder-[#49454f] outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-[#49454f]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p16b4a380} fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Add Treatment Plan Button */}
              <button
                onClick={handleAddTreatmentPlan}
                className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.pe7cde70} fill="currentColor" />
                </svg>
                <span className="text-xs sm:text-sm font-medium tracking-wider">Add Treatment Plan</span>
              </button>
            </div>

            {/* Table Container */}
            <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden min-h-0">
              {/* Table Header */}
              <div className="bg-[#2a7a6e] text-white">
                <div className="grid grid-cols-12 gap-2 p-3 text-xs font-medium tracking-wider">
                  <div className="col-span-2 text-center">Treatment Plan ID</div>
                  <div className="col-span-1.5 text-center">Patient ID</div>
                  <div className="col-span-1.5 text-center">Record ID</div>
                  <div className="col-span-1.5 text-center">Personnel ID</div>
                  <div className="col-span-3 text-center">Treatment Plan</div>
                  <div className="col-span-1.5 text-center">Status</div>
                  <div className="col-span-1 text-center">Action</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 h-[calc(100%-52px)] overflow-y-auto">
                {filteredRecords.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    {searchTerm ? 'No records found matching your search.' : 'No treatment plan records available.'}
                  </div>
                ) : (
                  filteredRecords.map((record) => (
                    <div key={record.id} className="grid grid-cols-12 gap-2 p-3 hover:bg-gray-50 transition-colors">
                      <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.treatmentPlanId}
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.patientId}
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.recordId}
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.personnelId}
                      </div>
                      <div className="col-span-3 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        <div className="truncate" title={record.treatmentPlan}>
                          {record.treatmentPlan.substring(0, 50)}...
                        </div>
                      </div>
                      <div className="col-span-1.5 text-center">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </div>
                      <div className="col-span-1 flex justify-center space-x-1">
                        <ActionButton
                          type="view"
                          onClick={() => handleViewTreatmentPlan(record)}
                        />
                        <ActionButton
                          type="edit"
                          onClick={() => handleEditTreatmentPlan(record)}
                        />
                        <ActionButton
                          type="remove"
                          onClick={() => handleRemove(record.id)}
                        />
                      </div>
                    </div>
                  ))
                )}
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