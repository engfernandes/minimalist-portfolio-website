"use client";

import Link from "next/link";
import { Typography } from "./typography";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface NavigationMenuItemProps {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavigationMenuItemProps[];
}

export function NavigationMenu({ items }: NavigationMenuProps) {
  const pathName = usePathname();

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

  return (
    <nav className="flex items-center justify-start h-16 w-max">
      <div className="flex items-center justify-start gap-12">
        <Typography
          className="text-zinc-600  w-full cursor-pointer"
          variant="h3"
          text="Gabriel Fernandes"
        />
        {items.map(({ label, href }, index) => (
          <Link href={href} key={index} className="relative">
            <Typography
              className={cn(
                linkVariants({
                  variant: pathName === href ? "active" : "default",
                }),
              )}
              text={label}
            />
            {pathName === href && (
              <span className="h-[4px] w-[4px] bg-zinc-900 rounded-full left-1/2 top-8 absolute" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
