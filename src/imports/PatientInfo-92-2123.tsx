import svgPaths from "./svg-a5pr9bwk8e";
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
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

function ProfilePic({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Profile Pic">
      <div className="absolute aspect-[100/100] bg-white left-0 right-0 top-1/2 translate-y-[-50%]" />
      <div className="absolute h-[100px] left-[10%] right-[10%] top-[150px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 100">
          <path d={svgPaths.p10e8f180} fill="var(--fill-0, black)" id="Union" />
        </svg>
      </div>
      <div className="absolute aspect-[100/100] left-[30%] right-[30%] top-[40px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, black)" id="Ellipse 2" r="50" />
        </svg>
      </div>
    </div>
  );
}

function SidebarHidden({ className }: { className?: string }) {
  return (
    <div className={className} data-name="sidebar hidden">
      <div className="absolute bg-[#2a7a6e] inset-0" />
      <div className="absolute left-[20px] size-[40px] top-[500px]" data-name="vital-signs (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVitalSigns21} />
      </div>
      <div className="absolute left-[20px] size-[40px] top-[380px]" data-name="experiment-results 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgExperimentResults1} />
      </div>
      <div className="absolute aspect-[512/512] left-1/4 right-1/4 top-[80px]" data-name="dashboard (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDashboard11} />
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
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgList1} />
      </div>
      <div className="absolute left-[20px] size-[40px] top-[440px]" data-name="multi-agent-system (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMultiAgentSystem11} />
      </div>
      <div className="absolute left-[20px] size-[40px] top-[560px]" data-name="patient">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatient} />
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

function PatientInfo({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Patient Info">
      <WebpageBackground className="absolute h-[849px] left-0 top-0 w-[1366px]" />
      <Head className="absolute bottom-[90.58%] left-0 right-0 top-0" />
      <div className="absolute inset-[6.24%_1.61%_92.11%_97.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p130267c0} fill="var(--fill-0, #2BFF0A)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.49%_1.46%_83.51%_8.05%]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1236" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[11.78%_10.25%_84.69%_8.05%] leading-[normal] not-italic text-[24px] text-black tracking-[3.6px]">Patient Info</p>
      <SidebarHidden className="absolute bottom-0 left-0 right-[94.22%] top-[9.42%]" />
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[93.52%_95.17%_4.95%_2.56%] leading-[1.3] not-italic text-[10px] text-black text-nowrap whitespace-pre">logout</p>
      <div className="absolute inset-[93.52%_97.66%_4.95%_1.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
          <path d={svgPaths.p4cb50f2} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <ProfilePic className="absolute aspect-[250/250] left-[8.05%] right-[73.65%] top-[calc(50%-149.5px)] translate-y-[-50%]" />
      <p className="absolute font-['Arial:Bold',_sans-serif] inset-[17.67%_46.71%_75.85%_27.67%] leading-[normal] not-italic text-[48px] text-black text-nowrap whitespace-pre">John Dela Cruz</p>
      <div className="absolute bg-[forestgreen] inset-[49.47%_49.63%_3.42%_8.27%] rounded-[30px]" data-name="Component 2">
        <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
        <div className="absolute bg-[#8fd0c6] bottom-[85.5%] left-0 right-0 rounded-tl-[30px] rounded-tr-[30px] top-0" />
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[2.25%_15.48%_87.75%_15.48%] leading-[40px] text-[24px] text-black text-center tracking-[3.6px]">PERSONAL INFORMATION</p>
        <div className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[17.75%_2.09%_3%_2.44%] leading-[30px] text-[18px] text-black tracking-[2.7px]">
          <p className="mb-0">Name: [FName, LName]</p>
          <p className="mb-0">Date of Birth: 12/30/2000</p>
          <p>Address:</p>
        </div>
      </div>
      <div className="absolute bg-[forestgreen] inset-[49.47%_1.46%_3.42%_56.44%] rounded-[30px]" data-name="information box">
        <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
        <div className="absolute bg-[#8fd0c6] bottom-[85.5%] left-0 right-0 rounded-tl-[30px] rounded-tr-[30px] top-0" />
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[2.25%_15.48%_87.75%_15.48%] leading-[40px] text-[24px] text-black text-center tracking-[3.6px]">PATIENT INFORMATION</p>
        <div className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[17.75%_2.09%_3%_2.44%] leading-[30px] text-[18px] text-black tracking-[2.7px]">
          <p className="mb-0">Patient ID: P-0003</p>
          <p className="mb-0">Primary Number:</p>
          <p className="mb-0">Secondary Number:</p>
          <p>Email: abc@gmail.com</p>
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.3] left-[66px] not-italic text-[20px] text-black text-nowrap top-[22px] whitespace-pre">Back</p>
      <div className="absolute left-[40px] size-[16px] top-[48px]" data-name="ion:play-back-sharp" />
      <div className="absolute inset-[3.06%_95.83%_94.35%_1.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
          <path d={svgPaths.p1ee95700} fill="var(--fill-0, #2A7A6E)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18.85%_1.46%_74.32%_85.5%] rounded-[50px]" data-name="save draft button">
        <div className="absolute bg-[#00b7c2] inset-0 rounded-[50px]" />
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[31.03%_15.73%] leading-[normal] text-[18px] text-center text-white">Edit</p>
      </div>
    </div>
  );
}

export default function PatientInfo1() {
  return <PatientInfo className="relative size-full" />;
}