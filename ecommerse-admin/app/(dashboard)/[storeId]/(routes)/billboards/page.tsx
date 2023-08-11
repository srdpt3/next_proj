import prismadb from "@/hooks/lib/prismadb";
import { BillboardClient } from "./components/client";

const BillboardsPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  // const billboard = await prismadb.billboard.findUnique({
  //   where: {
  //     id: params.billboardId,
  //   },
  // });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;
