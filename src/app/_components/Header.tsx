import { MenuOutlined, QuestionCircleOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from "antd";

export default function Header() {
  return (
    <div className="w-full h-[56px] pl-[8px] pr-[16px] flex justify-between items-center border border-gray-200 shadow-xs z-10">
      {/* Left Side */}
      <div className='flex items-center'>
        {/* Expand Sidebar Icon */}
        <div className="pl-[4px] pr-[8px] hover:cursor-pointer">
          <MenuOutlined />
        </div>

        {/* Airtable Logo */}
        <div className='p-[12px] mr-[4px]'>
          <img src="/images/airtable_logo_with_name.png" alt="airtable logo" className='w-[102px]'/>
        </div>
      </div>

      {/* Middle - Search Bar */}

      {/* Right Side - List of Miscellaneous Buttons */}
      <div className='flex items-center'>
        {/* Support Button */}
        <button className='w-[28px] h-[28px] flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-200'>
          <QuestionCircleOutlined style={{ fontSize: '13px' }}/>
        </button>

        {/* Notifications Button */}
        <button className='w-[28px] h-[28px] mx-[12px] flex items-center justify-center rounded-full border border-solid border-gray-200 shadow-xs hover:cursor-pointer hover:bg-gray-200'>
          <BellOutlined style={{ fontSize: '14px' }}/>
        </button>

        {/* User Button */}
        <button className='w-[28px] h-[28px] ml-[8px] flex items-center justify-center rounded-full border border-solid border-gray-200 shadow-xs hover:cursor-pointer hover:shadow-xs'>
          <Avatar 
            // src=''
            icon={<UserOutlined />}
            size={25}
          />
        </button>
      </div>
    </div>
  );
}