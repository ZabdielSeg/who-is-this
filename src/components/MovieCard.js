import React from 'react';
import { Divider, Row, Col, Image, Typography } from 'antd';
const { Title, Text } = Typography;

const MovieCard = props => {
    const useDivider = () => {
        return props.index + 1 !== props.arrLenght ? <Divider /> : <></>
    }
    const dateToArray = props.release_date.split('-');
    const [year, month, day] = dateToArray;

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    return (
        <>
            <Row justify="space-between">
                <Col>
                    <Title level={3}>{props.original_title}</Title>
                </Col>
                <Col>
                    <p>Rating: {props.vote_average}/10</p>
                </Col>
            </Row>
            <Row>
                <Col span={5}>
                    <Image src={`https://image.tmdb.org/t/p/w200${props.poster_path}`} width={'70%'} />
                </Col>
                <Col span={17}>
                    <p>{props.overview}</p>
                    <Text strong>Fecha de estreno: {`${day} de ${months[month - 1]} de ${year}`}</Text>
                </Col>
            </Row>
            {useDivider()}
        </>
    )
}

export default MovieCard