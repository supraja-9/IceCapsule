import { useSelector } from 'react-redux'

const FileList = () => {
  const files = useSelector((state) => state.files.items)

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {files.map((file) => (
        <div key={file.id} className="p-3 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-bold">{file.name}</h3>
          <p className="text-sm text-gray-500">{file.size} MB</p>
        </div>
      ))}
    </div>
  )
}

export default FileList
