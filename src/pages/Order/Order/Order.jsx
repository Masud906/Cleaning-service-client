import { useState } from 'react';
import orderCover from '../../../assets/cleanCover/cover1.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useService from '../../../hooks/useService';
//import ServiceCard from '../../../components/ServiceCard/ServiceCard';
import OrderTab from '../OrderTab/OrderTab';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
      const [service] =  useService()
    const HomeClean = service.filter(item => item.category === 'Home_cleaning')
    const furniture = service.filter(item => item.category === 'furniture_assembly')
    const handyman = service.filter(item => item.category === 'Handyman_service')
    const office = service.filter(item => item.category === 'office_cleaning')
    const ac = service.filter(item => item.category === 'ac_cleaning')
    const toilet = service.filter(item => item.category === 'Toilet_cleaning')
    const septicTank = service.filter(item => item.category === 'septic_tank_cleaning')
    return (
        <div>
            <Cover img={orderCover} title="Order Service"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Home_cleaning</Tab>
                    <Tab>furniture_assembly</Tab>
                    <Tab>Handyman_service</Tab>
                    <Tab>office_cleaning</Tab>
                    <Tab>ac_cleaning</Tab>
                    <Tab>WashRoom_cleaning</Tab>
                    <Tab>septic_tank_cleaning</Tab>
                </TabList>
                <TabPanel>
                <OrderTab items={HomeClean}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={furniture}></OrderTab> 
                </TabPanel>
                <TabPanel>
                <OrderTab items={handyman}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={office}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={ac}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={toilet}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={septicTank}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;