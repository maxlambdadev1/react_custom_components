import ComponentContainer from "../components/ComponentContainer";
import IOS15Button1 from "../components/IOS15Button1";

const Page3 = () => {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 p-4'>
      <ComponentContainer title='IOS15Button1' bgColor='#1B1E4F'>
        <IOS15Button1 />
      </ComponentContainer>
    </div>
  )
}

export default Page3