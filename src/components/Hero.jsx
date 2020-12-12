import React , { useEffect ,useState }from 'react'
import { Col, Row } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'

export const Hero = () => {
    
    const randomNumber = (min, max, floatFlag) => {
        let r = Math.random() * (max - min) + min
        return floatFlag ? r : Math.floor(r)
    }

    const quotes = [
                    '"Servicios basados en el estudio, conocimiento y experiencia previa."',
                    '"Capacitados para planificar, estructurar e instrumentar los negocios planteados por nuestros clientes."',
                    '"Acompañando todo el desarrollo con asesoramiento Fiscal, Laboral y Contable."']

    const randomQuote = () => {
            const quote = quotes[randomNumber(0,quotes.length,false)];
            return quote
    }

    
    const [quote, setQuote] = useState('"En el año 2007, iniciamos nuestro desafío como Moreno & Asociados."')

    useEffect(() => {
        const interval = setInterval(()=>{
            let randomAAA = randomQuote();
            setQuote(randomAAA)
        }, 5000)  
        return () => clearInterval(interval);
      }, [randomQuote()]);

  
    return (
        <>
            <Jumbotron className="hero">
                <Row className="hero-row" >
                    <Col xs={12} md={4} className="hero-column hero-column-quote" >
                        <p>“El secreto para salir adelante es empezar.”</p>
                    </Col>
                    <Col xs={12} md={6} className="hero-column hero-column-image hero-column-image-text">
                        {
                            <p>{quote}</p>
                        }
                    </Col>
                </Row>
            </Jumbotron>
        </>
    )
}
