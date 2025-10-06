import { useState } from 'react';
import svgPaths from "../imports/svg-mgaydqwbhj";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";
import imgVitalSigns21 from "figma:asset/44b4baf1b77716433605deebefe78561633c9dd5.png";
import imgExperimentResults1 from "figma:asset/33823922dddacff3e43beed20b5a0dbd30c82cfa.png";
import imgDashboard11 from "figma:asset/4d09bee6bfa0c32612bff38a59758df3d7138ef9.png";
import imgInfo1 from "figma:asset/8a429c8ceef6cb44f2be6652b8837246507ab528.png";
import imgChart1 from "figma:asset/7d04115f16b591b3f1f302f1dedd740d7cea4b23.png";
import imgPrescription1 from "figma:asset/59fa633d9a05b98f8f1565a899fd2021e68efbf8.png";
import imgDentalTreatment1 from "figma:asset/8ba03e4cd1254caaad70bd3d0ee583046a420e3c.png";
import imgList1 from "figma:asset/895ab3cb750bb969d743dd367f141b1eb652e89f.png";
import imgMultiAgentSystem11 from "figma:asset/b5bdc0bca85a20ca93e01dc956f98a8e2975f360.png";
import imgPatient from "figma:asset/54876f29d7d2448648833f0ded884967d53e60ce.png";

interface EmployeeInfoPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

interface EmployeeData {
  name: string;
  age: number;
  sex: string;
  address: string;
  employeeId: string;
  position: string;
  department?: string;
  licenseNumber?: string;
  startDate?: string;
}

export function EmployeeInfoPage({ currentUser, onBack, onLogout }: EmployeeInfoPageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    name: currentUser?.data?.username || 'Sofia Smith',
    age: 30,
    sex: 'Female',
    address: 'Metro Manila',
    employeeId: '1000001',
    position: currentUser?.type === 'doctor' ? 'Dentist' : 'Administrator',
    department: currentUser?.type === 'doctor' ? 'General Dentistry' : 'Administration',
    licenseNumber: currentUser?.type === 'doctor' ? 'DEN-2024-001' : undefined,
    startDate: '2020-01-15'
  });

  const [editForm, setEditForm] = useState<EmployeeData>(employeeData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm(employeeData);
  };

  const handleSave = () => {
    setEmployeeData(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(employeeData);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof EmployeeData, value: string | number) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const ProfilePic = ({ className }: { className?: string }) => (
    <div className={`${className} relative`}>
      <div className="absolute inset-0 bg-white rounded-full" />
      <div className="absolute inset-[10%] top-[60%] bottom-0">
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 100">
          <path d={svgPaths.p10e8f180} fill="black" />
        </svg>
      </div>
      <div className="absolute top-[16%] left-[30%] right-[30%] aspect-square">
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="black" r="50" />
        </svg>
      </div>
    </div>
  );

  const InfoCard = ({
    title,
    children,
    className = ""
  }: {
    title: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={`bg-[#2a7a6e] rounded-[30px] p-6 ${className}`}>
      <div className="bg-[#8fd0c6] rounded-t-[30px] -m-6 mb-4 px-6 py-4">
        <h3 className="font-['Source_Code_Pro:Bold',_sans-serif] font-bold text-lg sm:text-xl lg:text-2xl text-black text-center tracking-[2px] sm:tracking-[3.6px]">
          {title}
        </h3>
      </div>
      <div className="text-white font-['Source_Code_Pro:Bold',_sans-serif] font-bold text-sm sm:text-base lg:text-xl xl:text-2xl tracking-[2px] sm:tracking-[3.6px] leading-[1.6] sm:leading-[40px]">
        {children}
      </div>
    </div>
  );

  const EditableField = ({
    label,
    value,
    field,
    type = "text"
  }: {
    label: string;
    value: string | number;
    field: keyof EmployeeData;
    type?: string;
  }) => (
    <div className="mb-2">
      <span className="block sm:inline">{label}: </span>
      {isEditing ? (
        <input
          type={type}
          value={value}
          onChange={(e) => handleInputChange(field, type === 'number' ? Number(e.target.value) : e.target.value)}
          className="bg-transparent border-b border-gray-300 text-white outline-none focus:border-white ml-0 sm:ml-2 mt-1 sm:mt-0 w-full sm:w-auto"
        />
      ) : (
        <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">{value}</span>
      )}
    </div>
  );

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
                {employeeData.name}
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
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">Employee Info</h2>
          <div className="w-full h-px bg-black"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Side - Profile Picture and Name */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <ProfilePic className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64" />
            
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4">
                {employeeData.name}
              </h1>
              
              {/* Edit Controls */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="bg-[#2a7a6e] hover:bg-[#245a50] text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Edit Info
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSave}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Information Cards */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Personal Information Card */}
            <InfoCard title="PERSONAL INFORMATION" className="h-fit">
              <EditableField label="Name" value={editForm.name} field="name" />
              <EditableField label="Age" value={editForm.age} field="age" type="number" />
              <EditableField label="Sex" value={editForm.sex} field="sex" />
              <EditableField label="Address" value={editForm.address} field="address" />
            </InfoCard>

            {/* Employee Information Card */}
            <InfoCard title="EMPLOYEE INFORMATION" className="h-fit">
              <EditableField label="Employee ID" value={editForm.employeeId} field="employeeId" />
              <EditableField label="Position" value={editForm.position} field="position" />
              {editForm.department && (
                <EditableField label="Department" value={editForm.department} field="department" />
              )}
              {editForm.licenseNumber && (
                <EditableField label="License Number" value={editForm.licenseNumber} field="licenseNumber" />
              )}
              {editForm.startDate && (
                <EditableField label="Start Date" value={editForm.startDate} field="startDate" type="date" />
              )}
            </InfoCard>
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