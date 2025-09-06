import { HomeOutlined, StarOutlined, ShareAltOutlined, TeamOutlined, PlusOutlined } from '@ant-design/icons';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function Sidebar() {
  return (
    <div className="w-[46px] flex flex-none border-r border-gray-200 box-border shadow-xs z-5">
      <nav className="pt-[20px] flex flex-col justify-between items-center">
        {/* Top */}
        <div className="w-[46px] flex flex-col items-center">
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
          <div className='w-[20px] h-[1px] mb-[20px] border-t border-[rgba(29, 31, 37, 0.3)] box-border'/>
        </div>

        {/* Bottom */}
        <div className='flex flex-col items-center'>
          {/* Divider */}
          <div className='w-[20px] h-[1px] mb-[18px] border-t border-[rgba(29, 31, 37, 0.3)] box-border'/>

          {/* Templates */}
          <div className='w-[16px] h-[16px] mb-[18px]'>
            <ImportContactsOutlinedIcon fontSize='inherit' style={{ color: '#8f8f8f' }} />
          </div>

          {/* Marketplace */}
          <div className='w-[16px] h-[16px] mb-[18px]'>
            <WorkOutlineOutlinedIcon fontSize='inherit' style={{ color: '#8f8f8f' }} />
          </div>

          {/* Import */}
          <div className='w-[16px] h-[16px] mb-[18px]'>
            <LanguageOutlinedIcon fontSize='inherit' style={{ color: '#8f8f8f' }} />
          </div>

          {/* Create */}
          <div className='w-[22px] h-[22px] flex items-center justify-center border border-[#e4e4e4] box-border rounded-md'>
            <PlusOutlined style={{ fontSize: '16px', color: '#8f8f8f' }} />
          </div>
        </div>
      </nav>
    </div>
  );
}