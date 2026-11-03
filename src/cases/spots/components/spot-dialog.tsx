import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MapPin } from "lucide-react"
import { useSpots } from "../hooks/use-hook"
import type { SpotDTO } from "../dtos/spot.dto";
import { cn } from "cn";

interface SpotDialogProps {
  open: boolean;
  onSelect: (spot: SpotDTO) => void;
  selectedSpotId?: string;
}

export function SpotDialog({
  open,
  onSelect,
  selectedSpotId
 }: SpotDialogProps) {

  const { data: spots = [] } = useSpots();

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Selecione a sua mesa</DialogTitle>
          <DialogDescription>
            Escolha a mesa que você está para fazer o pedido.
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 overflow-y-auto">
          <div className="grid grid-cols-3 gap-3">

            { spots.map( spot => (
              <Button
                key={spot.id}
                variant="outline"
                className={cn(
                  'h-auto min-h-20 flex-col p-4',
                  spot.id === selectedSpotId && 'border-primary bg-accent text-primary'
                )}

                onClick={() => onSelect(spot)}
              >
                <MapPin className="size-6" />
                { spot.name }
              </Button>
            ))}
            

          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}