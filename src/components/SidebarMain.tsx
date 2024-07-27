"use client";

import { DrawerTheme } from "@/theme/DrawerTheme";
import { SidebarTheme } from "@/theme/SidebarTheme";
import classNames from "classnames";
import { Avatar, Button, Drawer, Sidebar, useThemeMode } from "flowbite-react";
import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { FaAnglesRight } from "react-icons/fa6";
import {
  HiChartPie,
  HiLogin,
  HiOutlinePlusCircle,
  HiPencil,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { IoIosNotifications, IoMdDownload } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export function SidebarMain() {
  const { computedMode, mode, toggleMode } = useThemeMode();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    if (computedMode === "dark") {
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.style.colorScheme = "light";
    }
  }, [computedMode]);

  return (
    <>
      <div
        className={classNames({
          "lg:w-[320px]": isOpen,
          "transition-all duration-300 ease-in-out": true,
        })}
      >
        <div className="w-5 mr-8 h-screen dark:bg-neutral-800 pt-4">
          <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
            <FaAnglesRight
              className="cursor-pointer "
              size="26px"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        {/* <Button onClick={() => setIsOpen(true)}>Show navigation</Button> */}

        <Drawer theme={DrawerTheme} open={isOpen} onClose={handleClose}>
          {/* <Drawer.Header
          title="Hello, Bonnie Green"
          titleIcon={() => (
            <>
              <Avatar
                className="me-2.5"
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            </>
          )}
        /> */}
          <Drawer.Items>
            <div className="flex mb-3">
              <div className="flex justify-start items-start pl-1">
                <Avatar
                  className="me-2.5"
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              </div>
              <div className="flex justify-center items-center pl-5">
                <span className="block text-lg">Bonnie Green</span>
              </div>
            </div>
          </Drawer.Items>
          <Drawer.Items>
            <div className="flex mt-2">
              <div className="flex justify-start items-start pl-1">
                {" "}
                <IoIosNotifications size="35px" className="cursor-pointer" />
                <CiSun
                  onClick={() => {
                    toggleMode();
                  }}
                  size="35px"
                  className="cursor-pointer"
                />
                <MdKeyboardDoubleArrowRight
                  className="cursor-pointer"
                  size="35px"
                  onClick={handleClose}
                />
              </div>

              <div className="ml-auto">
                <Button size={"sm"} onClick={() => setIsOpen(false)} outline>
                  Logout
                </Button>
              </div>
            </div>
          </Drawer.Items>
          <Drawer.Items>
            <Sidebar
              theme={SidebarTheme}
              aria-label="Sidebar with multi-level dropdown example"
              className="[&>div]:bg-transparent [&>div]:p-0"
            >
              <div className="flex h-full flex-col justify-between py-2">
                <div className="h-[calc(100vh-220px)]">
                  {/* <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form> */}
                  <Sidebar.Items>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item href="/" icon={HiChartPie}>
                        Dashboard
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="/e-commerce/products"
                        icon={HiShoppingBag}
                      >
                        Products
                      </Sidebar.Item>
                      <Sidebar.Item href="/users/list" icon={HiUsers}>
                        Users list
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="/authentication/sign-in"
                        icon={HiLogin}
                      >
                        Sign in
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="/authentication/sign-up"
                        icon={HiPencil}
                      >
                        Sign up
                      </Sidebar.Item>
                      <Button
                        fullSized
                        size={"md"}
                        onClick={() => setIsOpen(false)}
                        outline
                      >
                        <span className="mt-1"> Create New Task </span>
                        <HiOutlinePlusCircle
                          size={"25px"}
                          className="pl-auto ml-2"
                        />
                      </Button>
                    </Sidebar.ItemGroup>
                  </Sidebar.Items>
                </div>
                {/* <div className="flex justify-center items-center py-2"> */}
                {/* <HiInformationCircle size='20px' />
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  Flowbite React v1.0.0
                </span> */}

                <Button className="" fullSized outline>
                  <IoMdDownload size="35px" />
                  <span className="ml-10">
                    Download the APP <br /> Get it on Google Play
                  </span>
                </Button>
                {/* </div> */}
              </div>
            </Sidebar>
          </Drawer.Items>
        </Drawer>
      </div>
    </>
  );
}
