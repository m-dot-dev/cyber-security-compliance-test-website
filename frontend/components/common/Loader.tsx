"use client";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
const Loader = ({ isLoading }: { isLoading: boolean }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  });
  return (
    <div className="h-vh">
      {client && (
        <AlertDialog open={isLoading}>
          <AlertDialogContent className="bg-transparent border-none shadow-none justify-center">
            <Loader2 className="h-36 w-36 animate-spin text-white" />
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default Loader;
