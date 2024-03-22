import { RingLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-124px)]">
            <RingLoader size={100} color="#F92FD3"></RingLoader>
        </div>
    );
};

export default Loader;