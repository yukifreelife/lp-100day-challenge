const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

function SvgIcon({ children, className = "h-6 w-6", title }) {
  return (
    <svg {...baseProps} className={className} role={title ? "img" : undefined} aria-label={title}>
      {children}
    </svg>
  );
}

export function BoxIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 15.5 24 7l15 8.5v17L24 41 9 32.5v-17Z" />
      <path d="m9 15.5 15 8.5 15-8.5" />
      <path d="M24 24v17" />
      <path d="m17 11.5 15 8.5" />
    </SvgIcon>
  );
}

export function ChecklistIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect x="11" y="9" width="26" height="32" rx="4" />
      <path d="M18 8h12l2 5H16l2-5Z" />
      <path d="m17 24 4 4 8-9" />
      <path d="M17 34h15" />
    </SvgIcon>
  );
}

export function CalendarIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect x="8" y="11" width="32" height="29" rx="4" />
      <path d="M16 7v8M32 7v8M8 20h32" />
      <path d="M17 28h4M27 28h4M17 35h4M27 35h4" />
    </SvgIcon>
  );
}

export function WaterIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M24 6s12 13.5 12 23a12 12 0 0 1-24 0C12 19.5 24 6 24 6Z" />
      <path d="M18 30a6 6 0 0 0 9 5" />
    </SvgIcon>
  );
}

export function FoodIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M14 8v16M20 8v16M14 16h6" />
      <path d="M17 24v17" />
      <path d="M33 8c-4 4-6 9-6 16h8v17" />
    </SvgIcon>
  );
}

export function FlashlightIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M17 8h14l-2 10H19L17 8Z" />
      <path d="M19 18h10l3 22H16l3-22Z" />
      <path d="M21 28h6" />
    </SvgIcon>
  );
}

export function FirstAidIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect x="8" y="14" width="32" height="26" rx="5" />
      <path d="M18 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3" />
      <path d="M24 21v12M18 27h12" />
    </SvgIcon>
  );
}

export function HomeFamilyIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 23 24 9l17 14" />
      <path d="M12 21v20h24V21" />
      <path d="M19 41V29h10v12" />
      <circle cx="18" cy="24" r="3" />
      <circle cx="30" cy="24" r="3" />
    </SvgIcon>
  );
}

export function ArrowIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 24h27" />
      <path d="m27 14 10 10-10 10" />
    </SvgIcon>
  );
}

export function ShieldIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M24 6 38 12v11c0 9-5.7 15.2-14 19-8.3-3.8-14-10-14-19V12l14-6Z" />
      <path d="m17 24 5 5 10-11" />
    </SvgIcon>
  );
}

export function TruckIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M6 14h23v18H6V14Z" />
      <path d="M29 20h7l6 6v6H29V20Z" />
      <circle cx="16" cy="35" r="4" />
      <circle cx="35" cy="35" r="4" />
      <path d="M11 22h10" />
    </SvgIcon>
  );
}

export function BellIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M14 21a10 10 0 0 1 20 0c0 8 4 10 4 10H10s4-2 4-10Z" />
      <path d="M20 37a5 5 0 0 0 8 0" />
      <path d="M24 7v3" />
    </SvgIcon>
  );
}

export function UsersIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="18" cy="17" r="6" />
      <path d="M8 39c1.5-7 5.3-11 10-11s8.5 4 10 11" />
      <circle cx="33" cy="20" r="5" />
      <path d="M29 30c4.8.5 8.2 3.6 10 9" />
    </SvgIcon>
  );
}

export function SearchIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="21" cy="21" r="11" />
      <path d="m30 30 10 10" />
      <path d="M16 21h10M21 16v10" />
    </SvgIcon>
  );
}
