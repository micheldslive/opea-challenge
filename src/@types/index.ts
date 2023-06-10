import { type InputHTMLAttributes } from 'react';
import type { FieldName } from 'react-hook-form';
import type { CompanyForm } from '@/src/core/schemas/company';
import { type z } from 'zod';

export type CompanyFormProps = z.infer<typeof CompanyForm>;

export interface CustomInput extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldName<CompanyFormProps>;
  label: string;
  placeholder: string;
}
