import { useState } from 'react';
import svgPaths from "../imports/svg-4okqu69taj";

import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface AddDailyRoundsPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onSave: (formData: any) => void;
  onLogout: () => void;
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

export function AddDailyRoundsPage({ currentUser, onBack, onSave, onLogout }: AddDailyRoundsPageProps) {
  const [formData, setFormData] = useState({
    patientId: '',
    patientName: '',
    appointmentId: '',
    doctorInCharge: '',
    appointmentSchedule: '',
    appointmentTime: '',
    duration: '',
    recordId: '',
    underlyingCondition: '',
    prescriptionId: '',
    diagnosis: '',
    treatmentPlanId: '',
    allergies: '',
    notes: ''
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="relative size-full" data-name="ADD DAILY ROUNDS & PATIENT MONITORING DASHBOARD">
      <WebpageBackground className="absolute inset-0" />
      <div className="absolute inset-[16.49%_1.46%_83.51%_8.05%]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1236" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
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
      <p className="absolute font-['Arial:Bold',_sans-serif] inset-[11.78%_10.25%_84.69%_8.05%] leading-[normal] not-italic text-[24px] text-black">Daily Rounds & Patient Monitoring Dashboard</p>

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
      <div className="absolute inset-[17.08%_1.46%_0.47%_8.05%] rounded-[30px]" data-name="Add Daily Rounds & Patient Monitoring">
        <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
        <div className="absolute bg-[#8fd0c6] bottom-[90%] left-0 right-0 rounded-tl-[30px] rounded-tr-[30px] top-0" />
        <div className="absolute bg-[#8fd0c6] bottom-0 left-0 right-0 rounded-bl-[30px] rounded-br-[30px] top-[90%]" />
        <div className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[2.5%_7.28%_92.5%_1.62%] leading-[normal] text-[24px] text-black tracking-[3.6px]">
          <p className="mb-0">Add Daily Rounds & Patient Monitoring</p>
          <p>&nbsp;</p>
        </div>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[24%_66.34%_72.71%_1.7%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Appointment Schedule:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[24%_52.83%_72.71%_27.75%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Time:</p>
        <div className="absolute inset-[71.43%_1.54%_11.43%_1.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1196 120">
            <path d={svgPaths.p11580700} fill="var(--fill-0, white)" id="Rectangle 53" />
          </svg>
          <textarea
            value={formData.notes}
            onChange={(e) => updateForm('notes', e.target.value)}
            className="absolute inset-[8px] font-['Source_Code_Pro:Bold',_sans-serif] font-bold text-[16px] text-black tracking-[2.4px] bg-transparent border-none outline-none resize-none"
            placeholder="[Add Notes Here]"
          />
        </div>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[24%_40.29%_72.71%_50.08%] leading-[normal] text-[18px] text-black text-nowrap tracking-[2.7px] whitespace-pre">Duration:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[36.86%_76.7%_59.86%_1.62%] leading-[normal] text-[18px] text-black text-nowrap tracking-[2.7px] whitespace-pre">Patient's Record ID:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[67%_92.64%_30.14%_1.7%] leading-[normal] text-[16px] text-black text-nowrap tracking-[2.4px] whitespace-pre">Notes:</p>
        <button 
          onClick={handleSave}
          className="absolute inset-[90.86%_83.98%_0.86%_1.62%] rounded-[50px]" data-name="save draft button"
        >
          <div className="absolute bg-[#00b7c2] hover:bg-[#008a94] transition-colors inset-0 rounded-[50px]" />
          <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[31.03%_15.73%] leading-[normal] text-[18px] text-center text-white">Add</p>
        </button>
        
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[16.14%_78.96%_77.43%_1.62%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <input
                  type="text"
                  value={formData.appointmentId}
                  onChange={(e) => updateForm('appointmentId', e.target.value)}
                  placeholder="Appointment ID"
                  className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#b3b3b3]"
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[16.14%_57.6%_77.43%_22.98%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <input
                  type="text"
                  value={formData.doctorInCharge}
                  onChange={(e) => updateForm('doctorInCharge', e.target.value)}
                  placeholder="Doctor-In-Charge"
                  className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#b3b3b3]"
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[16.14%_36.25%_77.43%_44.34%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <input
                  type="text"
                  value={formData.patientId}
                  onChange={(e) => updateForm('patientId', e.target.value)}
                  placeholder="Patient ID"
                  className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#b3b3b3]"
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[16.14%_14.97%_77.43%_65.61%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <input
                  type="text"
                  value={formData.treatmentPlanId}
                  onChange={(e) => updateForm('treatmentPlanId', e.target.value)}
                  placeholder="Treatment Plan ID"
                  className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#b3b3b3]"
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        
        <div className="absolute bottom-[64.14%] content-stretch flex flex-col gap-[8px] items-start left-1/2 right-[30.58%] top-[29.43%]" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <input
                  type="text"
                  value={formData.appointmentTime}
                  onChange={(e) => updateForm('appointmentTime', e.target.value)}
                  placeholder="Time"
                  className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#b3b3b3]"
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[42.29%_65.94%_51.29%_1.7%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <input
                  type="text"
                  value={formData.recordId}
                  onChange={(e) => updateForm('recordId', e.target.value)}
                  placeholder="Record ID"
                  className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#b3b3b3]"
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[29.43%_52.83%_64.14%_27.75%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => updateForm('duration', e.target.value)}
                  placeholder="Duration"
                  className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#b3b3b3]"
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[11.43%_78.88%_85.29%_1.7%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Appointment ID:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[11.43%_57.6%_85.29%_22.98%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Doctor-In-Charge:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[11.43%_36.25%_85.29%_44.34%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Patient ID:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[11.43%_14.16%_85.29%_65.61%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Treatment Plan ID:</p>
        
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[29.43%_78.96%_64.86%_1.62%] items-start" data-name="Select Field">
          <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
            <div className="flex flex-row items-center min-w-inherit size-full">
              <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center min-w-inherit pl-[16px] pr-[12px] py-[12px] relative w-full">
                <input
                  type="date"
                  value={formData.appointmentSchedule}
                  onChange={(e) => updateForm('appointmentSchedule', e.target.value)}
                  className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px] bg-transparent border-none outline-none w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}