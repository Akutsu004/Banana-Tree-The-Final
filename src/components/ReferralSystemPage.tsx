import { useState } from 'react';
import svgPaths from "../imports/svg-2ahq7qpl36";
import imgDelete2 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";
import imgView12 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import imgEdit1 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface ReferralSystemPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

interface ReferralRecord {
  id: string;
  referralId: string;
  patientId: string;
  recordId: string;
  personnelId: string;
  reasonForReferral: string;
  specialtyNeeded: string;
  receivingProvider: string;
  priority: 'Routine' | 'Urgent';
  requestedDate: string;
  notes: string;
  status: string;
  patientName: string;
  primaryDentist: string;
}

type ViewMode = 'patient-list' | 'view-referral' | 'edit-referral' | 'add-referral';

export function ReferralSystemPage({ currentUser, onBack, onLogout }: ReferralSystemPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('patient-list');
  const [selectedReferral, setSelectedReferral] = useState<ReferralRecord | null>(null);
  
  const [referralRecords, setReferralRecords] = useState<ReferralRecord[]>([
    {
      id: '1',
      referralId: '800001',
      patientId: '2000006',
      recordId: '4000006',
      personnelId: '1001',
      reasonForReferral: 'Complex orthodontic treatment required',
      specialtyNeeded: 'Orthodontics',
      receivingProvider: 'Dr. Sarah Johnson',
      priority: 'Routine',
      requestedDate: '01/15/2025',
      notes: 'Patient requires comprehensive orthodontic evaluation and treatment planning.',
      status: 'Pending',
      patientName: 'Walter White',
      primaryDentist: 'Dr. Pinkman'
    },
    {
      id: '2',
      referralId: '800002',
      patientId: '2000007',
      recordId: '4000007',
      personnelId: '1002',
      reasonForReferral: 'Periodontal disease requires specialist care',
      specialtyNeeded: 'Periodontics',
      receivingProvider: 'Dr. Michael Chen',
      priority: 'Urgent',
      requestedDate: '01/10/2025',
      notes: 'Advanced periodontal disease with significant bone loss.',
      status: 'Approved',
      patientName: 'Jane Smith',
      primaryDentist: 'Dr. White'
    },
    {
      id: '3',
      referralId: '800003',
      patientId: '2000008',
      recordId: '4000008',
      personnelId: '1001',
      reasonForReferral: 'Surgical extraction of impacted wisdom teeth',
      specialtyNeeded: 'Oral Surgery',
      receivingProvider: 'Dr. Emily Rodriguez',
      priority: 'Routine',
      requestedDate: '01/20/2025',
      notes: 'Multiple impacted third molars requiring surgical removal.',
      status: 'Completed',
      patientName: 'John Doe',
      primaryDentist: 'Dr. Pinkman'
    }
  ]);

  // Form states
  const [referralFormData, setReferralFormData] = useState({
    referralId: '',
    patientId: '',
    recordId: '',
    personnelId: '',
    reasonForReferral: '',
    specialtyNeeded: '',
    receivingProvider: '',
    priority: 'Routine' as 'Routine' | 'Urgent',
    requestedDate: '',
    notes: '',
    patientName: '',
    primaryDentist: ''
  });

  const filteredRecords = referralRecords.filter(record =>
    record.referralId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.reasonForReferral.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.specialtyNeeded.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.receivingProvider.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.primaryDentist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddReferral = () => {
    setReferralFormData({
      referralId: '',
      patientId: '',
      recordId: '',
      personnelId: '',
      reasonForReferral: '',
      specialtyNeeded: '',
      receivingProvider: '',
      priority: 'Routine',
      requestedDate: '',
      notes: '',
      patientName: '',
      primaryDentist: ''
    });
    setViewMode('add-referral');
  };

  const handleAddReferralSubmit = () => {
    const newRecord: ReferralRecord = {
      id: String(referralRecords.length + 1),
      referralId: referralFormData.referralId || `80000${referralRecords.length + 1}`,
      patientId: referralFormData.patientId || `200000${referralRecords.length + 1}`,
      recordId: referralFormData.recordId || `400000${referralRecords.length + 1}`,
      personnelId: referralFormData.personnelId || '1001',
      reasonForReferral: referralFormData.reasonForReferral || 'New referral reason',
      specialtyNeeded: referralFormData.specialtyNeeded || 'General',
      receivingProvider: referralFormData.receivingProvider || 'TBD',
      priority: referralFormData.priority,
      requestedDate: referralFormData.requestedDate || new Date().toISOString().split('T')[0],
      notes: referralFormData.notes || 'New referral notes',
      status: 'Pending',
      patientName: referralFormData.patientName || 'New Patient',
      primaryDentist: referralFormData.primaryDentist || 'Dr. Pinkman'
    };
    setReferralRecords([...referralRecords, newRecord]);
    setViewMode('patient-list');
  };

  const handleViewReferral = (record: ReferralRecord) => {
    setSelectedReferral(record);
    setViewMode('view-referral');
  };

  const handleEditReferral = (record: ReferralRecord) => {
    setSelectedReferral(record);
    setReferralFormData({
      referralId: record.referralId,
      patientId: record.patientId,
      recordId: record.recordId,
      personnelId: record.personnelId,
      reasonForReferral: record.reasonForReferral,
      specialtyNeeded: record.specialtyNeeded,
      receivingProvider: record.receivingProvider,
      priority: record.priority,
      requestedDate: record.requestedDate,
      notes: record.notes,
      patientName: record.patientName,
      primaryDentist: record.primaryDentist
    });
    setViewMode('edit-referral');
  };

  const handleEditReferralFromView = () => {
    if (selectedReferral) {
      setReferralFormData({
        referralId: selectedReferral.referralId,
        patientId: selectedReferral.patientId,
        recordId: selectedReferral.recordId,
        personnelId: selectedReferral.personnelId,
        reasonForReferral: selectedReferral.reasonForReferral,
        specialtyNeeded: selectedReferral.specialtyNeeded,
        receivingProvider: selectedReferral.receivingProvider,
        priority: selectedReferral.priority,
        requestedDate: selectedReferral.requestedDate,
        notes: selectedReferral.notes,
        patientName: selectedReferral.patientName,
        primaryDentist: selectedReferral.primaryDentist
      });
    }
    setViewMode('edit-referral');
  };

  const handleSaveReferralEdit = () => {
    if (selectedReferral) {
      const updatedRecords = referralRecords.map(record => 
        record.id === selectedReferral.id 
          ? { ...record, ...referralFormData }
          : record
      );
      setReferralRecords(updatedRecords);
      setSelectedReferral({ ...selectedReferral, ...referralFormData });
    }
    setViewMode('view-referral');
  };

  const handleBackToList = () => {
    setSelectedReferral(null);
    setViewMode('patient-list');
  };

  const handleBackToView = () => {
    setViewMode('view-referral');
  };

  const handleRemove = (recordId: string) => {
    if (confirm('Are you sure you want to remove this referral record?')) {
      setReferralRecords(referralRecords.filter(record => record.id !== recordId));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'approved':
        return 'text-green-600 bg-green-100';
      case 'completed':
        return 'text-blue-600 bg-blue-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'urgent':
        return 'text-red-600 bg-red-100';
      case 'routine':
        return 'text-green-600 bg-green-100';
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
  const updateReferralForm = (field: string, value: string) => {
    setReferralFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle view referral mode
  if (viewMode === 'view-referral' && selectedReferral) {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Referral System</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Referral Details Card */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-[24px] text-black tracking-[3.6px]">
                    Patient Chart: {selectedReferral.patientName} (ID: {selectedReferral.patientId})
                  </h3>
                </div>

                {/* Primary Dentist */}
                <div className="mb-6">
                  <p className="font-bold text-[24px] text-white tracking-[3.6px]">
                    Primary Dentist: {selectedReferral.primaryDentist}
                  </p>
                </div>

                {/* Referral Details */}
                <div className="mb-6">
                  <h4 className="font-bold text-[36px] text-white tracking-[3.6px] mb-4">
                    --REFERRAL DETAILS--
                  </h4>
                  <div className="space-y-3 text-white">
                    <p className="font-bold text-[24px] tracking-[3.6px]">Referral ID: {selectedReferral.referralId}</p>
                    <p className="font-bold text-[24px] tracking-[3.6px]">Reason for Referral: {selectedReferral.reasonForReferral}</p>
                    <p className="font-bold text-[24px] tracking-[3.6px]">Specialty Needed: {selectedReferral.specialtyNeeded}</p>
                    <p className="font-bold text-[24px] tracking-[3.6px]">Receiving Provider: {selectedReferral.receivingProvider}</p>
                    <p className="font-bold text-[24px] tracking-[3.6px]">Priority: {selectedReferral.priority}</p>
                    <p className="font-bold text-[24px] tracking-[3.6px]">Requested Date: {selectedReferral.requestedDate}</p>
                    <p className="font-bold text-[24px] tracking-[3.6px]">Attachments (optional):</p>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="mb-6">
                  <h4 className="font-bold text-[24px] text-white tracking-[3.6px] mb-4">Notes:</h4>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-lg text-black">{selectedReferral.notes}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-row gap-4 justify-start">
                    <button
                      onClick={handleEditReferralFromView}
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

  // Handle edit referral mode
  if (viewMode === 'edit-referral' && selectedReferral) {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Referral System</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Edit Form */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-[24px] text-black tracking-[3.6px]">
                    Edit Referral
                  </h3>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Top Row - IDs */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Referral ID:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.referralId}
                        onChange={(e) => updateReferralForm('referralId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Patient ID:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.patientId}
                        onChange={(e) => updateReferralForm('patientId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Personnel ID:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.personnelId}
                        onChange={(e) => updateReferralForm('personnelId', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Reasons for Referral */}
                  <div>
                    <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                      Reasons for Referral:
                    </label>
                    <input
                      type="text"
                      value={referralFormData.reasonForReferral}
                      onChange={(e) => updateReferralForm('reasonForReferral', e.target.value)}
                      className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                    />
                  </div>

                  {/* Specialty and Provider */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Specialty Needed:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.specialtyNeeded}
                        onChange={(e) => updateReferralForm('specialtyNeeded', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Receiving Provider:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.receivingProvider}
                        onChange={(e) => updateReferralForm('receivingProvider', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Priority and Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Priority:
                      </label>
                      <select
                        value={referralFormData.priority}
                        onChange={(e) => updateReferralForm('priority', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      >
                        <option value="Routine">Routine</option>
                        <option value="Urgent">Urgent</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Requested Date:
                      </label>
                      <input
                        type="date"
                        value={referralFormData.requestedDate}
                        onChange={(e) => updateReferralForm('requestedDate', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-bold text-[16px] tracking-[2.4px] mb-2 text-black">
                      Notes:
                    </label>
                    <textarea
                      value={referralFormData.notes}
                      onChange={(e) => updateReferralForm('notes', e.target.value)}
                      rows={4}
                      className="w-full bg-white text-black p-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e] resize-none"
                      placeholder="[Edit Notes Here]"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <button
                    onClick={handleSaveReferralEdit}
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

  // Handle add referral mode
  if (viewMode === 'add-referral') {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Referral System</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Add Form */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-[24px] text-black tracking-[3.6px]">
                    Add Referral
                  </h3>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Top Row - IDs */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Referral ID:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.referralId}
                        onChange={(e) => updateReferralForm('referralId', e.target.value)}
                        placeholder="Referral ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Patient ID:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.patientId}
                        onChange={(e) => updateReferralForm('patientId', e.target.value)}
                        placeholder="Patient ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Personnel ID:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.personnelId}
                        onChange={(e) => updateReferralForm('personnelId', e.target.value)}
                        placeholder="Personnel ID"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Reasons for Referral */}
                  <div>
                    <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                      Reasons for Referral:
                    </label>
                    <input
                      type="text"
                      value={referralFormData.reasonForReferral}
                      onChange={(e) => updateReferralForm('reasonForReferral', e.target.value)}
                      placeholder="Value"
                      className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                    />
                  </div>

                  {/* Specialty and Provider */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Specialty Needed:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.specialtyNeeded}
                        onChange={(e) => updateReferralForm('specialtyNeeded', e.target.value)}
                        placeholder="Value"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Receiving Provider:
                      </label>
                      <input
                        type="text"
                        value={referralFormData.receivingProvider}
                        onChange={(e) => updateReferralForm('receivingProvider', e.target.value)}
                        placeholder="Value"
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Priority and Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Priority:
                      </label>
                      <select
                        value={referralFormData.priority}
                        onChange={(e) => updateReferralForm('priority', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      >
                        <option value="Routine">Routine</option>
                        <option value="Urgent">Urgent</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-[18px] tracking-[2.7px] mb-2 text-black">
                        Requested Date:
                      </label>
                      <input
                        type="date"
                        value={referralFormData.requestedDate}
                        onChange={(e) => updateReferralForm('requestedDate', e.target.value)}
                        className="w-full bg-white text-black p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-bold text-[16px] tracking-[2.4px] mb-2 text-black">
                      Notes:
                    </label>
                    <textarea
                      value={referralFormData.notes}
                      onChange={(e) => updateReferralForm('notes', e.target.value)}
                      rows={4}
                      className="w-full bg-white text-black p-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a7a6e] resize-none"
                      placeholder="[Edit Notes Here]"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <button
                    onClick={handleAddReferralSubmit}
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

          {/* Main Content */}
          <div className="flex-1 flex flex-col p-3 md:p-4 overflow-hidden">
            {/* Page Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-1 tracking-wider">Referral System List</h2>
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
                    placeholder="Search Referrals"
                    className="w-full h-10 sm:h-12 bg-[#ece6f0] rounded-full px-4 sm:px-6 pr-12 text-sm sm:text-base text-[#49454f] placeholder-[#49454f] outline-none focus:ring-2 focus:ring-[#2a7a6e]"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-[#49454f]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d="M16.5 16.5L12.875 12.875M14.833 8.167C14.833 11.8489 11.8489 14.833 8.167 14.833C4.48505 14.833 1.50098 11.8489 1.50098 8.167C1.50098 4.48505 4.48505 1.50098 8.167 1.50098C11.8489 1.50098 14.833 4.48505 14.833 8.167Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Add Referral Button */}
              <button
                onClick={handleAddReferral}
                className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs sm:text-sm font-medium tracking-wider">Add Referral</span>
              </button>
            </div>

            {/* Table Container */}
            <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden min-h-0">
              {/* Table Header */}
              <div className="bg-[#2a7a6e] text-white">
                <div className="grid grid-cols-12 gap-2 p-3 text-xs font-medium tracking-wider">
                  <div className="col-span-1 text-center">Referral ID</div>
                  <div className="col-span-1 text-center">Patient ID</div>
                  <div className="col-span-2 text-center">Patient Name</div>
                  <div className="col-span-2 text-center">Reason</div>
                  <div className="col-span-1.5 text-center">Specialty</div>
                  <div className="col-span-1.5 text-center">Provider</div>
                  <div className="col-span-1 text-center">Priority</div>
                  <div className="col-span-1 text-center">Status</div>
                  <div className="col-span-1 text-center">Action</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 h-[calc(100%-52px)] overflow-y-auto">
                {filteredRecords.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    {searchTerm ? 'No referrals found matching your search.' : 'No referral records available.'}
                  </div>
                ) : (
                  filteredRecords.map((record) => (
                    <div key={record.id} className="grid grid-cols-12 gap-2 p-3 hover:bg-gray-50 transition-colors">
                      <div className="col-span-1 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.referralId}
                      </div>
                      <div className="col-span-1 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.patientId}
                      </div>
                      <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.patientName}
                      </div>
                      <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        <div className="truncate" title={record.reasonForReferral}>
                          {record.reasonForReferral.substring(0, 25)}...
                        </div>
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        {record.specialtyNeeded}
                      </div>
                      <div className="col-span-1.5 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                        <div className="truncate" title={record.receivingProvider}>
                          {record.receivingProvider}
                        </div>
                      </div>
                      <div className="col-span-1 text-center">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(record.priority)}`}>
                          {record.priority}
                        </span>
                      </div>
                      <div className="col-span-1 text-center">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </div>
                      <div className="col-span-1 flex justify-center space-x-1">
                        <ActionButton
                          type="view"
                          onClick={() => handleViewReferral(record)}
                        />
                        <ActionButton
                          type="edit"
                          onClick={() => handleEditReferral(record)}
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