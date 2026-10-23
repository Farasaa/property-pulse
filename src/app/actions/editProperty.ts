import { getSessionUser } from "~/utils/getSessionUser";
import Property from "~/models/Property";
import connectDB from "~/config/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"



 async function editProperty(formData: FormData): Promise<void> {
    await connectDB()
       const sessionUser = await getSessionUser() 
    if(!sessionUser || !sessionUser.userId){
        throw new Error('User ID is required')
    }
    
    const { userId } = sessionUser
}





export default editProperty