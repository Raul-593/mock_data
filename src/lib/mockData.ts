// ============================================================
//  MOCK DATA — Datos de demostración (no conectado a DB)
// ============================================================

// ── Clientes ─────────────────────────────────────────────────
export const mockClientes = [
  { id: "c1", name: "Carlos Mendoza",    phone: "311 4521 890", address: "Calle 45 # 12-30, Bogotá",     created_at: "2024-01-10" },
  { id: "c2", name: "Laura Jiménez",     phone: "315 7834 562", address: "Carrera 7 # 80-15, Bogotá",    created_at: "2024-02-03" },
  { id: "c3", name: "Andrés Torres",     phone: "300 1234 567", address: "Av. El Dorado # 68-10, Bogotá",created_at: "2024-02-20" },
  { id: "c4", name: "Valentina Ríos",    phone: "317 9988 341", address: "Calle 100 # 19-41, Bogotá",    created_at: "2024-03-05" },
  { id: "c5", name: "Felipe Castillo",   phone: "320 6655 123", address: "Cra 15 # 93-47, Bogotá",       created_at: "2024-03-18" },
  { id: "c6", name: "Mariana Ospina",    phone: "312 4411 789", address: "Calle 72 # 5-83, Bogotá",      created_at: "2024-04-02" },
]

// ── Bicicletas ───────────────────────────────────────────────
export const mockBicicletas = [
  { id: "b1", brand: "Specialized", model: "Stumpjumper Comp", serial_number: "SPC-2023-0041", observacion: "Horquilla delantera con pequeño juego, pendiente revisión.", customers: { name: "Carlos Mendoza" } },
  { id: "b2", brand: "Trek",        model: "Marlin 7",         serial_number: "TRK-2022-1187", observacion: "",                                                              customers: { name: "Carlos Mendoza" } },
  { id: "b3", brand: "Giant",       model: "Talon 1",          serial_number: "GNT-2023-0558", observacion: "Cambio trasero golpeado, funciona correctamente.",             customers: { name: "Laura Jiménez" } },
  { id: "b4", brand: "Scott",       model: "Scale 970",        serial_number: "SCT-2021-3302", observacion: "",                                                              customers: { name: "Andrés Torres" } },
  { id: "b5", brand: "Canyon",      model: "Spectral 125",     serial_number: "CYN-2024-0093", observacion: "Bicicleta nueva, primera revisión programada.",                customers: { name: "Valentina Ríos" } },
  { id: "b6", brand: "Merida",      model: "Big Nine 100",     serial_number: "MRD-2022-7741", observacion: "",                                                              customers: { name: "Felipe Castillo" } },
  { id: "b7", brand: "Trek",        model: "Fuel EX 5",        serial_number: "TRK-2023-4490", observacion: "Frenos hidráulicos con pérdida de líquido.",                   customers: { name: "Mariana Ospina" } },
  { id: "b8", brand: "Specialized", model: "Rockhopper Sport", serial_number: "SPC-2020-2231", observacion: "",                                                              customers: { name: "Valentina Ríos" } },
]

// ── Mantenimientos ───────────────────────────────────────────
export const mockMantenimientos = [
  {
    id: "m1",
    service_date: "2024-05-01",
    description: "Ajuste de frenos y lubricación de cadena",
    observation: "Se ajustaron los frenos hidráulicos traseros. Se lubricó la cadena y se limpió el cassette.",
    cost: "45.00",
    status: "entregado",
    bicycles: { brand: "Specialized", model: "Stumpjumper Comp", customers: { name: "Carlos Mendoza" } },
  },
  {
    id: "m2",
    service_date: "2024-05-03",
    description: "Cambio de pastillas de freno",
    observation: "Pastillas delanteras y traseras reemplazadas.",
    cost: "60.00",
    status: "completado",
    bicycles: { brand: "Giant", model: "Talon 1", customers: { name: "Laura Jiménez" } },
  },
  {
    id: "m3",
    service_date: "2024-05-05",
    description: "Revisión general y tensado de rayos",
    observation: "Se centró la rueda trasera y se tensaron rayos sueltos.",
    cost: "35.00",
    status: "en_proceso",
    bicycles: { brand: "Trek", model: "Fuel EX 5", customers: { name: "Mariana Ospina" } },
  },
  {
    id: "m4",
    service_date: "2024-05-05",
    description: "Cambio de cadena y cassette",
    observation: "Cadena con desgaste superior al 75%. Cassette reemplazado simultáneamente.",
    cost: "95.00",
    status: "en_proceso",
    bicycles: { brand: "Scott", model: "Scale 970", customers: { name: "Andrés Torres" } },
  },
  {
    id: "m5",
    service_date: "2024-05-06",
    description: "Primera revisión — bicicleta nueva",
    observation: "Ajuste de indexación, frenos y presión de llantas.",
    cost: "25.00",
    status: "recibido",
    bicycles: { brand: "Canyon", model: "Spectral 125", customers: { name: "Valentina Ríos" } },
  },
  {
    id: "m6",
    service_date: "2024-04-28",
    description: "Limpieza profunda y lubricación",
    observation: "Limpieza completa de transmisión y lubricación de cables.",
    cost: "40.00",
    status: "entregado",
    bicycles: { brand: "Merida", model: "Big Nine 100", customers: { name: "Felipe Castillo" } },
  },
  {
    id: "m7",
    service_date: "2024-04-25",
    description: "Reparación de pinchazo y sellado tubeless",
    observation: "Se retiró el objeto extraño y se aplicó sellante tubeless.",
    cost: "20.00",
    status: "entregado",
    bicycles: { brand: "Trek", model: "Marlin 7", customers: { name: "Carlos Mendoza" } },
  },
  {
    id: "m8",
    service_date: "2024-05-06",
    description: "Cambio de cable de cambios trasero",
    observation: "",
    cost: "30.00",
    status: "recibido",
    bicycles: { brand: "Specialized", model: "Rockhopper Sport", customers: { name: "Valentina Ríos" } },
  },
]

