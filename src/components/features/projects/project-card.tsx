import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
  date: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  date,
  link,
}: ProjectCardProps) {
  const formattedDate = format(date, DATE_FORMAT_SHORT);
  const formattedTitle = title
    ?.split("-")
    ?.map((word) => lodash.capitalize(word))
    ?.join(" ");

  return (
    <Card className="w-full">
      <CardHeader>
        <Typography
          variant="p"
          className="text-xs text-zinc-600"
          text={formattedDate}
        />
        <CardTitle>
          <Typography variant="h4" text={formattedTitle} />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-[1fr 0.5fr] place-items-start w-max">
        <div className="w-max">
          <Typography
            variant="p"
            className="text-zinc-600"
            text={description}
          />
          <Button variant="link" className="text-zinc-900 p-0">
            Try it out <ExternalLink size={12} color="#18181b" />
          </Button>
        </div>
        <Image src="/images/Placeholder.png" alt="" width={145} height={145} />
      </CardContent>
    </Card>
  );
}
