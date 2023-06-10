import type { CompanyFormProps, CustomInput } from '@/src/@types';
import { useFormContext } from 'react-hook-form';
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

  return (
    <S.InputContent>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      <S.Input
        type={type}
        placeholder={placeholder}
        {...rest}
        {...register(name)}
      />
      <S.InputErrors>{errors[name]?.message}</S.InputErrors>
    </S.InputContent>
  );
};
