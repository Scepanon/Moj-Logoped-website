interface PlaceholderImageProps {
  label?: string;
  aspect?: "16:9" | "square" | "auto";
  className?: string;
}

export function PlaceholderImage({
  label,
  aspect = "16:9",
  className = "",
}: PlaceholderImageProps) {
  const aspectClass =
    aspect === "16:9"
      ? "aspect-video"
      : aspect === "square"
        ? "aspect-square"
        : "";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 via-primary-50 to-accent-teal-light ${aspectClass} ${className}`}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-primary-200/40 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-accent-teal/15 blur-2xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <svg
          className="w-8 h-8 text-primary-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <span className="text-[0.8rem] font-medium text-secondary-400 leading-tight">
          Fotografija uskoro
        </span>
        {label && (
          <span className="text-[0.7rem] text-secondary-300 leading-tight">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
