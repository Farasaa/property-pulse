 


import Image from "next/image"
import profileDefault from '~/public/images/profile.png';
import connectDB from "~/config/database";
import Property from "~/models/Property";
import { getSessionUser } from "~/utils/getSessionUser";
import UserProperties from "~/components/UserProperties"; 
 
 



 


export default async function ProfilePage(){

  await connectDB()

    const sessionUser = await getSessionUser()

   
    const profileImage = sessionUser?.user?.image
    const userName =sessionUser?.user?.name
    const userEmail =sessionUser?.user?.email
    const userId = sessionUser?.user?.id

    await connectDB()

    const properties = await Property.find({ owner: userId }).lean();
const serializedProperties = JSON.parse(JSON.stringify(properties));



    console.log(properties)
 
    return(
          <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                     <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={profileImage || profileDefault }
                  width= {200}
                  height={200}
                  alt="User"
                />
           
              </div>

              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span> {userName}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email: </span> {userEmail}
              </h2>
            </div>
        
                <UserProperties userProperties={serializedProperties}/>
            
            
          
          
          </div>
        </div>
      </div>
    </section>
    )
}