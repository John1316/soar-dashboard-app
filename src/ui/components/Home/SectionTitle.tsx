export default function SectionTitle({title, className = ''}: SectionTitle) {
  return (
    <h4 className={`section__title ${className}`}>{title}</h4>
  )
}
