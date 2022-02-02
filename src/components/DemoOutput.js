import React from 'react'
import DemoParagraph from "./DemoParagraph"

const DemoOutput = (props) => {
    console.log('DemoOutput')
    return <DemoParagraph>
            { props.show ? 'This a paragraph' : '' }
        </DemoParagraph>
}

// Only if the value of any prop change, the component will reevalate, it cots a lot
export default React.memo(DemoOutput)