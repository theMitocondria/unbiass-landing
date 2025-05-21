import { motion } from "motion/react";
import { cn } from "../lib/utils";

import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Catch Cheaters Effortlessly",
      description:
        "Our advanced anti-cheat engine analyzes submissions against a vast dataset — including content from sources like Telegram and ChatGPT — to detect and block plagiarism. Every suspicious entry is flagged and displayed in a detailed dashboard for easy review.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Hackathon Interviews",
      description:
        "Put candidates to the test in a shared coding room — assess how they perform under pressure, debug in real-time, and reveal true technical ability.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Ultimate AI Challenge",
      description:
        "Trained on 50,000+ real interviews, it grills candidates like a pro and scores them with laser-sharp precision—no hand-holding required. They bring AI to cheat the system? Cute. We bring AI to call their bluff.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "We Build Your Dream Team",
      description: "Building your dream product? Whether you're launching a startup or scaling your next big thing, we handpick developers, designers, and product brains who actually get your vision, tech stack, and growth game. You focus on building what matters—we’ll make sure your hires aren’t just good, they’re perfect.",
      icon: <IconCloud />,
    },
    {
      title: "Hiring Power in Your Pocket",
      description: "Manage everything from a sleek dashboard—track candidates, run interviews, and make hires right from your phone. No tech skills? No problem. We’ve made it foolproof, so you can focus on choosing talent, not learning tools.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our Hiring Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Free Trial",
      description:
        "Still thinking? Try the free trial. No strings, no stress—just a taste of how hiring should feel.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="mt-[100px]" id="features">
      <div className="px-[12vw] ">
        <p className="mt-[5vh] text-sm font-medium text-[#4c52ff] mb-2">Build.With</p>
        <h1 className="z-10 max-w-4xl text-2xl font-bold text-slate-700 md:text-2xl lg:text-4xl ">
          {"Technology. Testing. Trust."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      <div className="bg-[#4c52ff] h-[0.1px] w-[100%] opacity-10"></div>
      
    </div>

  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature ",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b "
      )}
    >

      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100  to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100  to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 ">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 ">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
