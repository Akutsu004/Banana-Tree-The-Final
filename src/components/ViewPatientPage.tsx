import svgPaths from "../imports/svg-rfrg55ma50";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface ViewPatientPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onEdit: () => void;
  onLogout: () => void;
  patient: {
    id: string;
    patientId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    contactNumber: string;
    email: string;
    address: string;
    status: string;
  };
}

export function ViewPatientPage({ currentUser, onBack, onEdit, onLogout, patient }: ViewPatientPageProps) {
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
          <div className="relative px-4 md:px-8 py-4 md:py-6 flex-shrink-0">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4">View Patient Details</h2>
            <div className="w-full h-px bg-black"></div>
          </div>

          {/* Patient Details Content */}
          <div className="relative px-4 md:px-8 pb-20 flex-1 min-h-0">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 max-h-full overflow-y-auto">
              {/* Patient Header */}
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-200">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                    {patient.firstName} {patient.lastName}
                  </h3>
                  <p className="text-sm text-gray-600 font-mono">Patient ID: {patient.patientId}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(patient.status)}`}>
                    {patient.status}
                  </span>
                  <button
                    onClick={onEdit}
                    className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M8 1L15 8L8 15L1 8L8 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm font-medium">Edit Patient</span>
                  </button>
                </div>
              </div>

              {/* Patient Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#2a7a6e] mb-3">Personal Information</h4>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <p className="text-base text-black font-mono">{patient.firstName}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <p className="text-base text-black font-mono">{patient.lastName}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <p className="text-base text-black font-mono">{patient.dateOfBirth}</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#2a7a6e] mb-3">Contact Information</h4>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Conctact Number</label>
                    <p className="text-base text-black font-mono">{patient.contactNumber}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <a 
                      href={`mailto:${patient.email}`}
                      className="text-base text-blue-600 hover:text-blue-800 font-mono underline"
                    >
                      {patient.email}
                    </a>
                  </div>
                </div>

                {/* Address Information */}
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-lg font-semibold text-[#2a7a6e] mb-3">Address Information</h4>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                    <p className="text-base text-black font-mono">{patient.address}</p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-lg font-semibold text-[#2a7a6e] mb-3">Additional Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Patient ID</label>
                      <p className="text-base text-black font-mono">{patient.patientId}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <span className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(patient.status)}`}>
                        {patient.status}
                      </span>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Registration Date</label>
                      <p className="text-base text-black font-mono">01/01/2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={onBack}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Back to List
                </button>
                <button
                  onClick={onEdit}
                  className="bg-[#00b7c2] hover:bg-[#008a94] text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Edit Patient
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