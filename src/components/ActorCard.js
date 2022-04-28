import React, { useEffect, useState } from 'react';
import { Layout, Divider, PageHeader, Card, Button, Image, Row, Col, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios';
import MovieCard from './MovieCard';
const { Title } = Typography;

const ActorCard = () => {
    const [actor, setActor] = useState({});
    const [imageUrl, setImageUrl] = useState('');
    const [allActors, setAllActors] = useState({});
    const name = 'Julia Roberts'
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&query=${name}&page=1&include_adult=true`)
            .then(response => {
                setAllActors(response.data.results);
                setActor(response.data.results[0]);
                setImageUrl(`https://image.tmdb.org/t/p/w200${response.data.results[0].profile_path}`)
            })
    }, []);

    const getGenre = num => {
        return num === 0 ? 'Hombre' : 'Mujer';
    }

    return (
        <div style={{ width: '100%' }}>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                backIcon={<Button type="primary" icon={<ArrowLeftOutlined />} size="large">
                    Regresar
                </Button>}
                title={' '}
                style={{borderBottom: '1px solid rgb(235, 237, 240)'}}

            />
            {actor.name
                ?
                <Row>
                    <Col span={5} style={{borderRight: '1px solid rgb(235, 237, 240)'}}>
                        <Image src={imageUrl} alt={actor.name} width={'70%'} preview={false} />
                        <h2> {actor.name} </h2>
                        <p>{getGenre(actor.genre)}</p>
                        <p>Popularidad: {actor.popularity.toFixed(2)}</p>
                        
                    </Col>
                    <Col span={19} style={{padding: '30px'}} >
                        <Title level={2}>Películas: </Title>
                        <Divider />
                        {actor.known_for.map((movie, index) => <MovieCard {...movie} index={index} arrLenght={actor.known_for.length} />)}
                    </Col>
                </Row>
                :
                <p>Problemas</p>
            }
        </div>
    )
}

export default ActorCard