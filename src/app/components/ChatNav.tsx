import { IoIosSearch } from "react-icons/io";
import { TbCircleDotFilled } from "react-icons/tb";

const dataArray = [
  {
    imgLink: "https://i.ibb.co/tL0DJjT/profile-8268938-640.webp",
    name: "John",
    lastMsg: "Hello there!",
    isActive: true,
    msgLastTime: "2024-01-28T10:15:00Z",
  },
  {
    imgLink:
      "https://i.ibb.co/RTvc8JJ/google-icon-512x512-tqc9el3r-removebg-preview.png",
    name: "Alice",
    lastMsg: "Hey, how are you?",
    isActive: false,
    msgLastTime: "2024-01-27T18:45:00Z",
  },
  {
    imgLink: "https://i.ibb.co/3RLMx6g/Education.png",
    name: "Bob",
    lastMsg: "Good morning!",
    isActive: true,
    msgLastTime: "2024-01-28T08:30:00Z",
  },
];

const ChatNav = () => {
  const dateFormat = (date: any) => {

    const minOfDate = Math.round(((new Date().getTime() - new Date(date).getTime()) / 1000) / 60);

    if (minOfDate <= 0) {
      return `now`;
    }
    if (minOfDate < 60) {
      return `${minOfDate}min`;
    }
    if (minOfDate < 1440) {
      return `${Math.round(minOfDate / 60)}h`;
    }
    if (minOfDate < 10080) {
      return `${Math.round(minOfDate / 1440)}d`;
    } else {
      return `${Math.round(minOfDate / 10080)}week`;
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-1/3 min-h-screen bg-[#FF7373]"></div>
      <div className="w-full px-4">
        <h1 className="text-3xl font-semibold text-center uppercase">Inbox</h1>
        {/* input start */}
        <div className="flex w-full py-1 px-2 rounded-full text-base border-2 ">
          <input
            className="w-full py-1 px-2 outline-none"
            type="text"
            name=""
            id=""
          />
          <button type="submit" className="text-2xl px-1">
            <IoIosSearch />
          </button>
        </div>
        {/* input end */}

        <div className="mt-5">
          {dataArray.map((user, index) => (
            <div
              className="my-4 p-2 flex gap-x-3 cursor-pointer rounded-lg hover:bg-gray-100 transition duration-300 hover:scale-[1.02] items-center"
              key={index}
            >
              <img
                className="w-12 h-12 rounded-full"
                src={user.imgLink}
                alt=""
              />
              <div className="flex-1">
                <h1 className="text-xl text-gray-600 font-semibold">
                  {user.name}
                </h1>
                <p>{user.lastMsg}</p>
              </div>
              <div className="flex flex-col items-end gap-y-1">
                <div className="text-sm">
                  {user.isActive ? (
                    <span className="text-green-600 ">
                      <TbCircleDotFilled />
                    </span>
                  ) : (
                    <span className="text-red-600 ">
                      <TbCircleDotFilled />
                    </span>
                  )}
                </div>
                <div className="text-sm">{dateFormat(user.msgLastTime)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatNav;
