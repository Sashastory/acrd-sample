import React from 'react';
import List from "@material-ui/core/es/List/List";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import ListItem from "@material-ui/core/ListItem/ListItem";
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch/Switch";
import Divider from "@material-ui/core/Divider/Divider";

const cardList = (props) => {

    const {
        listContainer,
        confirmed,
        listItemIcon,
        onToggle,
    } = props;

    return (
        <div className={listContainer}>
            <List subheader={<ListSubheader>Список карт</ListSubheader>}>
                {confirmed.map(card => (
                    <ListItem key={card.cardNumber}>
                        <ListItemIcon className={listItemIcon}>
                            <CreditCardIcon/>
                        </ListItemIcon>
                        <ListItemText primary={card.cardNumber}/>
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={() => onToggle(card)}
                                checked={confirmed.find(c => c.cardNumber === card.cardNumber).checked}
                                color={"primary"}
                            />
                        </ListItemSecondaryAction>
                        <Divider/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default cardList;