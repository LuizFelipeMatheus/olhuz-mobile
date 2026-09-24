import React, { useState } from "react"

const ConfiguracoesViewModel = () => {
    const [values, setValues] = useState({

    });

    const onChange = (property: string, value : any) => {
        setValues ({... values, [property] : value})
    }
    

    return {... values, onChange}

}
export default ConfiguracoesViewModel;

















