import axios from "axios";
import type { CreateNoteData, Note, NoteTag } from "../types/note";
// import toast from "react-hot-toast";

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

function throwApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;

    if (status === 400) throw new Error("Validation failed");
    if (status === 403) throw new Error("Invalid token");
    if (status === 404) throw new Error("Note not found");
    if (status === 500) throw new Error("Server error");
  }

  throw new Error("Unknown error");
}

export const fetchNotes = async (
  params: FetchNotesParams = {}
): Promise<FetchNotesResponse> => {
  try {
    const response = await axios.get<FetchNotesResponse>("/notes", {
      params,
    });

    return response.data;
  } catch (error) {
    throwApiError(error);
  }
};

export const createNote = async (noteData: CreateNoteData): Promise<Note> => {
  try {
    const response = await axios.post<Note>("/notes", noteData);
    return response.data;
  } catch (error) {
    throwApiError(error);
  }
};

export const deleteNote = async (id: string): Promise<Note> => {
  try {
    const response = await axios.delete(`/notes/${id}`);
    return response.data;
  } catch (error) {
    throwApiError(error);
  }
};
