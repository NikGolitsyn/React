import React from 'react';

const Pagination = ({ currentPage, goNext, goPrev, totalItems, itemsPerPage }) => {
  let isPrevPageAvailable;
  let isNextPageAvailable;

  if (currentPage !== 1) {
    isPrevPageAvailable = (
      <button className="btn" onClick={goPrev}>
        ←
      </button>
    );
  } else {
    isPrevPageAvailable = <button className="btn" onClick={goPrev} disabled={true}></button>;
  }

  if (totalItems / itemsPerPage > currentPage) {
    isNextPageAvailable = (
      <button className="btn" onClick={() => goNext()}>
        →
      </button>
    );
  } else {
    isNextPageAvailable = (
      <button className="btn" onClick={() => goNext()} disabled={true}></button>
    );
  }

  return (
    <div className="pagination">
      {isPrevPageAvailable}
      <span className="pagination__page">{currentPage}</span>
      {isNextPageAvailable}
    </div>
  );
};

export default Pagination;
