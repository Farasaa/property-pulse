'use client'
import bookmarkProperty from "@/app/actions/bookmarkProperty"
import type { PropertyCard } from '~/src/types/property';
import { toast } from 'react-toastify';
import { FaBookmark } from "react-icons/fa"
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import checBookMarkStatus from "@/app/actions/checkBookMarkStatus";
 


export default function BookMarkButton({property}: {property: PropertyCard}){
  const [isBookmarked, setIsBookmarked] = useState(false)
const [loading, setIsLoading] = useState(true)

  const {data: session, status} = useSession()

  const userId = session?.user.id

useEffect(() => {
  // wait until next-auth knows whether the user is signed in
  if(status === 'loading') return

  if(!userId){
    setIsLoading(false)
    return
  }

  setIsLoading(true)
  checBookMarkStatus(property._id).then((res) => {
    setIsBookmarked(res.isBookmarked)
    setIsLoading(false)
  })
}, [property._id, userId, status])


 async function bookmarkThisProperty() {
  if(!userId){
    toast.error('You need to signin')
    return
  }

  const bookProperty = await bookmarkProperty(property._id)
  
  setIsBookmarked(bookProperty.isBookmarked)
  toast.success(bookProperty.message)
  
 }

    

    return loading ? (
           <button
           disabled
           className="bg-gray-400 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              Loading...
            </button>
    ) : (
           <button
           onClick={bookmarkThisProperty}
           className={`${isBookmarked ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center cursor-pointer`}
            >
              <FaBookmark className="fas fa-bookmark mr-2" /> {isBookmarked ? 'Remove Bookmark': 'Bookmark Property'}
            </button>
    )
}