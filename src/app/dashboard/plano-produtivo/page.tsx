"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role } from "@/lib/data";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Nome",
    accessor: "info",
  },
  {
    header: "Hectare",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Mudas Florestais",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Mudas Frutíferas",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Mudas Totais",
    accessor: "address2",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const PlanoProdutivoPage = () => {
  const renderRow = (item: any) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.user.name}</h3>
          <p className="text-xs text-gray-500">{item?.tipoDeArea}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.hectare}</td>
      <td className="hidden md:table-cell">{item.quantMudasFlorestais}</td>
      <td className="hidden md:table-cell">{item.quantMudasFrutiferas}</td>
      <td className="hidden md:table-cell">{item.mudasTotais}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/dashboard/plano-produtivo/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );

  const { data: planos } = useQuery({
    queryKey: ["files-list"],
    queryFn: (): Promise<any> =>
      api.get(`plano-produtivo`).then((response) => response.data),
    refetchOnWindowFocus: false,
    initialData: [],
  });

  if (!planos) return <></>;

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Plano Produtivo
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <Link
              href={"/dashboard/plano-produtivo/create"}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"
            >
              <Image src="/create.png" alt="" width={14} height={14} />
            </Link>
          </div>
        </div>
      </div>
      {/* LIST */}
      {planos.length && (
        <Table columns={columns} renderRow={renderRow} data={planos} />
      )}
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default PlanoProdutivoPage;
