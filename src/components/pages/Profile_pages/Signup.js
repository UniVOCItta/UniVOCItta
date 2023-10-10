import React, { useState } from 'react';
// Router-dom
import { Link, useNavigate } from 'react-router-dom';
//Bootstrap
import { Button, Form } from 'react-bootstrap';
// Translation
import { useTranslation } from "react-i18next";
// Firebase and authentification
import { UserAuth } from '../../../context/AuthContext';
import {auth} from "../../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const {createUser} = UserAuth();


    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('./profile')

        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };
    // Translation 
    const { t } = useTranslation();

    return (
        <>
        <div className='container-fluid'>
            <h1>
                {t('sign-in-up.create_account')} 
            </h1>
                <p>
                    {t('sign-in-up.sign-up_text')} <Link to='/signin'>{t('sign-in-up.sign-in_button')}</Link>.
                </p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>{t('sign-in-up.email')}</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type='email'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>{t('sign-in-up.password')}</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type='password'></Form.Control>
                </Form.Group>
                <Button variant="secondary" type='submit'>
                    {t('sign-in-up.sign-up')}
                </Button>
            </Form>
        </div>
        </>
    );
};

export default Signup;