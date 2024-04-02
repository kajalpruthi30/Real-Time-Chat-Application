import React, {useState} from 'react'
import SearchInput from "./SearchInput";
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

function Sidebar() {

  const [search, setSearch] = useState('');

  return (
    <div className='border-r py-2 flex flex-col md:min-w-[25vw]'>
      <SearchInput setSearch={setSearch}/>
      <div className="divider px-3"></div>
      <Conversations search={search}/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar
