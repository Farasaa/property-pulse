'use server'
import cloudinary from "~/config/cloudinary"
import connectDB from "~/config/database"
import Property from "~/models/Property"
import { getSessionUser } from "~/utils/getSessionUser"
import { revalidatePath } from "next/cache"


export default async function deleteProperty(propertyId:string){
  await connectDB()

  const sessionUser = await getSessionUser()
     if(!sessionUser || !sessionUser.userId){
        throw new Error('User ID is required')
    }
  const {userId} = sessionUser

  const propertyToDelete = await Property.findById(propertyId)
  if(!propertyToDelete) throw new Error('property not found')
  if(propertyToDelete.owner.toString() !== userId) throw new Error('You are not authorized to delete this property')
 
   const publicIds = propertyToDelete.images.map((image:string) => {
    const parts = image.split('/')
    return parts.at(-1)?.split('.').at(0)

  })

  if(publicIds.length > 0){
    for(const publicId of publicIds){
        await cloudinary.uploader.destroy('propertypulse/' + publicId)
    }
  }
 
 
    await propertyToDelete.deleteOne()   

    revalidatePath('/', 'layout')


}