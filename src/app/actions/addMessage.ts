'use server'
import { getSessionUser } from "~/utils/getSessionUser";
import connectDB from "~/config/database";
import User from "~/models/User";
import Message from "~/models/Message";
 


async function addMessage(formData: FormData): Promise<{ submitted: boolean }>{
    await connectDB()

      const sessionUser = await getSessionUser() 
        if(!sessionUser || !sessionUser.userId){
            throw new Error('User ID is required')
        }
        
        const { userId } = sessionUser
        const recipient = formData.get('recipient')

        if(userId === recipient){
            throw new Error('You can not send a message to yourself')
        }
    
    const newMessage = new Message({
        sender: userId,
        recipient,
        property : formData.get('property'),
        name : formData.get('name'),
        email: formData.get('email'),
        phone : formData.get('phone'),
        body : formData.get('body'),

    })

    await newMessage.save()
    return {submitted: true}
}


export default addMessage