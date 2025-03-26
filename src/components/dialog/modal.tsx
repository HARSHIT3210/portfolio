import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDemo({
  dialogTrigger,
  dialogTitle,
  dialogDescription,
  dialogContent,
}: {
  dialogTrigger: React.ReactNode;
  dialogTitle: React.ReactNode;
  dialogDescription: React.ReactNode;
  dialogContent: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{dialogTrigger}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
}
