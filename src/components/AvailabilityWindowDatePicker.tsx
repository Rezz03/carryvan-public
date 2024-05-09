import { Spacer, Flex, VStack, Heading, Box, IconButton, StackDivider} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'
import {AddPickupWindowForm} from './AddPickupWindowForm';

import React, { useState } from "react";
import { PickupWindowList } from './PickupWindowList';



export const AvailabilityWindowDatePicker = ({ availabilityList, onAddPickupWindow  }) => {
    let showCalendar = false;
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddAvailability = () => {
        setShowAddForm(true);
    }

    const handleAddPickupWindow = () => {
        
        onAddPickupWindow(startDate, startTime, endDate, endTime);
        setShowAddForm(false);
    }

    if (showAddForm) {
        return (
            <VStack width={'100%'} align={'left'} paddingBottom={'20px'} divider={<StackDivider borderColor='gray.200' />}>
                <Flex>
                    <Box>
                    <Heading as='h4' size='sm'> Pickup Windows </Heading>
                    </Box>
                    <Spacer />
                    <Box>
                    <IconButton aria-label='Add availability window' icon={<AddIcon />} onClick={handleAddAvailability} />
                    </Box>
                </Flex>
                <AddPickupWindowForm 
                    setShowForm={setShowAddForm} 
                    startDate={startDate} 
                    endDate={endDate} 
                    startTime={startTime} 
                    endTime={endTime} 
                    setEndDate={setEndDate} 
                    setStartDate={setStartDate}
                    setEndTime={setEndTime} 
                    setStartTime={setStartTime}
                    onAddPickupWindow={handleAddPickupWindow} />
                <PickupWindowList windows={availabilityList} />
                
                
            </VStack>
        );
    } else {
        return (
            <VStack width={'100%'} align={'left'} paddingBottom={'20px'} divider={<StackDivider borderColor='gray.200' />}>
                <Flex>
                    <Box>
                    <Heading as='h4' size='sm'> Pickup Windows </Heading>
                    </Box>
                    <Spacer />
                    <Box>
                    <IconButton aria-label='Add availability window' icon={<AddIcon />} onClick={handleAddAvailability} />
                    </Box>
                </Flex>
                <PickupWindowList windows={availabilityList} />
                
                
            </VStack>
        );
    }
}