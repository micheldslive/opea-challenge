import type { CompanyFormProps, CustomInputCNPJ } from '@/src/@types';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { type ChangeEvent, useEffect, useState } from 'react';
import * as S from '../styled';

export const InputCNPJ = ({
  name,
  label,
  placeholder,
  defaultValue
}: CustomInputCNPJ) => {
  const {
    register,
    formState: { errors }
  } = useFormContext<CompanyFormProps>();
  const { t } = useTranslation();

  const [value, setValue] = useState(defaultValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <S.InputContent>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      <S.InputMasked
        type='text'
        mask='99.999.999/9999-99'
        alwaysShowMask={false}
        placeholder={placeholder}
        value={value}
        {...register(name, {
          onChange
        })}
      />
      <S.InputErrors>{t(errors[name]?.message as never)}</S.InputErrors>
    </S.InputContent>
  );
};
