import type { CompanyFormProps, CustomInput } from '@/src/@types';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import * as S from './styled';

export const Input = ({
  name,
  type = 'text',
  label,
  placeholder,
  ...rest
}: CustomInput) => {
  const {
    register,
    formState: { errors }
  } = useFormContext<CompanyFormProps>();
  const { t } = useTranslation();

  return (
    <S.InputContent>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      {name === 'cnpj' ? (
        <S.InputMasked
          mask='99.999.999/9999-99'
          maskChar='_'
          alwaysShowMask={false}
          placeholder={placeholder}
          {...register(name)}
        />
      ) : (
        <S.Input
          type={type}
          placeholder={placeholder}
          {...rest}
          {...register(name)}
        />
      )}
      <S.InputErrors>{t(errors[name]?.message as never)}</S.InputErrors>
    </S.InputContent>
  );
};
