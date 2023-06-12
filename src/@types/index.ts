import {
  type PropsWithChildren,
  type InputHTMLAttributes,
  type ButtonHTMLAttributes
} from 'react';
import type { FieldName } from 'react-hook-form';
import type { CompanyAPI, CompanyForm } from '@/src/core/schemas';
import { type z } from 'zod';

export type CompanyFormProps = z.infer<typeof CompanyForm>;
export type CompanyAPIProps = z.infer<typeof CompanyAPI>[number];
export type CompanyProps = {
  company: CompanyAPIProps;
};

export interface CustomInput extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldName<CompanyFormProps>;
  label: string;
  placeholder: string;
}

export interface CustomInputCNPJ {
  name: FieldName<CompanyFormProps>;
  label: string;
  placeholder: string;
  defaultValue: string;
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

export interface SearchBarProps {
  search: string;
}

export interface IOpeaProps {
  dark: boolean;
  locale: string;
  page: number;
}

export interface IOpeaStore extends IOpeaProps {
  setDark: (updater: (prev: boolean) => boolean) => void;
  setPage: (updater: (prev: number) => number) => void;
  setLanguage: (language: IOpeaProps['locale']) => void;
}

export type CompanyListProps = {
  text?: string | string[];
};

export interface CompanyListBody extends CompanyListProps {
  body?: CompanyFormProps;
}
export interface GetCompanys extends CompanyListProps {
  body?: CompanyProps['company'];
}
