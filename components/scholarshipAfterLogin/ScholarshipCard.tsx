"use client";

import { FC } from "react";
import { MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ScholarshipCardProps {
  title: string;
  amount: string;
  tags: string[];
  deadline: string;
  location?: string;
  slots?: number;
  isNew?: boolean;
}

const ScholarshipCard: FC<ScholarshipCardProps> = ({
  title,
  amount,
  tags,
  deadline,
  location,
  slots,
  isNew = true,
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-[#333333]">{title}</h3>

        {isNew && (
          <span className="text-xs font-medium text-[#2E476B]">New</span>
        )}
      </div>

      {/* Amount */}
      <p className="text-[#333333] mt-1 font-medium">{amount} grant</p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mt-3">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-[12px] py-0.5 px-2 rounded text-[#2E476B]"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Action */}
      <Button
        asChild
        variant="outline"
        className="mt-4 border-[#070750] text-[#070750] hover:bg-[#070750] hover:text-white"
      >
        <Link href="#">View details</Link>
      </Button>

      {/* Footer Info */}
      <div className="flex flex-wrap justify-between items-center mt-4 text-sm text-[#767676] gap-3">
        <div className="flex items-center gap-1">
          <CalendarDays size={16} />
          Deadline: {deadline}
        </div>

        {location && (
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            {location}
          </div>
        )}

        {slots && <span>{slots} slots available</span>}
      </div>
    </div>
  );
};

export default ScholarshipCard;
