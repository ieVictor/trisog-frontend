import { useState } from "react"

export default function CheckBox() {
  const [checkMark, setCheckMark] = useState<{value: boolean, mark: string}>({value: false, mark: ""})
  return (
    <label className="chk">
      <input 
        type="checkbox" 
        checked={checkMark.value}  
        onChange={ (event) => event.target.checked = checkMark.value }
      />
      <span 
        className="text-xs text-white font-sans font-semibold" 
        onClick={() => setCheckMark({value: !checkMark.value, mark: checkMark.value ? "" : "✓"})}
      >
        {checkMark.mark}
      </span>
    </label>
  )
}