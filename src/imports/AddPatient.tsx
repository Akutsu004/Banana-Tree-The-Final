import svgPaths from "./svg-cnrloed955";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";
import imgInfo1 from "figma:asset/8a429c8ceef6cb44f2be6652b8837246507ab528.png";
import imgList1 from "figma:asset/895ab3cb750bb969d743dd367f141b1eb652e89f.png";
import imgPatient from "figma:asset/54876f29d7d2448648833f0ded884967d53e60ce.png";
import imgDashboard11 from "figma:asset/4d09bee6bfa0c32612bff38a59758df3d7138ef9.png";
import imgPay1 from "figma:asset/8a281fec3cb0dee8d34cd4d38c21b28a7ddd416b.png";
import imgCorporate1 from "figma:asset/c122566bf5438aa36164f6abc0f214b09077ac1b.png";
import imgWorking1 from "figma:asset/08e91bf257c141d0d9b19cc1292fb6bd6075e27e.png";
import imgLeave1 from "figma:asset/fb4a9c0da8d6efdbaa97235f0177fde5053d94e2.png";

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

function SidebarAdminHidden({ className }: { className?: string }) {
  return (
    <div className={className} data-name="sidebar admin hidden">
      <div className="absolute bg-[#2a7a6e] inset-0" />
      <div className="absolute left-[20px] size-[40px] top-[140px]" data-name="info 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInfo1} />
      </div>
      <div className="absolute left-[20px] size-[40px] top-[20px]" data-name="list 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgList1} />
      </div>
      <div className="absolute left-[20px] size-[40px] top-[200px]" data-name="patient">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatient} />
      </div>
      <div className="absolute aspect-[512/512] left-1/4 right-1/4 top-[80px]" data-name="dashboard (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDashboard11} />
      </div>
      <div className="absolute left-[20px] size-[40px] top-[260px]" data-name="pay(1)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPay1} />
      </div>
      <div className="absolute left-[20px] size-[40px] top-[320px]" data-name="corporate 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCorporate1} />
      </div>
      <div className="absolute left-[20px] size-[40px] top-[380px]" data-name="working 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWorking1} />
      </div>
      <div className="absolute left-[20px] size-[40px] top-[440px]" data-name="leave 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLeave1} />
      </div>
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

function AddPatient({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Add Patient">
      <WebpageBackground className="absolute inset-0" />
      <SidebarAdminHidden className="absolute bottom-0 left-0 right-[94.14%] top-[9.42%]" />
      <Head className="absolute bottom-[90.58%] left-0 right-0 top-0" />
      <div className="absolute inset-[6.24%_1.61%_92.11%_97.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p130267c0} fill="var(--fill-0, #2BFF0A)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[2.59%_91.65%_94.35%_4.83%] leading-[1.3] not-italic text-[20px] text-black text-nowrap whitespace-pre">Back</p>
      <div className="absolute inset-[3.06%_95.83%_94.35%_1.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
          <path d={svgPaths.p1ee95700} fill="var(--fill-0, #2A7A6E)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[11.78%_10.25%_84.69%_8.05%] leading-[normal] not-italic text-[24px] text-black tracking-[3.6px]">Patient List</p>
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[93.52%_95.17%_4.95%_2.56%] leading-[1.3] not-italic text-[10px] text-black text-nowrap whitespace-pre">logout</p>
      <div className="absolute inset-[93.52%_97.66%_4.95%_1.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
          <path d={svgPaths.p4cb50f2} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.49%_1.46%_83.51%_8.05%]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1236" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.08%_1.46%_0.47%_8.05%] rounded-[30px]" data-name="Add Patient UI">
        <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
        <div className="absolute bg-[#8fd0c6] bottom-[90%] left-0 right-0 rounded-tl-[30px] rounded-tr-[30px] top-0" />
        <div className="absolute bg-[#8fd0c6] bottom-0 left-0 right-0 rounded-bl-[30px] rounded-br-[30px] top-[90%]" />
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[2.5%_7.28%_92.5%_1.62%] leading-[normal] text-[24px] text-black tracking-[3.6px]">Add Patient</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[37.71%_72.49%_59%_1.62%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Last Name:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[76.71%_72.49%_20%_1.62%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Address:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[24.86%_86.57%_71.86%_1.62%] leading-[normal] text-[18px] text-black text-nowrap tracking-[2.7px] whitespace-pre">First Name:</p>
        <div className="absolute inset-[90.86%_83.98%_0.86%_1.62%] rounded-[50px]" data-name="save draft button">
          <div className="absolute bg-[#00b7c2] inset-0 rounded-[50px]" />
          <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[31.03%_15.73%] leading-[normal] text-[18px] text-center text-white">Add</p>
        </div>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[63.43%_62.22%_33.29%_1.38%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Email:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[12%_79.21%_84.71%_1.38%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Patient ID:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[51.43%_57.04%_45.29%_23.54%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Primary Number:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[51.43%_78.96%_45.29%_1.62%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Date of Birth:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[51.43%_35.19%_45.29%_45.39%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Secondary Number:</p>
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[56.14%_57.2%_38.14%_23.38%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Value</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[30.14%_1.29%_64.14%_1.38%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Value</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[68.86%_1.29%_25.43%_1.29%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Value</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[82.14%_1.21%_12.14%_1.38%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Value</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[43%_1.29%_51.29%_1.38%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Value</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[56.14%_35.19%_38.14%_45.39%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Value</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[17.29%_79.21%_77%_1.38%] items-start" data-name="Input Field">
          <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
                <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Value</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] inset-[56.14%_79.21%_38.14%_1.38%] items-start" data-name="Select Field">
          <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
            <div className="flex flex-row items-center min-w-inherit size-full">
              <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center min-w-inherit pl-[16px] pr-[12px] py-[12px] relative w-full">
                <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">MM/DD/YYYY</p>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
                  <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
                    <div className="absolute inset-[-20%_-10%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                        <path d="M1 1L5 5L9 1" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AddPatient1() {
  return <AddPatient className="relative size-full" />;
}