// ── Ventas ───────────────────────────────────────────────────
export const mockVentas = [
  { id: "v1",  sales_date: "2024-05-01", sales_type: "servicio",   sub_total: 80.00,  discount: 0,    total: 80.00,  payment_method: "efectivo",   status: "pagado",   observacion: "" },
  { id: "v2",  sales_date: "2024-05-02", sales_type: "repuesto",   sub_total: 90.00,  discount: 0,    total: 90.00,  payment_method: "transferencia", status: "pagado", observacion: "Pastillas Shimano XT" },
  { id: "v3",  sales_date: "2024-05-03", sales_type: "servicio",   sub_total: 100.00,  discount: 0,   total: 100.00,  payment_method: "efectivo",   status: "pagado",   observacion: "" },
  { id: "v4",  sales_date: "2024-05-03", sales_type: "repuesto",   sub_total: 120.00, discount: 0,    total: 120.00, payment_method: "tarjeta",    status: "pagado",   observacion: "Cadena + cassette 11v" },
  { id: "v5",  sales_date: "2024-05-04", sales_type: "servicio",   sub_total: 35.00,  discount: 0,    total: 35.00,  payment_method: "efectivo",   status: "pagado",   observacion: "" },
  { id: "v6",  sales_date: "2024-05-04", sales_type: "accesorios", sub_total: 55.00,  discount: 0,    total: 55.00,  payment_method: "transferencia", status: "pagado", observacion: "Guantes + casco" },
  { id: "v7",  sales_date: "2024-05-05", sales_type: "servicio",   sub_total: 95.00,  discount: 0,    total: 95.00,  payment_method: "tarjeta",    status: "pendiente",observacion: "" },
  { id: "v8",  sales_date: "2024-05-05", sales_type: "repuesto",   sub_total: 70.00,  discount: 0,    total: 70.00,  payment_method: "efectivo",   status: "pagado",   observacion: "Cable y funda de freno" },
  { id: "v9",  sales_date: "2024-05-06", sales_type: "servicio",   sub_total: 50.00,  discount: 0,    total: 50.00,  payment_method: "efectivo",   status: "pagado",   observacion: "" },
  { id: "v10", sales_date: "2024-05-06", sales_type: "accesorios", sub_total: 90.00,  discount: 0,    total: 90.00,  payment_method: "tarjeta",    status: "pendiente",observacion: "Zapatillas MTB" },
]

