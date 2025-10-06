import { useState } from 'react';
import svgPaths from "../imports/svg-54mqy0f9yz";
import { EditPatientChartingPage } from './EditPatientChartingPage';
import { AddPatientChartingPage } from './AddPatientChartingPage';
import { DentalChartPage } from './DentalChartPage';
import { EditDentalChartPage } from './EditDentalChartPage';
import imgDelete2 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";
import imgView12 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import imgEdit1 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface PatientChartingPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

interface ChartRecord {
  id: string;
  dentalChartId: string;
  recordId: string;
  toothNumber: string;
  condition: string;
  notes: string;
  statusDate: string;
}

export function PatientChartingPage({ currentUser, onBack, onLogout }: PatientChartingPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'list' | 'edit' | 'add' | 'view-chart' | 'edit-chart'>('list');
  const [editingRecord, setEditingRecord] = useState<ChartRecord | null>(null);
  const [chartRecords, setChartRecords] = useState<ChartRecord[]>([
    {
      id: '1',
      dentalChartId: '3000001',
      recordId: '4000001',
      toothNumber: '18',
      condition: 'tooth condition',
      notes: 'Patient shows signs of mild gingivitis',
      statusDate: '2024-01-15'
    },
    {
      id: '2',
      dentalChartId: '3000002',
      recordId: '4000002',
      toothNumber: '12',
      condition: 'cavity',
      notes: 'Small cavity detected on molar surface',
      statusDate: '2024-01-14'
    },
    {
      id: '3',
      dentalChartId: '3000003',
      recordId: '4000003',
      toothNumber: '24',
      condition: 'healthy',
      notes: 'Regular cleaning completed',
      statusDate: '2024-01-13'
    }
  ]);

  const filteredRecords = chartRecords.filter(record =>
    record.dentalChartId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.recordId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddChart = () => {
    setCurrentView('add');
  };

  const handleView = (record: ChartRecord) => {
    // Navigate to dental chart view
    setEditingRecord(record);
    setCurrentView('view-chart');
  };

  const handleEdit = (record: ChartRecord) => {
    // Navigate to edit form with record data
    setEditingRecord(record);
    setCurrentView('edit');
  };

  const handleRemove = (recordId: string) => {
    if (confirm('Are you sure you want to remove this chart record?')) {
      setChartRecords(chartRecords.filter(record => record.id !== recordId));
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

  // Handle sub-view navigation
  const handleSubViewBack = () => {
    if (currentView === 'edit-chart') {
      setCurrentView('view-chart');
    } else {
      setCurrentView('list');
      setEditingRecord(null);
    }
  };

  // Handle dental chart edit navigation
  const handleDentalChartEdit = () => {
    setCurrentView('edit-chart');
  };

  // Handle dental chart save
  const handleDentalChartSave = (formData: any) => {
    // Update the chart record with new data
    if (editingRecord) {
      const updatedRecords = chartRecords.map(record => 
        record.id === editingRecord.id 
          ? { ...record, ...formData }
          : record
      );
      setChartRecords(updatedRecords);
      setCurrentView('view-chart');
      alert('Dental chart updated successfully!');
    }
  };

  // Render dental chart view
  if (currentView === 'view-chart' && editingRecord) {
    return (
      <DentalChartPage
        currentUser={currentUser}
        onBack={handleSubViewBack}
        onEdit={handleDentalChartEdit}
        onLogout={onLogout}
      />
    );
  }

  // Render dental chart edit form
  if (currentView === 'edit-chart' && editingRecord) {
    return (
      <EditDentalChartPage
        currentUser={currentUser}
        onBack={handleSubViewBack}
        onSave={handleDentalChartSave}
        onLogout={onLogout}
      />
    );
  }

  // Render edit form
  if (currentView === 'edit' && editingRecord) {
    return (
      <EditPatientChartingPage
        currentUser={currentUser}
        onBack={handleSubViewBack}
        onLogout={onLogout}
        chartRecord={{
          dentalChartId: editingRecord.dentalChartId,
          toothNumber: editingRecord.toothNumber,
          condition: editingRecord.condition,
          surface: 'Mesial', // Default value
          statusDate: editingRecord.statusDate,
          notes: editingRecord.notes
        }}
      />
    );
  }

  // Render add form
  if (currentView === 'add') {
    return (
      <AddPatientChartingPage
        currentUser={currentUser}
        onBack={handleSubViewBack}
        onLogout={onLogout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#e0e0e0] flex flex-col">
      {/* Header */}
      <div className="bg-[#8fd0c6] p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-[#2a7a6e] hover:text-[#1f5c52] transition-colors"
          >
            <div className="w-6 h-4 sm:w-8 sm:h-6">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
                <path d={svgPaths.p1ee95700} fill="currentColor" />
              </svg>
            </div>
            <span className="text-sm sm:text-base lg:text-xl font-semibold">Back</span>
          </button>
          
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic text-black text-center tracking-[2px] sm:tracking-[4.8px] flex-1 mx-4">
            MEDICARE - DENTAL CLINIC
          </h1>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden">
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

        {/* Online Status Indicator */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <div className="w-3 h-3 sm:w-4 sm:h-4">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p130267c0} fill="#2BFF0A" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">Patient Dental Charting</h2>
          <div className="w-full h-px bg-black"></div>
        </div>

        {/* Search and Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
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

          {/* Add Chart Button */}
          <button
            onClick={handleAddChart}
            className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.pe7cde70} fill="currentColor" />
            </svg>
            <span className="text-xs sm:text-sm font-medium tracking-wider">Add Patient Chart</span>
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#2a7a6e] text-white">
            <div className="grid grid-cols-12 gap-2 p-3 text-xs font-medium tracking-wider">
              <div className="col-span-2 text-center">Dental Chart ID</div>
              <div className="col-span-2 text-center">Record ID</div>
              <div className="col-span-1 text-center">Tooth Number</div>
              <div className="col-span-2 text-center">Condition</div>
              <div className="col-span-3 text-center">Notes</div>
              <div className="col-span-1 text-center">Status Date</div>
              <div className="col-span-1 text-center">Action</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {filteredRecords.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {searchTerm ? 'No records found matching your search.' : 'No chart records available.'}
              </div>
            ) : (
              filteredRecords.map((record) => (
                <div key={record.id} className="grid grid-cols-12 gap-2 p-3 hover:bg-gray-50 transition-colors">
                  <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                    {record.dentalChartId}
                  </div>
                  <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                    {record.recordId}
                  </div>
                  <div className="col-span-1 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                    {record.toothNumber}
                  </div>
                  <div className="col-span-2 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                    {record.condition}
                  </div>
                  <div className="col-span-3 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                    <div className="truncate" title={record.notes}>
                      {record.notes}
                    </div>
                  </div>
                  <div className="col-span-1 text-center text-xs sm:text-sm font-mono text-black tracking-wider">
                    {record.statusDate}
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

        {/* Mobile Table View */}
        <div className="md:hidden mt-6">
          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <div key={record.id} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Chart ID:</span>
                    <span className="font-mono text-sm">{record.dentalChartId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Record ID:</span>
                    <span className="font-mono text-sm">{record.recordId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Tooth:</span>
                    <span className="font-mono text-sm">{record.toothNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Condition:</span>
                    <span className="font-mono text-sm">{record.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Date:</span>
                    <span className="font-mono text-sm">{record.statusDate}</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-semibold text-gray-600">Notes:</span>
                    <p className="text-sm mt-1">{record.notes}</p>
                  </div>
                  <div className="flex justify-center space-x-2 pt-2 border-t">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
        <button
          onClick={onLogout}
          className="flex items-center space-x-2 text-black hover:text-[#2a7a6e] transition-colors bg-white bg-opacity-80 px-3 py-2 rounded-lg hover:bg-opacity-100"
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
              <path d={svgPaths.p4cb50f2} fill="currentColor" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm font-semibold">logout</span>
        </button>
      </div>
    </div>
  );
}