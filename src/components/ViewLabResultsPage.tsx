import svgPaths from "../imports/svg-81atb4piwj";

import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface ViewLabResultsPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onEdit: () => void;
  onLogout: () => void;
  record: {
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
  };
}



function Head({ className, currentUser }: { className?: string; currentUser: any }) {
  return (
    <div className={className} data-name="HEAD">
      <div className="absolute bg-[#8fd0c6] inset-0" />
      <p className="absolute font-['Inter:Bold_Italic',_sans-serif] font-bold inset-[26.25%_16.62%_26.25%_16.69%] italic leading-[normal] text-[32px] text-black text-center tracking-[4.8px]">MEDICARE - DENTAL CLINIC</p>
      <div className="absolute inset-[11.25%_1.61%_10%_93.78%] rounded-[100px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgRectangle62} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[56.25%_8.27%_10%_82.8%] leading-[normal] not-italic text-[22px] text-black text-nowrap whitespace-pre">{currentUser?.data?.username || 'Sofia Smith'}</p>
    </div>
  );
}

function WebpageBackground({ className }: { className?: string }) {
  return (
    <div className={className} data-name="webpage background">
      <div className="absolute bg-[#e0e0e0] inset-0" />
    </div>
  );
}

export function ViewLabResultsPage({ currentUser, onBack, onEdit, onLogout, record }: ViewLabResultsPageProps) {
  return (
    <div className="relative size-full" data-name="Lab Results & Patient History">
      <WebpageBackground className="absolute inset-0" />
      <Head className="absolute bottom-[90.58%] left-0 right-0 top-0" currentUser={currentUser} />
      <div className="absolute inset-[6.24%_1.61%_92.11%_97.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p130267c0} fill="var(--fill-0, #2BFF0A)" id="Vector" />
        </svg>
      </div>
      <button 
        onClick={onBack}
        className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[2.59%_91.65%_94.35%_4.83%] leading-[1.3] not-italic text-[20px] text-black text-nowrap whitespace-pre hover:text-[#2a7a6e] transition-colors"
      >
        Back
      </button>
      <button onClick={onBack} className="absolute inset-[3.06%_95.83%_94.35%_1.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
          <path d={svgPaths.p1ee95700} fill="var(--fill-0, #2A7A6E)" id="Vector" />
        </svg>
      </button>
      <div className="absolute inset-[16.49%_1.46%_83.51%_8.05%]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1236" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Arial:Bold',_sans-serif] inset-[11.78%_1.9%_84.69%_8.05%] leading-[normal] not-italic text-[24px] text-black">Lab Results & Patient History</p>

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
      <div className="absolute inset-[18.85%_1.61%_4.48%_7.91%] overflow-clip rounded-[30px]" data-name="patient history">
        <div className="absolute bg-[#8fd0c6] inset-0" />
        <div className="absolute bg-[#2a7a6e] inset-[1.54%_0.48%_1.54%_0.65%] rounded-[30px]" />
        <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold inset-[3.38%_1.54%_88.94%_1.7%] justify-center leading-[0] not-italic text-[48px] text-white tracking-[7.2px]">
          <p className="leading-[24px]">{record.patientName}</p>
        </div>
        <div className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[12.6%_56.31%_65.28%_1.7%] leading-[24px] text-[24px] text-black text-nowrap tracking-[3.6px] whitespace-pre">
          <p className="mb-0">Patient ID: {record.patientId}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Record ID: {record.recordId}</p>
          <p className="mb-0">Personnel ID: {record.personnelId}</p>
          <p className="mb-0">Appointment ID: {record.appointmentId}</p>
          <p className="mb-0">Test Date: {record.testDate}</p>
          <p>Lab Test Type: {record.labTestType}</p>
        </div>
        <div className="absolute bg-white inset-[12.6%_1.54%_46.85%_70.31%]" />
        <div className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[29.19%_6.23%_63.44%_75.08%] leading-[24px] text-[24px] text-black text-center text-nowrap tracking-[3.6px] whitespace-pre">
          <p className="mb-0">Lab Results</p>
          <p className="mb-0">Status: {record.status}</p>
          <p>(Ready for Review)</p>
        </div>
        <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[40.4%_86.97%_55.91%_1.7%] leading-[24px] not-italic text-[30px] text-nowrap text-white tracking-[4.5px] whitespace-pre">Medical Information:</p>
        <div className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[45.78%_60.68%_32.1%_1.7%] leading-[24px] text-[24px] text-black text-nowrap tracking-[3.6px] whitespace-pre">
          <p className="mb-0">Underlying Condition: {record.underlyingCondition}</p>
          <p className="mb-0">Prescription ID: {record.prescriptionId}</p>
          <p className="mb-0">Diagnosis: {record.diagnosis}</p>
          <p className="mb-0">Treatment Plan ID: {record.treatmentPlanId}</p>
          <p className="mb-0">Allergies: {record.allergies}</p>
          <p>Test Results: {record.results}</p>
        </div>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[73.58%_89.81%_22.73%_1.7%] leading-[24px] text-[24px] text-nowrap text-white tracking-[3.6px] whitespace-pre">Notes:</p>
        <div className="absolute bg-white inset-[78.95%_1.54%_5.38%_1.7%] rounded-[8px] p-4">
          <p className="text-black text-[16px] leading-[20px]">{record.notes}</p>
        </div>
        <button 
          onClick={onEdit}
          className="absolute inset-[67.9%_16.91%_23.2%_68.69%] rounded-[50px]" data-name="save draft button"
        >
          <div className="absolute bg-[#00b7c2] hover:bg-[#008a94] transition-colors inset-0 rounded-[50px]" />
          <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[31.03%_15.73%] leading-[normal] text-[18px] text-center text-white">Edit</p>
        </button>
        <button 
          onClick={() => window.print()}
          className="absolute inset-[67.9%_1.54%_23.2%_84.06%] rounded-[50px]" data-name="save draft button"
        >
          <div className="absolute bg-[#00b7c2] hover:bg-[#008a94] transition-colors inset-0 rounded-[50px]" />
          <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[31.03%_15.73%] leading-[normal] text-[18px] text-center text-white">Print</p>
        </button>
      </div>
    </div>
  );
}