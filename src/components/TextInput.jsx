import { PropTypes } from 'prop-types'

const InputText = ({
  type = 'text',
  name,
  placeHolder = '',
  value,
  onChange,
}) => {
  return (
    <span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="h-8 w-[270px] bg-transparent py-2 px-10 text-blue-500 font-semibold
                  rounded-lg ring-2 ring-blue-400 focus:ring-2 focus:ring-blue-600
                  tracking-wide text-sm"
        placeholder={placeHolder}
      />
    </span>
  )
}

InputText.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.any,
  placeHolder: PropTypes.string,
}

export default InputText
