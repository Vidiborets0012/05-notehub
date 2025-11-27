import { useEffect } from "react";
import { fetchNotes } from "../services/noteService";

export default function App() {
  useEffect(() => {
    const test = async () => {
      try {
        const data = await fetchNotes({ page: 1, perPage: 5 });
        console.log("Notes:", data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    test();
  }, []);

  return <div>Testing fetch...</div>;
}
