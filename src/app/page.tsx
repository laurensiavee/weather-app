import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SearchCity from "./component/SearchCity";
import Header from "./component/Header";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[50%]">
          <SearchCity />
        </div>
      </div>
    </>
  );
}
