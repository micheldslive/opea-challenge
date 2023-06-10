import {
  type PropsWithChildren,
  type InputHTMLAttributes,
  type ButtonHTMLAttributes
} from 'react';
import type { FieldName } from 'react-hook-form';
import type { CompanyAPI, CompanyForm } from '@/src/core/schemas';
import { type z } from 'zod';

export type CompanyFormProps = z.infer<typeof CompanyForm>;
export type CompanyProps = {
  company: z.infer<typeof CompanyAPI>[number];
};

export interface CustomInput extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldName<CompanyFormProps>;
  label: string;
  placeholder: string;
}
export interface CompanyCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  transparent?: boolean;
  children?: PropsWithChildren['children'];
}

interface Methods {
  id?: string;
  method?: 'DELETE' | 'PUT' | 'POST';
  body?: CompanyFormProps;
}
export interface ApiProps {
  (methods: Methods): Promise<Response>;
}

export interface StringMaskProps {
  (source: string, format: string, def?: string): string;
}
