import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import ProfessionsSection from "./ProfessionsSection";
import JobSection from "./JobSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Artisan } from "@/types";
import { useEffect } from "react";

const formSchema = z
  .object({
    artisanName: z.string({
      required_error: "artisan name is required",
    }),
    city: z.string({
      required_error: "city is required",
    }),
    country: z.string({
      required_error: "country is required",
    }),
    deliveryPrice: z.coerce.number({
      required_error: "delivery price is required",
      invalid_type_error: "must be a valid number",
    }),
    estimatedDeliveryTime: z.coerce.number({
      required_error: "estimated delivery time is required",
      invalid_type_error: "must be a valid number",
    }),
    professions: z.array(z.string()).nonempty({
      message: "please select at least one item",
    }),
    jobs: z.array(
      z.object({
        name: z.string().min(1, "name is required"),
        price: z.coerce.number().min(1, "price is required"),
      })
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  });

type ArtisanFormData = z.infer<typeof formSchema>;

type Props = {
  artisan?: Artisan;
  onSave: (artisanFormData: FormData) => void;
  isLoading: boolean;
};

const ManageArtisanForm = ({ onSave, isLoading, artisan }: Props) => {
  const form = useForm<ArtisanFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      professions: [],
      jobs: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!artisan) {
      return;
    }

    // price lowest domination of 100 = 100pence == 1GBP
    const deliveryPriceFormatted = parseInt(
      (artisan.deliveryPrice / 100).toFixed(2)
    );

    const jobsFormatted = artisan.jobs.map((item) => ({
      ...item,
      price: parseInt((item.price / 100).toFixed(2)),
    }));

    const updatedArtisan = {
      ...artisan,
      deliveryPrice: deliveryPriceFormatted,
      jobs: jobsFormatted,
    };

    form.reset(updatedArtisan);
  }, [form, artisan]);

  const onSubmit = (formDataJson: ArtisanFormData) => {
    const formData = new FormData();

    formData.append("artisanName", formDataJson.artisanName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);

    formData.append(
      "deliveryPrice",
      (formDataJson.deliveryPrice * 100).toString()
    );
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.professions.forEach((profession, index) => {
      formData.append(`professions[${index}]`, profession);
    });
    formDataJson.jobs.forEach((job, index) => {
      formData.append(`jobs[${index}][name]`, job.name);
      formData.append(
        `jobs[${index}][price]`,
        (job.price * 100).toString()
      );
    });

    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }

    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <ProfessionsSection />
        <Separator />
        <JobSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageArtisanForm;

