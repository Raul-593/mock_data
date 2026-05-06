import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/componentes/ui/cards"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/componentes/ui/table"
import { mockVentas, mockCompras, mockMantenimientos } from "@/lib/mockData"
import DashboardBarChart from "@/componentes/finanzas/DashboardBarChart"

export default function Dashboard() {
  // Totales calculados desde datos falsos
  const totalSales   = mockVentas.reduce((acc, v) => acc + v.total, 0)
  const totalPurches = mockCompras.reduce((acc, p) => acc + p.total, 0)
  const netBalance   = totalSales - totalPurches

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n)

  // Actividades pendientes (no entregadas)
  const pendientes = mockMantenimientos.filter(
    (m) => m.status !== "entregado" && m.status !== "cancelado" && m.status !== "completado"
  )

  const ESTADOS: Record<string, { label: string; color: string }> = {
    recibido:   { label: "Recibido",   color: "text-blue-500" },
    en_proceso: { label: "En Proceso", color: "text-yellow-500" },
    completado: { label: "Completado", color: "text-purple-500" },
    entregado:  { label: "Entregado",  color: "text-green-500" },
    cancelado:  { label: "Cancelado",  color: "text-red-500" },
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">593 Cycling Studio</h1>
        <p className="text-muted-foreground mt-1">Resumen del mes</p>
      </div>

      {/* ── KPIs ── */}
      <div className="grid gap-4 md:grid-cols-4">
        {/* Ingresos */}
        <Card className="flex flex-col justify-center">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-base font-semibold">Ingreso Del Mes</CardTitle>
              <CardDescription>Ingresos totales del mes</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <span className="text-2xl text-green-500">{fmt(totalSales)}</span>
          </CardContent>
        </Card>

        {/* Gastos */}
        <Card className="flex flex-col justify-center">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-base font-semibold">Gastos Del Mes</CardTitle>
              <CardDescription>Gastos totales del mes</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <span className="text-2xl text-red-500">{fmt(totalPurches)}</span>
          </CardContent>
        </Card>

        {/* Saldo Neto */}
        <Card className="flex flex-col justify-center">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-base font-semibold">Saldo Neto</CardTitle>
              <CardDescription>Saldo total del mes</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <span className="text-2xl">{fmt(netBalance)}</span>
          </CardContent>
        </Card>

        {/* Actividades Pendientes */}
        <Card className="flex flex-col justify-center">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-base font-semibold">Actividades Pendientes</CardTitle>
              <CardDescription>Mantenimientos en curso</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <span className="text-2xl">{pendientes.length}</span>
          </CardContent>
        </Card>
      </div>

      {/* ── Gráfico de Barras ── */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-1">
        <Card className="md:col-span-1 flex flex-col justify-center">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>Ingreso vs Gastado</CardTitle>
              <CardDescription>Últimos 6 meses</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <DashboardBarChart />
          </CardContent>
        </Card>
      </div>

      {/* ── Tabla Actividades Pendientes ── */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
        <Card className="md:col-span-5 flex flex-col justify-center">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>Actividades Pendientes</CardTitle>
              <CardDescription>Mantenimientos sin entregar</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="overflow-x-auto max-h-[400px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Bicicleta</TableHead>
                  <TableHead>Costo</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendientes.map((m) => {
                  const estado = ESTADOS[m.status] ?? { label: m.status, color: "text-muted-foreground" }
                  return (
                    <TableRow key={m.id}>
                      <TableCell>{m.service_date}</TableCell>
                      <TableCell>{m.bicycles?.customers?.name ?? "—"}</TableCell>
                      <TableCell>{m.bicycles?.brand} {m.bicycles?.model}</TableCell>
                      <TableCell>${m.cost}</TableCell>
                      <TableCell>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${estado.color}`}>
                          {estado.label}
                        </span>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}