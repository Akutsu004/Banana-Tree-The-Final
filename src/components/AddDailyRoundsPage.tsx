import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
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
  const [patients, setPatients] = useState<{ id: string; name: string }[]>([]);
  const [formData, setFormData] = useState({
    patient_id: '',
    appointment_id: `A-${Math.floor(1000 + Math.random() * 9000)}`,
    doctor_name: '',
    schedule: '',
    diagnosis: '',
    status: 'Scheduled'
  });

  // ✅ Load patients from Supabase
  useEffect(() => {
    const fetchPatients = async () => {
      const { data, error } = await supabase
  .from('patients')
  .select('patient_id, first_name, last_name') 


      if (error) {
        console.error('Error fetching patients:', error);
        return;
      }

      setPatients(data || []);
    };

    fetchPatients();
  }, []);

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // ✅ Save to Supabase daily_rounds table
  const handleSave = async () => {
  const { patient_id, doctor_name, schedule } = formData;

  if (!patient_id) {
    alert('Please select a patient.');
    return;
  }

  if (!doctor_name) {
    alert('Please enter a doctor name.');
    return;
  }

  if (!schedule) {
    alert('Please select a schedule.');
    return;
  }

  const { error } = await supabase.from('daily_round_id').insert([formData]);

  if (error) {
    console.error('Error saving daily round:', error);
    alert('Failed to save daily round.');
  } else {
    alert('Daily round saved successfully!');
    onSave(formData); // Optionally notify parent
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  return formattedDate;
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
      <div className="absolute inset-[17.08%_1.46%_0.47%_8.05%] rounded-[30px] overflow-y-auto max-h-[70vh] p-6" data-name="Add Daily Rounds & Patient Monitoring">
  <div className="bg-[#2a7a6e] rounded-[30px] p-6">
    <h2 className="text-2xl font-bold text-black tracking-[3.6px] mb-4">
      Add Daily Rounds & Patient Monitoring
    </h2>

    <div>
  <label className="font-bold tracking-[2.7px]">Patient: *</label>
  <select
    value={formData.patient_id}
    onChange={(e) => updateForm('patient_id', e.target.value)}
    className="w-full rounded-md border border-gray-300 p-2"
  >
    <option value="">Select a patient</option>
    {patients.map((p) => (
      <option key={p.patient_id} value={p.patient_id}>
        {p.name} ({p.patient_id})
      </option>
    ))}
  </select>
</div>



      {/* Appointment ID */}
      <div>
        <label className="font-bold tracking-[2.7px]">Appointment ID:</label>
        <input
          type="text"
          value={formData.appointment_id}
          disabled
          className="w-full rounded-md border border-gray-300 p-2 bg-gray-100 text-gray-600"
        />
      </div>

      {/* Doctor Name */}
      <div>
        <label className="font-bold tracking-[2.7px]">Doctor Name: *</label>
        <input
          type="text"
          value={formData.doctor_name}
          onChange={(e) => updateForm('doctor_name', e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      {/* Schedule */}
      <div>
  <label className="font-bold tracking-[2.7px]">Schedule: *</label>
  <input
    type="datetime-local"
    value={formData.schedule}
    onChange={(e) => updateForm('schedule', e.target.value)}
    className="w-full rounded-md border border-gray-300 p-2"
  />
</div>


      {/* Status */}
      <div>
        <label className="font-bold tracking-[2.7px]">Status:</label>
        <select
          value={formData.status}
          onChange={(e) => updateForm('status', e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2"
        >
          <option value="Scheduled">Scheduled</option>
          <option value="Active">Active</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Diagnosis */}
      <div className="col-span-2">
        <label className="font-bold tracking-[2.7px]">Diagnosis: </label>
        <textarea
          value={formData.diagnosis}
          onChange={(e) => updateForm('diagnosis', e.target.value)}
          placeholder="Enter diagnosis..."
          className="w-full rounded-md border border-gray-300 p-2 h-24 resize-none"
        />
      </div>
    </div>

    {/* Add Button */}
    <div className="flex justify-end mt-6">
      <button
        onClick={handleSave}
        className="bg-[#00b7c2] hover:bg-[#008a94] text-white font-bold py-2 px-6 rounded-full transition-colors"
      >
        Add
      </button>
    </div>
  </div>
</div>
    
  );
}