"use client"

import { useState } from "react"
import { Input } from "@/componentes/ui/input"
import { Label } from "@/componentes/ui/label"
import { FormDialog } from "@/componentes/FormDialog"
import { toast } from "sonner"

type Props = {
    onClienteAgregado: (cliente: any) => void
    trigger?: React.ReactNode
}

export function AgregarClienteDialog({ onClienteAgregado, trigger }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    
    function reset() { setName(""), setPhone(""), setAddress("")}
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim()) { 
            toast.error("El nombre es obligatorio")
            return 
        }
        setIsSubmitting(true)
    }

    return (
        <FormDialog 
            title="Agregar Cliente"
            description="Ingresa los datos del nuevo cliente."
            trigger={trigger}
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitLabel="Guardar Cliente"
        >
            <div className="grid gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Ej. Juan Pérez" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Ej. 0991234567" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" value={address} onChange={e => setAddress(e.target.value)} placeholder="Ej. Av. Principal 123" />
            </div>
        </FormDialog>
    )
}

