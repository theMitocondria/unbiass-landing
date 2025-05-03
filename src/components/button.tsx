"use client";
import { Button } from "./ui/moving-borders";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Cheat-Free Hiring with Unbiass — Now 98% Accurate   <a
          href={'#contact'}
        >
          <span className="pl-[12px] block text-[#4c52ff]">Read Now</span>
        </a>
      </Button>
    </div>
  );
}
