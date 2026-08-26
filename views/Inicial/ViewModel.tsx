import React, { useState } from "react"

const InicialViewModel = () => {
    const [values, setValues] = useState({

    });

    const onChange = (property: string, value : any) => {
        setValues ({... values, [property] : value})
    }
    

    return {... values, onChange}

}
export default InicialViewModel;

















