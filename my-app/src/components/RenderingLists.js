import React from 'react'
import Book from './Book'

function RenderingLists() {
    
    const books = [
        {title: "The Alchemist", author: "Paulo Coelho", pages: 163},
        {title: "The Power of Now", author: "Eckhart Tolle", pages: 236},
        {title: "The Art of War", author: "Sun Tzu", pages: 273},
        {title: "The 48 Laws of Power", author: "Robert Greene", pages: 452},
    ]

    return (
        <div>
            {
                books.map((book) => {
                    return <Book book={book} key={book.title} />
                })
            }
        </div>
    )
}

export default RenderingLists
