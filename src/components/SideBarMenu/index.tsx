import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Router from "next/router";
import {
  Chevron,
  OrderIcon,
  PrescriptionIcon,
  HeartIcon,
  AlarmIcon,
  RefundIcon,
  UserIcon,
} from "components/SvgIcons";
const SideBarMenu: NextPage = () => {
  const [menus, setMenus] = useState([
    { id: 1, name: "Orders", icon: OrderIcon, opened: false, selected: false },
    {
      id: 2,
      name: "Prescriptions",
      icon: PrescriptionIcon,
      opened: false,
      selected: false,
    },
    {
      id: 3,
      name: "My Wishlist",
      icon: HeartIcon,
      opened: false,
      selected: false,
      path: "/my-wishlist",
    },
    {
      id: 4,
      name: "Alarm List",
      icon: AlarmIcon,
      opened: false,
      selected: false,
      path: "/alarm-list",
    },
    {
      id: 5,
      name: "Refunds & Returns",
      icon: RefundIcon,
      opened: false,
      selected: false,
    },
    {
      id: 6,
      name: "Profile Settings",
      icon: UserIcon,
      opened: true,
      selected: true,
      subMenu: [
        {
          id: 7,
          name: "Addresses",
          selected: true,
          path: "/profile/addresses",
        },
        {
          id: 8,
          name: "Payment Methods",
          selected: false,
          path: "/profile/payments",
        },
        {
          id: 9,
          name: "Account Information",
          selected: false,
          path: "/profile/account-information",
        },
        {
          id: 10,
          name: "Allergies & Conditions",
          selected: false,
          path: "/profile/allergies-and-conditions",
        },
      ],
    },
  ]);
  const [pathname, setPathname] = useState("");

  const handleMenuChange = (id: number, path: string | undefined) => {
    setMenus([
      ...menus.map((menu) => {
        if (menu.id !== id) return { ...menu, opened: false, selected: false };
        else return { ...menu, opened: !menu.opened, selected: true };
      }),
    ]);
    if (path) {
      Router.push(path);
    }
  };

  // const handleSubMenuChange = (pid: number, id: number, path: string) => {
  //   setMenus([
  //     ...menus.map((menu) => {
  //       Router.push(path);
  //       if (menu.id === pid)
  //         return {
  //           ...menu,
  //           subMenu: menu.subMenu?.map((subMenu) => {
  //             if (subMenu.id !== id) return { ...subMenu, selected: false };
  //             else return { ...subMenu, selected: !subMenu.selected };
  //           }),
  //         };
  //       else return menu;
  //     }),
  //   ]);
  // };
  useEffect(() => {
    const { pathname } = Router;
    setPathname(pathname);
    setMenus(
      menus.map((item) => {
        if (
          item.path === pathname ||
          item.subMenu?.find((item) => item.path === pathname)
        ) {
          return { ...item, opened: true, selected: true };
        }
        return { ...item, opened: false, selected: false };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {menus.map((menu) => (
        <div key={menu.id}>
          <div
            onClick={() => handleMenuChange(menu.id, menu.path)}
            key={menu.id}
            className="grid grid-cols-2 pb-3 pt-3 border-b-[0.5px] border-grey cursor-pointer"
          >
            <div className="inline-flex text-[17px] font-bold">
              <menu.icon color={menu.opened ? "#2E8F66" : "#595959"} />{" "}
              <span
                className={`ml-2 ${
                  menu.selected ? "text-apollo-secondary" : ""
                }`}
              >
                {menu.name}
              </span>
            </div>
            <div className="text-right text-[16px] text-apollo-secondary font-bold">
              <Chevron color={menu.opened ? "#2E8F66" : "#595959"} />
            </div>
          </div>
          {menu.opened &&
            menu.subMenu?.map((subMenu) => (
              <div
                onClick={() =>
                  // handleSubMenuChange(menu.id, subMenu.id, subMenu.path)
                  Router.push(subMenu.path)
                }
                key={subMenu.id}
                className={`grid grid-cols-2 pb-3 pt-3 border-b-[0.5px] border-grey cursor-pointer ${
                  subMenu.path === pathname ? "text-apollo-secondary" : ""
                }`}
              >
                {subMenu.name}
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

export default SideBarMenu;
