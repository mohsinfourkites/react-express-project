import TabsComponent from "../../components/CoreUILibrary/Tabs/Tabs";
import JustifiedExample from "../../components/ReactBootstrap/Tabs/RBTabs";

const TopPlaces: React.FC = () => {
    return ( 
        <>
            <h1 className="text-center text-3xl font-semibold mt-10 mb-10">Top Places to Visit</h1>
            
        <TabsComponent />
        {/* <JustifiedExample /> */}
        </>
    );
};

export default TopPlaces;