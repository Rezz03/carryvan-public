import { Input, 
    FormControl,
      FormLabel,
      FormErrorMessage,
      FormHelperText, Button, VStack, Wrap, WrapItem, Box, Heading, Text, StackDivider , HStack, Textarea} from '@chakra-ui/react';
import React, { useState } from "react";
import firebase from '../Firebase';
import { getDatabase, ref as dbref, push, set} from "firebase/database";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export const ContactForm = () => {

    const [message, setMessage] = useState({
        name: '',
        body: '',
        email: ''
    });

    const submitForm = () => {  
        const db = getDatabase(firebase);
        const messageList = dbref(db, 'messages');
        const newMessageRef = push(messageList);
        set(newMessageRef , message);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMessage((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <form>
                <VStack width={'100%'} align={'left'} >
                    <Wrap>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Name</FormLabel>
                                <Input name='name' defaultValue={message.name} onChange={handleChange} placeholder='Name'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Email</FormLabel>
                                <Input name='email' defaultValue={message.email} type={'email'} onChange={handleChange} placeholder='Email'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Message</FormLabel>
                                <Textarea name='lastName' defaultValue={message.body} onChange={handleChange}></Textarea>
                            </FormControl>
                        </WrapItem>
                        
                    </Wrap>
                    <Box><Button onClick={submitForm}>Submit</Button> </Box>
                </VStack>
        </form>);
}