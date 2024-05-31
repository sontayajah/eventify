"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { ChevronsRight, Sparkle } from "lucide-react";

export default function LatestRelease() {
  return (
    <div className="w-full select-none border-b py-8 lg:w-1/3 lg:border-none lg:py-0 lg:pl-4">
      <div className="flex items-center gap-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          ผลงานใหม่
        </h4>
        <div className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 transition-colors duration-300 hover:bg-green-600 hover:text-green-100">
          ใหม่ <Sparkle width={12} height={12} />
        </div>
      </div>

      <div className="flex h-full flex-col">
        <div
          className="group flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card px-4 text-card-foreground transition-all hover:cursor-pointer hover:bg-accent"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=Wcp2gfuZFRc",
              "_blank",
            );
          }}
        >
          <div className="h-20 w-28 shrink-0 overflow-hidden">
            <Image
              src="/youtube-cover/bus-nmtw-reaction.jpg"
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-20 max-h-[85px] w-28 max-w-[127px] py-3 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="w-full overflow-hidden truncate whitespace-normal">
            <small className="line-clamp-2 text-sm font-semibold">
              {`[BUS REACTION] BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' OFFICIAL MV`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src="/logo/yt_icon_rgb.png"
                alt="youtube logo"
                width="16"
                height="16"
              />
              <p className="flex items-center text-sm text-muted-foreground">
                BUS because of you i shine
              </p>
            </div>
          </div>
        </div>

        <div
          className="group flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card px-4 text-card-foreground transition-all hover:cursor-pointer hover:bg-accent"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=0HeOd3sVNz4",
              "_blank",
            );
          }}
        >
          <div className="h-20 w-28 shrink-0 overflow-hidden">
            <Image
              src="/youtube-cover/bus-nmtw-artist-ver.jpg"
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-20 max-h-[85px] w-28 max-w-[127px] py-3 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="w-full overflow-hidden truncate whitespace-normal">
            <small className="line-clamp-2 text-sm font-semibold">
              {`BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' (Artist version)`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src="/logo/yt_icon_rgb.png"
                alt="youtube logo"
                width="16"
                height="16"
              />
              <p className="flex items-center text-sm text-muted-foreground">
                TADA LABELS
              </p>
            </div>
          </div>
        </div>

        <div
          className="group flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card px-4 text-card-foreground transition-all hover:cursor-pointer hover:bg-accent"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=FuadV-aiigQ",
              "_blank",
            );
          }}
        >
          <div className="h-20 w-28 shrink-0 overflow-hidden">
            <Image
              src="/youtube-cover/bus-nmtw.webp"
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-20 max-h-[85px] w-28 max-w-[127px] py-3 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="w-full overflow-hidden truncate whitespace-normal">
            <small className="line-clamp-2 text-sm font-semibold">
              {`BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' OFFICIAL MV`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src="/logo/yt_icon_rgb.png"
                alt="youtube logo"
                width="16"
                height="16"
              />
              <p className="flex items-center text-sm text-muted-foreground">
                TADA LABELS
              </p>
            </div>
          </div>
        </div>

        <div
          className="group flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card px-4 text-card-foreground transition-all hover:cursor-pointer hover:bg-accent"
          onClick={() => {
            window.open("https://youtube.com/watch?v=HwcSy5OwP8E", "_blank");
          }}
        >
          <div className="h-20 w-28 shrink-0 overflow-hidden">
            <Image
              src="/youtube-cover/bus5-marckris-Introduction.jpg"
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-20 max-h-[85px] w-28 max-w-[127px] py-3 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="w-full overflow-hidden truncate whitespace-normal">
            <small className="line-clamp-2 text-sm font-semibold">
              {`BUS5 Member Introduction - MARCKRIS`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src="/logo/yt_icon_rgb.png"
                alt="youtube logo"
                width="16"
                height="16"
              />
              <p className="flex items-center text-sm text-muted-foreground">
                BUS because of you i shine
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Button
            variant="link"
            className="h-min w-fit px-0 py-0 hover:text-primary/90 hover:no-underline dark:text-primary"
            onClick={() => {
              window.open("http://localhost:3000/LatestPosts", "_blank");
            }}
          >
            ดูเพิ่มเติม <ChevronsRight size={16} className="ml-0.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
