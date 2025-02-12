import AvailabilityForm from "@/app/components/AvailabilityForm"; // Import the Client Component

export default async function AvailabilityPage({ params }) {
  const { userId } = await params;

  return <AvailabilityForm userId={userId} />;
}
