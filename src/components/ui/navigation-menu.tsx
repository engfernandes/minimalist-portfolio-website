import Link from "next/link";
import { Typography } from "./typography";

interface NavigationMenuItemProps {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavigationMenuItemProps[];
}

export function NavigationMenu({ items }: NavigationMenuProps) {
  return (
    <nav className="flex items-center justify-start h-16 w-full">
      <div className="flex items-center justify-start gap-12">
        <Typography
          className="text-zinc-600 hover:text-zinc-900 w-full"
          variant="h3"
          text="Gabriel Fernandes"
        />
        {items.map(({ label, href }, index) => (
          <Link href={href} key={index}>
            <Typography
              className="text-zinc-600 hover:text-zinc-900 w-full"
              text={label}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
