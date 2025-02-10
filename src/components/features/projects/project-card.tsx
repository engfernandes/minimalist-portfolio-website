import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
  Typography,
} from "@/components/ui";
import { ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { DATE_FORMAT_SHORT } from "@/constants";
import lodash from "lodash";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  dates: string[];
  link?: string;
  isLoading?: boolean;
}

export function ProjectCard({
  title,
  description,
  dates,
  link,
  isLoading,
}: ProjectCardProps) {
  const formattedDate =
    dates?.length > 1
      ? dates
          ?.map((date) => format(new Date(date), DATE_FORMAT_SHORT))
          ?.join(" - ")
      : `${format(new Date(dates[0]), DATE_FORMAT_SHORT)} - Present`;
  const formattedTitle = title
    ?.split("-")
    ?.map((word) => lodash.capitalize(word))
    ?.join(" ");
  const formmatedDescription =
    description?.length > 150
      ? description?.slice(0, 147) + "..."
      : description;

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="gap-0 pb-2">
          <Skeleton className="h-4 w-[15%]" />
          <CardTitle>
            <Skeleton className="h-5 w-[50%]" />
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-[1fr_auto] place-items-start gap-14 w-full">
          <div className="flex flex-col items-start justify-start gap-2 w-full">
            <Skeleton className="h-28 w-full" />
            <Skeleton className="h-4 w-[20%]" />
          </div>
          <Skeleton className="h-[145px] w-[145px]" />
        </CardContent>
      </Card>
    );
  }

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
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-[1fr_auto] place-items-start gap-14 w-full">
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <Typography
            variant="p"
            className="text-md text-zinc-600"
            text={formmatedDescription}
          />
          <Button variant="link" className="text-zinc-900 font-medium p-0">
            Try it out <ExternalLink size={12} />
          </Button>
        </div>
        <Image
          src="/images/Placeholder.png"
          alt=""
          width={145}
          height={145}
          className="object-cover rounded-md"
        />
      </CardContent>
    </Card>
  );
}
