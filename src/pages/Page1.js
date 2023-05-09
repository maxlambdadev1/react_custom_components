import ComponentContainer from "../components/ComponentContainer";
import TrashButtonAnimation from "../components/TrashButtonAnimation";
import GridListToggle from "../components/GridListToggle";
import ButtonHoldToConfirm from "../components/ButtonHoldToConfirm";
import InputGroupFocusWithin from "../components/InputGroupFocusWithin";
import CSSHeartSwitch from "../components/CSSHeartSwitch";
import SimpleCSSSwitchToggle from "../components/SimpleCSSSwitchToggle";
import AddToCart from "../components/AddToCart";
import LoadingBoxes3D from "../components/LoadingBoxes3D";
import Hamburger3DSwitchAnimation from "../components/Hamburger3DSwitchAnimation";
import MenuAnimation from "../components/MenuAnimation";

const Page1 = () => {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-3 p-4'>
      <ComponentContainer title='CSSHeartSwitch' bgColor=''>
        <CSSHeartSwitch />
      </ComponentContainer>
      <ComponentContainer title='SimpleCSSSwitchToggle' bgColor='#262730'>
        <SimpleCSSSwitchToggle />
      </ComponentContainer>
      <ComponentContainer title='AddToCart' bgColor=''>
        <AddToCart />
      </ComponentContainer>
      <ComponentContainer title='LoadingBoxes3D' bgColor='#F9FBFF'>
        <LoadingBoxes3D />
      </ComponentContainer>
      <ComponentContainer title='Hamburger3DSwitchAnimation' bgColor=''>
        <Hamburger3DSwitchAnimation />
      </ComponentContainer>
      <ComponentContainer title='MenuAnimation' bgColor='#275EFE'>
        <MenuAnimation />
      </ComponentContainer>
      <ComponentContainer title='' bgColor=''>
      </ComponentContainer>
      <ComponentContainer title='' bgColor=''>
      </ComponentContainer>
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
          <div className="p-3"><InputGroupFocusWithin title='@gmail.com' direction={false} /></div>
        </div>
      </ComponentContainer>
    </div>
  )
}

export default Page1