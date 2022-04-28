import React from 'react';
import { Upload, message, Layout } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const DragAndDrop = () => {
    const { Dragger } = Upload;

    const props = {
        name: 'file',
        maxCount: 1,
        multiple: true,
        action: 'https://whois.nomada.cloud/upload',
        headers: {
            'Nomada': 'YWM4MzA3ZTUtYTBjYi00ZTM2LTgyNjgtN2Q1OTRkZmIyZTg4'
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                console.log('response from api => ', info.fileList[0].response.actorName)
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>¿Quién es este actor?</h1>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Haz click o arrastra una imagen</p>
                <p className="ant-upload-hint">
                    Selecciona la foto del actor famoso para conocer quién es y en qué películas ha salido
                </p>
            </Dragger>
        </>
    )
}

export default DragAndDrop;