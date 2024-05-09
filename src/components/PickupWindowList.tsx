import { List, ListItem} from '@chakra-ui/react';
export const PickupWindowList = ({windows}) => {
    const listItems = windows.map((window, index) =>    <ListItem key={index}>{window.startDate + " " + window.startTime}  - {window.endDate + " " + window.endTime}</ListItem>  );
    return (<List>{listItems}</List>  );
}