import { useState } from 'react';
import svgPaths from "../imports/svg-hwkjbnh7y5";
import { PatientInfoPage } from './PatientInfoPage';
import { EditPatientPage } from './EditPatientPage';
import { AddPatientPage } from './AddPatientPage';
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";
import img1 from "figma:asset/69b8b24c10b74c147e24f91def25d86c75cd42df.png";
import img2 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import img3 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import img4 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";

interface PatientListPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

interface Patient {
  id: string;
  patientId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  primaryNumber: string;
  secondaryNumber: string;
  email: string;
  address: string;
  status: string;
}

export function PatientListPage({ currentUser, onBack, onLogout }: PatientListPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'list' | 'info' | 'edit' | 'add'>('list');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: '1',
      patientId: '2000001',
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: '06/01/1998',
      primaryNumber: '#639012345678',
      secondaryNumber: '#639098765432',
      email: 'd0e.jane0601@gmail.com',
      address: '01 House Bldg., Novaliches, Quezon City',
      status: 'Active'
    },
    {
      id: '2',
      patientId: '2000002',
      firstName: 'John',
      lastName: 'Smith',
      dateOfBirth: '12/15/1985',
      primaryNumber: '#639087654321',
      secondaryNumber: '#639056781234',
      email: 'john.smith@gmail.com',
      address: '123 Main St., Makati City',
      status: 'Active'
    },
    {
      id: '3',
      patientId: '2000003',
      firstName: 'Maria',
      lastName: 'Garcia',
      dateOfBirth: '03/22/1992',
      primaryNumber: '#639045678901',
      secondaryNumber: '#639023456789',
      email: 'maria.garcia@gmail.com',
      address: '456 Oak Ave., Quezon City',
      status: 'Inactive'
    }
  ]);

  const filteredPatients = patients.filter(patient =>
    patient.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.primaryNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatientClick = () => {
    setCurrentView('add');
  };

  const handleView = (patient: Patient) => {
    setSelectedPatient(patient);
    setCurrentView('info');
  };

  const handleEdit = (patient: Patient) => {
    setSelectedPatient(patient);
    setCurrentView('edit');
  };

  const handleRemove = (patientId: string) => {
    if (confirm('Are you sure you want to remove this patient?')) {
      setPatients(patients.filter(patient => patient.id !== patientId));
    }
  };

  const handleSubViewBack = () => {
    setCurrentView('list');
    setSelectedPatient(null);
  };

  const handleAddPatient = (formData: any) => {
    const newPatient: Patient = {
      id: String(patients.length + 1),
      patientId: formData.patientId || `200000${patients.length + 1}`,
      firstName: formData.firstName || 'New',
      lastName: formData.lastName || 'Patient',
      dateOfBirth: formData.dateOfBirth || '01/01/2000',
      primaryNumber: formData.primaryNumber || `#63901234567${patients.length}`,
      secondaryNumber: formData.secondaryNumber || `#63909876543${patients.length}`,
      email: formData.email || `patient${patients.length + 1}@example.com`,
      address: formData.address || 'New Address',
      status: 'Active'
    };
    setPatients([...patients, newPatient]);
    setCurrentView('list');
  };

  const handleUpdatePatient = (formData: any) => {
    if (selectedPatient) {
      const updatedPatients = patients.map(patient => 
        patient.id === selectedPatient.id 
          ? { ...patient, ...formData }
          : patient
      );
      setPatients(updatedPatients);
      setSelectedPatient({ ...selectedPatient, ...formData });
      setCurrentView('info');
    }
  };

  const ActionButton = ({ type, onClick, className = "" }: {
    type: 'view' | 'edit' | 'remove';
    onClick: (e?: React.MouseEvent) => void;
    className?: string;
  }) => {
    const getImage = () => {
      switch (type) {
        case 'view': return img3;
        case 'edit': return img2;
        case 'remove': return img4;
      }
    };

    return (
      <button
        onClick={onClick}
        className={`w-8 h-8 bg-[#00b7c2] rounded hover:bg-[#008a94] transition-colors flex items-center justify-center ${className}`}
        title={`${type.charAt(0).toUpperCase() + type.slice(1)} patient`}
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
      case 'inactive':
        return 'text-red-600 bg-red-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Handle patient info navigation
  if (currentView === 'info' && selectedPatient) {
    return (
      <PatientInfoPage
        currentUser={currentUser}
        onBack={handleSubViewBack}
        onEdit={() => setCurrentView('edit')}
        onLogout={onLogout}
        patient={selectedPatient}
      />
    );
  }

  // Handle edit navigation
  if (currentView === 'edit' && selectedPatient) {
    return (
      <EditPatientPage
        currentUser={currentUser}
        onBack={() => setCurrentView('info')}
        onSave={handleUpdatePatient}
        onLogout={onLogout}
        patient={selectedPatient}
      />
    );
  }

  // Handle add navigation
  if (currentView === 'add') {
    return (
      <AddPatientPage
        currentUser={currentUser}
        onBack={handleSubViewBack}
        onSave={handleAddPatient}
        onLogout={onLogout}
      />
    );
  }

  // Main list view - following the standard medical system structure
  return (
    <div className="h-screen bg-[#e0e0e0] flex flex-col">
      <div className="relative w-full h-full flex flex-col">
        <div className="relative w-full flex-1 bg-[#e0e0e0] flex flex-col">
          {/* Header */}
          <div className="relative bg-[#8fd0c6] h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-between px-4 md:px-8 flex-shrink-0">
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
                <span className="text-lg md:text-xl font-semibold">Back</span>
              </button>
              
              {/* Online Status Indicator */}
              <div className="w-3 h-3 md:w-4 md:h-4">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p130267c0} fill="#2BFF0A" />
                </svg>
              </div>
            </div>

            {/* Center - Medicare Title */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-black tracking-wider text-center">
                MEDICARE - DENTAL CLINIC
              </h1>
            </div>

            {/* Right - User Avatar */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                <img 
                  alt="User Avatar" 
                  className="w-full h-full object-cover" 
                  src={imgRectangle62} 
                />
              </div>
              <span className="hidden md:block text-lg lg:text-xl font-semibold text-black">
                {currentUser?.data?.username || 'Sofia Smith'}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col p-3 md:p-4 overflow-hidden">
            {/* Page Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-1 tracking-wider">
              Patient List
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

              {/* Add Patient Button */}
              <button
                onClick={handleAddPatientClick}
                className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors text-sm font-medium tracking-wider"
              >
                <img alt="Add" className="w-4 h-4" src={img1} />
                <span>Add Patient</span>
              </button>
            </div>

            {/* Table Container */}
            <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden min-h-0">
              {/* Table Header */}
              <div className="bg-[#2A7A6E] text-white">
                <div className="grid grid-cols-9 gap-2 p-3 text-xs font-medium tracking-wider">
                  <div className="text-center">Patient ID</div>
                  <div className="text-center">First Name</div>
                  <div className="text-center">Last Name</div>
                  <div className="text-center">Date of Birth</div>
                  <div className="text-center">Primary Number</div>
                  <div className="text-center">Secondary Number</div>
                  <div className="text-center">Email</div>
                  <div className="text-center">Address</div>
                  <div className="text-center">Action</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 h-[calc(100%-52px)] overflow-y-auto">
                {filteredPatients.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    {searchTerm ? 'No patients found matching your search.' : 'No patients available.'}
                  </div>
                ) : (
                  filteredPatients.map((patient) => (
                    <div key={patient.id} className="grid grid-cols-9 gap-2 p-3 hover:bg-gray-50 transition-colors">
                      <div className="text-center text-xs font-mono text-gray-700">{patient.patientId}</div>
                      <div className="text-center text-xs text-gray-700">{patient.firstName}</div>
                      <div className="text-center text-xs text-gray-700">{patient.lastName}</div>
                      <div className="text-center text-xs text-gray-700">{patient.dateOfBirth}</div>
                      <div className="text-center text-xs text-gray-700">{patient.primaryNumber}</div>
                      <div className="text-center text-xs text-gray-700">{patient.secondaryNumber}</div>
                      <div className="text-center text-xs">
                        <a 
                          href={`mailto:${patient.email}`} 
                          className="text-blue-600 hover:text-blue-800 cursor-pointer"
                        >
                          {patient.email}
                        </a>
                      </div>
                      <div className="text-center text-xs text-gray-700 truncate" title={patient.address}>
                        {patient.address}
                      </div>
                      <div className="text-center flex justify-center space-x-1">
                        <ActionButton
                          type="view"
                          onClick={() => handleView(patient)}
                        />
                        <ActionButton
                          type="edit"
                          onClick={() => handleEdit(patient)}
                        />
                        <ActionButton
                          type="remove"
                          onClick={() => handleRemove(patient.id)}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Bottom Right Logout Button */}
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