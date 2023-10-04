
import NavLink from "./NavLink";
import { LinkProps } from "@/lib/constants";
export default function DesktopNavigation({ links, openMegaMenu, setOpenMegaMenu }:any) {
    return (
        <ul
        id="menu"
        role="menu"
        className="hidden md:flex relative gap-3 mr-auto"
        aria-labelledby="menu-button"
      >
        {links.map((link: LinkProps, idx: number) => {
          return (
            <li
              key={idx}
              role="presentation"
              className="flex items-center justify-center flex-1"
            >
              <NavLink
                link={link}
                openMegaMenu={openMegaMenu}
                setOpenMegaMenu={setOpenMegaMenu}
                className="not-logo flex items-center justify-center font-apercu whitespace-nowrap"
              >
                tits
              </NavLink>
            </li>
          );
        })}
      </ul>
    )
}