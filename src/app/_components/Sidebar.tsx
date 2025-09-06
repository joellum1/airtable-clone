import { HomeOutlined, StarOutlined, ShareAltOutlined, TeamOutlined } from '@ant-design/icons';

export default function Sidebar() {
  return (
    <div className="w-[46px] pt-[20px] flex flex-col items-center border border-gray-200 shadow-xs z-5">
      {/* Home */}
      <div className="w-[20px] h-[20px] mb-[20px]">
        <HomeOutlined />
      </div>

      {/* Starred */}
      <div className="w-[20px] h-[20px] mb-[20px]">
        <StarOutlined />
      </div>

      {/* Shared */}
      <div className="w-[20px] h-[20px] mb-[20px]">
        <ShareAltOutlined />
      </div>

      {/* Workspaces */}
      <div className="w-[20px] h-[20px] mb-[20px]">
        <TeamOutlined />
      </div>

      {/* Divider */}
      <div className='w-[20px] h-[1px] border-t border-[rgba(29, 31, 37, 0.3)] mb-[20px]'/>
    </div>
  );
}