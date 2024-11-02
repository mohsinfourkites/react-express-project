import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
      fill
      
    >
      <Tab eventKey="home" title="Home" >
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab1" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="longer-tab2" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="longer-tab3" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="longer-tab4" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="longer-tab5" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="longer-tab6" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="longer-tab7" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="longer-tab8" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      {/* <Tab eventKey="contact1" title="Contact" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact2" title="Contact" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact3" title="Contact" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact4" title="Contact" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact5" title="Contact" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact6" title="Contact" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact7" title="Contact" >
        Tab content for Contact
      </Tab> */}
    </Tabs>
  );
}

export default JustifiedExample;