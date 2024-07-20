import { Artisan } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  artisan: Artisan;
};

const ArtisanInfo = ({ artisan }: Props) => {
  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {artisan.artisanName}
        </CardTitle>
        <CardDescription>
          {artisan.city}, {artisan.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex">
        {artisan.professions.map((item, index) => (
          <span className="flex">
            <span>{item}</span>
            {index < artisan.professions.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default ArtisanInfo;
