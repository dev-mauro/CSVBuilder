export const SavedIndicator = ({saved}) => {

  const emoji = saved ? "✅" : "❌";

  return (
    <span>{emoji}</span>
  )
}