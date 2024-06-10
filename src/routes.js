/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/emitents";
import Holders from "layouts/holders";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

//pages

//emitents
import EmitentDetails from "pages/emitentDetails"
import PersonalData from "pages/emitent/emitentDetails"
import EditEmitent from "pages/emitent/EditEmitent"
import EditHolders from "layouts/holders/edit-holders"
import EmitentHolders from "pages/emitent/holders"
import EmitentHolderDetails from "pages/emitent/holderDetails"

//operation
import EmitentTransfer from "pages/emitent/operations/transfer"
//log
import StockTransaction from "pages/emitent/log/stockTransaction"
import StockTransactionDetail from "pages/emitent/log/stockTransaction/detail"
//holders
import HolderDetails from 'pages/holders/details'


// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Главная",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard/",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Эмитенты",
    key: "emitents",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/emitents",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Держатели",
    key: "holders",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/holders",
    component: <Holders />,
  },
  {
    type: "collapse",
    name: "Ценные бумаги",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    // type: "collapse",
    name: "emitentDetails",
    key: "emitents",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/emitent/:id",
    component: <EmitentDetails />,
  },
  {
  
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {

    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },

  //pages
  
  {
    name: "emitent",
    key: "emitent",
    route: "/emitent/:id/personalData/",
    component: <PersonalData />,
  },
  {
    key: "add-emitent",
    route: "/add-emitent", 
    component: <EditEmitent />,
  },
  {
    key: "editemitent",
    route: "/emitent/:id/edit", 
    component: <EditEmitent />,
  },
  {
    key: "emitent-holders",
    route: "/emitent/:id/holders/", 
    component: <EmitentHolders />,
  },
  {
    key: "emitent-holders",
    route: "/emitent/:eid/holder/:hid", 
    component: <EmitentHolderDetails />,
  },

  //operations
  {
    key: "emitent-transfer",
    route: "/emitent/:eid/operation/transfer", 
    component: <EmitentTransfer />,
  },

  //log
  {
    key: "emitent-transfer",
    route: "/emitent/:eid/log/stockTransaction", 
    component: <StockTransaction />,
  },
  {
    key: "emitent-transfer",
    route: "/emitent/:eid/log/stockTransaction/:tid", 
    component: <StockTransactionDetail />,
  },


  //holders
  {
    key: "add-holder",
    route: "/add-holder", 
    component: <EditHolders />,
  },
  {
    key: "edit-holder",
    route: "/holder/:id/edit", 
    component: <EditHolders />,
  },
  {
    key: "edit-holder",
    route: "/holder/:id", 
    component: <HolderDetails />,
  },


];

export default routes;
