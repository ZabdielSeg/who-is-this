import React from 'react';
import { Divider, Row, Col, Image, Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;

const MovieCard = props => {

    const useDivider = () => {
        return props.index + 1 !== props.arrLenght ? <Divider /> : null
    };

    const getDateFormated = () => {
        if (props.release_date) {
            const dateToArray = props.release_date.split('-');
            const [year, month, day] = dateToArray;

            const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

            return `${day} de ${months[month - 1]} de ${year}`;
        } else {
            return "There's no information";
        }
    };

    return (
        <>
            <Row justify="space-between">
                <Col>
                    <Title level={3}>{props.original_title}</Title>
                </Col>
                <Col>
                    <Text>Rating: {props.vote_average}/10 <Text type="warning">★</Text></Text>
                </Col>
            </Row>
            <Row>
                <Col span={5}>
                    <Image src={`https://image.tmdb.org/t/p/w200${props.poster_path}`} width={'70%'} preview={false} />
                </Col>
                <Col span={17}>
                    <Paragraph>{props.overview}</Paragraph>
                    <Text strong>Fecha de estreno: {getDateFormated()}</Text>
                </Col>
            </Row>
            {useDivider()}
        </>
    )
}

export default MovieCard