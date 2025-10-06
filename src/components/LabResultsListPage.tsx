import { useState } from 'react';
import svgPaths from "../imports/svg-81atb4piwj";
import { ViewLabResultsPage } from './ViewLabResultsPage';
import { EditLabResultsPage } from './EditLabResultsPage';
import { AddLabResultsPage } from './AddLabResultsPage';
import imgDelete2 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";
import imgView12 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import imgEdit1 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";
import img1 from "figma:asset/69b8b24c10b74c147e24f91def25d86c75cd42df.png";

interface LabResultsListPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

interface PatientHistoryRecord {
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
}

export function LabResultsListPage({ currentUser, onBack, onLogout }: LabResultsListPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'list' | 'view' | 'edit' | 'add'>('list');
  const [selectedRecord, setSelectedRecord] = useState<PatientHistoryRecord | null>(null);
  
  const [patientHistoryRecords, setPatientHistoryRecords] = useState<PatientHistoryRecord[]>([
    {
      id: '1',
      patientId: '2000001',
      patientName: 'John Doe',
      recordId: '4000001',
      personnelId: '1001',
      appointmentId: '9000001',
      underlyingCondition: 'Diabetes Type 2',
      prescriptionId: '6000001',
      diagnosis: 'Periodontal disease with localized inflammation and bleeding gums',
      treatmentPlanId: '5000001',
      allergies: 'Penicillin',
      notes: 'Patient requires regular monitoring. Recommended follow-up in 2 weeks.',
      status: 'Active',
      labTestType: 'Blood Glucose Test',
      testDate: '2024-10-05',
      results: 'Glucose levels elevated at 180 mg/dL. Requires immediate intervention.'
    },
    {
      id: '2',
      patientId: '2000002',
      patientName: 'Jane Smith',
      recordId: '4000002',
      personnelId: '1002',
      appointmentId: '9000002',
      underlyingCondition: 'Hypertension',
      prescriptionId: '6000002',
      diagnosis: 'Routine dental cleaning with minor plaque buildup',
      treatmentPlanId: '5000002',
      allergies: 'None',
      notes: 'Patient in good oral health. Continue regular dental hygiene routine.',
      status: 'Completed',
      labTestType: 'Blood Pressure Monitor',
      testDate: '2024-10-03',
      results: 'Blood pressure: 140/90 mmHg - slightly elevated, monitor closely.'
    },
    {
      id: '3',
      patientId: '2000003',
      patientName: 'Michael Johnson',
      recordId: '4000003',
      personnelId: '1003',
      appointmentId: '9000003',
      underlyingCondition: 'Asthma',
      prescriptionId: '6000003',
      diagnosis: 'Root canal treatment completed successfully',
      treatmentPlanId: '5000003',
      allergies: 'Sulfa drugs',
      notes: 'Post-operative care instructions provided. Schedule follow-up in 1 week.',
      status: 'In Progress',
      labTestType: 'Pulmonary Function Test',
      testDate: '2024-10-01',
      results: 'FEV1: 65% predicted. Mild asthma symptoms, medication adjusted.'
    }
  ]);

  // Filter records based on search term
  const filteredRecords = patientHistoryRecords.filter(record =>
    record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.labTestType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubViewBack = () => {
    setCurrentView('list');
    setSelectedRecord(null);
  };

  const handleView = (record: PatientHistoryRecord) => {
    setSelectedRecord(record);
    setCurrentView('view');
  };

  const handleEdit = (record: PatientHistoryRecord) => {
    setSelectedRecord(record);
    setCurrentView('edit');
  };

  const handleRemove = (recordId: string) => {
    if (confirm('Are you sure you want to remove this lab result record?')) {
      setPatientHistoryRecords(patientHistoryRecords.filter(record => record.id !== recordId));
    }
  };

  const handleAddLabResults = () => {
    setCurrentView('add');
  };

  const handleAddRecord = (formData: any) => {
    const newRecord: PatientHistoryRecord = {
      id: String(patientHistoryRecords.length + 1),
      patientId: formData.patientId || `200000${patientHistoryRecords.length + 1}`,
      patientName: formData.patientName || 'New Patient',
      recordId: formData.recordId || `400000${patientHistoryRecords.length + 1}`,
      personnelId: formData.personnelId || '1001',
      appointmentId: formData.appointmentId || `900000${patientHistoryRecords.length + 1}`,
      underlyingCondition: formData.underlyingCondition || 'None specified',
      prescriptionId: formData.prescriptionId || `600000${patientHistoryRecords.length + 1}`,
      diagnosis: formData.diagnosis || 'Diagnosis pending',
      treatmentPlanId: formData.treatmentPlanId || `500000${patientHistoryRecords.length + 1}`,
      allergies: formData.allergies || 'None',
      notes: formData.notes || 'New lab result record',
      status: 'Pending',
      labTestType: formData.labTestType || 'General Test',
      testDate: formData.testDate || new Date().toISOString().split('T')[0],
      results: formData.results || 'Test results pending'
    };
    setPatientHistoryRecords([...patientHistoryRecords, newRecord]);
    setCurrentView('list');
  };

  const handleUpdateRecord = (formData: any) => {
    if (selectedRecord) {
      const updatedRecords = patientHistoryRecords.map(record => 
        record.id === selectedRecord.id 
          ? { ...record, ...formData }
          : record
      );
      setPatientHistoryRecords(updatedRecords);
      setSelectedRecord({ ...selectedRecord, ...formData });
      setCurrentView('view');
    }
  };

  const ActionButton = ({ type, onClick, className = "" }: {
    type: 'view' | 'edit' | 'remove';
    onClick: (e?: React.MouseEvent) => void;
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
        className={`w-8 h-8 bg-[#00b7c2] rounded hover:bg-[#008a94] transition-colors flex items-center justify-center ${className}`}
        title={`${type.charAt(0).toUpperCase() + type.slice(1)} record`}
      >
        <img 
          alt={type} 
          className="w-4 h-4 object-contain" 
          src={getImage()} 
        />
      </button>
    );
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

  // Handle view navigation
  if (currentView === 'view' && selectedRecord) {
    return (
      <ViewLabResultsPage
        currentUser={currentUser}
        onBack={handleSubViewBack}
        onEdit={() => setCurrentView('edit')}
        onLogout={onLogout}
        record={selectedRecord}
      />
    );
  }

  // Handle edit navigation
  if (currentView === 'edit' && selectedRecord) {
    return (
      <EditLabResultsPage
        currentUser={currentUser}
        onBack={() => setCurrentView('view')}
        onSave={handleUpdateRecord}
        onLogout={onLogout}
        record={selectedRecord}
      />
    );
  }

  // Handle add navigation
  if (currentView === 'add') {
    return (
      <AddLabResultsPage
        currentUser={currentUser}
        onBack={handleSubViewBack}
        onSave={handleAddRecord}
        onLogout={onLogout}
      />
    );
  }

  // Main list view - following the standard medical system structure
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
              Lab Results & Patient History (Patient List)
            </h2>
            <div className="w-full h-0.5 bg-black mb-4"></div>

            {/* Search and Add Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Patient"
                  className="w-full pl-10 pr-4 py-2 bg-[#ece6f0] border-none rounded-[28px] focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] text-[#49454f]"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5">
                  <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                    <path d={svgPaths.p2304a600} fill="#49454F" />
                  </svg>
                </div>
              </div>

              {/* Add Lab Results Button */}
              <button
                onClick={handleAddLabResults}
                className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors text-sm font-medium tracking-wider"
              >
                <img alt="Add" className="w-4 h-4" src={img1} />
                <span>Add Lab Results</span>
              </button>
            </div>

            {/* Patient Records Table */}
            <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden min-h-0">
              {/* Desktop Table View */}
              <div className="hidden lg:block h-full">
                {/* Table Header */}
                <div className="bg-[#2a7a6e] text-white">
                  <div className="grid grid-cols-12 gap-2 p-3 text-xs font-medium tracking-wider">
                    <div className="col-span-1.5 text-center">Patient ID</div>
                    <div className="col-span-2 text-center">Patient Name</div>
                    <div className="col-span-1.5 text-center">Record ID</div>
                    <div className="col-span-2 text-center">Lab Test Type</div>
                    <div className="col-span-1.5 text-center">Test Date</div>
                    <div className="col-span-2 text-center">Diagnosis</div>
                    <div className="col-span-1 text-center">Status</div>
                    <div className="col-span-1 text-center">Action</div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200 h-[calc(100%-52px)] overflow-y-auto">
                  {filteredRecords.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      {searchTerm ? 'No records found matching your search.' : 'No lab result records available.'}
                    </div>
                  ) : (
                    filteredRecords.map((record) => (
                      <div key={record.id} className="grid grid-cols-12 gap-2 p-3 hover:bg-gray-50 transition-colors">
                        <div className="col-span-1.5 text-center text-xs font-mono text-black tracking-wider">
                          {record.patientId}
                        </div>
                        <div className="col-span-2 text-center text-xs font-mono text-black tracking-wider">
                          {record.patientName}
                        </div>
                        <div className="col-span-1.5 text-center text-xs font-mono text-black tracking-wider">
                          {record.recordId}
                        </div>
                        <div className="col-span-2 text-center text-xs font-mono text-black tracking-wider">
                          <div className="truncate" title={record.labTestType}>
                            {record.labTestType}
                          </div>
                        </div>
                        <div className="col-span-1.5 text-center text-xs font-mono text-black tracking-wider">
                          {record.testDate}
                        </div>
                        <div className="col-span-2 text-center text-xs font-mono text-black tracking-wider">
                          <div className="truncate" title={record.diagnosis}>
                            {record.diagnosis.substring(0, 30)}...
                          </div>
                        </div>
                        <div className="col-span-1 text-center text-xs font-mono tracking-wider">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                            {record.status}
                          </span>
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
                  )}
                </div>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden h-full">
                <div className="divide-y divide-gray-200 h-full overflow-y-auto">
                  {filteredRecords.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      {searchTerm ? 'No records found matching your search.' : 'No lab result records available.'}
                    </div>
                  ) : (
                    filteredRecords.map((record) => (
                      <div key={record.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-gray-600">Patient:</p>
                              <p className="font-mono text-black font-medium">{record.patientName}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                              {record.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-gray-600">Patient ID:</p>
                              <p className="font-mono text-black">{record.patientId}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Record ID:</p>
                              <p className="font-mono text-black">{record.recordId}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Lab Test Type:</p>
                              <p className="font-mono text-black">{record.labTestType}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Test Date:</p>
                              <p className="font-mono text-black">{record.testDate}</p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-gray-600">Diagnosis:</p>
                              <p className="font-mono text-black truncate" title={record.diagnosis}>
                                {record.diagnosis.substring(0, 40)}...
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-center space-x-2 pt-2 border-t border-gray-200">
                            <ActionButton
                              type="view"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleView(record);
                              }}
                            />
                            <ActionButton
                              type="edit"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(record);
                              }}
                            />
                            <ActionButton
                              type="remove"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(record.id);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
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