import React from 'react'
import { BookCard } from './BookCard'
import styled from "styled-components";

export const Booklists = ({books}) => {
  return (
    <div>
        {books.length > 0 && books.map((item) => {
            return (
                <BookCardWrapper key={item.id}>
                    <BookCard bookData={item} />
                </BookCardWrapper>
            )
        })}
    </div>
  )
}

const BookCardWrapper = styled.div`
    border: 1px solid blue;
    padding: 7px;
    margin: 20px;
    width: 310px;
`
