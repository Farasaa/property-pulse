'use client'
import bookmarkProperty from "@/app/actions/bookmarkProperty"
import type { PropertyCard } from '~/src/types/property';
import { toast } from 'react-toastify';
import { FaBookmark } from "react-icons/fa"
import { useState } from "react";


export default function BookMarkButton({property}: {property: PropertyCard}){

const [isBookmarked, setIsBookmarked] = useState(false)
 async function bookmarkThisProperty() {

  const bookProperty = await bookmarkProperty(property._id)

  toast.success(bookProperty.message)
  setIsBookmarked(bookProperty.isBookmarked)
  console.log(bookProperty)
 }

    return(
           <button
           
           onClick={bookmarkThisProperty}   
           className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center cursor-pointer"
            >

              <FaBookmark className="fas fa-bookmark mr-2" /> {isBookmarked ? 'Remove Bookmark': 'Bookmark Property'}
            </button>
    )
}