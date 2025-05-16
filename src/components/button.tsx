"use client";
import { Button } from "./ui/moving-borders";

const blogUrl = import.meta.env.VITE_BLOG_URL
export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white text-black h-[5vh]  border-neutral-200 "
      >
        Cheat-Free Hiring with Unbiass — Now 98% Accurate   
        <a
          href={`${blogUrl}`}
        >
          <span className="pl-[12px] block text-[#4c52ff]">Read Now</span>
        </a>
      </Button>
    </div>
  );
}
