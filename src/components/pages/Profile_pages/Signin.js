import React, { useState } from 'react';
// Router-dom
import { Link, useNavigate } from 'react-router-dom';
// Bootstrap
import { Form, Button, Row } from 'react-bootstrap';
// React icons
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs'
// Translation
import { useTranslation } from "react-i18next";
// Identification
import { UserAuth } from '../../../context/AuthContext';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../../firebase";




const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    // Translation 
    const { t } = useTranslation();

    // const { signIn } = UserAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setError('')
            await signInWithEmailAndPassword(auth, email, password);
            navigate('./profile');
        } catch (err) {
            setError(t('sign-in-up.sign-in-fail'))
            console.log(err.message);
        }
    };

        /*}
        setError('')
        try {
            await signIn(email, password)
            navigate ('./profile')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
        */
    //Google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try{
            setError('')
            const result = await signInWithPopup(auth, googleProvider)
            navigate('./profile') 
            console.log(result.user);
        } catch (err) {
            setError(t('sign-in-up.sign-in-fail'))
            console.log(err);
        }
    }

    //Facebook
    const fbProvider = new FacebookAuthProvider();
    const FacebookLogin = async () => {
        try{
            setError('')
            const result = await signInWithPopup(auth, fbProvider)
            navigate('./profile') 
            console.log(result.user);
        } catch (err) {
            setError(t('sign-in-up.sign-in-fail'))
            console.log(err);
        }
    }

    return (
        <div className='container-fluid' >
            <h1>
                {t('sign-in-up.sign-in_email')}
            </h1>
                <p>
                    {t('sign-in-up.sign-in_text')} <Link to='/signup'>Sign Up</Link>.
                </p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>{t('sign-in-up.email')}</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='email'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>{t('sign-in-up.password')}</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type='password'></Form.Control >
                </Form.Group>
                <Button type="submit" className='sign-in-button' variant="secondary">
                    {t('sign-in-up.sign-in')}
                </Button>
                <p style={{textAlign: "center", color: "darkred"}}>{error}</p>
                <br/>
                <br/>
                <Row>
                <Button variant='danger' className='google-button' onClick={GoogleLogin}>
                    <BsIcons.BsGoogle/>&nbsp;&nbsp;{t('sign-in-up.continue_google')}
                </Button>
                </Row>
                <Row>
                <Button className='facebook-button' onClick={FacebookLogin}>
                    <ImIcons.ImFacebook2/>&nbsp;&nbsp;{t('sign-in-up.continue_fb')}
                </Button>
                
                </Row>
            </Form>
        </div>
    )
    }

export default Signin