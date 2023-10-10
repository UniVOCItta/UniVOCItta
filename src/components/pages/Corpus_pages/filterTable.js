import React, {useState} from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
//Bootstrap
import Table from 'react-bootstrap/Table';
// JSON data
import test from './test.json';
import { HashLink } from 'react-router-hash-link';
//import MockData from './MOCK_DATA.json';
//import complex from '../../../complex.json';


const SearchTable = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <input
            type='text'
            placeholder='Search...'
            className='form-control'
            style={{marginTop:20, marginBottom: 20, width:'100%'}}
            onChange ={(e)=>{
                setSearchTerm(e.target.value)
            }}>
            </input>
            <Table striped bordered hover variant="light" responsive="sm">
                    <thead>
                        <tr>
                            <th>Fragment</th>
                            <th>Traveller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {test.filter((val)=>{
                            if (searchTerm === '') {
                                return val;
                            } else if (
                                val.author.first_author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.fragment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.source.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return val;
                            }  
                        }).map(info=>(
                            <tr key={info.id}>
                                <td>
                                    <p>{info.fragment}</p>
                                    <p>-{info.author.first_author}</p>
                                </td>
                                <td>
                                    <p>{info.author.first_author}</p>
                                    <p>{info.author.second_author}</p>
                                    <p>{info.author.third_author}</p>
                                    <a href={info.source}>Link</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </div>
    )
}

export default SearchTable;