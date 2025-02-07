import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Typography,
} from "@/components/ui";
import { format } from "date-fns";
import { DATE_FORMAT_SHORT } from "@/constants";
import lodash from "lodash";
import Image from "next/image";
import { Company } from "@prisma/client";

interface ExperienceCardProps {
  title: string;
  description: string;
  dates: string[];
  company: Company;
  tags?: string[];
  isLoading?: boolean;
}

export function ExperienceCard({
  title,
  description,
  dates,
  company,
  tags,
  isLoading,
}: ExperienceCardProps) {
  const formattedDate =
    dates?.length > 1
      ? dates
          ?.map((date) => format(new Date(date), DATE_FORMAT_SHORT))
          ?.join(" - ")
      : `${format(new Date(dates[0]), DATE_FORMAT_SHORT)} - Present`;
  const formattedTitle = title
    ?.split(" ")
    ?.map((word) => lodash.capitalize(word))
    ?.join(" ");
  const formatedDescription =
    description?.length > 150
      ? description?.slice(0, 147) + "..."
      : description;

  return (
    <Card className="w-full">
      <CardHeader className="gap-0 pb-2">
        <Typography
          variant="p"
          className="text-xs text-zinc-600"
          text={formattedDate}
        />
        <CardTitle>
          <Typography
            variant="h4"
            text={formattedTitle}
            className="tracking-wide"
          />
          <div className="flex items-center justify-start gap-2">
            {company.logoUrl && (
              <Image
                src={company.logoUrl}
                alt={`Logo ${company.name}`}
                width={30}
                height={30}
              />
            )}
            <Typography
              variant="p"
              text={company.name}
              className="text-zinc font-normal"
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-[1fr_auto] place-items-start gap-14 w-full">
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <Typography
            variant="p"
            className="text-md text-zinc-600"
            text={formatedDescription}
          />
        </div>
      </CardContent>
      <div className="flex flex-wrap items-center justify-start w-fit gap-2">
        {tags?.map((tag, index) => (
          <span key={index} className="py-1 px-4 bg-zinc-50 rounded-md">
            <Typography
              text={tag}
              variant="p"
              className="text-xs text-zinc-600"
            />
          </span>
        ))}
      </div>
    </Card>
  );
}
