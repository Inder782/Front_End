import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Mobilenav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" className="dark:invert">
          ?
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="dark:invert">
        <SheetHeader className="flex gap-4 justify-center items-center ">
          <div className="flex gap-4 items-center">
            <Button variant="outline" className="">
              About us
            </Button>
            <Button variant="outline">Contact Us</Button>
            <Link href="https://twitter.com/fintoolx">
              <Image src="twitter.svg" width={40} height={40} alt="twitter" />
            </Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Mobilenav;
