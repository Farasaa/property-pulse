'use server'
import { getSessionUser } from "~/utils/getSessionUser";
import connectDB from "~/config/database";
import Message from "~/models/Message";
 
export type ActionState = {
  submitted?: boolean;
  error?: string;
};

async function addMessage(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await connectDB();

      const sessionUser = await getSessionUser() 
        if(!sessionUser || !sessionUser.userId){
            return { error: 'Please sign in to send a message.' };
        }
        
        const { userId } = sessionUser
        const recipient = formData.get('recipient')

        if(String(userId) === String(recipient)){
            return { error: 'You cannot send a message to yourself.' };
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
