import * as React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Filter, Users, Clock, Zap, ArrowRight, Bot, Phone, Rocket, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Type definitions for component props
interface ActivityStat {
  label: string;
  value: number;
  color: string;
}

interface TeamMember {
  id: string;
  name: string;
  avatarUrl: string;
}

interface MarketingDashboardProps {
  title?: string;
  teamActivities: {
    totalHours: number;
    stats: ActivityStat[];
  };
  team: {
    memberCount: number;
    members: TeamMember[];
  };
  cta: {
    text: string;
    buttonText: string;
    onButtonClick: () => void;
  };
  onFilterClick?: () => void;
  className?: string;
}

// Sub-component for animating numbers
const AnimatedNumber = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest * 10) / 10);

  React.useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

// Main Component
export const MarketingDashboard = React.forwardRef<
  HTMLDivElement,
  MarketingDashboardProps
>(({ 
  title = "AI Performance Analytics",
  teamActivities,
  team,
  cta,
  onFilterClick,
  className 
}, ref) => {
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverTransition = { type: "spring", stiffness: 300, damping: 15 };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "w-full max-w-2xl p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 text-white rounded-3xl shadow-2xl shadow-purple-500/10 hover:border-purple-500/50 transition-all duration-500",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-display font-bold text-white">{title}</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onFilterClick} 
          aria-label="Filter activities"
          className="hover:bg-purple-600/20 hover:text-purple-400 transition-colors"
        >
          <Filter className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Team Activities Card */}
        <motion.div 
          variants={itemVariants} 
          whileHover={{ scale: 1.03, y: -5 }}
          transition={hoverTransition}
        >
          <Card className="h-full p-6 overflow-hidden rounded-2xl bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-6">
                <p className="font-medium text-gray-300">Voice Agent Performance</p>
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  <AnimatedNumber value={teamActivities.totalHours} />
                </span>
                <span className="ml-1 text-gray-400">calls handled</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-3 mb-3 overflow-hidden rounded-full bg-gray-700/50 flex">
                {teamActivities.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={cn("h-full", stat.color)}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                ))}
              </div>
              {/* Legend */}
              <div className="flex items-center justify-between text-xs text-gray-400">
                {teamActivities.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <span className={cn("w-2 h-2 rounded-full", stat.color)}></span>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Members Card */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -5 }}
          transition={hoverTransition}
        >
          <Card className="h-full p-6 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 to-violet-600/20 border-purple-500/30">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-6">
                <p className="font-medium text-purple-200">Active Agents</p>
                <Bot className="w-5 h-5 text-purple-300" />
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                   <AnimatedNumber value={team.memberCount} />
                </span>
                <span className="ml-1 text-purple-300">agents</span>
              </div>
              {/* Avatar Stack */}
              <div className="flex -space-x-2">
                {team.members.slice(0, 4).map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.2, zIndex: 10, y: -2 }}
                  >
                    <Avatar className="border-2 border-purple-300/50">
                      <AvatarImage src={member.avatarUrl} alt={member.name} />
                      <AvatarFallback className="bg-purple-600 text-white">{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* CTA Banner */}
      <motion.div 
        variants={itemVariants} 
        whileHover={{ scale: 1.02 }}
        transition={hoverTransition}
        className="mt-6"
      >
         <div className="flex items-center justify-between p-6 rounded-2xl bg-gray-800/30 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-600/20 border border-purple-500/30">
                  <Zap className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-sm font-medium text-gray-300">{cta.text}</p>
            </div>
            <Button 
              onClick={cta.onButtonClick} 
              className="shrink-0 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white border-none shadow-lg shadow-purple-500/25"
            >
                {cta.buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
         </div>
      </motion.div>
    </motion.div>
  );
});

MarketingDashboard.displayName = "MarketingDashboard";