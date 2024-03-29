import React from 'react'
import { Link } from 'react-router-dom'
import VideoLength from '../shared/VideoLength'
import { abbreviateNumber } from 'js-abbreviation-number';
import{BsFillCheckCircleFill} from 'react-icons/bs'

const VideoCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col mb-8">
            <div className="h-48 md:h-40 md:rounded-xl relative overflow-hidden">
                <img src={video?.thumbnails?.[0]?.url} alt="" className='h-full w-full object-cover'/>
                {video?.lengthSeconds && 
                    <VideoLength time={video?.lengthSeconds} />        
                }
            </div>
            <div className='flex text-white mt-3'>
                <div className='flex item-start'>
                    <div className='h-9 w-9 rounded-full overflow-hidden'>
                        <img src={video?.author?.avatar[0]?.url} alt="" className='h-full w-full object-cover' />
                    </div>
                </div>
                <div className='flex flex-col text-white ml-3 overflow-hidden'>
                    <span className='text-sm line-clamp-2 leading-none'>
                        {video?.title}
                    </span>
                    <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                            )}
                        </span>
                        <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                            <span>{`${abbreviateNumber(
                                video?.stats?.views,
                                2
                            )} views`}</span>
                            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                                .
                            </span>
                            <span className="truncate">
                                {video?.publishedTimeText}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;