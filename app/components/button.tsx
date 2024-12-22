import { Link } from "next-view-transitions";
import { ComponentPropsWithoutRef } from "react";

export function Button({
  href,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <Link href={encodeURI(href ?? "/")} {...props}>
      <button className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-gray-800 px-3 py-2 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-700 before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56">
        <span className="relative z-10">{children}</span>
      </button>
    </Link>
  );
}
