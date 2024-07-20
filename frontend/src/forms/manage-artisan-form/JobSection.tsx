import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import JobInput from "./JobInput";

const JobSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "jobs",
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Job</h2>
        <FormDescription>
          Name and Price the Jobs you offer under each profession
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="jobs"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <JobInput
                index={index}
                removeJob={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button type="button" onClick={() => append({ name: "", price: "" })}>
        Add Jobs
      </Button>
    </div>
  );
};

export default JobSection;
