import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Booklists } from "../Components/Booklists";
import { FilterSort } from "../Components/FilterSort";
import { getBooks } from "../Redux/action";
import styled from "styled-components";

export const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  }, []);

  console.log("books:", books);

  return (
    <div>
      <h2>Books</h2>
      <BookPageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <BookListWrapper>
          <Booklists books={books} />
        </BookListWrapper>
      </BookPageWrapper>
    </div>
    
  );
};

const BookPageWrapper = styled.div`
  display: flex;
`;

const FilterSortWrapper = styled.div`
  width: 300px;
  border: 3px solid red;
`;

const BookListWrapper = styled.div`
  width: 100%;
  border: 3px solid black;
  display: grid;
  margin-left: 200px;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content)); //fit for every sce
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
`;