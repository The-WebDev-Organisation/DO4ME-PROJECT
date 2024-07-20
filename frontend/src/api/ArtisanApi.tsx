import { SearchState } from "@/pages/SearchPage";
import { Artisan, ArtisanSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetArtisan = (artisanId?: string) => {
  const getArtisanByIdRequest = async (): Promise<Artisan> => {
    const response = await fetch(
      `${API_BASE_URL}/api/artisan/${artisanId}`
    );

    if (!response.ok) {
      throw new Error("Failed to get artisan");
    }

    return response.json();
  };

  const { data: artisan, isLoading } = useQuery(
    "fetchArtisan",
    getArtisanByIdRequest,
    {
      enabled: !!artisanId,
    }
  );

  return { artisan, isLoading };
};

export const useSearchArtisans = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<ArtisanSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedProfessions", searchState.selectedProfessions.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/artisan/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get artisan");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchArtisans", searchState],
    createSearchRequest,
    { enabled: !!city }
  );

  return {
    results,
    isLoading,
  };
};

