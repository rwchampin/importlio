 
import DesktopNavigationItem from "./DesktopNavigationItem";
import DesktopNavigationItemDropdown from "./DesktopNavigationItemDropdown";

export default function DesktopNavigation({
  links,
}: {
  links: any;
}) {
  return (
    <>
      {links.map((link: any, i: any) => {
        if(link.type === 'mobile') {
          return null
        }
        if (link.dropdown !== null) {
          return <DesktopNavigationItemDropdown key={i} link={link} />;
          // return (
          //   <Dropdown key={i}>
          //     <NavbarItem>
          //       <DropdownTrigger>
          //         <Button
          //           disableRipple
          //           className="p-0 bg-transparent data-[hover=true]:bg-transparent"
          //           endContent={
          //             <BiChevronDown className="text-xl text-black" />
          //           }
          //           radius="sm"
          //           variant="light"
          //         >
          //           {link.pretty}
          //         </Button>
          //       </DropdownTrigger>
          //     </NavbarItem>
          //     <DropdownMenu
          //       aria-label="ACME features"
          //       className="w-[340px]"
          //       itemClasses={{
          //         base: "gap-4",
          //       }}
          //     >
          //       {link.dropdown.map((item: any, i: any) => {
          //         return (
          //           <DropdownItem
          //             key={i}
          //             description={item.description}
          //             startContent={item.startContent}
          //           >
          //             {item.name}
          //           </DropdownItem>
          //         );
          //       })}
          //     </DropdownMenu>
          //   </Dropdown>
          // );
        }
        return <DesktopNavigationItem key={i} link={link} />;
        // return (
        //   <NavbarItem key={i}>
        //     <Link color="foreground" href={link.href}>
        //       {link.pretty}
        //     </Link>
        //   </NavbarItem>
        // );
      })}
    </>
  );
}


