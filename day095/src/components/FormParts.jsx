import { Icon } from "./Icons";

const inputBase =
  "mt-2 w-full rounded-md border border-grid bg-white/85 px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-slip/60 focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/20";

export function FormField({ label, name, type = "text", placeholder, required = false }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">
        {label}
        {required ? <span className="ml-1 text-copper">必須</span> : null}
      </span>
      <input className={inputBase} id={name} name={name} type={type} placeholder={placeholder} required={required} />
    </label>
  );
}

export function NumberStepperField({ label, name, value, onChange, min = 0, step = 10, unit, helper }) {
  const numericValue = Number(value) || 0;
  const updateValue = (nextValue) => onChange(String(Math.max(min, nextValue)));

  return (
    <div className="rounded-md border border-grid bg-[#fbfaf6] p-4">
      <label htmlFor={name} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <div className="mt-3 flex items-stretch overflow-hidden rounded-md border border-grid bg-white/90 shadow-sm">
        <button type="button" className="grid w-11 shrink-0 place-items-center border-r border-grid text-xl font-semibold text-teal transition hover:bg-teal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal/40" onClick={() => updateValue(numericValue - step)} aria-label={`${label}を減らす`}>
          -
        </button>
        <input className="min-w-0 flex-1 bg-transparent px-3 py-3 text-center text-2xl font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal/30" id={name} name={name} type="number" min={min} step={step} value={value} onChange={(event) => onChange(event.target.value)} />
        <button type="button" className="grid w-11 shrink-0 place-items-center border-l border-grid text-xl font-semibold text-teal transition hover:bg-teal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal/40" onClick={() => updateValue(numericValue + step)} aria-label={`${label}を増やす`}>
          +
        </button>
      </div>
      <div className="mt-2 flex items-center justify-between gap-3 text-xs leading-5 text-slip">
        {helper ? <span>{helper}</span> : <span />}
        {unit ? <span className="font-semibold text-ink">{unit}</span> : null}
      </div>
    </div>
  );
}

export function CheckboxCardGroup({ label, options, selected, onToggle }) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink">{label}</legend>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {options.map((option) => {
          const isSelected = selected.includes(option.value);
          return (
            <label key={option.value} className={`flex min-h-[78px] cursor-pointer items-center gap-3 rounded-md border p-3 transition focus-within:ring-2 focus-within:ring-teal/30 ${isSelected ? "border-teal bg-teal/10 shadow-sm" : "border-grid bg-white/80 hover:border-teal/45"}`}>
              <input type="checkbox" className="sr-only" checked={isSelected} onChange={() => onToggle(option.value)} />
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-md border ${isSelected ? "border-teal bg-white text-teal" : "border-grid bg-[#fbfaf6] text-slip"}`}>
                {option.iconSrc ? <img src={option.iconSrc} alt="" className="h-7 w-7 object-contain" /> : <Icon name={option.icon ?? "check"} size={21} />}
              </span>
              <span className="min-w-0">
                <span className="block break-words text-sm font-semibold text-ink">{option.label}</span>
                {option.note ? <span className="mt-1 block break-words text-xs leading-5 text-slip">{option.note}</span> : null}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function RadioChipGroup({ label, name, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = value === option.value;
          return (
            <label key={option.value} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition focus-within:ring-2 focus-within:ring-teal/30 ${isSelected ? "border-teal bg-teal text-white shadow-sm" : "border-grid bg-white/85 text-ink hover:border-teal/50"}`}>
              <input type="radio" className="sr-only" name={name} value={option.value} checked={isSelected} onChange={() => onChange(option.value)} />
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function SelectField({ label, name, options }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <select className={inputBase} id={name} name={name} defaultValue="">
        <option value="" disabled>
          選択してください
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function TextAreaField({ label, name, placeholder, rows = 5, required = false }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">
        {label}
        {required ? <span className="ml-1 text-copper">必須</span> : null}
      </span>
      <textarea className={`${inputBase} min-h-[140px] resize-y`} id={name} name={name} rows={rows} placeholder={placeholder} required={required} />
    </label>
  );
}

export function ConsentBox({ children }) {
  return (
    <label className="flex items-start gap-3 rounded-md border border-grid bg-[#fbfaf6] p-4 text-sm leading-6 text-slip">
      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-grid text-teal focus-visible:ring-2 focus-visible:ring-teal/30" />
      <span>{children}</span>
    </label>
  );
}

export function FormTrustNote({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-mint/40 bg-mint/10 p-4 text-sm leading-6 text-slip">
      <Icon name="lock" className="mt-0.5 shrink-0 text-teal" size={18} />
      <p>{children}</p>
    </div>
  );
}
