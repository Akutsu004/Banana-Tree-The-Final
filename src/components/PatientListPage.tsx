import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
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
  contactNumber: string;
  email: string;
  address: string;
  status: string;
}

export function PatientListPage({ currentUser, onBack, onLogout }: PatientListPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'list' | 'info' | 'edit' | 'add'>('list');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const { data, error } = await supabase.from('patients').select('*');
      if (data) {
        setPatients(
          data.map((row: any) => ({
            id: row.id,
            patientId: row.patient_id,
            firstName: row.first_name,
            lastName: row.last_name,
            dateOfBirth: row.date_of_birth,
            contactNumber: row.contact_number || row.primary_number || '',
            email: row.email,
            address: row.address,
            status: row.status || 'Active',
          }))
        );
      }
    };
    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.contactNumber.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleAddPatient = async (formData: any) => {
    const newPatient: Patient = {
      id: String(patients.length + 1),
      patientId: formData.patientId || `200000${patients.length + 1}`,
      firstName: formData.firstName || 'New',
      lastName: formData.lastName || 'Patient',
      dateOfBirth: formData.dateOfBirth || '01/01/2000',
      contactNumber: formData.contactNumber || `#63901234567${patients.length}`,
      email: formData.email || `patient${patients.length + 1}@example.com`,
      address: formData.address || 'New Address',
      status: 'Active'
    };
    try {
      const { error } = await supabase
        .from('patients')
        .insert([{
          patient_id: newPatient.patientId,
          first_name: newPatient.firstName,
          last_name: newPatient.lastName,
          date_of_birth: newPatient.dateOfBirth,
          contact_number: newPatient.contactNumber,
          email: newPatient.email,
          address: newPatient.address,
        }]);

      if (error) throw error;
      setPatients([...patients, newPatient]);
      setCurrentView('list');
      alert('Patient added successfully!');
    } catch (error: any) {
      console.error('Error adding patient:', error.message);
      alert('Failed to add patient. Please try again.');
    }
  };

  const handleUpdatePatient = async (formData: any) => {
    if (!selectedPatient) return;
    const updatedPatient: Patient = {
      ...selectedPatient,
      ...formData,
    };
    try {
      const { error } = await supabase
        .from('patients')
        .update({
          patient_id: updatedPatient.patientId,
          first_name: updatedPatient.firstName,
          last_name: updatedPatient.lastName,
          date_of_birth: updatedPatient.dateOfBirth,
          contact_number: updatedPatient.contactNumber,
          email: updatedPatient.email,
          address: updatedPatient.address,
        })
        .eq('id', updatedPatient.id);
      if (error) throw error;
      setPatients(patients.map(p => (p.id === updatedPatient.id ? updatedPatient : p)));
      setSelectedPatient(updatedPatient);
      setCurrentView('info');
      alert('Patient updated successfully!');
    } catch (error: any) {
      console.error('Error updating patient:', error.message);
      alert('Failed to update patient. Please try again.');
    }
  };

  const ActionButton = ({ type, onClick }: {
    type: 'view' | 'edit' | 'remove';
    onClick: (e?: React.MouseEvent) => void;
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
        className={`p-2 ${type === 'remove' ? 'bg-red-500 hover:bg-red-600' : 'bg-[#00b7c2] hover:bg-[#008a94]'} rounded transition-colors`}
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

  // Handle navigation views
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

  // Main list view
  return (
    <div className="min-h-screen bg-[#e0e0e0] flex flex-col">
      {/* Header */}
      <div className="bg-[#8fd0c6] shadow-md">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-[#2a7a6e] hover:text-[#1f5c52] transition-colors"
              >
                <div className="w-8 h-6">
                  <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
                    <path d={svgPaths.p1ee95700} fill="currentColor" />
                  </svg>
                </div>
                <span className="text-lg font-semibold">Back</span>
              </button>
              
              <div className="w-4 h-4">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p130267c0} fill="#2BFF0A" />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold italic text-black tracking-wider">
              MEDICARE - DENTAL CLINIC
            </h1>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  alt="User Avatar" 
                  className="w-full h-full object-cover" 
                  src={imgRectangle62} 
                />
              </div>
              <span className="hidden md:block text-lg font-semibold text-black">
                {currentUser?.data?.username || 'Sofia Smith'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-[1400px] w-full mx-auto px-6 py-8">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-black mb-2 tracking-wider">
          Patient List
        </h2>
        <div className="w-full h-0.5 bg-black mb-6"></div>

        {/* Search and Add Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Patient"
              className="w-full pl-10 pr-4 py-2.5 bg-[#ece6f0] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#2a7a6e]"
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
            className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-2.5 rounded-lg flex items-center space-x-2 transition-colors font-medium shadow-sm"
          >
            <img alt="Add" className="w-4 h-4" src={img1} />
            <span>Add Patient</span>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#2A7A6E] text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Patient ID</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">First Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Last Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Date of Birth</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Contact Number</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Address</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPatients.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-gray-500">
                      {searchTerm ? 'No patients found matching your search.' : 'No patients available.'}
                    </td>
                  </tr>
                ) : (
                  filteredPatients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm font-mono text-gray-900">{patient.patientId}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{patient.firstName}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{patient.lastName}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{patient.dateOfBirth}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{patient.contactNumber}</td>
                      <td className="px-4 py-4 text-sm">
                        <a href={`mailto:${patient.email}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                          {patient.email}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900 max-w-xs truncate" title={patient.address}>
                        {patient.address}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                          {patient.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <div className="flex items-center justify-center space-x-2">
                          <ActionButton type="view" onClick={() => handleView(patient)} />
                          <ActionButton type="edit" onClick={() => handleEdit(patient)} />
                          <ActionButton type="remove" onClick={() => handleRemove(patient.id)} />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={onLogout}
          className="flex items-center space-x-2 text-black hover:text-[#2a7a6e] transition-colors bg-white px-4 py-3 rounded-lg shadow-lg"
        >
          <div className="w-4 h-4">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
              <path d={svgPaths.p4cb50f2} fill="currentColor" />
            </svg>
          </div>
          <span className="text-sm font-semibold">logout</span>
        </button>
      </div>
    </div>
  );
}