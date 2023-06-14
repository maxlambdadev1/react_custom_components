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
import RadioInput from "../components/RadioInput";
import DayNightSwitch from "../components/DayNightSwitch";
import LockSwitchAnimation from "../components/LockSwitchAnimation";
import OrderConfirmAnimation from "../components/OrderConfirmAnimation";
import RunningManButton from "../components/RunningManButton";
import RunningMan from "../components/RunningMan";
import IOS15Button from "../components/IOS15Button";
import CSSEggSwitch from "../components/CSSEggSwitch";
import Check from "../components/Check";
import PlusMinusToggle from "../components/PlusMinusToggle";
import ContinueApplicationHover from "../components/ContinueApplicationHover";
import MailNotification from "../components/MailNotification";
import HeartFoldButton from "../components/HeartFoldButton";
import HeartFoldButton1 from "../components/HeartFoldButton1";

const Page2 = () => {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 p-4'>
      <ComponentContainer title='PlusMinusToggle' bgColor=''>
        <PlusMinusToggle />
      </ComponentContainer>
      <ComponentContainer title='RunningManButton' bgColor=''>
        <RunningManButton />
      </ComponentContainer>
      <ComponentContainer title='RunningMan' bgColor=''>
        <RunningMan />
      </ComponentContainer>
      <ComponentContainer title='IOS15Button' bgColor='#1B1E4F'>
        <IOS15Button />
      </ComponentContainer>
      <ComponentContainer title='Check' bgColor=''>
        <Check />
      </ComponentContainer>
      <ComponentContainer title='CSSEggSwitch' bgColor='#2B3044'>
        <CSSEggSwitch />
      </ComponentContainer>
      <ComponentContainer title='RadioInput' bgColor=''>
        <RadioInput />
      </ComponentContainer>
      <ComponentContainer title='DayNightSwitch (keyCode-A,B,F)' bgColor=''>
        <DayNightSwitch />
      </ComponentContainer>
      <ComponentContainer title='LockSwitchAnimation' bgColor=''>
        <LockSwitchAnimation />
      </ComponentContainer>
      <ComponentContainer title='OrderConfirmAnimation' bgColor='#121621'>
        <OrderConfirmAnimation />
      </ComponentContainer>
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
      <ComponentContainer title='ContinueApplicationHover' bgColor='#F6F8FF'>
        <ContinueApplicationHover />
      </ComponentContainer>
      <ComponentContainer title='MailNotification' bgColor=''>
        <MailNotification />
      </ComponentContainer>
      <ComponentContainer title='HeartFoldButton' bgColor=''>
        <HeartFoldButton />
      </ComponentContainer>
      <ComponentContainer title='HeartFoldButton1' bgColor=''>
        <HeartFoldButton1 />
      </ComponentContainer>
    </div>
  )
}

export default Page2