import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Header() {
  return (
    <>
      <nav className="px-5 py-3">
        <Link href={`/`} className="text-white text-sm px-2">
          Weather
        </Link>
      </nav>
    </>
  );
}
