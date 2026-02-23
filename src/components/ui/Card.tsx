import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-soft-sm p-6 md:p-8 ${
        hover
          ? "transition-all duration-[220ms] ease-out hover:shadow-soft-lg hover:scale-[1.02] hover:-translate-y-0.5 motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
