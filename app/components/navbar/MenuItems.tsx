'use client'

interface MenuItemsProps {
    onClick: () => void;
    label: string,
    addonClassName?: string
}

 const MenuItems: React.FC<MenuItemsProps> = ({
    onClick, 
    label,
    addonClassName
 }) => {
  return (
    <div 
    onClick={onClick}
    className={`
        px-4
        py-3
        hover:bg-neutral-100
        transition
        font-semibold
        ${addonClassName}
    `}>
      {label}
    </div>
  )
}

export default MenuItems
