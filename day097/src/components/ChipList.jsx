function ChipList({ items = [], className = "chip-list", itemClassName = "chip" }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li className={itemClassName} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ChipList;
