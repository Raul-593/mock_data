'use server'

import { redirect } from 'next/navigation'

// MODO DEMO — El login no valida credenciales.
// El botón "Iniciar Sesión" redirige directo al dashboard.
export async function login() {
  redirect("/dashboard")
}
