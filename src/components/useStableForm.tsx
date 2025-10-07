import { useCallback, useState, useMemo } from 'react';

/**
 * Custom hook that provides stable form input handlers to prevent focus loss
 */
export function useStableForm<T extends Record<string, any>>(initialData: T) {
  const [formData, setFormData] = useState<T>(initialData);

  // Create a stable input change handler that doesn't recreate on every render
  const handleInputChange = useCallback((field: keyof T, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Create stable individual field handlers that are memoized
  const fieldHandlers = useMemo(() => {
    const handlers: Record<string, (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void> = {};
    
    Object.keys(initialData).forEach(field => {
      handlers[field] = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        handleInputChange(field, e.target.value);
      };
    });
    
    return handlers;
  }, [handleInputChange]);

  // Create stable individual field handlers
  const createFieldHandler = useCallback((field: keyof T) => {
    return fieldHandlers[field as string] || ((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      handleInputChange(field, e.target.value);
    });
  }, [handleInputChange, fieldHandlers]);

  return {
    formData,
    setFormData,
    handleInputChange,
    createFieldHandler,
    fieldHandlers,
    resetForm: () => setFormData(initialData)
  };
}