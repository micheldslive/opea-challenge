import { type CompanyCardProps } from '@/src/@types';
import * as S from './styled';

export const CompanyCard = ({
  children,
  handleClick,
  transparent,
  ...rest
}: CompanyCardProps) => {
  return (
    <S.CompanyContent onClick={handleClick} transparent={transparent} {...rest}>
      {children}
    </S.CompanyContent>
  );
};
