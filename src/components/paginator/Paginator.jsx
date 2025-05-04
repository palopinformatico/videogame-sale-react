import { useState } from "react";
import "./Paginator.css";

export default function Paginator() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Puedes ejecutar onPageChange(page) aquí si lo necesitas
    }
  };

  return (
    <div className="paginator">
      <button
        className="page-btn"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`page-btn ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </button>
        );
      })}

      <button
        className="page-btn"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}
