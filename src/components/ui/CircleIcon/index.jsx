const CircleIcon = ({ icon }) => {
    return (
        <div className="bg-gray-200 w-[40px] h-[40px] flex items-center justify-center rounded-full text-lg cursor-pointer hover:bg-gray-300">
            {icon}
        </div>
    );
}
export default CircleIcon;