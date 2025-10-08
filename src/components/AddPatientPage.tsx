import { useState } from 'react';
import { supabase } from '../supabaseClient';
import svgPaths from "../imports/svg-cnrloed955";
import imgRectangle62 from "figma:asset/f8ca17d17d2b55546c20bbcda787d678c2ea8e49.png";

interface AddPatientPageProps {
  currentUser: { type: 'doctor' | 'admin'; data: any } | null;
  onBack: () => void;
  onLogout: () => void;
}

export function AddPatientPage({ currentUser, onBack, onLogout }: AddPatientPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    address: ''
  });

  // Handles input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Adds a patient to Supabase
  const handleSave = async () => {
    const autoId = `P-${Date.now().toString().slice(-4)}`; // short unique id
    const newPatient = {
      patient_id: autoId,
      first_name: formData.firstName,
      last_name: formData.lastName,
      date_of_birth: formData.dateOfBirth,
      contact_number: formData.contactNumber,
      email: formData.email,
      address: formData.address,
      status: 'Active' // ✅ all new patients start as active
    };

    const { error } = await supabase.from('patients').insert([newPatient]);

    if (error) {
      console.error('❌ Supabase insert error:', error.message);
      alert(`Failed to add patient: ${error.message}`);
    } else {
      alert('✅ Patient added successfully!');
      onBack(); // Go back to patient list
    }
  };

  return (
    <div className="relative size-full" data-name="Add Patient">
      <div className="absolute bg-[#e0e0e0] inset-0" />

      {/* Header */}
      <div className="absolute top-0 bottom-[90.58%] left-0 right-0">
        <div className="absolute bg-[#8fd0c6] inset-0" />
        <p className="absolute font-['Inter:Bold_Italic'] font-bold italic text-[32px] tracking-[4.8px] text-center inset-[26.25%_16.62%_26.25%_16.69%]">
          MEDICARE - DENTAL CLINIC
        </p>
        <div className="absolute inset-[11.25%_1.61%_10%_93.78%] rounded-[100px]">
          <img alt="" className="absolute inset-0 object-cover rounded-[100px] size-full" src={imgRectangle62} />
        </div>
        <p className="absolute font-['Inter:Semi_Bold'] text-[22px] text-black inset-[56.25%_8.27%_10%_82.8%]">
          {currentUser?.data?.username || 'Sofia Smith'}
        </p>
      </div>

      {/* Online Indicator */}
      <div className="absolute inset-[6.24%_1.61%_92.11%_97.36%]">
        <svg className="block size-full" fill="none" viewBox="0 0 14 14">
          <path d={svgPaths.p130267c0} fill="#2BFF0A" />
        </svg>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute font-['Inter:Semi_Bold'] text-[20px] inset-[2.59%_91.65%_94.35%_4.83%] hover:text-[#2a7a6e]"
      >
        Back
      </button>

      {/* Title */}
      <p className="absolute font-['Inter:Bold'] font-bold text-[24px] inset-[11.78%_10.25%_84.69%_1.46%] tracking-[3.6px]">
        Add Patient
      </p>

      {/* Form */}
      <div className="absolute inset-[17.08%_1.46%_0.47%_1.46%] rounded-[30px] bg-[#2a7a6e]">
        <div className="p-8 space-y-4">
          {['firstName', 'lastName', 'dateOfBirth', 'contactNumber', 'email', 'address'].map((field) => (
            <div key={field}>
              <label className="block text-[18px] font-bold text-white capitalize">
                {field.replace(/([A-Z])/g, ' $1')}:
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                value={(formData as any)[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
                placeholder={field.replace(/([A-Z])/g, ' $1')}
                className="w-full rounded-[8px] border border-[#d9d9d9] px-4 py-3"
              />
            </div>
          ))}

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full mt-4 py-3 rounded-[50px] bg-[#00b7c2] text-white text-[18px] font-bold hover:opacity-90"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
