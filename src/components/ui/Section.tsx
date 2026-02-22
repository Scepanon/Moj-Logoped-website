import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "cream" | "beige" | "light" | "primary" | "cream-tint";
  id?: string;
  narrow?: boolean;
  /** Add a soft gradient divider line at the top of the section */
  dividerTop?: boolean;
}

const bgMap = {
  white: "bg-white",
  cream: "bg-bg-cream",
  beige: "bg-bg-beige",
  light: "bg-bg-light",
  primary: "bg-primary-50",
  "cream-tint": "bg-gradient-to-b from-bg-cream/60 to-bg-beige/40",
};

export function Section({
  children,
  className = "",
  background = "white",
  id,
  narrow = false,
  dividerTop = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 lg:py-32 ${bgMap[background]} ${dividerTop ? "section-divider-soft" : ""} ${className}`}
    >
      <Container className={narrow ? "max-w-[860px]" : ""}>
        {children}
      </Container>
    </section>
  );
}
