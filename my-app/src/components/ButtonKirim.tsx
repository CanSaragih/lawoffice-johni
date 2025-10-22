import { Loader2 } from "lucide-react";

export default function ButtonKirim({ isLoading }: { isLoading: boolean }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`flex items-center justify-center border-2 border-red-600 text-red-600 font-medium rounded-full px-10 py-3 hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer ${
        isLoading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin w-5 h-5 mr-2" />
          Mengirim...
        </>
      ) : (
        "Kirim Pesan"
      )}
    </button>
  );
}
