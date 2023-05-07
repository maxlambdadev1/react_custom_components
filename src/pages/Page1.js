import ComponentContainer from "../components/ComponentContainer";
import TrashButtonAnimation from "../components/TrashButtonAnimation";
import GridListToggle from "../components/GridListToggle";
import ButtonHoldToConfirm from "../components/ButtonHoldToConfirm";

const Page1 = () => {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-3 p-4'>
      <ComponentContainer title='TrashButtonAnimation' bgColor=''>
        <TrashButtonAnimation />
      </ComponentContainer>
      <ComponentContainer title='GridListToggle' bgColor=''>
        <div><GridListToggle gridTitle="Grid" listTitle="List" /></div>
        <div><GridListToggle /></div>
      </ComponentContainer>
      <ComponentContainer title='ButtonHoldToConfirm' bgColor=''>
        <ButtonHoldToConfirm />
      </ComponentContainer>
    </div>
  )
}

export default Page1