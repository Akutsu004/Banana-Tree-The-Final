import svgPaths from "./svg-hpdckt3snh";
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
import { imgIcon, imgIcon1, imgIcon2, imgIcon3, imgIcon4, img } from "./svg-2my02";

interface ChevronDownProps {
  className?: string;
  size?: "20" | "24" | "32" | "40" | "48" | "16";
}

function ChevronDown({ className, size = "48" }: ChevronDownProps) {
  if (size === "16") {
    return (
      <div className={className} data-name="Size=16">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
              <path d="M1 1L5 5L9 1" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "20") {
    return (
      <div className={className} data-name="Size=20">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
    );
  }
  if (size === "24") {
    return (
      <div className={className} data-name="Size=24">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20.83%_-10.42%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgIcon1} />
          </div>
        </div>
      </div>
    );
  }
  if (size === "32") {
    return (
      <div className={className} data-name="Size=32">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-18.75%_-9.38%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgIcon2} />
          </div>
        </div>
      </div>
    );
  }
  if (size === "40") {
    return (
      <div className={className} data-name="Size=40">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-17.5%_-8.75%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgIcon3} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Size=48">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
        <div className="absolute inset-[-16.67%_-8.33%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon4} />
        </div>
      </div>
    </div>
  );
}

interface SelectFieldProps {
  className?: string;
  hasLabel?: boolean;
  hasError?: boolean;
  label?: string;
  error?: string;
  open?: boolean;
  description?: string;
  hasDescription?: boolean;
  value?: string;
  state?: "Default" | "Error" | "Disabled";
  valueType?: "Default" | "Placeholder";
}

