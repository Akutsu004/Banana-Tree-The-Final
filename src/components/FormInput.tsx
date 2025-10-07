import { useCallback } from 'react';

interface FormInputProps {
  label?: string;
  type?: string;
  value: string;
  field: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  onFieldChange: (field: string, value: string) => void;
}

export function FormInput({ 
  label, 
  type = 'text', 
  value, 
  field, 
  placeholder, 
  required = false,
  className = '',
  onFieldChange 
}: FormInputProps) {
  // Create a stable onChange handler
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange(field, e.target.value);
  }, [field, onFieldChange]);

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      />
    </div>
  );
}