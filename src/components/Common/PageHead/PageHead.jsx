import './PageHead.css';

const PageHead = ({subTitle, Title}) => {
    return (
        <div className='page-hade'>
            <div className="container py-10 text-center">
                <p className='text-Secondary '>--{subTitle}--</p>
                <h2 className='text-white font-subTitle text-3xl'>{Title}</h2>
            </div>
        </div>
    );
};

export default PageHead;