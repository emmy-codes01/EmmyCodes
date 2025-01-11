import ReactIcon from '../assets/react.svg';

const Herosection = () => {
    return (
        <div className="p-10 bg-gray-100">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                <img
                    src={ReactIcon}
                    alt="React"
                    className="w-8 h-8 md:w-10 md:h-10"
                />
            </div>
        </div>
    );
};

export default Herosection;
