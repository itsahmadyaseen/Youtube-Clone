import React, {useContext, useEffect} from 'react'
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'
import { Context } from '../context/contextApi'


const Feed = () => {
  const {loading, searchResults} = useContext(Context);


  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h')
  }, [])
  

  return (
    <div className = 'flex flex-row h-[calc(100%-56px)]'>
        <LeftNav />
        <div className='grow w-[calc(100%-240px)] bg-black h-full overflow-y-auto'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
            {!loading && 
                searchResults.map((item) => {
                  if (item.type !== "video") return false;
                  return (
                      <VideoCard
                          key={item?.video?.videoId}
                          video={item?.video}
                      />
                  );
                })
            }
          </div>
        </div>
    </div>
  )
}

export default Feed