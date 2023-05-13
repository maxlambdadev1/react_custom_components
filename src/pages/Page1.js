import ComponentContainer from "../components/ComponentContainer";
import AddToCollectionButton from "../components/AddToCollectionButton";
import CSSPlaneSwitch from "../components/CSSPlaneSwitch";
import ContinueApplicationHover from "../components/ContinueApplicationHover";
import MailNotification from "../components/MailNotification";
import HeartFoldButton from "../components/HeartFoldButton";
import HeartFoldButton1 from "../components/HeartFoldButton1";
import OttonovaPrinter from "../components/OttonovaPrinter";
import FancyButton from "../components/FancyButton";
import CheckboxSelectionDesign from "../components/CheckboxSelectionDesign";
import PureCSSGhostButtons from "../components/PureCSSGhostButtons";
import CSSAnimated3DToaster from "../components/CSSAnimated3DToaster";


const Page1 = () => {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-3 p-4'>
      <ComponentContainer title='OttonovaPrinter' bgColor=''>
        <OttonovaPrinter />
      </ComponentContainer>
      <ComponentContainer title='FancyButton' bgColor='#0A0517'>
        <FancyButton />
      </ComponentContainer>
      <ComponentContainer title='CheckboxSelectionDesign' bgColor='#f0f0f0'>
        <CheckboxSelectionDesign type='1'/>
        <CheckboxSelectionDesign type='2' icon_name='logo-instagram' title='Instagram' />
      </ComponentContainer>
      <ComponentContainer title='PureCSSGhostButtons' bgColor=''>
        <PureCSSGhostButtons />
      </ComponentContainer>
      <ComponentContainer title='CSSAnimated3DToaster' className='col-span-2' bgColor='#a3bac2'>
        <CSSAnimated3DToaster />
      </ComponentContainer>
      <ComponentContainer title='' bgColor=''>
      </ComponentContainer>
      <ComponentContainer title='' bgColor=''>
      </ComponentContainer>
      <ComponentContainer title='' bgColor=''>
      </ComponentContainer>
      <ComponentContainer title='AddToCollectionButton' bgColor=''>
        <AddToCollectionButton />
      </ComponentContainer>
      <ComponentContainer title='CSSPlaneSwitch' bgColor=''>
        <CSSPlaneSwitch />
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

export default Page1