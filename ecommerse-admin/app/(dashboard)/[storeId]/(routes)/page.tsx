import prismadb from "@/hooks/lib/prismadb";
import React from "react";

interface DashbaoradPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashbaoradPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store : {store.name}</div>;
};

export default DashboardPage;
