import { usePagination } from '@/src/core/hooks';
import * as S from './styled';

export const Pagination = () => {
  const { nextPage, previousPage, page, hasNextPage, hasPreviousPage } =
    usePagination();

  return (
    <S.PaginationContent>
      <S.PaginationButton onClick={previousPage} disabled={hasPreviousPage}>
        &laquo;
      </S.PaginationButton>
      <S.PaginationPage>{page}</S.PaginationPage>
      <S.PaginationButton onClick={nextPage} disabled={hasNextPage}>
        &raquo;
      </S.PaginationButton>
    </S.PaginationContent>
  );
};
