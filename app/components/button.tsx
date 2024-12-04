import { Link } from "next-view-transitions";
import { ComponentPropsWithoutRef } from "react";

export function Button({
  href,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <Link href={encodeURI(href ?? "/")} {...props}>
      <button className="transition-background-color cursor-pointer rounded rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-500">
        {children}
      </button>
    </Link>
  );
}
