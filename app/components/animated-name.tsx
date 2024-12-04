import { Link } from "next-view-transitions";

export function AnimatedName() {
  return (
    <Link href="/" className="fade-in mb-8 flex font-medium text-gray-400">
      Nicolas Le Borgne
    </Link>
  );
}
