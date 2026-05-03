function Card({ as: Tag = "article", className = "", children }) {
  return <Tag className={`card ${className}`.trim()}>{children}</Tag>;
}

export default Card;
