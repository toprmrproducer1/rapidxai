"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import {VerticalCutReveal} from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Launch",
    description: "For founders validating demand and getting first wins quickly.",
    price: 2500,
    yearlyPrice: 25000,
    buttonText: "Book Discovery Call",
    buttonVariant: "outline" as const,
    includes: [
      "Voice & Text Automations:",
      "1 inbound agent (phone or WhatsApp/SMS)",
      "Greet → qualify → route → schedule flow",
      "FAQ ingestion (single source)",
      "CRM logging + daily summaries",
      "MVP/Micro-SaaS:",
      "MVP v0 with auth + clean UI",
      "1 core workflow + 1–2 integrations",
      "Analytics starter (events/funnels)",
    ],
  },
  {
    name: "Scale",
    description: "For teams with traction that want performance and reliability.",
    price: 7500,
    yearlyPrice: 75000,
    buttonText: "Book Discovery Call",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Advanced Voice & Text:",
      "Inbound + outbound campaigns",
      "3–5 advanced flows (A/B scripts, warm transfer)",
      "2-way CRM sync + lead scoring",
      "Campaign manager (lists, throttling)",
      "Production SaaS:",
      "Product v1 with billing live",
      "Roles/permissions & workspaces",
      "Robust analytics + experiments",
    ],
  },
  {
    name: "Enterprise",
    description: "For regulated, multi-brand, or high-volume operations.",
    price: 15000,
    yearlyPrice: 150000,
    buttonText: "Book Discovery Call",
    buttonVariant: "outline" as const,
    includes: [
      "Enterprise Voice Platform:",
      "Multi-agent fleets + skill-based routing",
      "Multilingual + SIP trunking & IVR",
      "Data residency + compliance-first setup",
      "99.9% uptime target with on-call",
      "Enterprise SaaS:",
      "Multi-tenant + usage-based billing",
      "Audit logs + feature flags",
      "Dedicated environment + roadmap",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-gray-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10  rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-purple-600 border-purple-600 bg-gradient-to-t from-purple-500 to-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-purple-600 border-purple-600 bg-gradient-to-t from-purple-500 to-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Yearly</span>
        </button>
      </div>
    </div>
  );
};

interface PricingSectionProps {
  primaryCTA: () => void;
}

export default function PricingSection4({ primaryCTA }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className=" min-h-screen  mx-auto relative bg-gray-950 overflow-x-hidden"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0  h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] "
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>
        <SparklesComp
          density={1800}
          direction="bottom"
          speed={1}
          color="#8b5cf6"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #8b5cf6",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 1"
          ></div>
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #8b5cf6",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 2"
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-2 relative z-50">
        <h2 className="text-4xl font-medium text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center "
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0, // First element
            }}
          >
            Plans that Start Where You Are
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-300"
        >
          One team. Two capabilities. Three ways to win.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, #8b5cf6 0%, transparent 70%)`,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="grid md:grid-cols-3 max-w-5xl gap-4 py-6 mx-auto px-4">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative text-white border-gray-800 ${
                plan.popular
                  ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-[0px_-13px_300px_0px_#8b5cf6] z-20"
                  : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-10"
              }`}
            >
              <CardHeader className="text-left ">
                <div className="flex justify-between">
                  <h3 className="text-3xl mb-2">{plan.name}</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold ">
                    $
                    <NumberFlow
                      format={{
                        currency: "USD",
                      }}
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-gray-300 ml-1">
                    /{isYearly ? "year" : "project"}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  onClick={primaryCTA}
                  className={`w-full mb-6 p-4 text-xl rounded-xl ${
                    plan.popular
                      ? "bg-gradient-to-t from-purple-500 to-purple-600 shadow-lg shadow-purple-800 border border-purple-500 text-white"
                      : plan.buttonVariant === "outline"
                        ? "bg-gradient-to-t from-gray-950 to-gray-600 shadow-lg shadow-gray-900 border border-gray-800 text-white"
                        : ""
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-gray-700">
                  <h4 className="font-medium text-base mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {plan.includes.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-start gap-2 ${
                          feature.endsWith(':') ? 'font-semibold text-purple-400 mt-3' : ''
                        }`}
                      >
                        {!feature.endsWith(':') && (
                          <span className="h-2.5 w-2.5 bg-purple-500 rounded-full grid place-content-center mt-1.5 flex-shrink-0"></span>
                        )}
                        <span className={`text-sm ${feature.endsWith(':') ? 'text-purple-400' : 'text-gray-300'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}