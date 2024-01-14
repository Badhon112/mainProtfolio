//Link
import Link from "next/link";
import {motion} from 'framer-motion'
// next Hoooks
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

export default function Nav({ containerStyles, linkStyles, underlineStyles }) {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize ${linkStyles}`}
        >
            {link.path === pathname && (
                <motion.span initial={{y:'-100%'}} animate={{y:0}} transition={{type:'tween'}} layoutId="underline" className={`${underlineStyles}`}/>
            )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
