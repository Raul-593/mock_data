import { mockRepuestos } from "@/lib/mockData"
import { RepuestosClient } from "./RepuestosClient"

export default function Repuestos() {
  return <RepuestosClient repuestos={mockRepuestos} />
}
