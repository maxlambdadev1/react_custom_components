import TrashButtonAnimation from "../components/TrashButtonAnimation";
import ComponentContainer from "../components/ComponentContainer";

const Page1 = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
          <ComponentContainer title='TrashButtonAnimation' bgColor=''>
            <TrashButtonAnimation />
          </ComponentContainer>
        </div>
    )
}

export default Page1