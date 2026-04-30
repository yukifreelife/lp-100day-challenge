const paths = {
  inventory: (
    <>
      <path d="M4 8.5 12 4l8 4.5v9L12 22l-8-4.5v-9Z" />
      <path d="m4 8.5 8 4.5 8-4.5" />
      <path d="M12 13v9" />
      <path d="m8 6.25 8 4.5" />
    </>
  ),
  barcode: (
    <>
      <path d="M4 5v14" />
      <path d="M8 5v14" />
      <path d="M11 5v14" />
      <path d="M16 5v14" />
      <path d="M20 5v14" />
      <path d="M13.5 5v14" />
    </>
  ),
  priceTag: (
    <>
      <path d="M4 11.5 11.5 4H20v8.5L12.5 20a2.1 2.1 0 0 1-3 0L4 14.5a2.1 2.1 0 0 1 0-3Z" />
      <path d="M16 8h.01" />
    </>
  ),
  sync: (
    <>
      <path d="M20 7v5h-5" />
      <path d="M4 17v-5h5" />
      <path d="M19 12a7 7 0 0 0-11.7-5.2L4 10" />
      <path d="M5 12a7 7 0 0 0 11.7 5.2L20 14" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4 22 20H2L12 4Z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </>
  ),
  skuTable: (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="M4 10h16" />
      <path d="M9 5v14" />
      <path d="M15 5v14" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 3-4 3 2 4-7" />
      <path d="M17 6h3v3" />
    </>
  ),
  mail: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  settings: (
    <>
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      <path d="m19 13.5 1.2 1.1-1.8 3.1-1.6-.5a7.6 7.6 0 0 1-1.6.9l-.3 1.7h-3.6l-.3-1.7a7.6 7.6 0 0 1-1.6-.9l-1.6.5-1.8-3.1 1.2-1.1a7 7 0 0 1 0-2L4 10.4l1.8-3.1 1.6.5c.5-.35 1-.65 1.6-.9l.3-1.7h3.6l.3 1.7c.55.25 1.1.55 1.6.9l1.6-.5 1.8 3.1-1.2 1.1a7 7 0 0 1 0 2Z" />
    </>
  ),
  lock: (
    <>
      <path d="M6 10h12v10H6z" />
      <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
      <path d="m8.5 12 2.3 2.3 4.7-5" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h4" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </>
  ),
  cart: (
    <>
      <path d="M3 5h2l2.4 10h9.8L20 8H7" />
      <path d="M9 20h.01" />
      <path d="M17 20h.01" />
    </>
  ),
  search: (
    <>
      <path d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path d="m16 16 4 4" />
    </>
  ),
  help: (
    <>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M9.8 9a2.4 2.4 0 0 1 4.4 1.4c0 1.8-2.2 2-2.2 3.6" />
      <path d="M12 17h.01" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v10H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>
  ),
  calendar: (
    <>
      <path d="M5 5h14v15H5z" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M5 10h14" />
      <path d="M9 14h2" />
      <path d="M13 14h2" />
    </>
  )
};

export function Icon({ name = "inventory", size = 24, strokeWidth = 1.8, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name] ?? paths.inventory}
    </svg>
  );
}
