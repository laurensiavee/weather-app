import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SearchCity from "./component/SearchCity";

export default function Home() {
  return (
    <>
      <SearchCity />
    </>
  );
}
