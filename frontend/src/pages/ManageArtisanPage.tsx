import {
  useCreateMyArtisan,
  useGetMyArtisan,
  useGetMyArtisanOrders,
  useUpdateMyArtisan,
} from "@/api/MyArtisanApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageArtisanForm from "@/forms/manage-artisan-form/ManageArtisanForm";

const ManageArtisanPage = () => {
  const { createArtisan, isLoading: isCreateLoading } =
    useCreateMyArtisan();
  const { artisan } = useGetMyArtisan();
  const { updateArtisan, isLoading: isUpdateLoading } =
    useUpdateMyArtisan();

  const { orders } = useGetMyArtisanOrders();

  const isEditing = !!artisan;

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-artisan">Manage Artisan</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 p-10 rounded-lg"
      >
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-artisan">
        <ManageArtisanForm
          artisan={artisan}
          onSave={isEditing ? updateArtisan : createArtisan}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageArtisanPage;