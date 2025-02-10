"use client";

import Link from "next/link";
import { Typography } from "./typography";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import queryString from "query-string";
import Image from "next/image";

interface NavigationMenuItemProps {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavigationMenuItemProps[];
}

export function NavigationMenu({ items }: NavigationMenuProps) {
  const [hash, setHash] = useState("");

  const linkVariants = cva(
    "text-zinc-600 hover:text-zinc-900 w-full cursor-pointer",
    {
      variants: {
        variant: {
          default: "font-normal",
          active: "text-zinc-900",
        },
      },
    },
  );

  const handleClickLink = (hash: string) => {
    setHash(hash);
  };

  return (
    <nav className="flex items-center justify-start h-16 w-max">
      <div className="flex items-center justify-start gap-12">
        <Image
          src="/images/logo.png"
          alt="Logo - Gabriel Fernandes"
          height={100}
          width={160}
        />
        {items.map(({ label, href }, index) => (
          <Link
            href={href}
            key={index}
            className="relative"
            onClick={() => handleClickLink(href)}
          >
            <Typography
              className={cn(
                linkVariants({
                  variant: hash === href ? "active" : "default",
                }),
              )}
              text={label}
            />
            {hash === href && (
              <span className="h-[4px] w-[4px] bg-zinc-900 rounded-full left-1/2 top-8 absolute" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
