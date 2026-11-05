// Catálogo de la tienda ATESEG.
// Cada producto necesita: codigo (único), nombre, categoria, stock y, si quieres, descripcion.
// La foto se busca en fotos/<codigo>.jpg
// Al agregar uno nuevo, no olvides la coma al final de la llave "}".
const productos = [
  {
    codigo: "EXT-02",
    nombre: "Extintor de 2 lbs",
    categoria: "VENTAS",
    descripcion: "Extintor portátil compacto ideal para vehículos y espacios pequeños.",
    stock: 30
  },
  {
    codigo: "EXT-05",
    nombre: "Extintor de 5 lbs",
    categoria: "VENTAS",
    descripcion: "Extintor multipropósito ideal para oficinas y hogares.",
    stock: 40
  },
  {
    codigo: "EXT-20",
    nombre: "Extintor de 20 lbs",
    categoria: "VENTAS",
    descripcion: "Extintor de 20 libras, ideal para uso industrial y grandes espacios.",
    stock: 15
  },
  {
    codigo: "REC-PQS",
    nombre: "Recarga PQS",
    categoria: "RECARGAS",
    descripcion: "Servicio de recarga y mantenimiento para extintores de polvo químico seco.",
    stock: 100
  },
  {
    codigo: "REC-CO2",
    nombre: "Recarga CO2",
    categoria: "RECARGAS",
    descripcion: "Servicio de recarga para extintores de dióxido de carbono.",
    stock: 50
  },
  {
    codigo: "REC-FOAM",
    nombre: "Recarga Foam (espuma)",
    categoria: "RECARGAS",
    descripcion: "Servicio de recarga para extintores a base de espuma.",
    stock: 40
  },
  {
    codigo: "SUM-CONO",
    nombre: "Cono de seguridad 90 cm",
    categoria: "SUMINISTROS",
    descripcion: "Cono naranja de alta visibilidad con bandas reflectivas.",
    stock: 25
  },
  {
    codigo: "SUM-LAMP",
    nombre: "Lámpara de emergencia LED",
    categoria: "SUMINISTROS",
    descripcion: "Lámpara de emergencia recargable de alta potencia para pasillos y salidas.",
    stock: 20
  },

  // ---- Extintores (desde el Excel de inventario) ----
  { codigo: "EXT0015", nombre: "Extintor CO2 10 lbs", categoria: "EXTINTORES", descripcion: "", stock: 3 },
  { codigo: "EXT0027", nombre: "Extintor CO2 10 lbs - AM", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0016", nombre: "Extintor CO2 10 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0017", nombre: "Extintor CO2 20 lbs", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0028", nombre: "Extintor CO2 20 lbs - AM", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0018", nombre: "Extintor CO2 20 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0022", nombre: "Extintor CO2 50 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0013", nombre: "Extintor CO2 5 lbs", categoria: "EXTINTORES", descripcion: "", stock: 13 },
  { codigo: "EXT0026", nombre: "Extintor CO2 5 lbs - AM", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0014", nombre: "Extintor CO2 5 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 45 },
  { codigo: "FOAM001", nombre: "Extintor Foam 2,5 gl", categoria: "EXTINTORES", descripcion: "", stock: 1 },
  { codigo: "EXT0019", nombre: "Extintor Foam 2.5 gls", categoria: "EXTINTORES", descripcion: "", stock: 24 },
  { codigo: "EXT0020", nombre: "Extintor Foam 2.5 gls - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "FOAM002", nombre: "Extintor Foam 4,5 gl", categoria: "EXTINTORES", descripcion: "", stock: 1 },
  { codigo: "EXT0011", nombre: "Extintor PQS 100 lbs", categoria: "EXTINTORES", descripcion: "", stock: 5 },
  { codigo: "EXT0021", nombre: "Extintor PQS 100 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0005", nombre: "Extintor PQS 10 lbs", categoria: "EXTINTORES", descripcion: "", stock: 21 },
  { codigo: "EXT0006", nombre: "Extintor PQS 10 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0012", nombre: "Extintor PQS 150 lbs", categoria: "EXTINTORES", descripcion: "", stock: 7 },
  { codigo: "EXT0007", nombre: "Extintor PQS 20 lbs", categoria: "EXTINTORES", descripcion: "", stock: 134 },
  { codigo: "EXT0025", nombre: "Extintor PQS 20 lbs - AM", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0008", nombre: "Extintor PQS 20 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0001", nombre: "Extintor PQS 2 lbs", categoria: "EXTINTORES", descripcion: "", stock: 164 },
  { codigo: "EXT0002", nombre: "Extintor PQS 2 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0009", nombre: "Extintor PQS 50 lbs", categoria: "EXTINTORES", descripcion: "", stock: 2 },
  { codigo: "EXT0024", nombre: "Extintor PQS 50 lbs - AM", categoria: "EXTINTORES", descripcion: "", stock: 1 },
  { codigo: "EXT0010", nombre: "Extintor PQS 50 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0003", nombre: "Extintor PQS 5 lbs", categoria: "EXTINTORES", descripcion: "", stock: 238 },
  { codigo: "EXT0023", nombre: "Extintor PQS 5 lbs - AM", categoria: "EXTINTORES", descripcion: "", stock: 0 },
  { codigo: "EXT0004", nombre: "Extintor PQS 5 lbs - Usado", categoria: "EXTINTORES", descripcion: "", stock: 0 },

  // ---- Repuestos de extintor (desde el Excel de inventario) ----
  { codigo: "BSEX0002", nombre: "Base Extintor PQS 10 lbs", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 4 },
  { codigo: "BSEX0001", nombre: "Base Extintor PQS 5 lbs", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 8 },
  { codigo: "COLL0001", nombre: "Collarines", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },
  { codigo: "CORN0001", nombre: "Corneta CO2", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },
  { codigo: "CORN0002", nombre: "Corneta con Manguera CO2", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },
  { codigo: "COR0001", nombre: "Correas Plásticas", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },
  { codigo: "MANG0001", nombre: "Mangueras para Extintor", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },
  { codigo: "MAN0002", nombre: "Manómetro 240 PSI", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 2 },
  { codigo: "MAN0001", nombre: "Manómetro 300 PSI", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 17 },
  { codigo: "MAN0003", nombre: "Manómetro 400 PSI", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 19 },
  { codigo: "MANO0001", nombre: "Manómetros", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },
  { codigo: "PPGPM0001", nombre: "Pitón Pistola GPM 125", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 2 },
  { codigo: "PITPL0001", nombre: "Pitones para Extintor", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },
  { codigo: "SEG0001", nombre: "Seguros Plásticos", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },
  { codigo: "VALV0002", nombre: "Válvula CO2", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 50 },
  { codigo: "VALV0001", nombre: "Válvula PQS", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },

  // ---- Detectores y alarmas (desde el Excel de inventario) ----
  { codigo: "AISL0001", nombre: "Aislador de Lazos", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 3 },
  { codigo: "CTRL00001", nombre: "Anunciador Remoto Central", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 2 },
  { codigo: "SAI0001", nombre: "Audiovisual Intelbras", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 3 },
  { codigo: "DGAS0003", nombre: "Detector de Gas", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 1 },
  { codigo: "DHB0004", nombre: "Detector de Humo a Batería", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 0 },
  { codigo: "DHC0001", nombre: "Detector de Humo Centralizado", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 105 },
  { codigo: "DT0002", nombre: "Detector de Temperatura", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 2 },
  { codigo: "DHC0002", nombre: "Detector Humo Adhua", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 101 },
  { codigo: "DHC0006", nombre: "Detector Humo American Detec", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 1 },
  { codigo: "DHC0005", nombre: "Detector Humo Asendware", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 14 },
  { codigo: "DHB0001", nombre: "Detector Humo Batería", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 105 },
  { codigo: "DHC0004", nombre: "Detector Humo Intelbars", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 2 },
  { codigo: "DHC0003", nombre: "Detector Humo Vexhum", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 95 },
  { codigo: "DECTI001", nombre: "Detector Infrarrojo LC/200S", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 3 },
  { codigo: "DECTM001", nombre: "Detector Movimiento Paradox", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 1 },
  { codigo: "EMCN0001", nombre: "Estación Manual CN", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 14 },
  { codigo: "EMCN0002", nombre: "Estación Manual Intelbras", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 5 },
  { codigo: "LEST0001", nombre: "Luz Estroboscópicas Answare 12V", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 2 },
  { codigo: "MODD001", nombre: "Módulo Direccionable", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 2 },
  { codigo: "PULM002", nombre: "Pulsador Manual Asenware", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 3 },
  { codigo: "PULSA0001", nombre: "Pulsadores de Alarma", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 0 },
  { codigo: "SRN00001", nombre: "Sirena 30W", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 2 },

  // ---- Iluminación de emergencia (desde el Excel de inventario) ----
  { codigo: "LSL0001", nombre: "Letrero LED Salida", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 1 },
  { codigo: "LLS0001", nombre: "Luz LED Solar", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 3 },
  { codigo: "LMPA0004", nombre: "Lámpara de Emergencia Deppon", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 100 },
  { codigo: "LMPA0002", nombre: "Lámpara de Emergencia Evlite", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 1 },
  { codigo: "LMPA0005", nombre: "Lámpara de Emergencia Ivolux", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 100 },
  { codigo: "LMPA0001", nombre: "Lámpara de Emergencia Mercury", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 63 },
  { codigo: "LMPA0003", nombre: "Lámpara de Emergencia Thunder", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 1 },

  // ---- Botiquines y primeros auxilios (desde el Excel de inventario) ----
  { codigo: "BOTC0004", nombre: "Botiquín Caja Vacía", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 2 },
  { codigo: "BOTG0003", nombre: "Botiquín Grande", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 16 },
  { codigo: "BOTM0002", nombre: "Botiquín Mediano", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 0 },
  { codigo: "BOTP0005", nombre: "Botiquín Pared Metal", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 1 },
  { codigo: "BOTQPD01", nombre: "Botiquín Pared Metal", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 1 },
  { codigo: "CAM0001", nombre: "Camillas", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 1 },
  { codigo: "KIDP0002", nombre: "Kid Mediano", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 0 },
  { codigo: "KIDP0001", nombre: "Kid Pequeño", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 0 },

  // ---- Señalización y seguridad vial (desde el Excel de inventario) ----
  { codigo: "CTRB0001", nombre: "Cinta Adhesiva R/B 7 mts", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 10 },
  { codigo: "CIANT0001", nombre: "Cinta Antideslizante", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 0 },
  { codigo: "CON0001", nombre: "Cono 30cm", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 9 },
  { codigo: "CON0002", nombre: "Cono 45cm", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 2 },
  { codigo: "CON0003", nombre: "Cono 70cm", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 4 },
  { codigo: "CON0004", nombre: "Cono 90cm", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 11 },
  { codigo: "KVA0001", nombre: "Kit Vehicular Alfombra", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 33 },
  { codigo: "KVR0001", nombre: "Kit Vehicular Rojo", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 5 },
  { codigo: "MTAB0001", nombre: "Mantas Absorbentes", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 0 },
  { codigo: "PRB0001", nombre: "Pegatina Reflectiva Blanca 5 mts", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 9 },
  { codigo: "SEÑL0001", nombre: "Señaléticas", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 0 },
  { codigo: "TARM0001", nombre: "Tarjetas Metálicas", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 0 },
  { codigo: "TRINP001", nombre: "Triángulo Pequeño", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 25 },
  { codigo: "TRI0001", nombre: "Triángulos Grandes", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 39 },

  // ---- Tubería y accesorios contra incendio (desde el Excel de inventario) ----
  { codigo: "COD0006", nombre: "Codo Ranurado 2 1/2\" x 90", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 48 },
  { codigo: "COD0005", nombre: "Codo Ranurado 3\" x 45", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 8 },
  { codigo: "COD0004", nombre: "Codo Ranurado 3\" x 90", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 53 },
  { codigo: "COD0003", nombre: "Codo Ranurado 4\" x 45", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 76 },
  { codigo: "COD0002", nombre: "Codo Ranurado 4\" x 90", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 6 },
  { codigo: "COD0001", nombre: "Codo Ranurado 6\" x 45", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 11 },
  { codigo: "CRUZ0003", nombre: "Cruz Rosca 1", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 2 },
  { codigo: "CRUZ0001", nombre: "Cruz Rosca 1 1/4", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 1 },
  { codigo: "CRUZ0004", nombre: "Cruz Rosca 1/2", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 1 },
  { codigo: "CRUZ0002", nombre: "Cruz Rosca 3", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 3 },
  { codigo: "EDE00001", nombre: "Eductor Espuma", categoria: "TUBERÍA Y ACCESORIOS CONTRA INCENDIO", descripcion: "", stock: 3 },

  // ---- Gabinetes y cajas (desde el Excel de inventario) ----
  { codigo: "BUZON0001", nombre: "Buzón", categoria: "GABINETES Y CAJAS", descripcion: "", stock: 4 },
  { codigo: "CJMT0001", nombre: "Caja Metálica 23x26x8", categoria: "GABINETES Y CAJAS", descripcion: "", stock: 4 },
  { codigo: "CJSM0001", nombre: "Caja Siamesa", categoria: "GABINETES Y CAJAS", descripcion: "", stock: 5 },
  { codigo: "GNMT0001", nombre: "Gabinete 120 x 80", categoria: "GABINETES Y CAJAS", descripcion: "", stock: 2 },

  // ---- Herramientas (desde el Excel de inventario) ----
  { codigo: "MART00001", nombre: "Martillo", categoria: "HERRAMIENTAS", descripcion: "", stock: 9 }
];
