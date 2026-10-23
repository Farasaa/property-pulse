'use client'


import type { PropertyCard } from '~/src/types/property';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import deleteProperty from '@/app/actions/deleteProperty';
import Property from '~/models/Property';
import { toast } from 'react-toastify';

 
 

export default  function UserProperties({userProperties}:{userProperties: PropertyCard[]} ){

    const [userProperty, setUserProperty] = useState(userProperties)
  console.log(userProperties)

  const handleDeleteProperty =  async (propertyId : string) => {
    const confirmed = window.confirm('Are you sure you want to delete this property')
    if(!confirmed) return

    

    await deleteProperty(propertyId)

    const updatedProperties = userProperty.filter((property) => property._id !== propertyId)

      setUserProperty(updatedProperties)

      toast.success('Property deleted successfully')
      
  }

    return userProperty.length === 0 ? (<div>You don't have any listings</div> ):(
       userProperty.map((property) =>(
                    <div className="md:w-3/4 md:pl-4" key={property._id}>
              <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
              <div className="mb-10">
                <Link
                href={`/properties/${property._id}`}
                >
                  <Image
                    className="h-32 w-full rounded-md object-cover"
                    src={property.images[0]}
                    alt="Property 1"
                    width={1000}
                    height={400}
                  />
                </Link>
                <div className="mt-2">
                  <p className="text-lg font-semibold">{property.name}</p>
                  <p className="text-gray-600">Address: {property.location.street} {property.location.city} {property.location.state}</p>
                </div>
                <div className="mt-2">
                  <Link
                    href={`/properties/${property._id}/edit`}
                    className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600 cursor-pointer"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 cursor-pointer"
                    type="button"
                    onClick={() => handleDeleteProperty(property._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              
            </div>
    )


    
          ))}