/* Logo names and how the company name is set next to each mark. */

export type LogoKey =
  | "loop"    // 1 · Hot & Cold loop
  | "vent"    // 2 · Vent "A"
  | "fan"     // 3 · Fan
  | "tile"    // 4 · Ice tile
  | "ones"    // A · Snowflake of 1s
  | "air"     // B · Airflow "A"
  | "drop"    // C · Thermo drop
  | "unit"    // D · The unit
  | "vortex"  // E · Vortex
  | "degree"; // F · Ad1° (degree)

/** How the company name is set next to the mark */
export const logoTextStyle: Record<LogoKey, "inline" | "stack" | "degree"> = {
  loop: "stack",
  vent: "stack",
  fan: "inline",
  tile: "inline",
  ones: "stack",
  air: "stack",
  drop: "inline",
  unit: "inline",
  vortex: "stack",
  degree: "degree",
};
