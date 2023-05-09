import ComponentContainer from "../components/ComponentContainer";
import TrashButtonAnimation from "../components/TrashButtonAnimation";
import GridListToggle from "../components/GridListToggle";
import ButtonHoldToConfirm from "../components/ButtonHoldToConfirm";
import InputGroupFocusWithin from "../components/InputGroupFocusWithin";

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
      <ComponentContainer title='InputGroupFocusWithin' bgColor=''>
      <div className="w-full">
        <div className="p-3"><InputGroupFocusWithin title="https://" placeholder='domain.tld' direction={true} /></div>
        <div className="p-3"><InputGroupFocusWithin title='@gmail.com' direction={false}/></div>
      </div>
      </ComponentContainer>
    </div>
  )
}

export default Page1