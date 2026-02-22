import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "cream" | "beige" | "light" | "primary";
  id?: string;
  narrow?: boolean;
}

const bgMap = {
  white: "bg-white",
  cream: "bg-bg-cream",
  beige: "bg-bg-beige",
  light: "bg-bg-light",
  primary: "bg-primary-50",
};

export function Section({
  children,
  className = "",
  background = "white",
  id,
  narrow = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 lg:py-32 ${bgMap[background]} ${className}`}>
      <Container className={narrow ? "max-w-[860px]" : ""}>
        {children}
      </Container>
    </section>
  );
}
