import { Context } from '@/context/Mycontext'
import Image from 'next/image'
import { useContext } from 'react'

export default function MyProfile() {
    const { isLogin, userData } = useContext(Context)

    return (
        <div>
            <div className='bg-[#1E2875] rounded-[8.89px] border sm:w-[752px] h-[169px] mx-auto'>

            </div>
            <div className='border-[1.77px] rounded-[8.889px] w-[680px] border-[#EBEBEE] shadow-md mx-auto -mt-16'>
                <div>

                    <div className='flex'>
                        <Image src={'/propic2.png'} alt='' width={89} height={89} />
                        <button className='text-[9px] font-[500] leading-normal text-[#1F1F1FCC]/80 rounded-[89px] bg-[#F0EFFA] py-[4.5px] px-[14.2px]'>Upload Photo</button>
                    </div>
                    <div className='border'>
                        <label htmlFor="Your Name"></label><br />
                        <div className='flex justify-between items-center'>
                            <p>name</p>
                            <button>Edit</button>
                        </div>
                    </div>
                    <div className='border'>
                        <div className='flex justify-between items-center'>
                            <p>name</p>
                            <button>Edit</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sequi.</p>
                    </div>
                    <div className='border'>
                        <div className='flex justify-between items-center'>
                            <p>Skills</p>
                            <button>Edit</button>
                        </div>
                        <p>Next.js</p>
                        <p>Next.js</p>
                    </div>

                </div>
                <div>
                    <div className='border flex items-center justify-between'>
                        <div className=''>
                            <p>name</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sequi.</p>

                        </div>
                        <Image src={''} alt='no' />

                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <p>Skills</p>
                            <button>Edit</button>
                        </div>
                        <div className='flex'>
                            <Image src={''} alt='no' />
                            <div>
                                <p>python</p>
                                <p>coding ninjs</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <p>Experience</p>
                            <button>Edit</button>
                        </div>
                        <div className='flex'>
                            <Image src={''} alt='no' />
                            <div>
                                <p>python</p>
                                <p>coding ninjs</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
