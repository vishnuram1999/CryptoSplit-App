import { Icon } from "@chakra-ui/icons";
import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MdGroups } from 'react-icons/md';

export default function SideBar() {
  return (
    <List color="black" fontSize="1.2em" spacing={5} p="15px">
      <ListItem>
        <NavLink to="/dashboard">
          {/* <Icon as={GrOverview} /> */}
          Overview
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/dashboard/expense">
          {/* <Icon as={GiExpense} /> */}
          Expense
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/dashboard/group">
          <Icon as={MdGroups} />
          Group
        </NavLink>
      </ListItem>
    </List>
  )
}
