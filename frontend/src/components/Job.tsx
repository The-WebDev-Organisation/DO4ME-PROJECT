import { Job} from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  job: Job;
  addToCart: () => void;
};

const Job = ({ job, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{job.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
       ₵{(job.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default Job;
