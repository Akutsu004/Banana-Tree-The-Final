import svgPaths from "./svg-810mbz6n7g";
import imgPatient from "figma:asset/54876f29d7d2448648833f0ded884967d53e60ce.png";
import imgVitalSigns21 from "figma:asset/44b4baf1b77716433605deebefe78561633c9dd5.png";
import imgMultiAgentSystem11 from "figma:asset/b5bdc0bca85a20ca93e01dc956f98a8e2975f360.png";
import imgExperimentResults1 from "figma:asset/33823922dddacff3e43beed20b5a0dbd30c82cfa.png";
import imgDentalTreatment1 from "figma:asset/8ba03e4cd1254caaad70bd3d0ee583046a420e3c.png";
import imgPrescription1 from "figma:asset/59fa633d9a05b98f8f1565a899fd2021e68efbf8.png";
import imgChart1 from "figma:asset/7d04115f16b591b3f1f302f1dedd740d7cea4b23.png";
import imgInfo1 from "figma:asset/8a429c8ceef6cb44f2be6652b8837246507ab528.png";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";
import img from "figma:asset/895ab3cb750bb969d743dd367f141b1eb652e89f.png";
import imgDashboard11 from "figma:asset/4d09bee6bfa0c32612bff38a59758df3d7138ef9.png";

function PatientListButton({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Patient List Button">
      <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
      <div className="absolute left-[100px] opacity-50 size-[160px] top-[40px]" data-name="patient">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatient} />
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_79.58%_5.56%] leading-[normal] not-italic text-[28px] text-white tracking-[4.2px]">Patient List</p>
    </div>
  );
}

function DailyRoundsPatientMonitoringDashboardButton({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Daily Rounds & Patient Monitoring Dashboard Button">
      <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
      <div className="absolute left-[100px] size-[160px] top-[40px]" data-name="vital-signs (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgVitalSigns21} />
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_37.08%_5.56%] leading-[normal] not-italic text-[28px] text-white tracking-[4.2px]">Daily Rounds & Patient Monitoring Dashboard</p>
    </div>
  );
}

function ReferralSystemButton({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Referral System Button">
      <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
      <div className="absolute left-[100px] size-[160px] top-[40px]" data-name="multi-agent-system (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgMultiAgentSystem11} />
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_79.58%_5.56%] leading-[normal] not-italic text-[28px] text-white tracking-[4.2px]">Referral System</p>
    </div>
  );
}

function LabResultsPatientHistoryButton({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Lab Results & Patient History Button">
      <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
      <div className="absolute left-[100px] size-[160px] top-[40px]" data-name="experiment-results 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgExperimentResults1} />
      </div>
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_65.42%_5.56%] leading-[normal] not-italic text-[28px] text-white tracking-[4.2px]">
        <p className="mb-0">Lab Results &</p>
        <p>Patient History</p>
      </div>
    </div>
  );
}

function TreatmentPlanManagementButton({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Treatment Plan Management Button">
      <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
      <div className="absolute left-[100px] size-[160px] top-[40px]" data-name="dental-treatment 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgDentalTreatment1} />
      </div>
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_65.42%_5.56%] leading-[normal] not-italic text-[28px] text-white tracking-[4.2px]">
        <p className="mb-0">Treatment Plan</p>
        <p>Management</p>
      </div>
    </div>
  );
}

function PrescriptionButton({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Prescription Button">
      <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
      <div className="absolute aspect-[512/512] left-[27.78%] right-[27.78%] top-[40px]" data-name="prescription 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgPrescription1} />
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_79.58%_5.56%] leading-[normal] not-italic text-[28px] text-white tracking-[4.2px]">Prescriptions</p>
    </div>
  );
}

function PatientChartingButton({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Patient Charting Button">
      <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
      <div className="absolute left-[100px] size-[160px] top-[40px]" data-name="chart (1)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgChart1} />
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_79.58%_5.56%] leading-[normal] not-italic text-[28px] text-white tracking-[4.2px]">Patient Charting</p>
    </div>
  );
}

function Line({ className }: { className?: string }) {
  return <div className={className} data-name="line" />;
}

function DashboardButtons({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Dashboard buttons">
      <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
      <div className="absolute aspect-[512/512] left-[27.78%] right-[27.78%] top-[40px]" data-name="info 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgInfo1} />
      </div>
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[6.25%_5.83%_65.42%_5.56%] leading-[normal] not-italic text-[28px] text-white tracking-[4.2px]">
        <p className="mb-0">Employee</p>
        <p>Info</p>
      </div>
    </div>
  );
}

