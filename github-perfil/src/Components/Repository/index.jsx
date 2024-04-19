const Repository = ({url, title, description}) => {
  return (
    <li className="bg-stone-900 rounded-2xl hover:bg-stone-800 transition">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block p-4">
        <strong className="block text-lg text-blue-500">{title}</strong>
        <p className="text-sm text-stone-400">{description}</p>
      </a>
    </li>
  )
}

export default Repository