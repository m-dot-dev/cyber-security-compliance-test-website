import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";

const CustomPagination = ({
  onPageChange,
  currentPage,
  totalPages,
  isPlaceholderData,
  className = "",
}: {
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
  isPlaceholderData: boolean;
  className?: string;
}) => {
  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };
  const handlePreviousClick = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <Button
            disabled={currentPage === 0 || isPlaceholderData}
            onClick={handlePreviousClick}
            className="p-2 text-xs"
            size="sm"
          >
            <span>Prev</span>
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Button
            className="p-2 text-xs"
            disabled={
              currentPage === totalPages ||
              isPlaceholderData ||
              totalPages === 0
            }
            onClick={handleNextClick}
            size="sm"
          >
            <span>Next</span>
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
