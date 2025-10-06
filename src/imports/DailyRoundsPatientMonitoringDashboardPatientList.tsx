import svgPaths from "./svg-ic5pj60tb6";
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
import img1 from "figma:asset/7451b7f2fd95436539b2ac612e4165ef7b7e56b4.png";
import img2 from "figma:asset/7eba8c763ae587215d4084700bb97a8f6f6dd2d4.png";
import img3 from "figma:asset/aabae4af26fe43508af34f76bd55ac2f34cf9e65.png";
import { imgRipple, img } from "./svg-ijcy2";

interface SearchBarProps {
  className?: string;
  show2ndTrailingIcon?: boolean;
  show1stTrailingIcon?: boolean;
  placeholderText?: string;
  showLeadingIcon?: boolean;
  state?: "Enabled" | "Hovered" | "Pressed";
  showAvatar?: "False" | "True";
}

function SearchBar({ className, show2ndTrailingIcon = false, show1stTrailingIcon = true, placeholderText = "Hinted search text", showLeadingIcon = true, state = "Enabled", showAvatar = "False" }: SearchBarProps) {
  if (state === "Pressed" && showAvatar === "True") {
    return (
      <div className={className} data-name="State=Pressed, Show avatar=True">
        <div className="basis-0 bg-[rgba(29,27,32,0.08)] grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex items-center pl-[4px] pr-[20px] py-[4px] relative size-full">
              <div className="absolute bottom-[-45px] flex h-[125px] items-center justify-center left-0 w-[178px]">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="h-[125px] relative w-[178px]" data-name="Ripple">
                    <img alt="" className="block max-w-none size-full" src={imgRipple} />
                  </div>
                </div>
              </div>
              {showLeadingIcon && (
                <div className="box-border content-stretch flex items-center justify-center mr-[-16px] relative shrink-0 size-[48px]" data-name="Leading-icon">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                            <path d={svgPaths.p2304a600} fill="var(--fill-0, #49454F)" id="icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="basis-0 grow h-full min-h-px min-w-px mr-[-16px] relative shrink-0" data-name="Content">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-0 relative size-full">
                    <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-end right-[4px] top-1/2 translate-y-[-50%]" data-name="Trailing-Elements">
                {show1stTrailingIcon && (
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="1st trailing-icon">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                          <div className="absolute inset-[12.5%]" data-name="icon">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={svgPaths.p16b4a380} fill="var(--fill-0, #49454F)" id="icon" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center pl-[8px] pr-[12px] py-0 relative shrink-0" data-name="Avatar-target">
                  <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Avatar">
                    <div className="absolute inset-0" data-name="Background">
                      <img alt="" className="block max-w-none size-full" src={img} />
                    </div>
                    <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[16px] text-center text-white top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">A</p>
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
  if (state === "Hovered" && showAvatar === "True") {
    return (
      <div className={className} data-name="State=Hovered, Show avatar=True">
        <div className="basis-0 bg-[rgba(29,27,32,0.08)] grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex items-center pl-[4px] pr-[20px] py-[4px] relative size-full">
              {showLeadingIcon && (
                <div className="box-border content-stretch flex items-center justify-center mr-[-16px] relative shrink-0 size-[48px]" data-name="Leading-icon">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                            <path d={svgPaths.p2304a600} fill="var(--fill-0, #49454F)" id="icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="basis-0 cursor-pointer grow h-full min-h-px min-w-px mr-[-16px] relative shrink-0" data-name="Content">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-0 relative size-full">
                    <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-end right-[4px] top-1/2 translate-y-[-50%]" data-name="Trailing-Elements">
                {show1stTrailingIcon && (
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="1st trailing-icon">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                          <div className="absolute inset-[12.5%]" data-name="icon">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={svgPaths.p16b4a380} fill="var(--fill-0, #49454F)" id="icon" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center pl-[8px] pr-[12px] py-0 relative shrink-0" data-name="Avatar-target">
                  <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Avatar">
                    <div className="absolute inset-0" data-name="Background">
                      <img alt="" className="block max-w-none size-full" src={img} />
                    </div>
                    <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[16px] text-center text-white top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">A</p>
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
  if (state === "Enabled" && showAvatar === "True") {
    return (
      <div className={className} data-name="State=Enabled, Show avatar=True">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex items-center pl-[4px] pr-[20px] py-[4px] relative size-full">
              {showLeadingIcon && (
                <div className="box-border content-stretch flex items-center justify-center mr-[-16px] relative shrink-0 size-[48px]" data-name="Leading-icon">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                            <path d={svgPaths.p2304a600} fill="var(--fill-0, #49454F)" id="icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="basis-0 cursor-pointer grow h-full min-h-px min-w-px mr-[-16px] relative shrink-0" data-name="Content">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-0 relative size-full">
                    <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-end right-[4px] top-1/2 translate-y-[-50%]" data-name="Trailing-Elements">
                {show1stTrailingIcon && (
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="1st trailing-icon">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                          <div className="absolute inset-[12.5%]" data-name="icon">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={svgPaths.p16b4a380} fill="var(--fill-0, #49454F)" id="icon" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center pl-[8px] pr-[12px] py-0 relative shrink-0" data-name="Avatar-target">
                  <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Avatar">
                    <div className="absolute inset-0" data-name="Background">
                      <img alt="" className="block max-w-none size-full" src={img} />
                    </div>
                    <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[16px] text-center text-white top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">A</p>
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
  if (state === "Pressed" && showAvatar === "False") {
    return (
      <div className={className} data-name="State=Pressed, Show avatar=False">
        <div className="basis-0 bg-[rgba(29,27,32,0.08)] grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex items-center pl-[4px] pr-[20px] py-[4px] relative size-full">
              <div className="absolute bottom-[-45px] flex h-[125px] items-center justify-center left-0 w-[178px]">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="h-[125px] relative w-[178px]" data-name="Ripple">
                    <img alt="" className="block max-w-none size-full" src={imgRipple} />
                  </div>
                </div>
              </div>
              {showLeadingIcon && (
                <div className="box-border content-stretch flex items-center justify-center mr-[-16px] relative shrink-0 size-[48px]" data-name="Leading-icon">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                            <path d={svgPaths.p2304a600} fill="var(--fill-0, #49454F)" id="icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="basis-0 grow h-full min-h-px min-w-px mr-[-16px] relative shrink-0" data-name="Content">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-0 relative size-full">
                    <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-end right-[4px] top-1/2 translate-y-[-50%]" data-name="Trailing-Elements">
                {show1stTrailingIcon && (
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="1st trailing-icon">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                          <div className="absolute inset-[12.5%]" data-name="icon">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={svgPaths.p16b4a380} fill="var(--fill-0, #49454F)" id="icon" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Hovered" && showAvatar === "False") {
    return (
      <div className={className} data-name="State=Hovered, Show avatar=False">
        <div className="basis-0 bg-[rgba(29,27,32,0.08)] grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex items-center pl-[4px] pr-[20px] py-[4px] relative size-full">
              {showLeadingIcon && (
                <div className="box-border content-stretch flex items-center justify-center mr-[-16px] relative shrink-0 size-[48px]" data-name="Leading-icon">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                            <path d={svgPaths.p2304a600} fill="var(--fill-0, #49454F)" id="icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="basis-0 grow h-full min-h-px min-w-px mr-[-16px] relative shrink-0" data-name="Content">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-0 relative size-full">
                    <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-end right-[4px] top-1/2 translate-y-[-50%]" data-name="Trailing-Elements">
                {show1stTrailingIcon && (
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="1st trailing-icon">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                          <div className="absolute inset-[12.5%]" data-name="icon">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={svgPaths.p16b4a380} fill="var(--fill-0, #49454F)" id="icon" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="State=Enabled, Show avatar=False">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center pl-[4px] pr-[20px] py-[4px] relative size-full">
            {showLeadingIcon && (
              <div className="box-border content-stretch flex items-center justify-center mr-[-16px] relative shrink-0 size-[48px]" data-name="Leading-icon">
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                  <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                          <path d={svgPaths.p2304a600} fill="var(--fill-0, #49454F)" id="icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="basis-0 cursor-pointer grow h-full min-h-px min-w-px mr-[-16px] relative shrink-0" data-name="Content">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-0 relative size-full">
                  <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex items-center justify-end right-[4px] top-1/2 translate-y-[-50%]" data-name="Trailing-Elements">
              {show1stTrailingIcon && (
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="1st trailing-icon">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                        <div className="absolute inset-[12.5%]" data-name="icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #49454F)" id="icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
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

function DailyRoundsPatientMonitoringDashboardPatientList({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Daily Rounds & Patient Monitoring Dashboard (Patient List)">
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
      <p className="absolute font-['Arial:Bold',_sans-serif] inset-[11.78%_1.9%_84.69%_8.05%] leading-[normal] not-italic text-[24px] text-black">Daily Rounds & Patient Monitoring Dashboard (Patient List)</p>
      <SidebarHidden className="absolute bottom-0 left-0 right-[94.22%] top-[9.42%]" />
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold inset-[93.52%_95.17%_4.95%_2.56%] leading-[1.3] not-italic text-[10px] text-black text-nowrap whitespace-pre">logout</p>
      <div className="absolute inset-[93.52%_97.66%_4.95%_1.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
          <path d={svgPaths.p4cb50f2} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <SearchBar placeholderText="Search Patient" className="absolute bg-[#ece6f0] content-stretch flex gap-[4px] inset-[18.14%_58.05%_78.33%_8.05%] items-center max-w-[720px] overflow-clip rounded-[28px]" />
      <div className="absolute inset-[24.03%_1.46%_2.94%_8.05%]" data-name="APPOINTMENT TABLE">
        <div className="absolute bottom-[93.55%] left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 40">
            <path d="M0 0H1236V40H0V0Z" fill="var(--fill-0, #2A7A6E)" id="Rectangle 11" />
          </svg>
        </div>
        <div className="absolute bottom-[93.55%] left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 40">
            <path d="M0 0H1236V40H0V0Z" fill="var(--fill-0, #2A7A6E)" id="Rectangle 11" />
          </svg>
        </div>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[1.13%_61.16%_94.84%_29.13%] leading-[normal] text-[10px] text-center text-white tracking-[1.5px]">Treatment Plan ID</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[1.13%_36.89%_94.84%_53.4%] leading-[normal] text-[10px] text-center text-white tracking-[1.5px]">Duration (Minutes)</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[2.1%_12.62%_95.97%_63.11%] leading-[normal] text-[10px] text-center text-white tracking-[1.5px]">Notes</p>
        <p className="absolute bottom-[95.97%] font-['Source_Code_Pro:Regular',_sans-serif] font-normal leading-[normal] left-0 right-[90.29%] text-[10px] text-center text-white top-[2.1%] tracking-[1.5px]">Appointment ID</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[2.1%_80.58%_95.97%_9.71%] leading-[normal] text-[10px] text-center text-white tracking-[1.5px]">Personnel ID</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[2.1%_70.87%_95.97%_19.42%] leading-[normal] text-[10px] text-center text-white tracking-[1.5px]">Patient ID</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[2.1%_46.6%_95.97%_38.84%] leading-[normal] text-[10px] text-center text-white tracking-[1.5px]">Appointment Schedule</p>
        <div className="absolute bg-white bottom-0 left-0 right-0 top-[6.45%]" />
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[7.42%_36.89%_90.16%_53.4%] leading-[normal] text-[12px] text-black text-center">60</p>
        <div className="absolute bottom-0 flex items-center justify-center left-[19.42%] right-[80.58%] top-0">
          <div className="flex-none">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" x2="620" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-full left-0 right-0 top-0">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 1">
              <line id="Line 16" stroke="var(--stroke-0, black)" x2="1236" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[9.71%] right-[90.29%] top-0">
          <div className="flex-none">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" x2="620" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-0 right-full top-0">
          <div className="flex-none">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" x2="620" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-full right-0 top-0">
          <div className="flex-none">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" x2="620" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[87.38%] right-[12.62%] top-0">
          <div className="flex-none">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" x2="620" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[53.4%] right-[46.6%] top-0">
          <div className="flex-none">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" x2="620" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[63.11%] right-[36.89%] top-0">
          <div className="flex-none">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" x2="620" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[38.84%] right-[61.16%] top-0">
          <div className="flex-none">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" x2="620" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1236 1">
              <line id="Line 16" stroke="var(--stroke-0, black)" x2="1236" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[29.13%] right-[70.87%] top-0">
          <div className="flex-none">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" x2="620" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[7.42%_93.12%_90.16%_2.75%] leading-[normal] text-[12px] text-black text-center text-nowrap whitespace-pre">9000004</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[7.42%_80.58%_90.16%_9.71%] leading-[normal] text-[12px] text-black text-center">1002</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[7.42%_46.6%_90.16%_38.84%] leading-[normal] text-[12px] text-black text-center">10/02/2025 - 4:00PM</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[7.42%_12.62%_90.16%_63.11%] leading-[normal] text-[12px] text-black text-center">asdf</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[7.42%_70.87%_90.16%_19.42%] leading-[normal] text-[12px] text-black text-center">2000004</p>
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal inset-[7.42%_61.16%_90.16%_29.13%] leading-[normal] text-[12px] text-black text-center">3000004</p>
        <p className="absolute bottom-[95.97%] font-['Source_Code_Pro:Regular',_sans-serif] font-normal leading-[normal] left-[87.38%] right-0 text-[10px] text-center text-white top-[2.1%] tracking-[1.5px]">Action</p>
        <div className="absolute inset-[7.42%_2.67%_87.74%_90.05%]" data-name="Action Buttons">
          <div className="absolute bottom-0 left-[33.33%] right-[33.33%] top-0" data-name="Edit Button">
            <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="View">
              <div className="absolute bg-[#00b7c2] inset-0" />
            </div>
            <div className="absolute aspect-[512/512] left-[16.67%] right-[16.67%] top-[5px]" data-name="edit 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-[66.67%] top-0" data-name="View">
            <div className="absolute aspect-[30/30] bg-[#00b7c2] left-0 right-0 top-0" />
            <div className="absolute aspect-[512/512] left-[16.67%] right-[16.67%] top-[5px]" data-name="view(1) 2">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
            </div>
          </div>
          <div className="absolute bottom-0 left-[66.67%] right-0 top-0" data-name="remove">
            <div className="absolute aspect-[30/30] bg-[#00b7c2] left-0 right-0 top-0" />
            <div className="absolute aspect-[512/512] left-[16.67%] right-[16.67%] top-[5px]" data-name="delete 2">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[18.85%_1.46%_77.62%_83.89%]" data-name="Add 2">
        <div className="absolute bg-[#00b7c2] h-[30px] left-0 right-0 top-0" />
        <p className="absolute font-['Source_Code_Pro:Regular',_sans-serif] font-normal leading-[normal] left-[114.5px] text-[10px] text-center text-nowrap text-white top-[9px] tracking-[1.5px] translate-x-[-50%] whitespace-pre">Add D.R.P.M.D.</p>
        <div className="absolute left-[6px] overflow-clip size-[20px] top-[5px]" data-name="add">
          <div className="absolute inset-[20.833%]" data-name="icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.pe7cde70} fill="var(--fill-0, #1D1B20)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DailyRoundsPatientMonitoringDashboardPatientList1() {
  return <DailyRoundsPatientMonitoringDashboardPatientList className="relative size-full" />;
}