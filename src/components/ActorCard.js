import React, { useContext, useEffect } from 'react';
import { Divider, PageHeader, Button, Image, Row, Col, Typography, Skeleton } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import MovieCard from './MovieInfo';
import { useNavigate } from 'react-router-dom';
import { ActorContext } from '../context/ActorContext';
const { Title, Text } = Typography;

const ActorCard = () => {
    const navigate = useNavigate();
    const { actorInfo, getActorInfo } = useContext(ActorContext);
    useEffect(() => {
        getActorInfo();
    }, [])

    const getGender = num => {
        return num === 0 ? 'Hombre' : 'Mujer';
    };

    return (
        <div className="site-layout-content">
            <PageHeader
                className="site-page-header"
                onBack={() => navigate(-1)}
                backIcon={<Button type="primary" icon={<ArrowLeftOutlined />} size="large">
                    Regresar
                </Button>}
                title={' '}
            />
            {actorInfo.name
                ?
                <Row>
                    <Col md={5} xs={24} className='actor-info'>
                        <Image src={`https://image.tmdb.org/t/p/w200${actorInfo.profile_path}`} alt={actorInfo.name} width={'70%'} preview={false} />
                        <Title level={4}> {actorInfo.name} </Title>
                        <Text mark >{getGender(actorInfo.gender)}</Text>
                        <p>Popularidad: {actorInfo.popularity.toFixed(2)}</p>

                    </Col>
                    <Col md={19} xs={24} style={{ padding: '30px' }} >
                        <Title level={2}>Películas: </Title>
                        <Divider />
                        {actorInfo.known_for.map((movie, index) => <MovieCard key={index} {...movie} index={index} arrLenght={actorInfo.known_for.length} />)}
                    </Col>
                </Row>
                :
                <Skeleton avatar paragraph={{ rows: 10, width: 400 }} />
            }
        </div>
    )
}

export default ActorCard