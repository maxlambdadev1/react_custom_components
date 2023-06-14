import ComponentContainer from "../components/ComponentContainer";
import AddToCollectionButton from "../components/AddToCollectionButton";
import CSSPlaneSwitch from "../components/CSSPlaneSwitch";
import OttonovaPrinter from "../components/OttonovaPrinter";
import FancyButton from "../components/FancyButton";
import CheckboxSelectionDesign from "../components/CheckboxSelectionDesign";
import PureCSSGhostButtons from "../components/PureCSSGhostButtons";
import CSSAnimated3DToaster from "../components/CSSAnimated3DToaster";
import StarsRatingAnimation from "../components/StarsRatingAnimation";
import SwitchLoadingAnimation from "../components/SwitchLoadingAnimation";
import CompressFilesButton from "../components/CompressFilesButton";
import TrashButton from "../components/TrashButton";
import PlayPauseButton from "../components/PlayPauseButton";
import UploadAnimation from "../components/UploadAnimation";
import DeleteButtonAnimation from "../components/DeleteButtonAnimation";
import ThemeToggleAnimation from "../components/ThemeToggleAnimation";
import CardContentReveal from "../components/CardContentReveal";
import ActionMenuMicrointeractions from "../components/ActionMenuMicrointeractions";
import Pagination from "../components/Pagination";
import LoveButton from "../components/LoveButton";
import CircularMenu from "../components/CircularMenu";

const Page1 = () => {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 p-4'>
      <ComponentContainer title='UploadAnimation' bgColor=''>
        <UploadAnimation />
      </ComponentContainer>
      <ComponentContainer title='DeleteButtonAnimation' bgColor=''>
        <DeleteButtonAnimation />
      </ComponentContainer>
      <ComponentContainer title='ThemeToggleAnimation' bgColor=''>
        <ThemeToggleAnimation />
      </ComponentContainer>
      <ComponentContainer title='LoveButton' bgColor=''>
        <LoveButton />
      </ComponentContainer>
      <ComponentContainer title='ActionMenuMicrointeractions' className='col-span-2' bgColor='#212327'>
        <ActionMenuMicrointeractions />
      </ComponentContainer>
      <ComponentContainer title='Pagination' className='col-span-2' bgColor='#0E2431'>
        <Pagination />  
      </ComponentContainer>
      <ComponentContainer title='CardContentReveal' bgColor='#0E2431'>
        <CardContentReveal />
      </ComponentContainer>
      <ComponentContainer title='CircularMenu' className='h-72' bgColor='#0E2431'>
        <CircularMenu />
      </ComponentContainer>
      <ComponentContainer title='StarsRatingAnimation' bgColor='#1C212E' className='col-span-2'>
        <StarsRatingAnimation />
      </ComponentContainer>
      <ComponentContainer title='SwitchLoadingAnimation' bgColor=''>
        <SwitchLoadingAnimation />
      </ComponentContainer>
      <ComponentContainer title='CompressFilesButton' bgColor='#E1E6F9'>
        <CompressFilesButton />
      </ComponentContainer>
      <ComponentContainer title='TrashButton' bgColor='#F6F8FF'>
        <TrashButton />
      </ComponentContainer>
      <ComponentContainer title='PlayPauseButton' bgColor='#ECEFFC'>
        <PlayPauseButton />
      </ComponentContainer>
      <ComponentContainer title='OttonovaPrinter' bgColor=''>
        <OttonovaPrinter />
      </ComponentContainer>
      <ComponentContainer title='FancyButton' bgColor='#0A0517'>
        <FancyButton />
      </ComponentContainer>
      <ComponentContainer title='CheckboxSelectionDesign' bgColor='#f0f0f0'>
        <CheckboxSelectionDesign type='1' />
        <CheckboxSelectionDesign type='2' icon_name='logo-instagram' title='Instagram' />
      </ComponentContainer>
      <ComponentContainer title='PureCSSGhostButtons' bgColor=''>
        <PureCSSGhostButtons />
      </ComponentContainer>
      <ComponentContainer title='CSSAnimated3DToaster' className='col-span-2' bgColor='#a3bac2'>
        <CSSAnimated3DToaster />
      </ComponentContainer>
      <ComponentContainer title='AddToCollectionButton' bgColor=''>
        <AddToCollectionButton />
      </ComponentContainer>
      <ComponentContainer title='CSSPlaneSwitch' bgColor=''>
        <CSSPlaneSwitch />
      </ComponentContainer>
    </div>
  )
}

export default Page1