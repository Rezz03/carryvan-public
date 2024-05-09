import { Input, 
    FormControl,
      FormLabel,
      FormErrorMessage,
      FormHelperText, Button, VStack, Wrap, WrapItem, Box, Heading, Text, StackDivider , HStack, Textarea} from '@chakra-ui/react';
import React, { useState } from "react";
import firebase from '../Firebase';
import { getDatabase, ref as dbref, push, set} from "firebase/database";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export const DriverForm = () => {

    const uploadImages = (key) => {
        const storageRef = getStorage(firebase);
        const licenseFile = (document.querySelector("#license") as HTMLInputElement).files[0];
        const registrationFile = (document.querySelector("#registration") as HTMLInputElement).files[0];
        const metadata = {
           contentType: licenseFile.type,
           driverKey: key
        };
        const licenseRef = ref(storageRef, 'driver_license-' + key);
        const registrationRef = ref(storageRef, 'driver_registration-' + key);
        uploadBytes(licenseRef, licenseFile, metadata).then((snapshot) => {
            console.log('Drivers license uploaded successfully');
        }).catch(console.error);

        uploadBytes(registrationRef, registrationFile, metadata).then((snapshot) => {
            console.log('Drivers registration uploaded successfully');
        }).catch(console.error);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setShipmentRequest((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const [driverApplication, setShipmentRequest] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        province: '',
        postalCode: '',
        driversLicenseImagePath: '',
        driversInsuranceImagePath: '',
        pickupAvailability: []
    });  

    const submitForm = () => {
        const db = getDatabase(firebase);
        const shipmentList = dbref(db, 'shipments');
        const newShipmentRef = push(shipmentList);
        set(newShipmentRef, driverApplication);
        uploadImages(newShipmentRef.key);
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
                    <Heading as='h4' size='md'>Driver Contact Information</Heading>
                    <Wrap>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>First Name</FormLabel>
                                <Input name='firstName' defaultValue={driverApplication.firstName} onChange={handleChange} placeholder='First Name'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Last Name</FormLabel>
                                <Input name='lastName' defaultValue={driverApplication.lastName} onChange={handleChange} placeholder='Last Name'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Phone</FormLabel>
                                <Input name='phone' defaultValue={driverApplication.phone} type={'tel'} onChange={handleChange} placeholder='Phone Number'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Email</FormLabel>
                                <Input name='email' defaultValue={driverApplication.email} type={'email'} onChange={handleChange} placeholder='Email'></Input>
                            </FormControl>
                        </WrapItem>
                    </Wrap>
                </VStack>
                <VStack width={'100%'} align={'left'} paddingBottom={'20px'} divider={<StackDivider borderColor='gray.200' />}>
                    <Heading as='h4' size='md'>Driver Address</Heading>
                    <Wrap>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Receiving Address 1</FormLabel>
                                <Input name='address1' defaultValue={driverApplication.address1} onChange={handleChange} placeholder='Street Address 1'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Receiving Address 2</FormLabel>
                                <Input name='address2' defaultValue={driverApplication.address2} onChange={handleChange} placeholder='Street Address 2'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Province</FormLabel>
                                <Input name='province' defaultValue={driverApplication.province} onChange={handleChange} type={'text'} placeholder='Province'></Input>
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl as={'fieldset'}>
                                <FormLabel>Postal Code</FormLabel>
                                <Input name='postalCode' defaultValue={driverApplication.postalCode} onChange={handleChange} type={'text'} placeholder='Postal Code'></Input>
                            </FormControl>
                        </WrapItem>
                    </Wrap>
                </VStack>
                <VStack width={'100%'} align={'left'} paddingBottom={'20px'} divider={<StackDivider borderColor='gray.200' />}>
                    <Heading as='h4' size='md'>Additional Information</Heading>
                    <Wrap spacing='30px' justify='left'>
                        <WrapItem>
                            <FormControl>
                                <FormLabel>Driver's License</FormLabel>
                                <Input name='license' defaultValue={driverApplication.driversLicenseImagePath} onChange={handleChange} type="file" id="photo" />
                            
                            </FormControl>
                        </WrapItem>
                        <WrapItem>
                            <FormControl>
                                <FormLabel>Driver's Registration</FormLabel>
                                <Input name='registration' defaultValue={driverApplication.driversInsuranceImagePath} onChange={handleChange} type="file" id="photo" />
                            
                            </FormControl>
                        </WrapItem>
                    </Wrap>
                </VStack>
                <Box><Button onClick={submitForm}>Submit</Button> </Box>
            </VStack>
        </form>
    );
}

