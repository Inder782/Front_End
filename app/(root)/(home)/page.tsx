import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { prompts } from "@/constants";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div>
      <div className="flex flex-col mt-32  justify-center items-center dark:invert">
        <p className="h1 font-semibold ">Fintool</p>
        <span className="h2 ">CHATGPT + EDGAR</span>
        <div className="flex flex-col   lg:w-[550px]">
          <TooltipProvider>
            <Tooltip>
              {prompts.map((item) => (
                <Button
                  key={item.values}
                  variant="default"
                  className=" border-black dark:invert flex flex-col gap-4 mt-4 overflow-hidden text-ellipsis"
                >
                  {item.prompt}
                </Button>
              ))}
              <TooltipContent>
                <p>Ask this ?</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex  mb-2 justify-end mt-5  ">
            <Image
              src="send-icon.svg"
              width={25}
              height={25}
              alt="send"
              className="mt-2 mr-2 absolute cursor-pointer "
            />

            <Input
              className="shadow-lg border-gray-200 text-center z-5"
              placeholder="Ask anything about a company's filling"
            />
          </div>
        </div>
        <label className="h3 p-6 ">
          FintoolGPT is trained on SEC documents and earnings call transcripts
        </label>
      </div>
    </div>
  );
};

export default page;