function Head({ className }: { className?: string }) {
  return (
    <div className={className} data-name="HEAD">
      <div className="absolute bg-[#8fd0c6] inset-0" />
      <p className="absolute font-['Inter:Bold_Italic',_sans-serif] font-bold inset-[26.25%_16.62%_26.25%_16.69%] italic leading-[normal] text-[32px] text-black text-center tracking-[4.8px]">MEDICARE - DENTAL CLINIC</p>
      <div className="absolute inset-[11.25%_1.61%_10%_93.78%] rounded-[100px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgRectangle62} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[56.25%_8.27%_10%_82.8%] leading-[normal] not-italic text-[22px] text-black text-nowrap whitespace-pre">Sofia Smith</p>
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

function Dashboard({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Dashboard">
      <WebpageBackground className="absolute inset-0" />
      <p className="absolute font-['Arial:Bold',_sans-serif] inset-[11.78%_82.72%_84.69%_8.05%] leading-[normal] not-italic text-[24px] text-black">Dashboard</p>
      <div className="absolute inset-[16.49%_1.46%_83.51%_8.05%]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1236" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Head className="absolute bottom-[90.58%] left-0 right-0 top-0" />
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[2.59%_91.65%_94.35%_4.83%] leading-[1.3] not-italic text-[20px] text-black text-nowrap whitespace-pre">Back</p>
      <div className="absolute inset-[3.06%_95.83%_94.35%_1.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
          <path d={svgPaths.p1ee95700} fill="var(--fill-0, #2A7A6E)" id="Vector" />
        </svg>
      </div>
      <DashboardButtons className="absolute inset-[18.61%_65.81%_53.12%_7.83%] rounded-[30px]" />
      <Line className="absolute inset-[10.6%_0.37%_25.68%_99.63%]" />
      <PatientChartingButton className="absolute inset-[18.61%_33.6%_53.12%_40.04%] rounded-[30px]" />
      <div className="absolute bottom-0 left-0 right-[94.14%] top-[9.42%]" data-name="sidebar hidden">
        <div className="absolute bg-[#2a7a6e] inset-0" />
        <div className="absolute left-[20px] size-[40px] top-[500px]" data-name="vital-signs (2) 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVitalSigns21} />
        </div>
        <div className="absolute left-[20px] size-[40px] top-[380px]" data-name="experiment-results 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgExperimentResults1} />
        </div>
        <div className="absolute left-[20px] size-[40px] top-[140px]" data-name="info 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInfo1} />
        </div>
        <div className="absolute left-[20px] size-[40px] top-[200px]" data-name="chart (1)">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChart1} />
        </div>
        <div className="absolute left-[20px] size-[40px] top-[260px]" data-name="prescription 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrescription1} />
        </div>
        <div className="absolute left-[20px] size-[40px] top-[320px]" data-name="dental-treatment 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDentalTreatment1} />
        </div>
        <div className="absolute left-[20px] size-[40px] top-[20px]" data-name="list 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute left-[20px] size-[40px] top-[440px]" data-name="multi-agent-system (1) 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMultiAgentSystem11} />
        </div>
        <div className="absolute left-[20px] size-[40px] top-[560px]" data-name="patient">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatient} />
        </div>
      </div>
      <div className="absolute aspect-[512/512] left-[1.46%] right-[95.61%] top-[160px]" data-name="dashboard (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDashboard11} />
      </div>
      <PrescriptionButton className="absolute inset-[18.61%_1.46%_53.12%_72.18%] rounded-[30px]" />
      <TreatmentPlanManagementButton className="absolute inset-[49%_65.89%_22.73%_7.76%] rounded-[30px]" />
      <LabResultsPatientHistoryButton className="absolute inset-[49%_33.6%_22.73%_40.04%] rounded-[30px]" />
      <ReferralSystemButton className="absolute inset-[49%_1.46%_22.73%_72.18%] rounded-[30px]" />
      <DailyRoundsPatientMonitoringDashboardButton className="absolute inset-[79.39%_65.96%_-7.66%_7.69%] rounded-[30px]" />
      <div className="absolute inset-[93.52%_97.66%_4.95%_1.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
          <path d={svgPaths.p4cb50f2} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[93.52%_95.17%_4.95%_2.56%] leading-[1.3] not-italic text-[10px] text-black text-nowrap whitespace-pre">logout</p>
      <div className="absolute inset-[6.24%_1.61%_92.11%_97.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p130267c0} fill="var(--fill-0, #2BFF0A)" id="Vector" />
        </svg>
      </div>
      <PatientListButton className="absolute inset-[79.39%_33.53%_-7.66%_40.12%] rounded-[30px]" />
    </div>
  );
}

export default function Dashboard1() {
  return <Dashboard className="relative size-full" />;
}