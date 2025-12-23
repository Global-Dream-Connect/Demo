
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Calendar, Users } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';

interface FellowshipCardProps {
  title: string;
  university: string;
  funding: string;
  tags: string[];
  cta: { label: string; url: string };
  deadline: string;
  slotsAvailable: number;
}

const FellowshipCard: React.FC<FellowshipCardProps> = ({
  title,
  university,
  funding,
  tags,
  cta,
  deadline,
  slotsAvailable,
}) => {
  const formattedDeadline = new Date(deadline).toLocaleDateString();

  return (
    <Card className="flex h-full flex-col justify-between transition-shadow hover:shadow-md">
      {/* Header */}
      <CardHeader className="space-y-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{university}</p>
          </div>

          <Badge variant="secondary">{funding}</Badge>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <Button asChild variant="outline" className="w-fit border-[#070750] text-[#070750] hover:bg-[#070750] hover:text-white">
          <Link href={cta.url}>{cta.label}</Link>
        </Button>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <span>Deadline: {formattedDeadline}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Users className="h-4 w-4" />
          <span>{slotsAvailable} slots available</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FellowshipCard;
