import Layout from "../components/layout";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Signup from '../components/signup';
import Login from '../components/login';

export default function IndexPage() {
  const [key, setKey] = useState('signup');
  return (
    <Layout>
      <main className="flex-shrink-0 mb-5">
        <Tabs
            defaultActiveKey="profile"
            id="tab"
            className="mb-3 justify-content-center"
          >
            <Tab eventKey="login" title="Login">
              <Login></Login>
            </Tab>
            <Tab eventKey="signup" title="Signup">
               <Signup></Signup>
            </Tab>
            
        </Tabs>
      </main>
    </Layout>
  )
}
