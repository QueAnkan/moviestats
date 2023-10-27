import { useState } from 'react';

export function useSearchState() {
   const [isOpen,setIsOpen] = useState(true)
	const [drop, setDrop] = useState(0)
	const visibleClass = 'visible ' + (isOpen ? 'invisible' : '')

	const handleOnTap = () => {
		setIsOpen(!isOpen)
		if(!isOpen){
		setDrop(0)
		}else{
			setDrop(1000)
		}
	}

    return {
        isOpen,
        handleOnTap,
		drop,
		visibleClass,
    };
}