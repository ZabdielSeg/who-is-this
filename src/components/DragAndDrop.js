import React, { useContext } from 'react';
import { Upload, message, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ActorContext } from '../context/ActorContext';
import { type } from '../context/AppReducer';
const { Title } = Typography;
const { Dragger } = Upload;

const DragAndDrop = () => {
    const navigate = useNavigate();
    const [, dispatch] = useContext(ActorContext);

    const props = {
        name: 'file',
        maxCount: 1,
        multiple: true,
        action: 'https://whois.nomada.cloud/upload',
        headers: {
            'Nomada': process.env.REACT_APP_NOMADA_KEY
        },
        accept: '.png, .PNG, .jpg, .JPG',
        onChange(info) {
            const { status } = info.file;
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                dispatch({type: type.getActorName, payload: info.fileList[0].response.actorName});
                navigate('/the-celebrity');
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className="site-layout-content site-layout-content-drag-box">
            <Title className='align-center'>¿Quién es este actor?</Title>
            <Dragger {...props} style={{backgroundColor: 'rgb(235, 237, 240)'}}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Haz click o arrastra una imagen</p>
                <p className="ant-upload-hint">
                    Selecciona la foto del actor famoso para conocer quién es y en qué películas ha salido
                </p>
            </Dragger>
        </div>
    )
}

export default DragAndDrop;