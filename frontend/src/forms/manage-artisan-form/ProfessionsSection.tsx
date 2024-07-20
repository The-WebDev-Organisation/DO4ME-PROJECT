import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { professionList } from "@/config/artisan-options-config";
import { useFormContext } from "react-hook-form";
import ProfessionCheckbox from "./ProfessionsCheckbox";

const  ProfessionsSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Professions</h2>
        <FormDescription>
          Select your profession or professions
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="professions"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {professionList.map((professionItem) => (
                <ProfessionCheckbox profession={professionItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ProfessionsSection;
