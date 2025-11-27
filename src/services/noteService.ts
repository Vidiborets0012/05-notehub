import axios from "axios";
import type { Note, NoteTag } from "../types/note";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_NOTEHUB_TOKEN
}`;

interface FetchNotesParams {
  search?: string;
  tag?: NoteTag;
  page?: number;
  perPage?: number;
  sortBy?: "created" | "updated";
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  params: FetchNotesParams = {}
): Promise<FetchNotesResponse> => {
  try {
    const response = await axios.get<FetchNotesResponse>("/notes", {
      params,
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 403) {
        toast.error("Invalid token");
        throw new Error("Unauthorized: Invalid token");
      }

      if (status === 500) {
        toast.error("Server error: Something went wrong");
        throw new Error("Server error)");
      }
    }
    toast.error("Unknown error occurred");
    throw new Error("Unknown error occurred");
  }
};
