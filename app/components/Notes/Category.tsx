'use client'
import { HiOutlineCodeBracketSquare } from 'react-icons/hi2'

const Category = () => {
    return(
        <div className="
            text-sm
            py-4
            font-semibold
            border-b-[1px]
            flex 
            items-center
            gap-3
        ">
            <HiOutlineCodeBracketSquare
                width={24}
            />
            <h4 className="text-neutral-500">Code</h4>
        </div>
    )
}

export default Category