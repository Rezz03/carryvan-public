import React from "react";
import {Box, Button, VStack, HStack, Input, FormLabel, FormControl} from '@chakra-ui/react';

export const AddPickupWindowForm = ({  setShowForm, startDate, startTime, endDate, endTime, setStartDate, setStartTime, setEndDate, setEndTime, onAddPickupWindow }) => {

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'startDate') {
            setStartDate(value);
        } else if (name === 'startTime') {
            setStartTime(value);
        } else if (name === 'endDate') {
            setEndDate(value);
        } else if (name === 'endTime') {
            setEndTime(value);
        } else {
            console.log('AvailabilityForm:handleChange: Unrecognized field');
        }
    };

    return (<Box>
        <VStack>
            <HStack>
                <VStack>
                    <FormControl as={'fieldset'}>
                        <FormLabel>Availability start time</FormLabel>
                        <Input type={'date'}  name='startDate' defaultValue={startDate} onChange={handleChange} />
                    </FormControl>
                    <FormControl as={'fieldset'}>
                        <Input type={'text'}  name='startTime' defaultValue={startTime} onChange={handleChange} />
                    </FormControl>
                </VStack>
                <VStack>
                    <FormControl as={'fieldset'}>
                        <FormLabel>Availability end time</FormLabel>
                        <Input type={'date'}  name='endDate' defaultValue={endDate} onChange={handleChange} />
                    </FormControl>
                    <FormControl as={'fieldset'}>
                        <Input type={'text'}  name='endTime' defaultValue={endTime} onChange={handleChange} />
                    </FormControl>
                </VStack>
            </HStack>
            <Box><Button onClick={onAddPickupWindow}>Add</Button> </Box>
        </VStack>
        </Box>);
}