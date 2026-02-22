import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="text-center">
      {/* TODO: Replace PlaceholderImage with real team photos */}
      <div className="w-28 h-28 mx-auto mb-4">
        <PlaceholderImage
          label={member.name}
          aspect="square"
          className="rounded-full w-full h-full"
        />
      </div>
      <h3 className="font-heading text-lg font-semibold text-secondary-900">
        {member.name}
      </h3>
      <p className="text-sm text-primary-600 font-medium mt-1">{member.title}</p>
      <p className="text-sm text-secondary-500 mt-3 leading-relaxed">{member.bio}</p>
    </Card>
  );
}
