import { Input, 
FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, Button, VStack, Wrap, WrapItem, Box, Heading, Text, StackDivider , HStack, Textarea} from '@chakra-ui/react';
  import React, { useState } from "react";
import firebase from '../Firebase';
import { getDatabase, ref as dbref, push, set} from "firebase/database";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {AvailabilityWindowDatePicker} from './AvailabilityWindowDatePicker';

const uploadImage = (key) => {
    const storageRef = getStorage(firebase);
    const file = (document.querySelector("#photo") as HTMLInputElement).files[0];
    const metadata = {
       contentType: file.type
    };
    const fileRef = ref(storageRef, 'package_photos' + key);
    uploadBytes(fileRef, file, metadata).then((snapshot) => {
        console.log('Shipment request submitted successfully');
    }).catch(console.error);
}



export const ShipmentForm = () => {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setShipmentRequest((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
    

    const [shipmentRequest, setShipmentRequest] = useState({
        shipperFirstName: '',
        shipperLastName: '',
        shipperPhone: '',
        shipperEmail: '',
        pickupAddress1: '',
        pickupAddress2: '',
        pickupProvince: '',
        pickupPostalCode: '',
        receiverFirstName: '',
        receiverLastName: '',
        receiverPhone: '',
        receiverEmail: '',
        receivingAddress1: '',
        receivingAddress2: '',
        receivingProvince: '',
        receivingPostalCode: '',
        packageImageLocation: '',
        pickupAvailability: []
    });  

    const [availability, setAvailability] = useState([]);
    
    const submitForm = () => {
        const db = getDatabase(firebase);
        const shipmentList = dbref(db, 'shipments');
        const newShipmentRef = push(shipmentList);
        set(newShipmentRef, shipmentRequest);
        uploadImage(newShipmentRef.key);
    }

    const appendPickupAvailability = (startDate, startTime, endDate, endTime) => {
        setAvailability([...availability, {startDate: startDate, startTime: startTime, endDate: endDate, endTime: endTime}]);
        //setShipmentRequest((prevFormData) => ({ ...prevFormData, ['pickupAvailability']: [ ...shipmentRequest.pickupAvailability, {start: startDateTime, end: endDateTime}] }));
    }

    return (
        <form>
            <Text padding={"40px 40px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nam vel lorem laoreet, interdum felis et, volutpat eros. Nam eget lorem sed eros iaculis hendrerit sit amet eu nulla.
                 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mollis id tortor et vehicula. Morbi ut
                  mi sit amet nisl ultrices semper. Sed tristique euismod magna vitae rhoncus. Integer et rutrum neque. Nam consequat lorem nec metus mattis, 
                  at faucibus lacus ultrices. Quisque sit amet purus lobortis, maximus ante in, pellentesque dui. 
            </Text>
            <VStack >
                    <VStack width={'100%'} align={'left'} paddingBottom={'20px'} divider={<StackDivider borderColor='gray.200' />}>
                        <Heading as='h4' size='md' textAlign={'left'}>Shipper's Contact Information</Heading>
                        
                        <Wrap borderStyle={'solid'}>
                            
                            <WrapItem>
                                <FormControl isRequired as={'fieldset'}>
                                    <FormLabel>First Name</FormLabel>
                                    <Input name='shipperFirstName' defaultValue={shipmentRequest.shipperFirstName} onChange={handleChange}></Input>
                                </FormControl>
                            </WrapItem>
                            <WrapItem>
                                <FormControl isRequired as={'fieldset'}>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input name='shipperLastName' defaultValue={shipmentRequest.shipperLastName} onChange={handleChange} placeholder='Last Name'></Input>
                                </FormControl>
                            </WrapItem>
                            <WrapItem>
                                <FormControl isRequired as={'fieldset'}>
                                    <FormLabel>Phone</FormLabel>
                                    <Input name='shipperPhone' defaultValue={shipmentRequest.shipperPhone} type={'tel'} onChange={handleChange} placeholder='Phone Number'></Input>
                                </FormControl>
                            </WrapItem>
                            <WrapItem>
                                <FormControl isRequired as={'fieldset'}>
                                    <FormLabel>Email</FormLabel>
                                    <Input name='shipperEmail' defaultValue={shipmentRequest.shipperEmail} type={'email'} onChange={handleChange} placeholder='Email'></Input>
                                </FormControl>
                            </WrapItem>
                        </Wrap>
                    </VStack>
                    <VStack width={'100%'} align={'left'} paddingBottom={'20px'} divider={<StackDivider borderColor='gray.200' />}> 
                        <Heading as='h4' size='md'>Pickup Information</Heading>
                        <HStack>
                            <Wrap maxW={'50%'}>
                                <WrapItem>
                                    <FormControl isRequired as={'fieldset'}>
                                        <FormLabel>Shipping Address 1</FormLabel>
                                        <Input name='pickupAddress1' defaultValue={shipmentRequest.pickupAddress1} onChange={handleChange} placeholder='Street Address 1'></Input>
                                    </FormControl>
                                </WrapItem>
                                <WrapItem>
                                    <FormControl isRequired as={'fieldset'}>
                                        <FormLabel>Shipping Address 2</FormLabel>
                                        <Input name='pickupAddress2' defaultValue={shipmentRequest.pickupAddress2} onChange={handleChange} placeholder='Street Address 2'></Input>   
                                    </FormControl>
                                </WrapItem>
                                <WrapItem>
                                    <FormControl as={'fieldset'}>
                                        <FormLabel>Province</FormLabel>
                                        <Input name='pickupProvince' defaultValue={shipmentRequest.pickupProvince} type={'text'} onChange={handleChange} placeholder='Province'></Input>
                                    </FormControl>
                                </WrapItem>
                                <WrapItem>
                                    <FormControl as={'fieldset'}>
                                        <FormLabel>Postal Code</FormLabel>
                                        <Input name='pickupPostalCode' defaultValue={shipmentRequest.pickupPostalCode} type={'text'} onChange={handleChange} placeholder='Postal Code'></Input>
                                    </FormControl>
                                </WrapItem>
                            </Wrap>
                            <Box width={'100%'} zIndex={'99'}>
                                <AvailabilityWindowDatePicker availabilityList={availability } onAddPickupWindow={appendPickupAvailability} />
                            </Box>
                        </HStack>
                </VStack>
                <VStack width={'100%'} align={'left'} paddingBottom={'20px'} divider={<StackDivider borderColor='gray.200' />}>
                    <Heading as='h4' size='md'>Recipient Contact Information</Heading>
                    <Wrap>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>First Name</FormLabel>
                                <Input name='receiverFirstName' defaultValue={shipmentRequest.receiverFirstName} onChange={handleChange} placeholder='First Name'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Last Name</FormLabel>
                                <Input name='receiverLastName' defaultValue={shipmentRequest.receiverLastName} onChange={handleChange} placeholder='Last Name'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Phone</FormLabel>
                                <Input name='receiverPhone' defaultValue={shipmentRequest.receiverPhone} type={'tel'} onChange={handleChange} placeholder='Phone Number'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Email</FormLabel>
                                <Input name='receiverEmail' defaultValue={shipmentRequest.receiverEmail} type={'email'} onChange={handleChange} placeholder='Email'></Input>
                            </FormControl>
                        </WrapItem>
                    </Wrap>
                </VStack>
                <VStack width={'100%'} align={'left'} paddingBottom={'20px'} divider={<StackDivider borderColor='gray.200' />}>
                    <Heading as='h4' size='md'>Receiving Address</Heading>
                    <Wrap>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Receiving Address 1</FormLabel>
                                <Input name='receivingAddress1' defaultValue={shipmentRequest.receivingAddress1} onChange={handleChange} placeholder='Street Address 1'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Receiving Address 2</FormLabel>
                                <Input name='receivingAddress2' defaultValue={shipmentRequest.receivingAddress2} onChange={handleChange} placeholder='Street Address 2'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Province</FormLabel>
                                <Input name='receivingProvince' defaultValue={shipmentRequest.receivingProvince} onChange={handleChange} type={'text'} placeholder='Province'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Postal Code</FormLabel>
                                <Input name='receivingPostalCode' defaultValue={shipmentRequest.receivingPostalCode} onChange={handleChange} type={'text'} placeholder='Postal Code'></Input>
                            </FormControl>
                        </WrapItem>
                    </Wrap>
                </VStack>
                <VStack width={'100%'} align={'left'} paddingBottom={'20px'} divider={<StackDivider borderColor='gray.200' />}>
                    <Heading as='h4' size='md'>Additional Information</Heading>
                    <Wrap spacing='30px' justify='left'>
                        <WrapItem width={'50%'}>
                            <FormControl>
                                <Textarea placeholder='Please add any additional details about the package or delivery'/>
                            
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl>
                                <FormLabel>Package photo</FormLabel>
                                <Input name='packageImageLocation' defaultValue={shipmentRequest.packageImageLocation} onChange={handleChange} type="file" id="photo" />
                            
                            </FormControl>
                        </WrapItem>
                    </Wrap>
                </VStack>
                <Box><Button onClick={submitForm}>Submit</Button> </Box>
            </VStack>
        </form>
    );
}