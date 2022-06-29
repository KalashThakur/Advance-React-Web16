import React from 'react'

export const BookCard = ({bookData}) => {
  return (
    <div>
        <div>
            <img src={bookData.image} alt="" />
            <div>{bookData.book_name}</div>
            <div>{bookData.release_year}</div>
            <div>{bookData.category}</div>
        </div>
    </div>
  )
}
