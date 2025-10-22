"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface PageHeaderProps {
  title: string;
  bgImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, bgImage }) => {
  const pathname = usePathname();

  const currentPage =
    pathname === "/"
      ? "Beranda"
      : pathname
          .split("/")
          .filter(Boolean)
          .pop()
          ?.replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section
      className="relative flex items-center justify-start h-[250px] md:h-[300px] bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* 🔹 Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Konten */}
      <div className="relative z-10 px-6 md:px-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 font-['Fjord_One']">
          {title}
        </h1>

        {/* 🔹 Breadcrumb */}
        <div className="text-gray-200 text-lg flex items-center gap-2 mt-8">
          <Link
            href="/"
            className="hover:text-red-400 transition-colors duration-200"
          >
            Beranda
          </Link>
          <span className="text-gray-400">/</span>
          <span className="capitalize text-gray-100">{currentPage}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
