import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

const PLACEHOLDER_PATHS = ["/images/team/placeholder-", "placeholder"];

function isRealPhoto(photo: string) {
  return !PLACEHOLDER_PATHS.some((p) => photo.includes(p));
}

function getRoleBadge(title: string): string | null {
  if (title.toLowerCase().includes("psiholog")) return "Psiholog";
  if (title.toLowerCase().includes("logoped")) return "Logoped";
  return null;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const useRealPhoto = isRealPhoto(member.photo);
  const roleBadge = getRoleBadge(member.title);

  return (
    <Card className="text-center relative">
      {roleBadge && (
        <span
          className={`absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full ${
            roleBadge === "Psiholog"
              ? "bg-accent-teal-light text-accent-teal-dark"
              : "bg-primary-100 text-primary-700"
          }`}
        >
          {roleBadge}
        </span>
      )}
      <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-primary-100/50 shrink-0">
        {useRealPhoto ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="112px"
            className="object-cover object-center"
          />
        ) : (
          <PlaceholderImage
            label={member.name}
            aspect="square"
            className="absolute inset-0 w-full h-full rounded-none"
          />
        )}
      </div>
      <h3 className="font-heading text-lg font-semibold text-secondary-900">
        {member.name}
      </h3>
      <p className="text-sm text-primary-600 font-medium mt-1">{member.title}</p>
      <p className="text-sm text-secondary-500 mt-3 leading-relaxed">{member.bio}</p>
      {member.approachQuote && (
        <p className="text-sm text-primary-700/90 mt-3 leading-relaxed italic">
          &ldquo;{member.approachQuote}&rdquo;
        </p>
      )}
    </Card>
  );
}
