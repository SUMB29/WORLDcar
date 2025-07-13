import React from 'react'

import Background from './Background/Background'
import UserInput from './User/UserInput'

const Sign = () => {
    return (
        <div>
            <Background playStatus={false} heroCount={2} />
            <div class="m-auto justify-center place-items-center">
                <div class="text-neutral-50 border border-neutral-50 m-2 bg-black rounded-[9px] px-[10px] py-[5px] text-[42px] font-normal font-['manufacturing_Consent']">WORLDcar</div>
                <UserInput />
            </div>
        </div>
    )
}

export default Sign
