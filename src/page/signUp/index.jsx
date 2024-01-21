import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Container } from "./style";
import { useState } from 'react';

import { api } from '../../../services/api';

export function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignUp(){
        console.log(name, email, password)

        api.post("/users", {name, email, password})
        .then(() => {
            alert("cadastro realizado")
        })
        .catch(() => {
            alert("deu ruim noia")
        })
    }

    return (
        <Container >
            <div>
                <TextField id="outlined-basic" label="Name" variant="outlined" type='text' onChange={e => setName(e.target.value)}/>

                <TextField id="outlined-basic" label="Email" variant="outlined" type='text'onChange={e => setEmail(e.target.value)} />

                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' onChange={e => setPassword(e.target.value)}/>

                <Button variant="contained" onClick={handleSignUp}>Cadastrar</Button>
            </div>
        </Container>
    )
}