function SelectField({ className, hasLabel = true, hasError = true, label = "Label", error = "Error", open = false, description = "Description", hasDescription = false, value = "Value", state = "Default", valueType = "Default" }: SelectFieldProps) {
  if (state === "Default" && valueType === "Placeholder") {
    return (
      <div className={className} data-name="State=Default, Value Type=Placeholder">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">{label}</p>}
        <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          <div className="flex flex-row items-center min-w-inherit size-full">
            <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center min-w-inherit pl-[16px] pr-[12px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">{value}</p>
              <ChevronDown size="16" className="overflow-clip relative shrink-0 size-[16px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Error" && valueType === "Default") {
    return (
      <div className={className} data-name="State=Error, Value Type=Default">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">{label}</p>}
        <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
          <div aria-hidden="true" className="absolute border border-[#900b09] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          <div className="flex flex-row items-center min-w-inherit size-full">
            <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center min-w-inherit pl-[16px] pr-[12px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">{value}</p>
              <ChevronDown size="16" className="overflow-clip relative shrink-0 size-[16px]" />
            </div>
          </div>
        </div>
        {hasError && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#900b09] text-[16px] w-[min-content]">{error}</p>}
      </div>
    );
  }
  if (state === "Error" && valueType === "Placeholder") {
    return (
      <div className={className} data-name="State=Error, Value Type=Placeholder">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">{label}</p>}
        <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
          <div aria-hidden="true" className="absolute border border-[#900b09] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          <div className="flex flex-row items-center min-w-inherit size-full">
            <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center min-w-inherit pl-[16px] pr-[12px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">{value}</p>
              <ChevronDown size="16" className="overflow-clip relative shrink-0 size-[16px]" />
            </div>
          </div>
        </div>
        {hasError && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#900b09] text-[16px] w-[min-content]">{error}</p>}
      </div>
    );
  }
  if (state === "Disabled" && valueType === "Default") {
    return (
      <div className={className} data-name="State=Disabled, Value Type=Default">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#b3b3b3] text-[16px] w-full">{label}</p>}
        <div className="bg-[#d9d9d9] h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
          <div aria-hidden="true" className="absolute border border-[#b2b2b2] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          <div className="flex flex-row items-center min-w-inherit size-full">
            <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center min-w-inherit pl-[16px] pr-[12px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">{value}</p>
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
                  <div className="absolute inset-[-20%_-10%]" style={{ "--stroke-0": "rgba(179, 179, 179, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Disabled" && valueType === "Placeholder") {
    return (
      <div className={className} data-name="State=Disabled, Value Type=Placeholder">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#b3b3b3] text-[16px] w-full">{label}</p>}
        <div className="bg-[#d9d9d9] h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
          <div aria-hidden="true" className="absolute border border-[#b2b2b2] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          <div className="flex flex-row items-center min-w-inherit size-full">
            <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center min-w-inherit pl-[16px] pr-[12px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">{value}</p>
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
                  <div className="absolute inset-[-20%_-10%]" style={{ "--stroke-0": "rgba(179, 179, 179, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="State=Default, Value Type=Default">
      {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">{label}</p>}
      <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
        <div className="flex flex-row items-center min-w-inherit size-full">
          <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center min-w-inherit pl-[16px] pr-[12px] py-[12px] relative w-full">
            <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">{value}</p>
            <ChevronDown size="16" className="overflow-clip relative shrink-0 size-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface InputFieldProps {
  className?: string;
  hasLabel?: boolean;
  hasError?: boolean;
  label?: string;
  error?: string;
  hasDescription?: boolean;
  description?: string;
  value?: string;
  state?: "Disabled" | "Default" | "Error";
  valueType?: "Default" | "Placeholder";
}

function InputField({ className, hasLabel = true, hasError = false, label = "Label", error = "Error", hasDescription = false, description = "Description", value = "Value", state = "Default", valueType = "Default" }: InputFieldProps) {
  if (state === "Default" && valueType === "Placeholder") {
    return (
      <div className={className} data-name="State=Default, Value Type=Placeholder">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">{label}</p>}
        <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
          <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">{value}</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
        </div>
      </div>
    );
  }
  if (state === "Error" && valueType === "Placeholder") {
    return (
      <div className={className} data-name="State=Error, Value Type=Placeholder">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">{label}</p>}
        <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
          <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">{value}</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#900b09] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
        </div>
      </div>
    );
  }
  if (state === "Error" && valueType === "Default") {
    return (
      <div className={className} data-name="State=Error, Value Type=Default">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">{label}</p>}
        <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
          <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">{value}</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#900b09] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
        </div>
      </div>
    );
  }
  if (state === "Disabled" && valueType === "Placeholder") {
    return (
      <div className={className} data-name="State=Disabled, Value Type=Placeholder">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#b3b3b3] text-[16px] w-[min-content]">{label}</p>}
        <div className="bg-[#d9d9d9] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
          <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">{value}</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#b2b2b2] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
        </div>
      </div>
    );
  }
  if (state === "Disabled" && valueType === "Default") {
    return (
      <div className={className} data-name="State=Disabled, Value Type=Default">
        {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#b3b3b3] text-[16px] w-[min-content]">{label}</p>}
        <div className="bg-[#d9d9d9] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
          <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
              <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">{value}</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#b2b2b2] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="State=Default, Value Type=Default">
      {hasLabel && <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">{label}</p>}
      <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div className="flex flex-row items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex items-center min-w-inherit px-[16px] py-[12px] relative w-full">
            <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">{value}</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
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

function EditPatientDentalCharting({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Edit Patient Dental Charting">
      <WebpageBackground className="absolute inset-0" />
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
      <div className="absolute inset-[16.49%_1.46%_83.51%_8.05%]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1236" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Arial:Bold',_sans-serif] inset-[11.66%_1.46%_84.81%_8.05%] leading-[normal] not-italic text-[24px] text-black">Patient Dental Charting</p>
      <SidebarHidden className="absolute bottom-0 left-0 right-[94.14%] top-[9.42%]" />
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[93.52%_95.17%_4.95%_2.56%] leading-[1.3] not-italic text-[10px] text-black text-nowrap whitespace-pre">logout</p>
      <div className="absolute inset-[93.52%_97.66%_4.95%_1.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
          <path d={svgPaths.p4cb50f2} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.08%_1.46%_0.47%_8.05%] rounded-[30px]" data-name="Edit Patient Prescription UI">
        <div className="absolute bg-[#2a7a6e] inset-0 rounded-[30px]" />
        <div className="absolute bg-[#8fd0c6] bottom-[90%] left-0 right-0 rounded-tl-[30px] rounded-tr-[30px] top-0" />
        <div className="absolute bg-[#8fd0c6] bottom-0 left-0 right-0 rounded-bl-[30px] rounded-br-[30px] top-[90%]" />
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[2.5%_7.28%_92.5%_1.62%] leading-[normal] text-[24px] text-black tracking-[3.6px]">Edit Patient Prescription</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[11.43%_38.67%_85.29%_1.7%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Dental Chart ID (optional):</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[24%_66.02%_72.71%_1.7%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Tooth Number:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[24%_1.86%_72.71%_36.89%] leading-[normal] text-[18px] text-black tracking-[2.7px]">Condition:</p>
        <div className="absolute inset-[64.86%_1.86%_18%_1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1196 120">
            <path d={svgPaths.p11580700} fill="var(--fill-0, white)" id="Rectangle 53" />
          </svg>
        </div>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[66.57%_81.96%_30.57%_1.7%] leading-[normal] text-[16px] text-black text-nowrap tracking-[2.4px] whitespace-pre">[Edit Notes Here]</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[36.57%_1.86%_60.57%_1.7%] leading-[normal] text-[16px] text-black tracking-[2.4px]">Surface:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[48.57%_1.86%_48.57%_1.7%] leading-[normal] text-[16px] text-black tracking-[2.4px]">Status Date:</p>
        <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[60%_92.96%_37.14%_1.38%] leading-[normal] text-[16px] text-black text-nowrap tracking-[2.4px] whitespace-pre">Notes:</p>
        <div className="absolute inset-[90.86%_83.98%_0.86%_1.62%] rounded-[50px]" data-name="save draft button">
          <div className="absolute bg-[#00b7c2] inset-0 rounded-[50px]" />
          <p className="absolute font-['Source_Code_Pro:Bold',_sans-serif] font-bold inset-[31.03%_15.73%] leading-[normal] text-[18px] text-center text-white">Save</p>
        </div>
        <InputField hasLabel={false} className="absolute content-stretch flex flex-col gap-[8px] inset-[16.14%_78.96%_77.43%_1.62%] items-start" />
        <InputField hasLabel={false} className="absolute content-stretch flex flex-col gap-[8px] inset-[28.71%_66.02%_64.86%_1.62%] items-start" />
        <InputField hasLabel={false} className="absolute content-stretch flex flex-col gap-[8px] inset-[28.71%_1.86%_64.86%_36.89%] items-start" />
        <InputField hasLabel={false} className="absolute content-stretch flex flex-col gap-[8px] inset-[41.29%_1.78%_52.29%_1.7%] items-start" />
        <SelectField hasLabel={false} value="MM/DD/YYYY" className="absolute content-stretch flex flex-col gap-[8px] inset-[53.29%_78.88%_36.71%_1.7%] items-start" />
      </div>
    </div>
  );
}

export default function EditPatientDentalCharting1() {
  return <EditPatientDentalCharting className="relative size-full" />;
}