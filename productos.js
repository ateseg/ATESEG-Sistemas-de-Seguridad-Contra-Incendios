const productos = [
  {
    codigo: "EXT-02",
    nombre: "Extintor PQS de 2 lbs ",
    categoria: "VENTAS",
    descripcion: "Extintor portátil compacto ideal para vehículos y espacios pequeños.",
    stock: 30
  },
  {
    codigo: "EXT-05",
    nombre: "Extintor  PQS de 5 lbs  ",
    categoria: "VENTAS",
    descripcion: "Extintor multipropósito ideal para oficinas y hogares.",
    stock: 40
  },
  {
    codigo: "EXT-10",
    nombre: "Extintor PQS de 10 lbs ",
    categoria: "VENTAS",
    descripcion: "Extintor de 10 libras, ideal para uso industrial y grandes espacios.",
    stock: 15
  },
  {
    codigo: "EXT-20",
    nombre: "Extintor PQS de 20 lbs ",
    categoria: "VENTAS",
    descripcion: "Extintor de 20 libras, ideal para uso industrial y grandes espacios.",
    stock: 15
  },
  {
    codigo: "REC-PQS",
    nombre: "Recarga PQS",
    categoria: "RECARGAS",
    descripcion: "Servicio de recarga y mantenimiento para extintores de polvo químico seco.",
    stock: 100,
    opcionesTitulo: "Capacidad del extintor",
    opciones: ["2 lbs", "5 lbs", "10 lbs", "20 lbs", "50 lbs", "100 lbs", "150 lbs", "Otra capacidad"]
  },
  {
    codigo: "REC-CO2",
    nombre: "Recarga CO2",
    categoria: "RECARGAS",
    descripcion: "Servicio de recarga para extintores de dióxido de carbono.",
    stock: 50,
    opcionesTitulo: "Capacidad del extintor",
    opciones: ["5 lbs", "10 lbs", "20 lbs", "50 lbs", "Otra capacidad"]
  },
  {
    codigo: "REC-FOAM",
    nombre: "Recarga Foam (espuma)",
    categoria: "RECARGAS",
    descripcion: "Servicio de recarga para extintores a base de espuma.",
    stock: 40,
    opcionesTitulo: "Capacidad del extintor",
    opciones: ["2.5 gl", "4.5 gl", "Otra capacidad"]
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

  
  { codigo: "EXT0015", nombre: "Extintor CO2 10 lbs", categoria: "VENTAS", descripcion: "", stock: 3 },
  { codigo: "EXT0027", nombre: "Extintor CO2 10 lbs - AM", categoria: "VENTAS", descripcion: "", stock: 1 },
  
  
  { codigo: "EXT0013", nombre: "Extintor CO2 5 lbs", categoria: "VENTAS", descripcion: "", stock: 13 },
  { codigo: "EXT0026", nombre: "Extintor CO2 5 lbs - AM", categoria: "VENTAS", descripcion: "", stock: 1 },
  { codigo: "FOAM001", nombre: "Extintor Foam 2,5 gl", categoria: "VENTAS", descripcion: "", stock: 1 },
  { codigo: "EXT0019", nombre: "Extintor Foam 2.5 gls", categoria: "VENTAS", descripcion: "", stock: 24 },
  { codigo: "FOAM002", nombre: "Extintor Foam 4,5 gl", categoria: "VENTAS", descripcion: "", stock: 1 },
  { codigo: "EXT0011", nombre: "Extintor PQS 100 lbs", categoria: "VENTAS", descripcion: "", stock: 5 },
  { codigo: "EXT0005", nombre: "Extintor PQS 10 lbs", categoria: "VENTAS", descripcion: "", stock: 21 },
  { codigo: "EXT0012", nombre: "Extintor PQS 150 lbs", categoria: "VENTAS", descripcion: "", stock: 7 },
  { codigo: "EXT0007", nombre: "Extintor PQS 20 lbs", categoria: "VENTAS", descripcion: "", stock: 134 },
  { codigo: "EXT0025", nombre: "Extintor PQS 20 lbs - AM", categoria: "VENTAS", descripcion: "", stock: 1 },
  { codigo: "EXT0001", nombre: "Extintor PQS 2 lbs", categoria: "VENTAS", descripcion: "", stock: 164 },
  { codigo: "EXT0009", nombre: "Extintor PQS 50 lbs", categoria: "VENTAS", descripcion: "", stock: 2 },
  { codigo: "EXT0024", nombre: "Extintor PQS 50 lbs - AM", categoria: "VENTAS", descripcion: "", stock: 1 },
  { codigo: "EXT0003", nombre: "Extintor PQS 5 lbs", categoria: "VENTAS", descripcion: "", stock: 238 },
  { codigo: "EXT0023", nombre: "Extintor PQS 5 lbs - AM", categoria: "VENTAS", descripcion: "", stock: 0 },

// Repuestos de extintor
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
  { codigo: "VALV0002", nombre: "Válvula CO2", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 50 },
  { codigo: "VALV0001", nombre: "Válvula PQS", categoria: "REPUESTOS DE EXTINTOR", descripcion: "", stock: 0 },

 // Detectores y alarmas
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
  { codigo: "EMCN0002", nombre: "Estación Manual Intelbras", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 5 },
  { codigo: "LEST0001", nombre: "Luz Estroboscópicas Answare 12V", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 2 },
  { codigo: "MODD001", nombre: "Módulo Direccionable", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 2 },
  { codigo: "PULM002", nombre: "Pulsador Manual Asenware", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 3 },
  { codigo: "PULSA0001", nombre: "Pulsadores de Alarma", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 10 },
  { codigo: "SRN00001", nombre: "Sirena 30W", categoria: "DETECTORES Y ALARMAS", descripcion: "", stock: 2 },

 // Iluminación de emergencia
  { codigo: "LSL0001", nombre: "Letrero LED Salida", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 1 },
  { codigo: "LLS0001", nombre: "Luz LED Solar", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 3 },
  { codigo: "LMPA0004", nombre: "Lámpara de Emergencia Deppon", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 100 },
  { codigo: "LMPA0002", nombre: "Lámpara de Emergencia Evlite", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 1 },
  { codigo: "LMPA0005", nombre: "Lámpara de Emergencia Ivolux", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 100 },
  { codigo: "LMPA0001", nombre: "Lámpara de Emergencia Mercury", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 63 },
  { codigo: "LMPA0003", nombre: "Lámpara de Emergencia Thunder", categoria: "ILUMINACIÓN DE EMERGENCIA", descripcion: "", stock: 1 },

// Botiquines y primeros auxilios
  { codigo: "BOTC0004", nombre: "Botiquín Caja Vacía", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 2 },
  { codigo: "BOTG0003", nombre: "Botiquín Grande", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 16 },
  { codigo: "BOTM0002", nombre: "Botiquín Mediano", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 1 },
  { codigo: "BOTP0005", nombre: "Botiquín Pared Metal", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 1 },
  { codigo: "BOTQPD01", nombre: "Botiquín Pared Metal", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 1 },
  { codigo: "CAM0001", nombre: "Camillas", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 1 },
  { codigo: "KIDP0002", nombre: "Kid Mediano", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 1 },
  { codigo: "KIDP0001", nombre: "Kid Pequeño", categoria: "BOTIQUINES Y PRIMEROS AUXILIOS", descripcion: "", stock: 1 },

// Señalización y seguridad vial
  { codigo: "CTRB0001", nombre: "Cinta Adhesiva R/B 7 mts", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 10 },
  { codigo: "CIANT0001", nombre: "Cinta Antideslizante", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 150 },
  { codigo: "CON0001", nombre: "Cono 30cm", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 9 },
  { codigo: "CON0002", nombre: "Cono 45cm", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 2 },
  { codigo: "CON0003", nombre: "Cono 70cm", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 4 },
  { codigo: "CON0004", nombre: "Cono 90cm", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 11 },
  { codigo: "KVA0001", nombre: "Kit Vehicular Alfombra", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 33 },
  { codigo: "KVR0001", nombre: "Kit Vehicular Rojo", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 5 },
  { codigo: "MTAB0001", nombre: "Mantas Absorbentes", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 50 },
  { codigo: "PRB0001", nombre: "Pegatina Reflectiva Blanca 5 mts", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 9 },
  { codigo: "SEÑL0001", nombre: "Señaléticas puequeña 15 cm x 20 cm ", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "TODOS LOS DISEÑOS APLICAN, PVC", stock: 1000 },
  { codigo: "SEÑL0002", nombre: "Señaléticas mediana 20 cm x 30 cm ", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "TODOS LOS DISEÑOS APLICAN, PVC", stock: 1000 },
  { codigo: "TRINP001", nombre: "Triángulo Pequeño", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 25 },
  { codigo: "TRI0001", nombre: "Triángulos Grandes", categoria: "SEÑALIZACIÓN Y SEGURIDAD VIAL", descripcion: "", stock: 39 },

 // Gabinetes y cajas
  { codigo: "BUZON0001", nombre: "Buzón", categoria: "GABINETES Y CAJAS", descripcion: "", stock: 4 },
  { codigo: "CJMT0001", nombre: "Caja Metálica 23x26x8", categoria: "GABINETES Y CAJAS", descripcion: "", stock: 4 },
  { codigo: "CJSM0001", nombre: "Caja Siamesa", categoria: "GABINETES Y CAJAS", descripcion: "", stock: 5 },
  { codigo: "GNMT0001", nombre: "Gabinete 120 x 80", categoria: "GABINETES Y CAJAS", descripcion: "", stock: 2 },

// Herramientas
  { codigo: "MART00001", nombre: "Martillo", categoria: "HERRAMIENTAS", descripcion: "", stock: 9 }
];
