import { mockBicicletas } from "@/lib/mockData"
import { BicicletasClient } from "./BicicletasClient"

type Bicicleta = {
  id: string
  brand: string
  model: string
  serial_number: string
  observacion: string
  customers: { name: string } | null
}

export default function Bicicletas() {
  return <BicicletasClient bicicletas={mockBicicletas as Bicicleta[]} />
}