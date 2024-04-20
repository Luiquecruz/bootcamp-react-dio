const Repository = ({data}) => {
  return (
    // @TODO: add star icon (filled | outlined) to "star a repo"
    <li className="bg-stone-900 rounded-2xl hover:bg-stone-800 transition">
      <a href={data?.html_url} target="_blank" rel="noopener noreferrer" className="block p-4">
        <strong className="block leading-none text-lg text-blue-500">{data?.name}</strong>
        <small className="block text-stone-500 mt-1">{data?.full_name}</small>
        {data?.description && (<p className="text-sm text-stone-400 mt-2">{data?.description}</p>)}
      </a>
    </li>
  )
}

export default Repository