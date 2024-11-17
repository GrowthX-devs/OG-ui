export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="flex space-x-1">
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "font-bold" : ""}`}
          >
            <button
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
