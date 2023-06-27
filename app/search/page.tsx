import { SearchResult } from "@/common.types";
import React from "react";

type SearchParams = {
  q?: string | undefined;
};

type Props = {
  searchParams: SearchParams;
};

const Page = async ({ searchParams: { q } }: Props) => {
  return <div>page</div>;
};

export default Page;
