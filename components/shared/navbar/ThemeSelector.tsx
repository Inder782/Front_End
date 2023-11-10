"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import React from "react";

const ThemeSelector = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="dark:bg-black bg-white  ">
      <MenubarMenu>
        <MenubarTrigger className="">
          {mode === "light" ? (
            <Image
              src="/sun.svg"
              width={25}
              height={25}
              alt="mode"
              className="activetheme "
            />
          ) : (
            <Image
              src="moon.svg"
              height={25}
              width={25}
              alt="moon"
              className="activetheme "
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="flex flex-col items-center  dark:bg-slate-600 gap-4 ">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              onClick={() => {
                setMode(item.value);
                if (item.value !== "system") {
                  localStorage.theme = item.value;
                }
              }}
              className="focus:bg-violet-500"
            >
              <Image
                src={item.icon}
                width={25}
                height={25}
                alt="mode"
                className="mr-2"
              />
              <p className="dark:invert font-bold">{item.label}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ThemeSelector;
