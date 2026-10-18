

const VideoTitle = ({title, overView}) => {
    return <div className="w-screen h-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradiant-to-r from-black">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overView}</p>
        <div >
            <button className="bg-black text-white p-4 px-12  text-xl rounded-lg hover:bg-opacity-80"> ▶️Play</button>
            <button className=" mx-2 bg-gray-500 text-black p-4 px-12 text-xl b-opacity-50 rounded-lg">More Info</button>
        </div>

    </div>
}

export default VideoTitle;