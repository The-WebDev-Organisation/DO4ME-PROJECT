import { Order, Artisan } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyArtisan = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyArtisanRequest = async (): Promise<Artisan> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/artisan`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get artisan");
    }
    return response.json();
  };

  const { data: artisan, isLoading } = useQuery(
    "fetchMyArtisan",
    getMyArtisanRequest
  );

  return { artisan, isLoading };
};

export const useCreateMyArtisan = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyArtisanRequest = async (
    ArtisanFormData: FormData
  ): Promise<Artisan> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/artisan`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: ArtisanFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create artisan");
    }

    return response.json();
  };

  const {
    mutate: createArtisan,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyArtisanRequest);

  if (isSuccess) {
    toast.success("Artisan created!");
  }

  if (error) {
    toast.error("Unable to update artisan");
  }

  return { createArtisan, isLoading };
};

export const useUpdateMyArtisan = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateArtisanRequest = async (
    ArtisanFormData: FormData
  ): Promise<Artisan> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/artisan`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: ArtisanFormData,
    });

    if (!response) {
      throw new Error("Failed to update artisan");
    }

    return response.json();
  };

  const {
    mutate: updateArtisan,
    isLoading,
    error,
    isSuccess,
  } = useMutation(updateArtisanRequest);

  if (isSuccess) {
    toast.success("Artisan Updated");
  }

  if (error) {
    toast.error("Unable to update Artisan");
  }

  return { updateArtisan, isLoading };
};

export const useGetMyArtisanOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyArtisanOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/artisan/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }

    return response.json();
  };

  const { data: orders, isLoading } = useQuery(
    "fetchMyArtisanOrders",
    getMyArtisanOrdersRequest
  );

  return { orders, isLoading };
};

type UpdateOrderStatusRequest = {
  orderId: string;
  status: string;
};

export const useUpdateMyArtisanOrder = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyArtisanOrder = async (
    updateStatusOrderRequest: UpdateOrderStatusRequest
  ) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/artisan/order/${updateStatusOrderRequest.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updateStatusOrderRequest.status }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update status");
    }

    return response.json();
  };

  const {
    mutateAsync: updateArtisanStatus,
    isLoading,
    isError,
    isSuccess,
    reset,
  } = useMutation(updateMyArtisanOrder);

  if (isSuccess) {
    toast.success("Order updated");
  }

  if (isError) {
    toast.error("Unable to update order");
    reset();
  }

  return { updateArtisanStatus, isLoading };
};
