import React from 'react'
import { useId } from 'react'

const Input =   React.forwardRef(function Input({
    label,type="text",
    className = "",
    ...props
},ref) {
    const id = useId()
  return 
    (
       <div className="w-full">
      {label && <label className="mb-1 block text-sm font-medium">{label}</label>}
      <input
        type={type}
        ref={ref} // ✅ forward the ref to this input element
        className={`w-full border rounded px-3 py-2 ${className}`}
        {...props} // spread any extra props like onChange, value, etc.
        id='id'
      />
    </div>
    )
  
})

export default Input