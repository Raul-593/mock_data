"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  { mes: "Dic", ingresos: 1200, gastos: 800 },
  { mes: "Ene", ingresos: 1500, gastos: 950 },
  { mes: "Feb", ingresos: 1100, gastos: 700 },
  { mes: "Mar", ingresos: 1800, gastos: 1100 },
  { mes: "Abr", ingresos: 2100, gastos: 1300 },
  { mes: "May", ingresos: 1750, gastos: 1050 },
]

interface CustomTooltipProps {
  active?: boolean
  payload?: { name: string; value: number; color: string }[]
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null

  return (
    <div className="rounded-lg border bg-card px-4 py-3 shadow-md text-sm">
      <p className="font-semibold text-foreground mb-2">{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground capitalize">{entry.name}:</span>
          <span className="font-medium text-foreground">
            {new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(entry.value)}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function DashboardBarChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={data}
        margin={{ top: 8, right: 16, left: 0, bottom: 0 }}
        barCategoryGap="30%"
        barGap={4}
      >
        <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
        <XAxis
          dataKey="mes"
          tick={{ fontSize: 13 }}
          tickLine={false}
          axisLine={false}
          className="fill-muted-foreground"
        />
        <YAxis
          tickFormatter={(v) => `$${v}`}
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          className="fill-muted-foreground"
          width={52}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ opacity: 0.08 }} />
        <Legend
          formatter={(value) =>
            value.charAt(0).toUpperCase() + value.slice(1)
          }
          iconType="circle"
          iconSize={9}
          wrapperStyle={{ fontSize: 13 }}
        />
        <Bar
          dataKey="ingresos"
          name="ingresos"
          fill="#22c55e"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="gastos"
          name="gastos"
          fill="#ef4444"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
