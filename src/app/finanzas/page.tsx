import { mockVentas, mockCompras } from "@/lib/mockData"
import { FinanzasClient } from "./FinanzasClient"

export default function Finanzas() {
  return (
    <FinanzasClient sales={mockVentas} purchases={mockCompras} />
  )
}