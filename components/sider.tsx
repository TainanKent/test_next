"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import type { FunctionComponent } from "react";

const Sider: FunctionComponent = () => {
  const [status, setStatus] = useState(false);

  const width = useMemo(() => (status ? "w-60" : "w-20"), [status]);
  const menus = [
    {
      title: "Home",
      pathname: "/",
    },
    {
      title: "excle 範例程式",
      pathname: "/excel",
    },
    {
      title: "css 3D",
      pathname: "/css3d",
    },
  ];

  return (
    <div
      className={`h-svh flex flex-col gap-2 ${width} px-4 py-2 bg-zinc-600 text-white duration-500`}
    >
      <div className="h-[100px]">
        {status && (
          <button className="text-[30px]" onClick={() => setStatus(false)}>
            +
          </button>
        )}
        {!status && (
          <button className="text-[30px]" onClick={() => setStatus(true)}>
            -
          </button>
        )}
      </div>
      {menus.map((menu) => (
        <Link
          key={`menu_${menu.title}`}
          title={menu.title}
          href={{ pathname: menu.pathname }}
        >
          {menu.title}
        </Link>
      ))}
    </div>
  );
};

export default Sider;
