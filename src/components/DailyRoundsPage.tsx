import { useState } from 'react';
import svgPaths from "../imports/svg-2995e1jrk7";
import imgDelete2 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";
import imgView12 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import imgEdit1 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface DailyRoundsPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

interface DailyRoundsRecord {
  id: string;
  patientId: string;
  patientName: string;
  appointmentId: string;
  doctorInCharge: string;
  appointmentSchedule: string;
  appointmentTime: string;
  duration: string;
  recordId: string;
  underlyingCondition: string;
  prescriptionId: string;
  diagnosis: string;
  treatmentPlanId: string;
  allergies: string;
  notes: string;
  status: string;
}

type ViewMode = 'patient-list' | 'view-daily-rounds' | 'edit-daily-rounds' | 'add-daily-rounds';

export function DailyRoundsPage({ currentUser, onBack, onLogout }: DailyRoundsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('patient-list');
  const [selectedDailyRounds, setSelectedDailyRounds] = useState<DailyRoundsRecord | null>(null);
  
  const [dailyRoundsRecords, setDailyRoundsRecords] = useState<DailyRoundsRecord[]>([
    {
      id: '1',
      patientId: '2000004',
      patientName: 'Mark Solomon',
      appointmentId: '9000004',
      doctorInCharge: 'Dr. Pinkman',
      appointmentSchedule: '01/15/2025',
      appointmentTime: '10:00 AM',
      duration: '45 minutes',
      recordId: '4000004',
      underlyingCondition: 'Diabetes Type 2',
      prescriptionId: '6000004',
      diagnosis: 'Routine dental examination and cleaning',
      treatmentPlanId: '5000004',
      allergies: 'None reported',
      notes: 'Patient responded well to treatment. Regular monitoring scheduled for next visit.',
      status: 'Completed'
    },
    {
      id: '2',
      patientId: '2000005',
      patientName: 'Sarah Johnson',
      appointmentId: '9000005',
      doctorInCharge: 'Dr. White',
      appointmentSchedule: '01/16/2025',
      appointmentTime: '2:30 PM',
      duration: '60 minutes',
      recordId: '4000005',
      underlyingCondition: 'Hypertension',
      prescriptionId: '6000005',
      diagnosis: 'Periodontal therapy and root planing',
      treatmentPlanId: '5000005',
      allergies: 'Penicillin',
      notes: 'Patient requires follow-up in 2 weeks for periodontal healing assessment.',
      status: 'In Progress'
    },
    {
      id: '3',
      patientId: '2000006',
      patientName: 'Robert Davis',
      appointmentId: '9000006',
      doctorInCharge: 'Dr. Pinkman',
      appointmentSchedule: '01/17/2025',
      appointmentTime: '9:15 AM',
      duration: '30 minutes',
      recordId: '4000006',
      underlyingCondition: 'None',
      prescriptionId: '6000006',
      diagnosis: 'Dental consultation and X-rays',
      treatmentPlanId: '5000006',
      allergies: 'Latex',
      notes: 'Initial consultation completed. Treatment plan developed for restorative work.',
      status: 'Scheduled'
    }
  ]);

  // Form states
  const [dailyRoundsFormData, setDailyRoundsFormData] = useState({
    patientId: '',
    patientName: '',
    appointmentId: '',
    doctorInCharge: '',
    appointmentSchedule: '',
    appointmentTime: '',
    duration: '',
    recordId: '',
    underlyingCondition: '',
    prescriptionId: '',
    diagnosis: '',
    treatmentPlanId: '',
    allergies: '',
    notes: ''
  });

  const filteredRecords = dailyRoundsRecords.filter(record =>
    record.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.appointmentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.doctorInCharge.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDailyRounds = () => {
    setDailyRoundsFormData({
      patientId: '',
      patientName: '',
      appointmentId: '',
      doctorInCharge: '',
      appointmentSchedule: '',
      appointmentTime: '',
      duration: '',
      recordId: '',
      underlyingCondition: '',
      prescriptionId: '',
      diagnosis: '',
      treatmentPlanId: '',
      allergies: '',
      notes: ''
    });
    setViewMode('add-daily-rounds');
  };

  const handleAddDailyRoundsSubmit = () => {
    const newRecord: DailyRoundsRecord = {
      id: String(dailyRoundsRecords.length + 1),
      patientId: dailyRoundsFormData.patientId || `200000${dailyRoundsRecords.length + 4}`,
      patientName: dailyRoundsFormData.patientName || 'New Patient',
      appointmentId: dailyRoundsFormData.appointmentId || `900000${dailyRoundsRecords.length + 4}`,
      doctorInCharge: dailyRoundsFormData.doctorInCharge || 'Dr. Pinkman',
      appointmentSchedule: dailyRoundsFormData.appointmentSchedule || new Date().toLocaleDateString(),
      appointmentTime: dailyRoundsFormData.appointmentTime || '10:00 AM',
      duration: dailyRoundsFormData.duration || '30 minutes',
      recordId: dailyRoundsFormData.recordId || `400000${dailyRoundsRecords.length + 4}`,
      underlyingCondition: dailyRoundsFormData.underlyingCondition || 'None',
      prescriptionId: dailyRoundsFormData.prescriptionId || `600000${dailyRoundsRecords.length + 4}`,
      diagnosis: dailyRoundsFormData.diagnosis || 'New diagnosis',
      treatmentPlanId: dailyRoundsFormData.treatmentPlanId || `500000${dailyRoundsRecords.length + 4}`,
      allergies: dailyRoundsFormData.allergies || 'None reported',
      notes: dailyRoundsFormData.notes || 'New daily rounds notes',
      status: 'Scheduled'
    };
    setDailyRoundsRecords([...dailyRoundsRecords, newRecord]);
    setViewMode('patient-list');
  };

  const handleViewDailyRounds = (record: DailyRoundsRecord) => {
    setSelectedDailyRounds(record);
    setViewMode('view-daily-rounds');
  };

  const handleEditDailyRounds = (record: DailyRoundsRecord) => {
    setSelectedDailyRounds(record);
    setDailyRoundsFormData({
      patientId: record.patientId,
      patientName: record.patientName,
      appointmentId: record.appointmentId,
      doctorInCharge: record.doctorInCharge,
      appointmentSchedule: record.appointmentSchedule,
      appointmentTime: record.appointmentTime,
      duration: record.duration,
      recordId: record.recordId,
      underlyingCondition: record.underlyingCondition,
      prescriptionId: record.prescriptionId,
      diagnosis: record.diagnosis,
      treatmentPlanId: record.treatmentPlanId,
      allergies: record.allergies,
      notes: record.notes
    });
    setViewMode('edit-daily-rounds');
  };

  const handleEditDailyRoundsFromView = () => {
    if (selectedDailyRounds) {
      setDailyRoundsFormData({
        patientId: selectedDailyRounds.patientId,
        patientName: selectedDailyRounds.patientName,
        appointmentId: selectedDailyRounds.appointmentId,
        doctorInCharge: selectedDailyRounds.doctorInCharge,
        appointmentSchedule: selectedDailyRounds.appointmentSchedule,
        appointmentTime: selectedDailyRounds.appointmentTime,
        duration: selectedDailyRounds.duration,
        recordId: selectedDailyRounds.recordId,
        underlyingCondition: selectedDailyRounds.underlyingCondition,
        prescriptionId: selectedDailyRounds.prescriptionId,
        diagnosis: selectedDailyRounds.diagnosis,
        treatmentPlanId: selectedDailyRounds.treatmentPlanId,
        allergies: selectedDailyRounds.allergies,
        notes: selectedDailyRounds.notes
      });
    }
    setViewMode('edit-daily-rounds');
  };

  const handleSaveDailyRoundsEdit = () => {
    if (selectedDailyRounds) {
      const updatedRecords = dailyRoundsRecords.map(record => 
        record.id === selectedDailyRounds.id 
          ? { ...record, ...dailyRoundsFormData }
          : record
      );
      setDailyRoundsRecords(updatedRecords);
      setSelectedDailyRounds({ ...selectedDailyRounds, ...dailyRoundsFormData });
    }
    setViewMode('view-daily-rounds');
  };

  const handleBackToList = () => {
    setSelectedDailyRounds(null);
    setViewMode('patient-list');
  };

  const handleBackToView = () => {
    setViewMode('view-daily-rounds');
  };

  const handleRemove = (recordId: string) => {
    if (confirm('Are you sure you want to remove this daily rounds record?')) {
      setDailyRoundsRecords(dailyRoundsRecords.filter(record => record.id !== recordId));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'in progress':
        return 'text-blue-600 bg-blue-100';
      case 'scheduled':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
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
  const updateDailyRoundsForm = (field: string, value: string) => {
    setDailyRoundsFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle view daily rounds mode
  if (viewMode === 'view-daily-rounds' && selectedDailyRounds) {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Daily Rounds & Patient Monitoring Dashboard</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Patient Monitoring Card */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#8fd0c6] rounded-[30px] p-6 shadow-lg overflow-hidden">
                {/* Patient Header */}
                <div className="bg-[#2a7a6e] rounded-[30px] p-6 mb-6">
                  <h3 className="font-bold text-[48px] text-white tracking-[7.2px] leading-none mb-4">
                    {selectedDailyRounds.patientName}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Patient Info */}
                  <div className="lg:col-span-2 space-y-2">
                    <div className="grid grid-cols-1 gap-2 text-[24px] font-bold font-mono tracking-[3.6px]">
                      <p>Patient ID: {selectedDailyRounds.patientId}</p>
                      <p>&nbsp;</p>
                      <p>Appointment ID: {selectedDailyRounds.appointmentId}</p>
                      <p>Doctor-In-Charge: {selectedDailyRounds.doctorInCharge}</p>
                      <p>Appointment Schedule: {selectedDailyRounds.appointmentSchedule}</p>
                      <p>Duration (Minutes): {selectedDailyRounds.duration}</p>
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

                {/* Record Section */}
                <div className="mt-6">
                  <h4 className="font-bold text-[30px] text-white tracking-[4.5px] mb-4">Record:</h4>
                  <div className="space-y-2 text-[24px] font-bold font-mono tracking-[3.6px] text-black">
                    <p>Record ID: {selectedDailyRounds.recordId}</p>
                    <p>Underlying Condition: {selectedDailyRounds.underlyingCondition}</p>
                    <p>Prescription ID: {selectedDailyRounds.prescriptionId}</p>
                    <p>Diagnosis: {selectedDailyRounds.diagnosis}</p>
                    <p>Treatment Plan ID: {selectedDailyRounds.treatmentPlanId}</p>
                    <p>Allergies: {selectedDailyRounds.allergies}</p>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="mt-6">
                  <h4 className="font-bold text-[24px] text-white tracking-[3.6px] mb-4">Notes:</h4>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-lg text-black">{selectedDailyRounds.notes}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-4 mt-6 justify-end">
                  <button
                    onClick={handleEditDailyRoundsFromView}
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

  // Handle edit daily rounds mode
  if (viewMode === 'edit-daily-rounds' && selectedDailyRounds) {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Daily Rounds & Patient Monitoring Dashboard</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Edit Form */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-[24px] text-black tracking-[3.6px]">
                    Add Daily Rounds & Patient Monitoring
                  </h3>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Top Row - IDs */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Doctor-In-Charge:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.doctorInCharge}
                        onChange={(e) => updateDailyRoundsForm('doctorInCharge', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Patient ID:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.patientId}
                        onChange={(e) => updateDailyRoundsForm('patientId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Appointment ID:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.appointmentId}
                        onChange={(e) => updateDailyRoundsForm('appointmentId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Treatment Plan ID:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.treatmentPlanId}
                        onChange={(e) => updateDailyRoundsForm('treatmentPlanId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Second Row - Schedule, Time, Duration */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Appointment Schedule:
                      </label>
                      <input
                        type="date"
                        value={dailyRoundsFormData.appointmentSchedule}
                        onChange={(e) => updateDailyRoundsForm('appointmentSchedule', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Time:
                      </label>
                      <input
                        type="time"
                        value={dailyRoundsFormData.appointmentTime}
                        onChange={(e) => updateDailyRoundsForm('appointmentTime', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Duration:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.duration}
                        onChange={(e) => updateDailyRoundsForm('duration', e.target.value)}
                        placeholder="e.g., 30 minutes"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Patient Record ID */}
                  <div>
                    <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                      Patient's Record ID:
                    </label>
                    <input
                      type="text"
                      value={dailyRoundsFormData.recordId}
                      onChange={(e) => updateDailyRoundsForm('recordId', e.target.value)}
                      className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-bold text-[16px] tracking-[2.4px] mb-2 text-black">
                      Notes:
                    </label>
                    <textarea
                      value={dailyRoundsFormData.notes}
                      onChange={(e) => updateDailyRoundsForm('notes', e.target.value)}
                      rows={4}
                      className="w-full bg-white text-black p-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e] resize-none"
                      placeholder="[Edit Notes Here]"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <button
                    onClick={handleSaveDailyRoundsEdit}
                    className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-3 rounded-[50px] transition-colors font-bold text-[18px] tracking-wider"
                  >
                    Edit
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

  // Handle add daily rounds mode
  if (viewMode === 'add-daily-rounds') {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Daily Rounds & Patient Monitoring Dashboard</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Add Form */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-[24px] text-black tracking-[3.6px]">
                    Add Daily Rounds & Patient Monitoring
                  </h3>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Top Row - IDs */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Appointment ID:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.appointmentId}
                        onChange={(e) => updateDailyRoundsForm('appointmentId', e.target.value)}
                        placeholder="Appointment ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Doctor-In-Charge:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.doctorInCharge}
                        onChange={(e) => updateDailyRoundsForm('doctorInCharge', e.target.value)}
                        placeholder="Personnel ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Patient ID:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.patientId}
                        onChange={(e) => updateDailyRoundsForm('patientId', e.target.value)}
                        placeholder="Patient ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Treatment Plan ID:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.treatmentPlanId}
                        onChange={(e) => updateDailyRoundsForm('treatmentPlanId', e.target.value)}
                        placeholder="Appointment ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Second Row - Schedule, Time, Duration */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Appointment Schedule:
                      </label>
                      <input
                        type="date"
                        value={dailyRoundsFormData.appointmentSchedule}
                        onChange={(e) => updateDailyRoundsForm('appointmentSchedule', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Time:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.appointmentTime}
                        onChange={(e) => updateDailyRoundsForm('appointmentTime', e.target.value)}
                        placeholder="Value"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Duration:
                      </label>
                      <input
                        type="text"
                        value={dailyRoundsFormData.duration}
                        onChange={(e) => updateDailyRoundsForm('duration', e.target.value)}
                        placeholder="Value"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Patient Record ID */}
                  <div>
                    <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                      Patient's Record ID:
                    </label>
                    <input
                      type="text"
                      value={dailyRoundsFormData.recordId}
                      onChange={(e) => updateDailyRoundsForm('recordId', e.target.value)}
                      placeholder="Record ID"
                      className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-bold text-[16px] tracking-[2.4px] mb-2 text-black">
                      Notes:
                    </label>
                    <textarea
                      value={dailyRoundsFormData.notes}
                      onChange={(e) => updateDailyRoundsForm('notes', e.target.value)}
                      rows={4}
                      className="w-full bg-white text-black p-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e] resize-none"
                      placeholder="[Add Notes Here]"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <button
                    onClick={handleAddDailyRoundsSubmit}
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
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Daily Rounds & Patient Monitoring Dashboard (Patient List)</h2>
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
                      <path d="M16.5 16.5L12.875 12.875M14.833 8.167C14.833 11.8489 11.8489 14.833 8.167 14.833C4.48505 14.833 1.50098 11.8489 1.50098 8.167C1.50098 4.48505 4.48505 1.50098 8.167 1.50098C11.8489 1.50098 14.833 4.48505 14.833 8.167Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Add Daily Rounds Button */}
              <button
                onClick={handleAddDailyRounds}
                className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs sm:text-sm font-medium tracking-wider">Add Daily Rounds</span>
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
                  <div className="col-span-2 text-center">Patient Name</div>
                  <div className="col-span-1.5 text-center">Appointment ID</div>
                  <div className="col-span-2 text-center">Doctor</div>
                  <div className="col-span-1.5 text-center">Schedule</div>
                  <div className="col-span-2 text-center">Diagnosis</div>
                  <div className="col-span-1 text-center">Status</div>
                  <div className="col-span-1 text-center">Action</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredRecords.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    {searchTerm ? 'No records found matching your search.' : 'No daily rounds records available.'}
                  </div>
                ) : (
                  filteredRecords.map((record) => (
                    <div key={record.id} className="grid grid-cols-12 gap-2 p-3 hover:bg-gray-50 transition-colors">
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.patientId}
                      </div>
                      <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.patientName}
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.appointmentId}
                      </div>
                      <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.doctorInCharge}
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.appointmentSchedule}
                      </div>
                      <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        <div className="truncate" title={record.diagnosis}>
                          {record.diagnosis.substring(0, 25)}...
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
                          onClick={() => handleViewDailyRounds(record)}
                        />
                        <ActionButton
                          type="edit"
                          onClick={() => handleEditDailyRounds(record)}
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