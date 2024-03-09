"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();

  console.log(path);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "❤" : ""}
        </li>
        <li>
          <Link href="/about-us">AboutUs</Link>{" "}
          {path === "/about-us" ? "❤" : ""}
        </li>
        <li>
          <Link href="/about-us/company">Company</Link>{" "}
          {path === "/about-us/company" ? "❤" : ""}
        </li>
        <li>
          <Link href="/about-us/company/sales">Sales</Link>{" "}
          {path === "/about-us/company/sales" ? "❤" : ""}
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
