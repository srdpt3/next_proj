"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Plus, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
// import { Billboard } from "@prisma/client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import Heading from "@/components/ui/heading";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
// import { columns, BillboardColumn } from "./columns";

interface BillboardClientProps {
  data: BillboardColumn[];
}
// const formSchema = z.object({
//   label: z.string().min(1),
//   imageUrl: z.string().min(1),
// });

// type BillboardFormValues = z.infer<typeof formSchema>;

// interface BillboardClient {
//   initialData: null;
// }

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data}></DataTable>
      <Heading title="API" description="API Calls for Billboards" />
      <Separator />
    </>
  );
};
