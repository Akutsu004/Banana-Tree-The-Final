import { useState } from 'react';
import svgPathsRaw from "../imports/svg-81atb4piwj";
const svgPaths: any = svgPathsRaw;
import imgDelete2 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";
import imgView12 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import imgEdit1 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface LabResultsPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

interface PatientHistoryRecord {
  id: string;
  patientId: string;
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
}

type ViewMode = 'patient-list' | 'view-patient-history' | 'edit-patient-history' | 'add-patient-history';

export function LabResultsPage({ currentUser, onBack, onLogout }: LabResultsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('patient-list');
  const [selectedPatientHistory, setSelectedPatientHistory] = useState<PatientHistoryRecord | null>(null);
  
  const [patientHistoryRecords, setPatientHistoryRecords] = useState<PatientHistoryRecord[]>([
    {
      id: '1',
      patientId: '2000001',
      recordId: '4000001',
      personnelId: '1001',
      appointmentId: '9000001',
      underlyingCondition: 'Diabetes Type 2',
      prescriptionId: '6000001',
      diagnosis: 'Periodontal disease with mild gingivitis',
      treatmentPlanId: '5000001',
      allergies: 'Penicillin, Latex',
      notes: 'Patient responds well to treatment. Regular monitoring required.',
      status: 'Active'
    },
    {
      id: '2',
      patientId: '2000002',
      recordId: '4000002',
      personnelId: '1002',
      appointmentId: '9000002',
      underlyingCondition: 'Hypertension',
      prescriptionId: '6000002',
      diagnosis: 'Dental caries on multiple teeth',
      treatmentPlanId: '5000002',
      allergies: 'None reported',
      notes: 'Patient requires extensive restorative work. Scheduling multiple sessions.',
      status: 'In Progress'
    },
    {
      id: '3',
      patientId: '2000003',
      recordId: '4000003',
      personnelId: '1001',
      appointmentId: '9000003',
      underlyingCondition: 'Asthma',
      prescriptionId: '6000003',
      diagnosis: 'Routine dental cleaning and examination',
      treatmentPlanId: '5000003',
      allergies: 'Shellfish',
      notes: 'Patient maintains excellent oral hygiene. Continue preventive care.',
      status: 'Completed'
    }
  ]);

  // Form states
  const [patientHistoryFormData, setPatientHistoryFormData] = useState({
    patientId: '',
    recordId: '',
    personnelId: '',
    appointmentId: '',
    underlyingCondition: '',
    prescriptionId: '',
    diagnosis: '',
    treatmentPlanId: '',
    allergies: '',
    notes: ''
  });

  const filteredRecords = patientHistoryRecords.filter(record =>
    record.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.recordId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.personnelId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.appointmentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.underlyingCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.allergies.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatientHistory = () => {
    setPatientHistoryFormData({
      patientId: '',
      recordId: '',
      personnelId: '',
      appointmentId: '',
      underlyingCondition: '',
      prescriptionId: '',
      diagnosis: '',
      treatmentPlanId: '',
      allergies: '',
      notes: ''
    });
    setViewMode('add-patient-history');
  };

  const handleAddPatientHistorySubmit = () => {
    const newRecord: PatientHistoryRecord = {
      id: String(patientHistoryRecords.length + 1),
      patientId: patientHistoryFormData.patientId || `200000${patientHistoryRecords.length + 1}`,
      recordId: patientHistoryFormData.recordId || `400000${patientHistoryRecords.length + 1}`,
      personnelId: patientHistoryFormData.personnelId || '1001',
      appointmentId: patientHistoryFormData.appointmentId || `900000${patientHistoryRecords.length + 1}`,
      underlyingCondition: patientHistoryFormData.underlyingCondition || 'New condition',
      prescriptionId: patientHistoryFormData.prescriptionId || `600000${patientHistoryRecords.length + 1}`,
      diagnosis: patientHistoryFormData.diagnosis || 'New diagnosis',
      treatmentPlanId: patientHistoryFormData.treatmentPlanId || `500000${patientHistoryRecords.length + 1}`,
      allergies: patientHistoryFormData.allergies || 'None reported',
      notes: patientHistoryFormData.notes || 'New patient history notes',
      status: 'Active'
    };
    setPatientHistoryRecords([...patientHistoryRecords, newRecord]);
    setViewMode('patient-list');
  };

  const handleViewPatientHistory = (record: PatientHistoryRecord) => {
    setSelectedPatientHistory(record);
    setViewMode('view-patient-history');
  };

  const handleEditPatientHistory = (record: PatientHistoryRecord) => {
    setSelectedPatientHistory(record);
    setPatientHistoryFormData({
      patientId: record.patientId,
      recordId: record.recordId,
      personnelId: record.personnelId,
      appointmentId: record.appointmentId,
      underlyingCondition: record.underlyingCondition,
      prescriptionId: record.prescriptionId,
      diagnosis: record.diagnosis,
      treatmentPlanId: record.treatmentPlanId,
      allergies: record.allergies,
      notes: record.notes
    });
    setViewMode('edit-patient-history');
  };

  const handleEditPatientHistoryFromView = () => {
    if (selectedPatientHistory) {
      setPatientHistoryFormData({
        patientId: selectedPatientHistory.patientId,
        recordId: selectedPatientHistory.recordId,
        personnelId: selectedPatientHistory.personnelId,
        appointmentId: selectedPatientHistory.appointmentId,
        underlyingCondition: selectedPatientHistory.underlyingCondition,
        prescriptionId: selectedPatientHistory.prescriptionId,
        diagnosis: selectedPatientHistory.diagnosis,
        treatmentPlanId: selectedPatientHistory.treatmentPlanId,
        allergies: selectedPatientHistory.allergies,
        notes: selectedPatientHistory.notes
      });
    }
    setViewMode('edit-patient-history');
  };

  const handleSavePatientHistoryEdit = () => {
    if (selectedPatientHistory) {
      const updatedRecords = patientHistoryRecords.map(record => 
        record.id === selectedPatientHistory.id 
          ? { ...record, ...patientHistoryFormData }
          : record
      );
      setPatientHistoryRecords(updatedRecords);
      setSelectedPatientHistory({ ...selectedPatientHistory, ...patientHistoryFormData });
    }
    setViewMode('view-patient-history');
  };

  const handleBackToList = () => {
    setSelectedPatientHistory(null);
    setViewMode('patient-list');
  };

  const handleBackToView = () => {
    setViewMode('view-patient-history');
  };

  const handleRemove = (recordId: string) => {
    if (confirm('Are you sure you want to remove this patient history record?')) {
      setPatientHistoryRecords(patientHistoryRecords.filter(record => record.id !== recordId));
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
      case 'pending':
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

  // Form update handler
  const updatePatientHistoryForm = (field: string, value: string) => {
    setPatientHistoryFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle view patient history mode
  if (viewMode === 'view-patient-history' && selectedPatientHistory) {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Lab Results & Patient History</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Patient Record Card */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#8fd0c6] rounded-[30px] p-6 shadow-lg overflow-hidden">
                {/* Patient Header */}
                <div className="bg-[#2a7a6e] rounded-[30px] p-6 mb-6">
                  <h3 className="font-bold text-[48px] text-white tracking-[7.2px] leading-none mb-4">
                    Mark Solomon
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Patient Info */}
                  <div className="lg:col-span-2 space-y-2">
                    <div className="grid grid-cols-1 gap-2 text-[24px] font-bold">
                      <p className="font-mono tracking-[2.4px]">Patient ID: {selectedPatientHistory.patientId}</p>
                      <p className="font-mono tracking-[2.4px]">Record ID: {selectedPatientHistory.recordId}</p>
                      <p className="font-mono tracking-[2.4px]">Doctor-In-Charge: Dr. Pinkman</p>
                      <p className="font-mono tracking-[2.4px]">Appointment ID: {selectedPatientHistory.appointmentId}</p>
                      <p className="font-mono tracking-[2.4px]">Underlying Condition: {selectedPatientHistory.underlyingCondition}</p>
                      <p className="font-mono tracking-[2.4px]">Prescription ID: {selectedPatientHistory.prescriptionId}</p>
                      <p className="font-mono tracking-[2.4px]">Diagnosis: {selectedPatientHistory.diagnosis}</p>
                      <p className="font-mono tracking-[2.4px]">Treatment Plan ID: {selectedPatientHistory.treatmentPlanId}</p>
                      <p className="font-mono tracking-[2.4px]">Allergies: {selectedPatientHistory.allergies}</p>
                    </div>
                  </div>

                  {/* Right Column - Tooth Diagram */}
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-[24px] text-black text-center tracking-[3.6px] mb-2">
                      Tooth Diagram
                    </h4>
                    <p className="text-center text-[24px] tracking-[3.6px]">(optional)</p>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="mt-6">
                  <h4 className="font-bold text-[24px] text-white tracking-[3.6px] mb-4">Notes:</h4>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-lg">{selectedPatientHistory.notes}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-4 mt-6 justify-start">
                  <button
                    onClick={handleEditPatientHistoryFromView}
                    className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-3 rounded-[50px] transition-colors font-bold text-[18px] tracking-wider"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-3 rounded-[50px] transition-colors font-bold text-[18px] tracking-wider"
                  >
                    Print
                  </button>
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

  // Handle edit patient history mode
  if (viewMode === 'edit-patient-history' && selectedPatientHistory) {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Lab Results & Patient History</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Edit Form */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-[24px] text-black tracking-[3.6px]">
                    Add Patient History
                  </h3>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Top Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Record ID:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.recordId}
                        onChange={(e) => updatePatientHistoryForm('recordId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Doctor-In-Charge:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.personnelId}
                        onChange={(e) => updatePatientHistoryForm('personnelId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Appointment ID:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.appointmentId}
                        onChange={(e) => updatePatientHistoryForm('appointmentId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Middle Rows */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Underlying Condition:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.underlyingCondition}
                        onChange={(e) => updatePatientHistoryForm('underlyingCondition', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Prescription ID:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.prescriptionId}
                        onChange={(e) => updatePatientHistoryForm('prescriptionId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Diagnosis:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.diagnosis}
                        onChange={(e) => updatePatientHistoryForm('diagnosis', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Treatment Plan ID:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.treatmentPlanId}
                        onChange={(e) => updatePatientHistoryForm('treatmentPlanId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                      Allergies:
                    </label>
                    <input
                      type="text"
                      value={patientHistoryFormData.allergies}
                      onChange={(e) => updatePatientHistoryForm('allergies', e.target.value)}
                      className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-bold text-[16px] tracking-[2.4px] mb-2 text-black">
                      Notes:
                    </label>
                    <textarea
                      value={patientHistoryFormData.notes}
                      onChange={(e) => updatePatientHistoryForm('notes', e.target.value)}
                      rows={4}
                      className="w-full bg-white text-black p-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e] resize-none"
                      placeholder="[Edit Notes Here]"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <button
                    onClick={handleSavePatientHistoryEdit}
                    className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-3 rounded-[50px] transition-colors font-bold text-[18px] tracking-wider"
                  >
                    Save
                  </button>
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

  // Handle add patient history mode
  if (viewMode === 'add-patient-history') {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Lab Results & Patient History</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Add Form */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-[24px] text-black tracking-[3.6px]">
                    Add Patient History
                  </h3>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Top Row */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Patient ID:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.patientId}
                        onChange={(e) => updatePatientHistoryForm('patientId', e.target.value)}
                        placeholder="Patient ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Record ID:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.recordId}
                        onChange={(e) => updatePatientHistoryForm('recordId', e.target.value)}
                        placeholder="Record ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Doctor-In-Charge:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.personnelId}
                        onChange={(e) => updatePatientHistoryForm('personnelId', e.target.value)}
                        placeholder="Personnel ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Appointment ID:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.appointmentId}
                        onChange={(e) => updatePatientHistoryForm('appointmentId', e.target.value)}
                        placeholder="Appointment ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Middle Rows */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Underlying Condition:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.underlyingCondition}
                        onChange={(e) => updatePatientHistoryForm('underlyingCondition', e.target.value)}
                        placeholder="Value"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Prescription ID:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.prescriptionId}
                        onChange={(e) => updatePatientHistoryForm('prescriptionId', e.target.value)}
                        placeholder="Value"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Diagnosis:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.diagnosis}
                        onChange={(e) => updatePatientHistoryForm('diagnosis', e.target.value)}
                        placeholder="Value"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Treatment Plan ID:
                      </label>
                      <input
                        type="text"
                        value={patientHistoryFormData.treatmentPlanId}
                        onChange={(e) => updatePatientHistoryForm('treatmentPlanId', e.target.value)}
                        placeholder="Value"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                      Allergies:
                    </label>
                    <input
                      type="text"
                      value={patientHistoryFormData.allergies}
                      onChange={(e) => updatePatientHistoryForm('allergies', e.target.value)}
                      placeholder="Value"
                      className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-bold text-[16px] tracking-[2.4px] mb-2 text-black">
                      Notes:
                    </label>
                    <textarea
                      value={patientHistoryFormData.notes}
                      onChange={(e) => updatePatientHistoryForm('notes', e.target.value)}
                      rows={4}
                      className="w-full bg-white text-black p-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e] resize-none"
                      placeholder="[Edit Notes Here]"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <button
                    onClick={handleAddPatientHistorySubmit}
                    className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-3 rounded-[50px] transition-colors font-bold text-[18px] tracking-wider"
                  >
                    Add
                  </button>
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

          {/* Page Title and Line */}
          <div className="relative px-4 md:px-8 py-4 md:py-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Lab Results & Patient History (Patient List)</h2>
            <div className="w-full h-px bg-black"></div>
          </div>

          {/* Search and Actions Bar */}
          <div className="relative px-4 md:px-8 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
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

              {/* Add Patient History Button */}
              <button
                onClick={handleAddPatientHistory}
                className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.pe7cde70} fill="currentColor" />
                </svg>
                <span className="text-xs sm:text-sm font-medium tracking-wider">Add Patient History</span>
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="relative px-4 md:px-8 pb-20">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="bg-[#2a7a6e] text-white">
                <div className="grid grid-cols-12 gap-2 p-3 text-xs font-medium tracking-wider">
                  <div className="col-span-1.5 text-center">Patient ID</div>
                  <div className="col-span-1.5 text-center">Record ID</div>
                  <div className="col-span-1.5 text-center">Personnel ID</div>
                  <div className="col-span-1.5 text-center">Appointment ID</div>
                  <div className="col-span-2 text-center">Underlying Condition</div>
                  <div className="col-span-2 text-center">Diagnosis</div>
                  <div className="col-span-1 text-center">Status</div>
                  <div className="col-span-1 text-center">Action</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredRecords.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    {searchTerm ? 'No records found matching your search.' : 'No patient history records available.'}
                  </div>
                ) : (
                  filteredRecords.map((record) => (
                    <div key={record.id} className="grid grid-cols-12 gap-2 p-3 hover:bg-gray-50 transition-colors">
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.patientId}
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.recordId}
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.personnelId}
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.appointmentId}
                      </div>
                      <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        <div className="truncate" title={record.underlyingCondition}>
                          {record.underlyingCondition}
                        </div>
                      </div>
                      <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        <div className="truncate" title={record.diagnosis}>
                          {record.diagnosis.substring(0, 30)}...
                        </div>
                      </div>
                      <div className="col-span-1 text-center">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </div>
                      <div className="col-span-1 flex justify-center space-x-1">
                        <ActionButton
                          type="view"
                          onClick={() => handleViewPatientHistory(record)}
                        />
                        <ActionButton
                          type="edit"
                          onClick={() => handleEditPatientHistory(record)}
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