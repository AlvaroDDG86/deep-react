import React, { useMemo } from 'react'

const DemoList = (props) => {
    const { list } = props;

    // Only when de this change, it doen't matter if title change
    const sortedList = useMemo(() => {
        console.log('list rendered')
        return list.sort((a, b) => a - b)
    }, [list])
    console.log('DemoList')
    return <div>
        <h2>{props.title}</h2>
        <ul>
            {
                sortedList.map(liItem => {
                    return <li key={liItem}>{liItem}</li>
                })
            }
        </ul>
    </div>
}

export default React.memo(DemoList)