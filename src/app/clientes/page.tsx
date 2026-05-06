import { mockClientes } from "@/lib/mockData"
import { ClientesClient } from "./ClientesClient"

export default function Clientes() {
  return <ClientesClient clientes={mockClientes} />
}