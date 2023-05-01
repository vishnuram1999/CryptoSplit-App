import { Icon } from "@chakra-ui/icons";
import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MdGroups } from 'react-icons/md';
import { GrOverview } from "react-icons/gr";
import { GiExpense } from "react-icons/gi";

export default function SideBar() {
  return (
    <List color="black" fontSize="1.2em" spacing={5} p="15px">
      <ListItem>
        <NavLink to="/dashboard">
          <Icon as={GrOverview} />&nbsp;
          Overview
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/dashboard/expense">
          <Icon as={GiExpense} />&nbsp;
          Expense
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/dashboard/group">
          <Icon as={MdGroups} />&nbsp;
          Group
        </NavLink>
      </ListItem>
    </List>
  )
}