// ── Compras ──────────────────────────────────────────────────
export const mockCompras = [
  { id: "p1", purchase_date: "2024-04-30", supplier_id: "s1", description: "Cadenas Shimano 11v x5",          sub_total: 75.00,  total: 75.00,  payment_method: "transferencia", status: "pagado",   observacion: "",                     suppliers: { name: "Shimano Colombia" } },
  { id: "p2", purchase_date: "2024-05-01", supplier_id: "s2", description: "Pastillas de freno hidráulico x10", sub_total: 90.00, total: 90.00,  payment_method: "efectivo",      status: "pagado",   observacion: "",                     suppliers: { name: "Bike Parts SAS" } },
  { id: "p3", purchase_date: "2024-05-02", supplier_id: "s1", description: "Cassettes 11-42T x3",             sub_total: 120.00, total: 120.00, payment_method: "tarjeta",       status: "pagado",   observacion: "",                     suppliers: { name: "Shimano Colombia" } },
  { id: "p4", purchase_date: "2024-05-03", supplier_id: "s3", description: "Cables de cambio y freno (caja)", sub_total: 45.00,  total: 45.00,  payment_method: "efectivo",      status: "pagado",   observacion: "",                     suppliers: { name: "Distribuidora Ciclismo" } },
  { id: "p5", purchase_date: "2024-05-04", supplier_id: "s2", description: "Aceite lubricante seco 120ml x6", sub_total: 36.00,  total: 36.00,  payment_method: "efectivo",      status: "pagado",   observacion: "",                     suppliers: { name: "Bike Parts SAS" } },
  { id: "p6", purchase_date: "2024-05-05", supplier_id: "s3", description: "Llantas MTB 29 x2.35 x4",        sub_total: 160.00, total: 160.00, payment_method: "transferencia", status: "pendiente",observacion: "Pendiente de entrega", suppliers: { name: "Distribuidora Ciclismo" } },
]

// ── Repuestos ─────────────────────────────────────────────────
export const mockRepuestos = [
  { id: "r1",  nombre: "Cadena Shimano XT 11v",          descripcion: "Cadena de 11 velocidades para transmisión MTB. Durabilidad alta y compatible con cassettes de 11-46T.", categoria: "Transmisión",  stock: 8,  precio: 32.00, costo: 18.00 },
  { id: "r2",  nombre: "Cassette Shimano SLX 11-42T",    descripcion: "Cassette de 11 velocidades con rango de 11 a 42 dientes. Ideal para terrenos montañosos.",              categoria: "Transmisión",  stock: 5,  precio: 55.00, costo: 30.00 },
  { id: "r3",  nombre: "Pastillas de freno Shimano XT",  descripcion: "Pastillas de freno hidráulico con compuesto metálico. Pack con 2 juegos.",                               categoria: "Frenos",       stock: 12, precio: 22.00, costo: 11.00 },
  { id: "r4",  nombre: "Cable de freno (par)",           descripcion: "Par de cables de acero inoxidable para frenos mecánicos. Incluye fundas y bornes de ajuste.",            categoria: "Frenos",       stock: 20, precio: 8.00,  costo: 3.50  },
  { id: "r5",  nombre: "Llanta Maxxis Aggressor 29x2.3", descripcion: "Llanta MTB 29 pulgadas, perfil abierto agresivo, compatible con sistema tubeless.",                      categoria: "Ruedas",       stock: 6,  precio: 48.00, costo: 27.00 },
  { id: "r6",  nombre: "Cámara de aire 29x1.9-2.35",     descripcion: "Cámara de aire con válvula Schrader para ruedas de 29 pulgadas.",                                        categoria: "Ruedas",       stock: 15, precio: 7.50,  costo: 3.00  },
  { id: "r7",  nombre: "Sellante tubeless 1L",           descripcion: "Sellante látex de alta viscosidad para sistemas tubeless. Cierra perforaciones de hasta 6mm.",           categoria: "Ruedas",       stock: 9,  precio: 18.00, costo: 9.00  },
  { id: "r8",  nombre: "Grasa para rodamientos 150g",    descripcion: "Grasa de litio para rodamientos de pedalier, cubos y dirección. Alta resistencia al agua.",              categoria: "Mantenimiento",stock: 10, precio: 12.00, costo: 5.50  },
  { id: "r9",  nombre: "Aceite lubricante seco 120ml",   descripcion: "Lubricante de cadena para condiciones secas. No atrae polvo ni barro.",                                  categoria: "Mantenimiento",stock: 18, precio: 9.00,  costo: 4.00  },
  { id: "r10", nombre: "Manillar MTB aluminio 780mm",    descripcion: "Manillar de aluminio 6061, rise 20mm, ancho 780mm. Compatible con potencias de 31.8mm.",                 categoria: "Accesorios",   stock: 4,  precio: 35.00, costo: 18.00 },
  { id: "r11", nombre: "Puños de manillar lock-on",      descripcion: "Puños ergonómicos con sistema lock-on de doble tornillo. Material: caucho y núcleo de aluminio.",        categoria: "Accesorios",   stock: 14, precio: 14.00, costo: 6.00  },
  { id: "r12", nombre: "Cable y funda de cambios (caja)",descripcion: "Caja con 10 juegos de cable y funda para cambios. Acero inoxidable anti-corrosión.",                    categoria: "Transmisión",  stock: 3,  precio: 25.00, costo: 13.00 },
]
