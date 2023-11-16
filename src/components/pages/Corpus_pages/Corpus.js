import React, {useState} from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import { Table, Button, Form, Col, Container, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
// Imgs
import corpus from '../../../assets/imgs/corpus.png';
// Dati
import test from './database.json'
import Fragments from './Fragments'; // fragments & filters 
//import SearchTable from './filterTable';
// Translation
import { useTranslation } from "react-i18next";


export default function Corpus() {
    const [searchTerm, setSearchTerm] = useState("")
    const [data, setData]=useState(test)
    const filterResult=(catItem)=> {
    const result = test.filter((curData)=> {
      return curData.language === catItem;
    });
    setData(result);
  }

    // Translation 
    const { t } = useTranslation();
  
    const disclaimer = (
        <Tooltip id="tooltip-disclaimer" style={{ fontSize: '0.75rem' }}>
        Visualize the translation in Italian of the fragments.
        </Tooltip>
    );
    return (
        <>
        {/* IMG BACKGROUND */}
        <div className="img_wrap">
            <img id='img-background' src={corpus} copyright='©Università di Bologna' className='img-fluid'/>
            {/*
            <div className='img-content'>
                <h1 className='img-title-black'>CORPUS</h1>
                <Link to='#'><Button className='corpus-button' variant="dark">Button</Button></Link>
            </div>
            */}
        </div>
        <div className='container-fluid'>
        {/* CORPUS */}
        <h1 className='corpus'>Corpus</h1>
        <p dangerouslySetInnerHTML={{ __html: t('corpus.text') }}></p>
            {/* Languages */}
            <h2 id='languages'>{t('corpus.languages')}</h2>
                <p>{t('corpus.languages_text')}</p>
                {/*
                <div className='corpus-buttons'>
                    <Button className='corpus-button' variant="outline-dark" onClick={() => filterResult('English')}>English</Button>
                    <Button className='corpus-button' variant="outline-dark" onClick={() => filterResult('French')}>French</Button>
                    <Button className='corpus-button' variant="outline-dark" onClick={() => filterResult('Spanish')}>Spanish</Button>
                    <Button className='corpus-button' variant="outline-dark" onClick={() => filterResult('Russian')}>Russian</Button>
                    <OverlayTrigger placement="top" overlay={disclaimer}><Button className='corpus-button' variant="outline-secondary">Italian</Button></OverlayTrigger>
                </div>
                */}
                <Fragments/> {/* LATEST version */}
                {/*
                <Row className='corpus-filters'>
                    <div className='col-container'>
                    <Col className='col-2'>
                        <Container className='filter-sidebar'>
                            <h3><IoIcons.IoMdOptions/>&nbsp;Filters</h3>
                            <h5>Language</h5>
                            <Form>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Italian"
                                />
                                <Form.Check 
                                    type={type}
                                    label="English"
                                />
                                <Form.Check 
                                    type={type}
                                    label="French"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Spanish"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Russian"
                                />
                                </div>
                            ))}
                            <h5>Place</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Museum"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Library"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Place of worship"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Porticoes"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Art-gallery"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Park"
                                />
                                </div>
                            ))}
                            <h5>Traveller</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Lady Miller"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Marta Cavazza"
                                />
                                <Form.Check 
                                    type={type}
                                    label="John Moore"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Carlo Sarti"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Francesco Poppi"
                                />
                                </div>
                            ))}
                            <h5>Period</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="15th century"
                                />
                                <Form.Check 
                                    type={type}
                                    label="16th century"
                                />
                                <Form.Check 
                                    type={type}
                                    label="17th century"
                                />
                                <Form.Check 
                                    type={type}
                                    label="18th century"
                                />
                                <Form.Check 
                                    type={type}
                                    label="19th century"
                                />
                                </div>
                            ))}
                            <h5>Experience</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Awe"
                                    onClick={() => filterResult('Awe')}
                                />
                                <Form.Check 
                                    type={type}
                                    label="Joy"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Anger"
                                    onClick={() => filterResult('Anger')}
                                />
                                <Form.Check 
                                    type={type}
                                    label="Fear"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Disgust"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Sadness"
                                    
                                />
                                </div>
                            ))}
                            <h5>Characters</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Eustachio Manfredi"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Benedetto XIV"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Ferdinando Luigi Marsili"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Voltaire"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Laura Bassi"
                                />
                                </div>
                            ))}
                            </Form>
                        </Container>
                    </Col>
                    <Col className='col-10'>
                        <SearchTable/>  filterTable.js
                    </Col>
                    </div>
                </Row>
                */}
        </div>
        </>
    )
}