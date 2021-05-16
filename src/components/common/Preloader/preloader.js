// import preloader from '../../../assets/images/Spinner-1s-200px.svg'
import React from 'react'
import { Spin, Space } from 'antd'

let Preloader = (props) => {
    return (
        // <div>
        //     <img src={preloader} alt='loading'/>
        // </div>
        <Space>
            <Spin size="large" />
        </Space>
    )
}
export default Preloader;