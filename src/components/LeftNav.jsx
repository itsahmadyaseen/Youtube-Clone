import React, { useContext } from 'react'
import { Context } from '../context/contextApi'
import LeftNavMenuItem from './LeftNavMenuItem'
import { categories } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const LeftNav = () => {
    const {setSelectedCategory, selectedCategory} = useContext(Context)
    const navigate = useNavigate();

    const clickHandler = ((name, type) => {
        switch (type) {
            case 'category':
                return setSelectedCategory(name)
            case 'home':
                return setSelectedCategory(name)
            case 'menu':
                return false;
        
            default:
                break;
        }
    })
    

  return (
    <div className='md:block w-[240px] h-full overflow-y-auto py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all'>
        <div className='flex flex-col px-5'>
            {categories.map((item) => {
                return (
                    <React.Fragment key = {item.name}>
                        <LeftNavMenuItem 
                            text ={item.type === 'home'? 'Home' : item.name}
                            icon = {item.icon}
                            action = {() => {
                                clickHandler(item.name, item.type);
                                navigate('/')
                            }}
                            className={`${
                                selectedCategory === item.name
                                    ? "bg-white/[0.15]"
                                    : ""
                            }`}
                            
                        />
                        {item.divider && (
                            <hr className='my-5 border-white/[0.2]'/>
                        )}

                    </React.Fragment >
                )
            })}
            <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: Ahmad Yaseen
                </div>
        </div>
    </div>
  )
}


export default LeftNav