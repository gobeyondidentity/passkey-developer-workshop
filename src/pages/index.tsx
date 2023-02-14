import Layout from "../components/layout";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import Login from '../components/login';
import GetPasskeys from "../components/get-passkeys";
import BindPasskey from "../components/bind-passkey";
import RecoverPasskey from "../components/recover-passkey";

import { useEffect } from 'react';
import * as FullStory from '@fullstory/browser'

export default function IndexPage() {
  const [key, setKey] = useState('home');
  
  useEffect(() => {
    FullStory.init({ orgId: 'o-1CSBYD-na1'});
  }, []);

  return (
    <Layout>
      <main className="flex-shrink-0 mb-5">
        <Tabs
            id="tab"
            className="mb-3 justify-content-center"
          >
            <Tab eventKey="signup" title="1. Signup">
                <BindPasskey></BindPasskey>
                <GetPasskeys></GetPasskeys>
            </Tab>
            <Tab eventKey="list" title="2. Manage Local Passkeys">
               <GetPasskeys></GetPasskeys>
            </Tab>
            <Tab eventKey="signin" title="3. Sign in with Passkey">
              <Login></Login>
            </Tab>
            <Tab eventKey="recover" title="4. Existing User">
              <RecoverPasskey></RecoverPasskey>
            </Tab>
        </Tabs>
      </main>
    </Layout>
  )
}
