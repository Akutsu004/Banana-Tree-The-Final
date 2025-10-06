import { useState } from 'react';
import svgPaths from "../imports/svg-vtm2o34kgn";
import imgDelete2 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";
import imgView12 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import imgEdit1 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface PrescriptionsPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

interface PrescriptionRecord {
  id: string;
  prescriptionId: string;
  patientId: string;
  prescriptionDate: string;
  personnelId: string;
  notes: string;
}

interface MedicationRecord {
  id: string;
  prescriptionMedicationId: string;
  prescriptionId: string;
  medicationId: string;
  dosage: string;
  instructions: string;
  quantity: string;
}

type ViewMode = 'patient-list' | 'medication-list' | 'view-prescription' | 'edit-prescription' | 'add-prescription' | 'view-medication' | 'edit-medication' | 'add-medication';

export function PrescriptionsPage({ currentUser, onBack, onLogout }: PrescriptionsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('patient-list');
  const [selectedPrescription, setSelectedPrescription] = useState<PrescriptionRecord | null>(null);
  const [selectedMedication, setSelectedMedication] = useState<MedicationRecord | null>(null);
  
  // Form states
  const [prescriptionFormData, setPrescriptionFormData] = useState({
    prescriptionId: '',
    patientId: '',
    prescriptionDate: '',
    personnelId: '',
    notes: ''
  });
  
  const [medicationFormData, setMedicationFormData] = useState({
    prescriptionMedicationId: '',
    prescriptionId: '',
    medicationId: '',
    dosage: '',
    instructions: '',
    quantity: ''
  });

  // Form update handlers
  const updatePrescriptionForm = (field: string, value: string) => {
    setPrescriptionFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateMedicationForm = (field: string, value: string) => {
    setMedicationFormData(prev => ({ ...prev, [field]: value }));
  };
  const [prescriptionRecords, setPrescriptionRecords] = useState<PrescriptionRecord[]>([
    {
      id: '1',
      prescriptionId: '6000001',
      patientId: '2000001',
      prescriptionDate: '2024-01-15',
      personnelId: '1001',
      notes: 'Antibiotics for post-surgical care'
    },
    {
      id: '2',
      prescriptionId: '6000002',
      patientId: '2000002',
      prescriptionDate: '2024-01-14',
      personnelId: '1002',
      notes: 'Pain medication for wisdom tooth extraction'
    },
    {
      id: '3',
      prescriptionId: '6000003',
      patientId: '2000003',
      prescriptionDate: '2024-01-13',
      personnelId: '1001',
      notes: 'Fluoride treatment prescription'
    }
  ]);

  const [medicationRecords, setMedicationRecords] = useState<MedicationRecord[]>([
    {
      id: '1',
      prescriptionMedicationId: '6000001',
      prescriptionId: '7000001',
      medicationId: '8000001',
      dosage: '500mg',
      instructions: 'Take twice daily with food',
      quantity: '30'
    },
    {
      id: '2',
      prescriptionMedicationId: '6000002',
      prescriptionId: '7000002',
      medicationId: '8000002',
      dosage: '250mg',
      instructions: 'Take once daily after meals',
      quantity: '60'
    },
    {
      id: '3',
      prescriptionMedicationId: '6000003',
      prescriptionId: '7000003',
      medicationId: '8000003',
      dosage: '10mg',
      instructions: 'Take once daily before bed',
      quantity: '30'
    }
  ]);

  const filteredRecords = prescriptionRecords.filter(record =>
    record.prescriptionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.personnelId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMedications = medicationRecords.filter(record =>
    record.prescriptionMedicationId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.prescriptionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.medicationId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.dosage.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.instructions.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (record: PrescriptionRecord) => {
    setSelectedPrescription(record);
    setViewMode('view-prescription');
  };

  const handleEdit = (record: PrescriptionRecord) => {
    setSelectedPrescription(record);
    setPrescriptionFormData({
      prescriptionId: record.prescriptionId,
      patientId: record.patientId,
      prescriptionDate: record.prescriptionDate,
      personnelId: record.personnelId,
      notes: record.notes
    });
    setViewMode('edit-prescription');
  };

  const handleEditFromView = () => {
    if (selectedPrescription) {
      setPrescriptionFormData({
        prescriptionId: selectedPrescription.prescriptionId,
        patientId: selectedPrescription.patientId,
        prescriptionDate: selectedPrescription.prescriptionDate,
        personnelId: selectedPrescription.personnelId,
        notes: selectedPrescription.notes
      });
    }
    setViewMode('edit-prescription');
  };

  const handleAddPrescription = () => {
    setPrescriptionFormData({
      prescriptionId: '',
      patientId: '',
      prescriptionDate: '',
      personnelId: '',
      notes: ''
    });
    setViewMode('add-prescription');
  };

  const handleAddPrescriptionSubmit = () => {
    const newRecord: PrescriptionRecord = {
      id: String(prescriptionRecords.length + 1),
      prescriptionId: prescriptionFormData.prescriptionId || `600000${prescriptionRecords.length + 1}`,
      patientId: prescriptionFormData.patientId || `200000${prescriptionRecords.length + 1}`,
      prescriptionDate: prescriptionFormData.prescriptionDate || new Date().toISOString().split('T')[0],
      personnelId: prescriptionFormData.personnelId || '1001',
      notes: prescriptionFormData.notes || 'New prescription entry'
    };
    setPrescriptionRecords([...prescriptionRecords, newRecord]);
    setViewMode('patient-list');
  };

  const handleAddMedication = () => {
    setMedicationFormData({
      prescriptionMedicationId: '',
      prescriptionId: '',
      medicationId: '',
      dosage: '',
      instructions: '',
      quantity: ''
    });
    setViewMode('add-medication');
  };

  const handleAddMedicationSubmit = () => {
    const newRecord: MedicationRecord = {
      id: String(medicationRecords.length + 1),
      prescriptionMedicationId: medicationFormData.prescriptionMedicationId || `600000${medicationRecords.length + 1}`,
      prescriptionId: medicationFormData.prescriptionId || `700000${medicationRecords.length + 1}`,
      medicationId: medicationFormData.medicationId || `800000${medicationRecords.length + 1}`,
      dosage: medicationFormData.dosage || '100mg',
      instructions: medicationFormData.instructions || 'New medication instructions',
      quantity: medicationFormData.quantity || '30'
    };
    setMedicationRecords([...medicationRecords, newRecord]);
    setViewMode('medication-list');
  };

  const handleViewMedication = (record: MedicationRecord) => {
    setSelectedMedication(record);
    setViewMode('view-medication');
  };

  const handleEditMedication = (record: MedicationRecord) => {
    setSelectedMedication(record);
    setMedicationFormData({
      prescriptionMedicationId: record.prescriptionMedicationId,
      prescriptionId: record.prescriptionId,
      medicationId: record.medicationId,
      dosage: record.dosage,
      instructions: record.instructions,
      quantity: record.quantity
    });
    setViewMode('edit-medication');
  };

  const handleEditMedicationFromView = () => {
    if (selectedMedication) {
      setMedicationFormData({
        prescriptionMedicationId: selectedMedication.prescriptionMedicationId,
        prescriptionId: selectedMedication.prescriptionId,
        medicationId: selectedMedication.medicationId,
        dosage: selectedMedication.dosage,
        instructions: selectedMedication.instructions,
        quantity: selectedMedication.quantity
      });
    }
    setViewMode('edit-medication');
  };

  const handleSaveMedicationEdit = () => {
    if (selectedMedication) {
      const updatedRecords = medicationRecords.map(record => 
        record.id === selectedMedication.id 
          ? { ...record, ...medicationFormData }
          : record
      );
      setMedicationRecords(updatedRecords);
      setSelectedMedication({ ...selectedMedication, ...medicationFormData });
    }
    setViewMode('view-medication');
  };

  const handleBackToMedicationList = () => {
    setSelectedMedication(null);
    setViewMode('medication-list');
  };

  const handleBackToMedicationView = () => {
    setViewMode('view-medication');
  };

  const handleSwitchView = () => {
    setViewMode(viewMode === 'patient-list' ? 'medication-list' : 'patient-list');
  };

  const handleBackToList = () => {
    setSelectedPrescription(null);
    setSelectedMedication(null);
    setViewMode('patient-list');
  };

  const handleBackToPrescription = () => {
    setViewMode('view-prescription');
  };

  const handleSaveEdit = () => {
    if (selectedPrescription) {
      const updatedRecords = prescriptionRecords.map(record => 
        record.id === selectedPrescription.id 
          ? { ...record, ...prescriptionFormData }
          : record
      );
      setPrescriptionRecords(updatedRecords);
      setSelectedPrescription({ ...selectedPrescription, ...prescriptionFormData });
    }
    setViewMode('view-prescription');
  };

  const handleRemove = (recordId: string) => {
    if (confirm('Are you sure you want to remove this prescription record?')) {
      setPrescriptionRecords(prescriptionRecords.filter(record => record.id !== recordId));
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

  // Handle view prescription mode
  if (viewMode === 'view-prescription' && selectedPrescription) {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Prescriptions</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Prescription View Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Patient Name: Mihoyo Bloodborne (ID: {selectedPrescription.patientId})
                  </h3>
                </div>

                {/* Prescription Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-white mb-6">
                  {/* Left Column - Prescription Info */}
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2 text-white">
                        Prescription Date: {selectedPrescription.prescriptionDate}
                      </label>
                    </div>
                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2 text-white">
                        Entered by: Doctor {selectedPrescription.personnelId}
                      </label>
                    </div>
                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2 text-white">
                        Prescriptions:
                      </label>
                    </div>
                  </div>

                  {/* Right Column - Medication Table */}
                  <div className="bg-white text-black rounded p-4">
                    <div className="grid grid-cols-3 gap-4 font-bold text-lg tracking-[2px] mb-4 border-b pb-2">
                      <div>Medication</div>
                      <div>Dosage</div>
                      <div>Qty.</div>
                    </div>
                    {medicationRecords.filter(med => med.prescriptionId === selectedPrescription.prescriptionId).map(med => (
                      <div key={med.id} className="grid grid-cols-3 gap-4 text-base mb-2">
                        <div>Medicine {med.medicationId}</div>
                        <div>{med.dosage}</div>
                        <div>{med.quantity}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructions */}
                <div className="mb-6">
                  <label className="block font-bold text-lg md:text-xl lg:text-2xl text-white tracking-[2px] md:tracking-[3.6px] mb-2">
                    Instructions:
                  </label>
                  <div className="bg-white text-black p-4 rounded">
                    <p className="text-base">Take medication as prescribed and follow up in 2 weeks.</p>
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <label className="block font-bold text-lg md:text-xl lg:text-2xl text-white tracking-[2px] md:tracking-[3.6px] mb-2">
                    Notes:
                  </label>
                  <div className="bg-white text-black p-4 rounded">
                    <p className="text-base">{selectedPrescription.notes}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={handleEditFromView}
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

  // Handle edit prescription mode
  if (viewMode === 'edit-prescription' && selectedPrescription) {
    return (
      <div className="h-screen bg-[#e0e0e0] overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="relative w-full h-full bg-[#e0e0e0]">
            {/* Header */}
            <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToPrescription}
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Prescriptions</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Edit Prescription Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Edit Patient Prescription
                  </h3>
                </div>

                {/* Edit Form */}
                <div className="space-y-6 text-white">
                  {/* Medication Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Medication
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="[Search]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Dosage
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="[Add]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Qty.
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="[Add]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Instructions:
                    </label>
                    <div className="bg-white text-black p-4 rounded">
                      <textarea
                        className="w-full bg-transparent outline-none resize-none"
                        rows={3}
                        placeholder="[Edit Instructions Here]"
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
                        className="w-full bg-transparent outline-none resize-none"
                        rows={3}
                        placeholder="[Edit Notes Here]"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={handleSaveEdit}
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

  // Handle add prescription mode
  if (viewMode === 'add-prescription') {
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Prescriptions</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Add Prescription Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Add Patient Prescription
                  </h3>
                </div>

                {/* Add Form */}
                <div className="space-y-6 text-white">
                  {/* Patient Info Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                        Prescription ID:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                        Patient ID:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                        Prescription Date:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="date"
                          className="w-full bg-transparent outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medication Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Medication
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="[Search]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Dosage
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="[Add]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Qty.
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="[Add]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                      Instructions:
                    </label>
                    <div className="bg-white text-black p-4 rounded">
                      <textarea
                        className="w-full bg-transparent outline-none resize-none"
                        rows={3}
                        placeholder="[Add Instructions Here]"
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
                        className="w-full bg-transparent outline-none resize-none"
                        rows={3}
                        placeholder="[Add Notes Here]"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={handleAddPrescriptionSubmit}
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

  // Handle view medication mode
  if (viewMode === 'view-medication' && selectedMedication) {
    return (
      <div className="h-screen bg-[#e0e0e0] overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="relative w-full h-full bg-[#e0e0e0]">
            {/* Header */}
            <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToMedicationList}
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Prescription Medication</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Medication View Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Patient Chart: John Dela Cruz (ID: {selectedMedication.prescriptionId})
                  </h3>
                </div>

                {/* Medication Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-white mb-6">
                  {/* Left Column - Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2 text-white">
                        Record ID: {selectedMedication.prescriptionMedicationId}
                      </label>
                    </div>
                    <div>
                      <label className="block font-bold text-lg md:text-xl lg:text-2xl tracking-[2px] md:tracking-[3.6px] mb-2 text-white">
                        Entered by: Dr. Pinkman
                      </label>
                    </div>
                  </div>

                  {/* Right Column - Medication Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Medication ID: {selectedMedication.medicationId}
                      </label>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Dosage: {selectedMedication.dosage}
                      </label>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Quantity: {selectedMedication.quantity}
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
                      list/procedure on the treatment for the patient
                    </p>
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <label className="block font-bold text-lg md:text-xl lg:text-2xl text-white tracking-[2px] md:tracking-[3.6px] mb-2">
                    Notes:
                  </label>
                  <div className="bg-white text-black p-4 rounded">
                    <p className="text-base">{selectedMedication.instructions}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={handleEditMedicationFromView}
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

  // Handle edit medication mode
  if (viewMode === 'edit-medication' && selectedMedication) {
    return (
      <div className="h-screen bg-[#e0e0e0] overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="relative w-full h-full bg-[#e0e0e0]">
            {/* Header */}
            <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToMedicationView}
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Prescription Medication</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Edit Medication Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Edit Prescription Medication
                  </h3>
                </div>

                {/* Edit Form */}
                <div className="space-y-6 text-white">
                  {/* Top Row - Prescription ID and Medication ID */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                        Prescription ID:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          defaultValue={selectedMedication.prescriptionId}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                        Medication ID:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          defaultValue={selectedMedication.medicationId}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second Row - Dosage and Quantity */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Dosage:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          defaultValue={selectedMedication.dosage}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Quantity:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          defaultValue={selectedMedication.quantity}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                      Instructions:
                    </label>
                    <div className="bg-white text-black p-4 rounded">
                      <textarea
                        className="w-full bg-transparent outline-none resize-none"
                        rows={4}
                        defaultValue={selectedMedication.instructions}
                        placeholder="[Edit Instructions Here]"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={handleSaveMedicationEdit}
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

  // Handle add medication mode
  if (viewMode === 'add-medication') {
    return (
      <div className="h-screen bg-[#e0e0e0] overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="relative w-full h-full bg-[#e0e0e0]">
            {/* Header */}
            <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToMedicationList}
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">Prescription Medication</h2>
              <div className="w-full h-px bg-black"></div>
            </div>

            {/* Add Medication Component */}
            <div className="relative px-4 md:px-8 pb-20">
              <div className="bg-[#2a7a6e] rounded-[30px] p-6 shadow-lg">
                {/* Header Section */}
                <div className="bg-[#8fd0c6] rounded-t-[30px] -mx-6 -mt-6 px-6 py-4 mb-6">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black tracking-[2px] md:tracking-[3.6px]">
                    Edit Prescription Medication
                  </h3>
                </div>

                {/* Add Form */}
                <div className="space-y-6 text-white">
                  {/* Top Row - Prescription Medication ID, Prescription ID, Medication ID */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                        Prescription Medication ID:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                        Prescription ID:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                        Medication ID:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second Row - Dosage and Quantity */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Dosage:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-lg tracking-[2px] mb-2 text-white">
                        Quantity:
                      </label>
                      <div className="bg-white text-black p-3 rounded">
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div>
                    <label className="block font-bold text-lg tracking-[2px] mb-2 text-black">
                      Instructions:
                    </label>
                    <div className="bg-white text-black p-4 rounded">
                      <textarea
                        className="w-full bg-transparent outline-none resize-none"
                        rows={4}
                        placeholder="[Edit Instructions Here]"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-[#8fd0c6] rounded-b-[30px] -mx-6 -mb-6 px-6 py-4 mt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={handleAddMedicationSubmit}
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
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-1 tracking-wider">
              Prescriptions ({viewMode === 'patient-list' ? 'Patient List' : 'Medication List'})
            </h2>
            <div className="w-full h-0.5 bg-black mb-4"></div>

            {/* Search and Actions Bar */}
            <div className="flex flex-col lg:flex-row gap-3 mb-4">
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleSwitchView}
                  className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-xs sm:text-sm font-medium tracking-wider"
                >
                  Switch to {viewMode === 'patient-list' ? 'Prescription Medication List' : 'Patient List'}
                </button>
                
                <button
                  onClick={viewMode === 'patient-list' ? handleAddPrescription : handleAddMedication}
                  className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <path d={svgPaths.pe7cde70} fill="currentColor" />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium tracking-wider">
                    {viewMode === 'patient-list' ? 'Add Prescription' : 'Add Prescription Medication'}
                  </span>
                </button>
              </div>
            </div>

            {/* Table Container */}
            <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden min-h-0">
              {/* Table Header */}
              <div className="bg-[#2a7a6e] text-white">
                {viewMode === 'patient-list' ? (
                  <div className="grid grid-cols-12 gap-2 p-3 text-xs font-medium tracking-wider">
                    <div className="col-span-2 text-center">Prescription ID</div>
                    <div className="col-span-2 text-center">Patient ID</div>
                    <div className="col-span-2 text-center">Prescription Date</div>
                    <div className="col-span-2 text-center">Personnel ID</div>
                    <div className="col-span-3 text-center">Notes</div>
                    <div className="col-span-1 text-center">Action</div>
                  </div>
                ) : (
                  <div className="grid grid-cols-14 gap-1 p-3 text-xs font-medium tracking-wider">
                    <div className="col-span-2 text-center">Prescription Medication ID</div>
                    <div className="col-span-2 text-center">Prescription ID</div>
                    <div className="col-span-2 text-center">Medication ID</div>
                    <div className="col-span-2 text-center">Dosage</div>
                    <div className="col-span-3 text-center">Instructions</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-1 text-center">Action</div>
                  </div>
                )}
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 h-[calc(100%-52px)] overflow-y-auto">
                {viewMode === 'patient-list' ? (
                  filteredRecords.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      {searchTerm ? 'No records found matching your search.' : 'No prescription records available.'}
                    </div>
                  ) : (
                    filteredRecords.map((record) => (
                      <div key={record.id} className="grid grid-cols-12 gap-2 p-3 hover:bg-gray-50 transition-colors">
                        <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          {record.prescriptionId}
                        </div>
                        <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          {record.patientId}
                        </div>
                        <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          {record.prescriptionDate}
                        </div>
                        <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          {record.personnelId}
                        </div>
                        <div className="col-span-3 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          <div className="truncate" title={record.notes}>
                            {record.notes}
                          </div>
                        </div>
                        <div className="col-span-1 flex justify-center space-x-1">
                          <ActionButton
                            type="view"
                            onClick={() => handleView(record)}
                          />
                          <ActionButton
                            type="edit"
                            onClick={() => handleEdit(record)}
                          />
                          <ActionButton
                            type="remove"
                            onClick={() => handleRemove(record.id)}
                          />
                        </div>
                      </div>
                    ))
                  )
                ) : (
                  filteredMedications.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      {searchTerm ? 'No medications found matching your search.' : 'No medication records available.'}
                    </div>
                  ) : (
                    filteredMedications.map((record) => (
                      <div key={record.id} className="grid grid-cols-14 gap-1 p-3 hover:bg-gray-50 transition-colors">
                        <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          {record.prescriptionMedicationId}
                        </div>
                        <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          {record.prescriptionId}
                        </div>
                        <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          {record.medicationId}
                        </div>
                        <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          {record.dosage}
                        </div>
                        <div className="col-span-3 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          <div className="truncate" title={record.instructions}>
                            {record.instructions}
                          </div>
                        </div>
                        <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                          {record.quantity}
                        </div>
                        <div className="col-span-1 flex justify-center space-x-1">
                          <ActionButton
                            type="view"
                            onClick={() => handleViewMedication(record)}
                          />
                          <ActionButton
                            type="edit"
                            onClick={() => handleEditMedication(record)}
                          />
                          <ActionButton
                            type="remove"
                            onClick={() => {
                              if (confirm('Are you sure you want to remove this medication record?')) {
                                setMedicationRecords(medicationRecords.filter(med => med.id !== record.id));
                              }
                            }}
                          />
                        </div>
                      </div>
                    ))
                  )
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