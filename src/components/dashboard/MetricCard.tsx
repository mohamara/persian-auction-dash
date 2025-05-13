
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  icon: ReactNode;
  title: string;
  value: number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  delay?: 1 | 2 | 3 | 4;
};

const MetricCard = ({
  icon,
  title,
  value,
  trend,
  className,
  delay = 1,
}: MetricCardProps) => {
  return (
    <div className={cn("metric-card", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 mb-1">{title}</p>
          <div className="flex items-baseline">
            <h3 
              className={cn("text-2xl font-bold counter", `counter-delay-${delay}`)}
              data-value={value}
            >
              {value}
            </h3>
            {trend && (
              <span
                className={cn(
                  "mr-2 text-sm",
                  trend.isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                {trend.isPositive ? "↑" : "↓"} {trend.value}%
              </span>
            )}
          </div>
        </div>
        <div className="p-2 rounded-full bg-secondary/10 text-secondary">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
