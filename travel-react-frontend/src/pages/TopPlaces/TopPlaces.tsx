import TabsComponent from "../../components/CoreUILibrary/Tabs/Tabs";

const TopPlaces: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold mt-10 mb-10 text-white">
        Top Places to Visit
      </h1>

      <TabsComponent />
    </>
  );
};

export default TopPlaces;
