import ComponentContainer from "../components/ComponentContainer";
import AddToCollectionButton from "../components/AddToCollectionButton";
import CSSPlaneSwitch from "../components/CSSPlaneSwitch";
import ContinueApplicationHover from "../components/ContinueApplicationHover";
import MailNotification from "../components/MailNotification";
import HeartFoldButton from "../components/HeartFoldButton";
import HeartFoldButton1 from "../components/HeartFoldButton1";


const Page1 = () => {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-3 p-4'>
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
      <ComponentContainer title='' bgColor=''>
      </ComponentContainer>
      <ComponentContainer title='' bgColor=''>
      </ComponentContainer>
    </div>
  )
}

export default Page1