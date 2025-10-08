import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
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
  status: string;
}

export function DailyRoundsListPage({ currentUser, onBack, onLogout }: DailyRoundsListPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'list' | 'view' | 'edit' | 'add'>('list');
  const [selectedRecord, setSelectedRecord] = useState<DailyRoundsRecord | null>(null);
  const [dailyRoundsRecords, setDailyRoundsRecords] = useState<DailyRoundsRecord[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch daily rounds from Supabase
  useEffect(() => {
    const fetchDailyRounds = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('daily_round_id')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data) {
          setDailyRoundsRecords(
            data.map((row: any) => ({
              id: row.id,
              patientId: row.patient_id,
              patientName: row.patient_name,
              appointmentId: row.appointment_id,
              doctorInCharge: row.doctor_in_charge,
              appointmentSchedule: row.appointment_schedule,
              appointmentTime: row.appointment_time,
              duration: row.duration,
              recordId: row.record_id,
              underlyingCondition: row.underlying_condition,
              prescriptionId: row.prescription_id,
              diagnosis: row.diagnosis,
              treatmentPlanId: row.treatment_plan_id,
              allergies: row.allergies,
              notes: row.notes,
              status: row.status || 'Active',
            }))
          );
        }
      } catch (error: any) {
        console.error('Error fetching daily rounds:', error.message);
        alert('Failed to load daily rounds data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDailyRounds();
  }, []);

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

  const handleRemove = async (recordId: string) => {
    if (confirm('Are you sure you want to remove this daily rounds record?')) {
      try {
        const { error } = await supabase
          .from('daily_round_id')
          .delete()
          .eq('id', recordId);

        if (error) throw error;

        setDailyRoundsRecords(dailyRoundsRecords.filter(record => record.id !== recordId));
        alert('Record removed successfully!');
      } catch (error: any) {
        console.error('Error removing record:', error.message);
        alert('Failed to remove record. Please try again.');
      }
    }
  };

  const handleAddDailyRounds = () => {
    setCurrentView('add');
  };

  const handleAddRecord = async (formData: any) => {
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

    try {
      const { error } = await supabase
        .from('daily_rounds')
        .insert([{
          patient_id: newRecord.patientId,
          patient_name: newRecord.patientName,
          appointment_id: newRecord.appointmentId,
          doctor_in_charge: newRecord.doctorInCharge,
          appointment_schedule: newRecord.appointmentSchedule,
          appointment_time: newRecord.appointmentTime,
          duration: newRecord.duration,
          record_id: newRecord.recordId,
          underlying_condition: newRecord.underlyingCondition,
          prescription_id: newRecord.prescriptionId,
          diagnosis: newRecord.diagnosis,
          treatment_plan_id: newRecord.treatmentPlanId,
          allergies: newRecord.allergies,
          notes: newRecord.notes,
          status: newRecord.status,
        }]);

      if (error) throw error;

      setDailyRoundsRecords([...dailyRoundsRecords, newRecord]);
      setCurrentView('list');
      alert('Daily round added successfully!');
    } catch (error: any) {
      console.error('Error adding daily round:', error.message);
      alert('Failed to add daily round. Please try again.');
    }
  };

  const handleUpdateRecord = async (formData: any) => {
    if (!selectedRecord) return;

    const updatedRecord: DailyRoundsRecord = {
      ...selectedRecord,
      ...formData,
    };

    try {
      const { error } = await supabase
        .from('daily_rounds')
        .update({
          patient_id: updatedRecord.patientId,
          patient_name: updatedRecord.patientName,
          appointment_id: updatedRecord.appointmentId,
          doctor_in_charge: updatedRecord.doctorInCharge,
          appointment_schedule: updatedRecord.appointmentSchedule,
          appointment_time: updatedRecord.appointmentTime,
          duration: updatedRecord.duration,
          record_id: updatedRecord.recordId,
          underlying_condition: updatedRecord.underlyingCondition,
          prescription_id: updatedRecord.prescriptionId,
          diagnosis: updatedRecord.diagnosis,
          treatment_plan_id: updatedRecord.treatmentPlanId,
          allergies: updatedRecord.allergies,
          notes: updatedRecord.notes,
          status: updatedRecord.status,
        })
        .eq('id', updatedRecord.id);

      if (error) throw error;

      setDailyRoundsRecords(
        dailyRoundsRecords.map(record =>
          record.id === updatedRecord.id ? updatedRecord : record
        )
      );
      setSelectedRecord(updatedRecord);
      setCurrentView('view');
      alert('Daily round updated successfully!');
    } catch (error: any) {
      console.error('Error updating daily round:', error.message);
      alert('Failed to update daily round. Please try again.');
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
        className={`w-8 h-8 ${type === 'remove' ? 'bg-red-500 hover:bg-red-600' : 'bg-[#00b7c2] hover:bg-[#008a94]'} rounded transition-colors flex items-center justify-center ${className}`}
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

  // Main list view
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
              Daily Rounds & Patient Monitoring Dashboard
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

            {/* Loading State */}
            {loading ? (
              <div className="flex-1 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <p className="text-gray-500">Loading daily rounds...</p>
              </div>
            ) : (
              /* Patient Records Table */
              <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden min-h-0">
                <div className="overflow-x-auto h-full">
                  <table className="w-full">
                    <thead className="bg-[#2a7a6e] text-white sticky top-0">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Patient ID</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Patient Name</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Appointment ID</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Doctor</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Schedule</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Diagnosis</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredRecords.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="px-4 py-12 text-center text-gray-500">
                            {searchTerm ? 'No records found matching your search.' : 'No daily rounds records available.'}
                          </td>
                        </tr>
                      ) : (
                        filteredRecords.map((record) => (
                          <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 text-sm font-mono text-gray-900">{record.patientId}</td>
                            <td className="px-4 py-4 text-sm text-gray-900">{record.patientName}</td>
                            <td className="px-4 py-4 text-sm font-mono text-gray-900">{record.appointmentId}</td>
                            <td className="px-4 py-4 text-sm text-gray-900 max-w-xs truncate" title={record.doctorInCharge}>
                              {record.doctorInCharge}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-900">
                              <div>{record.appointmentSchedule}</div>
                              <div className="text-gray-600 text-xs">{record.appointmentTime}</div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-900 max-w-xs truncate" title={record.diagnosis}>
                              {record.diagnosis}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                                {record.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-sm">
                              <div className="flex items-center justify-center space-x-2">
                                <ActionButton type="view" onClick={() => handleView(record)} />
                                <ActionButton type="edit" onClick={() => handleEdit(record)} />
                                <ActionButton type="remove" onClick={() => handleRemove(record.id)} />
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 text-black hover:text-[#2a7a6e] transition-colors bg-white bg-opacity-80 px-3 py-2 rounded-lg hover:bg-opacity-100 shadow-lg"
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