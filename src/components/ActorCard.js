import React, { useEffect, useState } from 'react';
import { Divider, PageHeader, Button, Image, Row, Col, Typography, Skeleton } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios';
import MovieCard from './MovieInfo';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;

const ActorCard = () => {
    const [actor, setActor] = useState({});
    const [imageUrl, setImageUrl] = useState('');
    const { actorName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&query=${actorName}&page=1&include_adult=true`)
            .then(response => {
                setActor(response.data.results[0]);
                setImageUrl(`https://image.tmdb.org/t/p/w200${response.data.results[0].profile_path}`);
            });
    }, []);

    const getGender = num => {
        return num === 0 ? 'Hombre' : 'Mujer';
    }

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
            {actor.name
                ?
                <Row>
                    <Col md={5} xs={24} className='actor-info'>
                        <Image src={imageUrl} alt={actor.name} width={'70%'} preview={false} />
                        <Title level={4}> {actor.name} </Title>
                        <Text mark >{getGender(actor.gender)}</Text>
                        <p>Popularidad: {actor.popularity.toFixed(2)}</p>

                    </Col>
                    <Col md={19} xs={24} style={{ padding: '30px' }} >
                        <Title level={2}>Películas: </Title>
                        <Divider />
                        {actor.known_for.map((movie, index) => <MovieCard {...movie} index={index} arrLenght={actor.known_for.length} />)}
                    </Col>
                </Row>
                :
                <Skeleton avatar paragraph={{ rows: 10, width: 400 }} />
            }
        </div>
    )
}

export default ActorCard