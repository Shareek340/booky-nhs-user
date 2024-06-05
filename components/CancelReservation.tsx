"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from "@radix-ui/react-alert-dialog";

const deleteData = async (url: string) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const CancelReservation = ({ reservation }: { reservation: any }) => {
  const router = useRouter();

  const cancelReservation = async (id: number) => {
    await deleteData(`http://127.0.0.1:1337/api/reservations/${id}`);
    router.refresh();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="md">Cancel Reservation</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="p-4">
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          <div className="mt-4 flex justify-end">
            <AlertDialogCancel asChild>
              <Button variant="outline" className="mr-2">Dismiss</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="destructive" onClick={() => cancelReservation(reservation.id)}>Continue</Button>
            </AlertDialogAction>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelReservation;
