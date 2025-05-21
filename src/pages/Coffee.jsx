import PageHead from "../components/Common/PageHead/PageHead";
import useCoffee from "../hooks/useCoffee";


const Coffee = () => {
    const [coffee] = useCoffee()
    return (
        <div>
            <PageHead Title={'Coffee Page'} subTitle={'Sip & Savor'}></PageHead>
            <p>hi</p>
            <p>{coffee.length}</p>
        </div>
    );
};

export default Coffee;