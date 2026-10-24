import EditProperty from "~/components/EditProperty"
import connectDB from "~/config/database"
import Property from "~/models/Property"

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}


export default async function EditPropertyPage ({params}: PageProps){
    const { id } = await params;
        await connectDB()
        const propertyDoc = await Property.findById(id).lean()

        if(!propertyDoc) {
            return (
                <h1 className="text-center text-2xl font-bold mt-10">
                    Property Not found
                </h1>
            )
        }

        const propertyToEdit = JSON.parse(JSON.stringify(propertyDoc))

    return(
        <section className="bg-blue-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <EditProperty property={propertyToEdit} />
                </div>

            </div>    
        </section>
    )
}