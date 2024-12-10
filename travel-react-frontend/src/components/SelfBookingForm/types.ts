// types.ts
export interface BookingFormProps {
    date: string;
    adults: number;
    children: number;
    healthInsurance: boolean;
    medicalInsurance: boolean;
    onDateChange: (newDate: string) => void;
    onAdultsChange: (newAdults: number) => void;
    onChildrenChange: (newChildren: number) => void;
    onHealthInsuranceChange: () => void;
    onMedicalInsuranceChange: () => void;
    onSubmit: (formData: any) => Promise<void>;
  }
  
  export interface EnquiryFormProps {
    onSubmit: (formData: any) => Promise<void>;
  }