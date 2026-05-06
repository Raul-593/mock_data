"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/componentes/ui/cards"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/componentes/ui/table"

type Repuesto = {
  id: string
  nombre: string
  descripcion: string
  categoria: string
  stock: number
  precio: number
  costo: number
}

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n)

export function RepuestosClient({ repuestos }: { repuestos: Repuesto[] }) {
  const categorias = useMemo(() => {
    const cats = repuestos.map((r) => r.categoria)
    return ["Todas", ...Array.from(new Set(cats)).sort()]
  }, [repuestos])

  const [filtro, setFiltro] = useState("Todas")

  const filtrados = useMemo(
    () => (filtro === "Todas" ? repuestos : repuestos.filter((r) => r.categoria === filtro)),
    [repuestos, filtro]
  )

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">593 Cycling Studio</h1>
          <p className="text-muted-foreground mt-1">
            {filtrados.length} repuesto{filtrados.length !== 1 ? "s" : ""}
            {filtro !== "Todas" ? ` en ${filtro}` : " registrados"}
          </p>
        </div>

        {/* Filtro por categoría */}
        <div className="relative">
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="appearance-none cursor-pointer bg-background border border-border rounded-lg pl-4 pr-10 py-2.5 text-sm font-medium text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-foreground/30 transition-colors duration-150 min-w-[200px]"
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "Todas" ? `Todas las categorías (${repuestos.length})` : `${cat} (${repuestos.filter((r) => r.categoria === cat).length})`}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">Repuestos</CardTitle>
          <CardDescription>Inventario de repuestos y accesorios</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {filtrados.length === 0 ? (
            <p className="text-muted-foreground text-sm py-4">No hay repuestos en esta categoría.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead className="max-w-[280px]">Descripción</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="text-center">Stock</TableHead>
                  <TableHead className="text-right">Precio</TableHead>
                  <TableHead className="text-right">Costo</TableHead>
                  <TableHead className="text-right">Margen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtrados.map((r) => {
                  const margen = ((r.precio - r.costo) / r.precio) * 100
                  const stockBajo = r.stock <= 5
                  return (
                    <TableRow key={r.id}>
                      <TableCell className="font-medium whitespace-nowrap">{r.nombre}</TableCell>
                      <TableCell className="text-muted-foreground text-xs max-w-[280px]">
                        <span className="line-clamp-2">{r.descripcion}</span>
                      </TableCell>
                      <TableCell>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${r.categoria}`}>
                          {r.categoria}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={`text-sm font-semibold ${stockBajo ? "text-red-500" : "text-foreground"}`}>
                          {r.stock}
                          {stockBajo && <span className="ml-1 text-[10px] font-normal text-red-400">bajo</span>}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-medium text-green-600">{fmt(r.precio)}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{fmt(r.costo)}</TableCell>
                      <TableCell className="text-right text-xs font-medium text-blue-600">
                        {margen.toFixed(0)}%
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
