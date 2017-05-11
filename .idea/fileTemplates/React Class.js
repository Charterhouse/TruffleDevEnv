#set($CLASSNAME = ${StringUtils.removeAndHump(${NAME}, "-")})

import React from 'react'
   
class ${CLASSNAME} extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return <div className='${NAME}'>
            ...
        </div>
    }
}
    
export default ${CLASSNAME}