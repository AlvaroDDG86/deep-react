import DemoParagraph from "./DemoParagraph"

const DemoOutput = (props) => {
    console.log('DemoOutput')
    return <DemoParagraph>
            { props.show ? 'This a paragraph' : '' }
        </DemoParagraph>
}

export default DemoOutput