import { useCompany } from '@/src/core/hooks';
import { Company, NewCompany } from '@/src/components';
import { motion } from 'framer-motion';
import * as S from './styled';

export const CompanyList = () => {
  const { paginatedData, isLoading } = useCompany();
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <S.CompanyListContent>
      <NewCompany />
      {isLoading ? (
        <S.CompanyListLoaderContent>
          <S.CompanyListLoader />
        </S.CompanyListLoaderContent>
      ) : (
        <motion.div variants={variants} initial='hidden' animate='visible'>
          {paginatedData?.map(company => {
            return (
              <motion.div key={company.id} variants={variants}>
                <Company company={company} />
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </S.CompanyListContent>
  );
};
