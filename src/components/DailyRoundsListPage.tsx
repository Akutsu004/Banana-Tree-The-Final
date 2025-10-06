import { useState } from 'react';
import svgPaths from "../imports/svg-2995e1jrk7";
import { ViewDailyRoundsPage } from './ViewDailyRoundsPage';
import { EditDailyRoundsPage } from './EditDailyRoundsPage';
import { AddDailyRoundsPage } from './AddDailyRoundsPage';
import imgDelete2 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";
import imgView12 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import imgEdit1 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";
import img1 from "figma:asset/69b8b24c10b74c147e24f91def25d86c75cd42df.png";

interface DailyRoundsListPageProps {
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

export function DailyRoundsListPage({ currentUser, onBack, onLogout }: DailyRoundsListPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'list' | 'view' | 'edit' | 'add'>('list');
  const [selectedRecord, setSelectedRecord] = useState<DailyRoundsRecord | null>(null);
  
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
      underlyingCondition: 'Cardiovascular disease',
      prescriptionId: '6000004',
      diagnosis: 'Routine dental examination with preventive care recommendations',
      treatmentPlanId: '5000004',
      allergies: 'Latex',
      notes: 'Patient vital signs stable. Blood pressure monitored throughout appointment. Recommended cardiac clearance for future procedures.',
      status: 'Active'
    },
    {
      id: '2',
      patientId: '2000005',
      patientName: 'Sarah Wilson',
      appointmentId: '9000005',
      doctorInCharge: 'Dr. Martinez',
      appointmentSchedule: '01/16/2025',
      appointmentTime: '2:30 PM',
      duration: '30 minutes',
      recordId: '4000005',
      underlyingCondition: 'Anxiety disorder',
      prescriptionId: '6000005',
      diagnosis: 'Cavity treatment with sedation protocols followed',
      treatmentPlanId: '5000005',
      allergies: 'Codeine',
      notes: 'Patient required mild sedation for procedure. Monitored closely for anxiety levels. Post-procedure recovery normal.',
      status: 'Completed'
    },
    {
      id: '3',
      patientId: '2000006',
      patientName: 'Robert Brown',
      appointmentId: '9000006',
      doctorInCharge: 'Dr. Chen',
      appointmentSchedule: '01/17/2025',
      appointmentTime: '11:15 AM',
      duration: '60 minutes',
      recordId: '4000006',
      underlyingCondition: 'Diabetes Type 1',
      prescriptionId: '6000006',
      diagnosis: 'Periodontal therapy with blood glucose monitoring',
      treatmentPlanId: '5000006',
      allergies: 'None',
      notes: 'Blood glucose levels monitored before and during procedure. Healing progress satisfactory. Continue diabetes management protocols.',
      status: 'In Progress'
    }
  ]);

  // Filter records based on search term
  const filteredRecords = dailyRoundsRecords.filter(record =>
    record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.doctorInCharge.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubViewBack = () => {
    setCurrentView('list');
    setSelectedRecord(null);
  };

  const handleView = (record: DailyRoundsRecord) => {
    setSelectedRecord(record);
    setCurrentView('view');
  };

  const handleEdit = (record: DailyRoundsRecord) => {
    setSelectedRecord(record);
    setCurrentView('edit');
  };

  const handleRemove = (recordId: string) => {
    if (confirm('Are you sure you want to remove this daily rounds record?')) {
      setDailyRoundsRecords(dailyRoundsRecords.filter(record => record.id !== recordId));
    }
  };

  const handleAddDailyRounds = () => {
    setCurrentView('add');
  };

  const handleAddRecord = (formData: any) => {
    const newRecord: DailyRoundsRecord = {
      id: String(dailyRoundsRecords.length + 1),
      patientId: formData.patientId || `200000${dailyRoundsRecords.length + 1}`,
      patientName: formData.patientName || 'New Patient',
      appointmentId: formData.appointmentId || `900000${dailyRoundsRecords.length + 1}`,
      doctorInCharge: formData.doctorInCharge || 'Dr. Assigned',
      appointmentSchedule: formData.appointmentSchedule || new Date().toLocaleDateString(),
      appointmentTime: formData.appointmentTime || '09:00 AM',
      duration: formData.duration || '30 minutes',
      recordId: formData.recordId || `400000${dailyRoundsRecords.length + 1}`,
      underlyingCondition: formData.underlyingCondition || 'None specified',
      prescriptionId: formData.prescriptionId || `600000${dailyRoundsRecords.length + 1}`,
      diagnosis: formData.diagnosis || 'Diagnosis pending',
      treatmentPlanId: formData.treatmentPlanId || `500000${dailyRoundsRecords.length + 1}`,
      allergies: formData.allergies || 'None',
      notes: formData.notes || 'New daily rounds record',
      status: 'Scheduled'
    };
    setDailyRoundsRecords([...dailyRoundsRecords, newRecord]);
    setCurrentView('list');
  };

  const handleUpdateRecord = (formData: any) => {
    if (selectedRecord) {
      const updatedRecords = dailyRoundsRecords.map(record => 
        record.id === selectedRecord.id 
          ? { ...record, ...formData }
          : record
      );
      setDailyRoundsRecords(updatedRecords);
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
      case 'scheduled':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Handle view navigation
  if (currentView === 'view' && selectedRecord) {
    return (
      <ViewDailyRoundsPage
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
      <EditDailyRoundsPage
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
      <AddDailyRoundsPage
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
              Daily Rounds & Patient Monitoring Dashboard (Patient List)
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

              {/* Add Daily Rounds Button */}
              <button
                onClick={handleAddDailyRounds}
                className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors text-sm font-medium tracking-wider"
              >
                <img alt="Add" className="w-4 h-4" src={img1} />
                <span>Add Daily Rounds</span>
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
                    <div className="col-span-1.5 text-center">Appointment ID</div>
                    <div className="col-span-2 text-center">Doctor</div>
                    <div className="col-span-1.5 text-center">Schedule</div>
                    <div className="col-span-2 text-center">Diagnosis</div>
                    <div className="col-span-1 text-center">Status</div>
                    <div className="col-span-1 text-center">Action</div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200 h-[calc(100%-52px)] overflow-y-auto">
                  {filteredRecords.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      {searchTerm ? 'No records found matching your search.' : 'No daily rounds records available.'}
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
                          {record.appointmentId}
                        </div>
                        <div className="col-span-2 text-center text-xs font-mono text-black tracking-wider">
                          <div className="truncate" title={record.doctorInCharge}>
                            {record.doctorInCharge}
                          </div>
                        </div>
                        <div className="col-span-1.5 text-center text-xs font-mono text-black tracking-wider">
                          <div>
                            <div>{record.appointmentSchedule}</div>
                            <div className="text-gray-600">{record.appointmentTime}</div>
                          </div>
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
                      {searchTerm ? 'No records found matching your search.' : 'No daily rounds records available.'}
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
                              <p className="text-gray-600">Appointment ID:</p>
                              <p className="font-mono text-black">{record.appointmentId}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Doctor:</p>
                              <p className="font-mono text-black">{record.doctorInCharge}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Schedule:</p>
                              <p className="font-mono text-black">{record.appointmentSchedule}</p>
                              <p className="font-mono text-gray-600 text-sm">{record.appointmentTime}</p>
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