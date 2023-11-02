"use client";
import {
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState, forwardRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
const DesktopNavigationItemDropdown = forwardRef((props: any, ref: any) => {
  const router = useRouter();
  const [dropdownContent, setDropdownContent] = useState<any>([]);
  const pathname = usePathname();
  const isActive = pathname === props.link.href;

  useEffect(() => {
    const getDropdownContent = async () => {
      const posts = await props.link.dropdown();
      setDropdownContent(posts);
    };

    if (dropdownContent.length === 0) {
      getDropdownContent();
    }
  }, []);

  // const show = props.link.pretty === 'ecommerce tutorials';

  const DD = () => {
    return (
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button
              href={props.link.href}
              disableRipple
              className={`p-0 bg-transparent data-[hover=true]:bg-transparent ${
                isActive ? "text-black" : "text-gray-400"
              }`}
              endContent={
                <BiChevronDown
                  className={`text-xl ${
                    isActive ? "text-black" : "text-gray-400"
                  } `}
                />
              }
              radius="sm"
              variant="light"
            >
              {props.link.pretty}
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label={props.link.pretty}
          className="w-full md:w-[340px] gap-4"
          itemClasses={{
            base: "bg-gray-100 shadow-lg line-clamp-2 gap-2 whitespace-wrap break-words whitespace-break-spaces text-ellipsis",
            title: "line-clamp-1 text-ellipsis",
          }}
        >
          {dropdownContent.map((item: any, i: any) => {
            const Title = () => {
              return (
                <>
                  <div className="flex justify-between mb-1">
                    <div className="text-gray-400 text-xxs uppercase">
                      {item.post_type.name}
                    </div>
                    <time
                      dateTime={item.published}
                      className="text-xxs text-gray-400"
                    >
                      {item.published_pretty}
                    </time>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-black">{item.title}</h5>
                    <h6 className="text-gray-400 text-xs line-clamp-1">
                      {item.subtitle}
                    </h6>
                  </div>
                </>
              );
            };
            return (
              <DropdownItem
                onClick={() => {
                  router.push(`/ecommerce-tutorials/${item.slug}`);
                }}
                key={i}
                title={<Title />}
                description={item.excerpt}
              />
            );
          })}
          <DropdownItem
            classNames={{
              base: "bg-red-500 text-white text-center",
            }}
            onClick={() => {
              router.push(props.link.href);
            }}
            title={"View All"}
            description={props.link.description}
          />
        </DropdownMenu>
      </Dropdown>
    );
  };

  if (isActive === false) {
    return <DD />;
  }

  return (
    <div ref={ref}>
      <DD />
    </div>
  );
});

export default DesktopNavigationItemDropdown;
