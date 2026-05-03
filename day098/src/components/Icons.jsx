const iconBaseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  fill: "none",
  "aria-hidden": "true",
  focusable: "false",
};

function SvgIcon({ children, className = "h-6 w-6", title, viewBox, ...props }) {
  return (
    <svg
      {...iconBaseProps}
      {...props}
      viewBox={viewBox || iconBaseProps.viewBox}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
    >
      {children}
    </svg>
  );
}

export function PlayIcon({ className = "h-6 w-6", title, ...props }) {
  return (
    <SvgIcon className={className} title={title} {...props}>
      <circle cx="24" cy="24" r="21" fill="currentColor" opacity="0.96" />
      <path d="M20 15.5 33.5 24 20 32.5v-17Z" fill="#fff" stroke="#fff" strokeLinejoin="round" />
    </SvgIcon>
  );
}

export function PawIcon({ className = "h-6 w-6", title, ...props }) {
  return (
    <SvgIcon className={className} title={title} {...props}>
      <ellipse cx="24" cy="30" rx="9" ry="7.5" fill="currentColor" />
      <circle cx="13.5" cy="19" r="4.5" fill="currentColor" />
      <circle cx="22" cy="14" r="4.5" fill="currentColor" />
      <circle cx="31" cy="14" r="4.5" fill="currentColor" />
      <circle cx="38" cy="21" r="4.5" fill="currentColor" />
    </SvgIcon>
  );
}

export function EyeDot({ color = "blue", className = "h-5 w-5", title, ...props }) {
  const fill = color === "yellow" ? "#FFD84D" : "#4AA8FF";

  return (
    <SvgIcon className={className} title={title} {...props}>
      <circle cx="24" cy="24" r="15" fill={fill} />
      <circle cx="27" cy="20" r="5" fill="#4B4843" />
      <circle cx="29" cy="18" r="1.6" fill="#fff" />
    </SvgIcon>
  );
}

export function WhiskerDivider({ className = "", title }) {
  return (
    <div className={`whisker-divider ${className}`} role={title ? "img" : "presentation"} aria-label={title}>
      <span className="whisker-divider__line whisker-divider__line--left" />
      <span className="whisker-divider__dot" />
      <span className="whisker-divider__line whisker-divider__line--right" />
    </div>
  );
}

export function SparkleIcon({ className = "h-6 w-6", title, ...props }) {
  return (
    <SvgIcon className={className} title={title} {...props}>
      <path d="M24 6c1.8 8 6 12.2 14 14-8 1.8-12.2 6-14 14-1.8-8-6-12.2-14-14 8-1.8 12.2-6 14-14Z" fill="currentColor" />
      <path d="M37 29c.8 3.7 2.8 5.7 6.5 6.5-3.7.8-5.7 2.8-6.5 6.5-.8-3.7-2.8-5.7-6.5-6.5 3.7-.8 5.7-2.8 6.5-6.5Z" fill="currentColor" opacity="0.72" />
    </SvgIcon>
  );
}

export function TinyFishIcon({ className = "h-6 w-6", title, ...props }) {
  return (
    <SvgIcon className={className} title={title} {...props}>
      <path
        d="M8 25c5-8 16-12 27-4l6-5v16l-6-5C24 35 13 33 8 25Z"
        fill="currentColor"
        opacity="0.18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="23" r="1.8" fill="currentColor" />
      <path d="M18 21c2.5 2.4 2.5 5.6 0 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </SvgIcon>
  );
}

export function FurLines({ className = "", title }) {
  return (
    <span className={`fur-lines ${className}`} role={title ? "img" : "presentation"} aria-label={title}>
      <span />
      <span />
      <span />
    </span>
  );
}

export default {
  PlayIcon,
  PawIcon,
  EyeDot,
  WhiskerDivider,
  SparkleIcon,
  TinyFishIcon,
  FurLines,
};
