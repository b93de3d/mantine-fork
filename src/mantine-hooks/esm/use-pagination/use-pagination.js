import { useMemo } from 'react';
import { useUncontrolled } from '../use-uncontrolled/use-uncontrolled.js';
import { range } from '../utils/range/range.js';

const DOTS = "dots";
function usePagination({
  total,
  siblings = 1,
  boundaries = 1,
  page,
  initialPage = 1,
  onChange
}) {
  const [activePage, setActivePage] = useUncontrolled({
    value: page,
    onChange,
    defaultValue: initialPage,
    finalValue: initialPage,
    rule: (_page) => typeof _page === "number" && _page <= total
  });
  const setPage = (pageNumber) => {
    if (pageNumber <= 0) {
      setActivePage(1);
    } else if (pageNumber > total) {
      setActivePage(total);
    } else {
      setActivePage(pageNumber);
    }
  };
  const next = () => setPage(activePage + 1);
  const previous = () => setPage(activePage - 1);
  const first = () => setPage(1);
  const last = () => setPage(total);
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= total) {
      return range(1, total);
    }
    const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
    const rightSiblingIndex = Math.min(activePage + siblings, total - boundaries);
    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1);
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [...range(1, leftItemCount), DOTS, ...range(total - (boundaries - 1), total)];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [...range(1, boundaries), DOTS, ...range(total - rightItemCount, total)];
    }
    return [
      ...range(1, boundaries),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(total - boundaries + 1, total)
    ];
  }, [total, siblings, activePage]);
  return {
    range: paginationRange,
    active: activePage,
    setPage,
    next,
    previous,
    first,
    last
  };
}

export { DOTS, usePagination };
//# sourceMappingURL=use-pagination.js.map
