// ============================================================
// MODELADO DE DATOS — Sesión 2: E-business & E-commerce
// ------------------------------------------------------------
// Objetivo pedagógico: separar la INFORMACIÓN del negocio (datos)
// de la PRESENTACIÓN (HTML/CSS). En la Sesión 1 los productos de
// Grafiluz estaban escritos directamente dentro del HTML. Aquí se
// estructuran como datos, tal como lo haría cualquier sistema real
// de e-commerce (catálogo, base de datos, API interna, etc.).
//
// Cada alumno debe reemplazar este arreglo con los productos/
// servicios de SU propio proyecto, respetando la misma estructura
// de campos (o ampliándola si su negocio lo requiere).
// ============================================================

const productos = [
  {
    id: "antiestres-01",
    categoria: "TCG",
    nombre: "Pokemon TCG MEGA Special Card Set Mega",
    medidas: "10.5 x 7 cm",
    material: "Espuma de goma",
    colores: ["rojo", "azul", "gris", "blanco"],
    precioReferencialPEN: 199,
  },
  {
    id: "escritorio-01",
    categoria: "TOOLS",
    nombre: "Folder 4 Pocket Para 400 Cartas Charizard X",
    medidas: "14 cm",
    material: "Metal / Plástico ABS",
    colores: ["negro", "plateado", "azul"],
    precioReferencialPEN: 109,
  },
  {
    id: "tomatodo-01",
    categoria: "FIGURA",
    nombre: "Pokemon Takara Tomy MS 26 Gengar Japon",
    medidas: "22 x 7 cm",
    material: "Plástico libre de BPA",
    colores: ["rojo", "verde", "negro", "blanco"],
    precioReferencialPEN: 29.0,
  },
  {
    id: "llavero-01",
    categoria: "PELUCHE",
    nombre: "Pokemon Center Peluche Fit Haxorus Japon",
    medidas: "5 x 3 cm",
    material: "Aleación de zinc",
    colores: ["dorado", "plateado"],
    precioReferencialPEN: 69,
  },
  {
    id: "bolsa-01",
    categoria: "GAMING",
    nombre: "SanDisk Nintendo Switch 512GB Pokemon Gengar",
    medidas: "35 x 40 cm",
    material: "Tela no tejida (Spunbond)",
    colores: ["natural", "negro", "azul"],
    precioReferencialPEN: 499,
  },
];

// Se exporta para poder usarse tanto en el navegador (script clásico)
// como en un entorno con módulos, sin romper ninguno de los dos.
if (typeof module !== "undefined" && module.exports) {
  module.exports = productos;
}
