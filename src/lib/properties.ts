import connectDB from '../../config/database';
import Property from '../../models/Property'



export async function getProperites(){
    try{
        await connectDB()
          const properties = await Property.find({}).sort({ createdAt: -1 }).lean();
          return properties
    }catch(error){
             console.error("Failed to fetch properties:", error);
    return [];
    }
    
}

export default async function getRecentProperties(){
    const properties = await getProperites()
    return properties.slice(0, 3);
}