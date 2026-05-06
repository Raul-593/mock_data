import { mockMantenimientos } from "@/lib/mockData"
import { MantenimientoClient } from "./MantenimientoClient"

export default function Mantenimientos() {
  return (
    <MantenimientoClient mantenimientos={mockMantenimientos} />
  )
}