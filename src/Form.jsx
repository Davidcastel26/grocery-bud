import { useState } from "react"

export const Form = () => {
  
    const [newItemName, setNewItemName] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
    <form 
        onSubmit={handleSubmit}
    >
        <h4>grocery bud</h4>
        <div className="form-control">
            <input 
                type="text" 
                value={newItemName} 
                onChange={(event) => setNewItemName(event.target.value)} 
                className="form-input" 
            />
            <button className="btn" type="submit">
                add item
            </button>
        </div>
    </form>
  )
}
