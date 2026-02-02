import connectDB from "../../../../config/database";
import Property from "../../../../models/Property";


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ViewPropertyDetailsPage({ params }: PageProps) {
  const { id } = await params;

  await connectDB();
  const property = await Property.findById(id).lean();

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="text-2xl text-green-500">
      {property.name}
    </div>
  );
}
