import ComponentContainer from "../components/ComponentContainer";
import TrashButtonAnimation from "../components/TrashButtonAnimation";
import GridListToggle from "../components/GridListToggle";

const Page1 = () => {
  return (
    <div className='grid grid-cols-4 gap-3 p-4'>
      <ComponentContainer title='TrashButtonAnimation' bgColor=''>
        <TrashButtonAnimation />
      </ComponentContainer>
      <ComponentContainer title='GridListToggle' bgColor=''>
        <div><GridListToggle gridTitle="Grid" listTitle="List" /></div>
        <div><GridListToggle /></div>
      </ComponentContainer>
    </div>
  )
}

export default Page1