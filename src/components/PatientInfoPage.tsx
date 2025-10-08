import svgPaths from "../imports/svg-a5pr9bwk8e";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface PatientInfoPageProps {
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

export function PatientInfoPage({ currentUser, onBack, onEdit, onLogout, patient }: PatientInfoPageProps) {
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

  const InfoField = ({ label, value }: { label: string; value: string }) => (
    <div className="mb-2">
      <span className="block sm:inline">{label}: </span>
      <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">{value}</span>
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
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">Patient Info</h2>
          <div className="w-full h-px bg-black"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Side - Profile Picture and Name */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <ProfilePic className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64" />
            
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4">
                {patient.firstName} {patient.lastName}
              </h1>
              
              {/* Edit Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={onEdit}
                  className="bg-[#00b7c2] hover:bg-[#009aa5] text-white px-6 py-3 rounded-[50px] transition-colors font-['Source_Code_Pro:Bold',_sans-serif] font-bold text-lg"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Information Cards */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Personal Information Card */}
            <InfoCard title="PERSONAL INFORMATION" className="h-fit">
              <InfoField label="Name" value={`${patient.firstName}, ${patient.lastName}`} />
              <InfoField label="Date of Birth" value={patient.dateOfBirth} />
              <InfoField label="Address" value={patient.address} />
            </InfoCard>

            {/* Patient Information Card */}
            <InfoCard title="PATIENT INFORMATION" className="h-fit">
              <InfoField label="Patient ID" value={patient.patientId} />
              <InfoField label="Contact Number" value={patient.contactNumber} />
              <InfoField label="Email" value={patient.email} />
            </InfoCard>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
        <button
          onClick={onLogout}
          className="flex items-center space-x-2 text-black hover:text-[#2a7a6e] transition-colors bg-white bg-opacity-80 px-3 py-2 rounded-lg hover:bg-opacity-100 shadow-md"
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