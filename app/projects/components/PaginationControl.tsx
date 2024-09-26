import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface PaginationControlProps {
    page: string | string[],
    perPage: string | string[],
    hasNextPage: boolean,
    hasPrevPage: boolean,
    TotalPages: number,
}

export const PaginationControl = ({ page, perPage, hasNextPage, hasPrevPage, TotalPages }: PaginationControlProps) => {
    return (
        <div className="flex justify-center mt-8">
            <Link
                href={`/projects?page=${Number(page) - 1}&per_page=${perPage}`}
                className={`flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors ${!hasPrevPage ? "pointer-events-auto opacity-50" : ""}`}
            >
                <FaArrowLeft />
            </Link>
            {[...Array(TotalPages)].map((_,index)=>{
                    const currentPage = index +1
                    return(
                    <Link 
                    href={`/projects?page=${currentPage}&per_page=${perPage}`}
                    key={`page-${index}`} 
                    className={`px-4 py-2 border-t border-b border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors ${Number(page) === currentPage ? "bg-gray-200 font-semibold":""}`}>
                        {currentPage}
                    </Link>
                )
            })}
            <Link
                href={`/projects?page=${Number(page) + 1}&per_page=${perPage}`}
                className={`flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors ${!hasNextPage ? "pointer-events-auto opacity-50" : ""}`}
            >
                <FaArrowRight />
            </Link>
        </div>
    )
}
