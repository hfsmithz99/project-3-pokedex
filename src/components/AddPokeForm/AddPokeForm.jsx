import { useState } from 'react'
import {Button, Form} from 'semantic-ui-react'

export default function AddPokeForm({addPoke}) {
    const [description, setDescription] = useState('')
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const [photo, setPhoto] = useState('');

    function handleDescriptionInput(e){
        setDescription(e.target.value)
    }

    function handleNameInput(e){
        setName(e.target.value);
    }

    function handleTypeInput(e){
        setType(e.target.value);
    }

    function handleFileInput(e){
        setPhoto(e.target.files[0]);
    }

    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();

        formData.append('description', description)
        formData.append('name', name)
        formData.append('type', type)
        formData.append('photo', photo)

        addPoke(formData);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Input onChange={handleNameInput} placeholder="Name" value={name} />
            <Form.Input onChange={handleDescriptionInput} placeholder="Description" value={description} />
            <Form.Input onChange={handleTypeInput} placeholder="Type" value={type} />
            <Form.Input onChange={handleFileInput} type='file'/>
            <Button type='submit'>Submit New Pokemon</Button>
        </Form>
    )


}