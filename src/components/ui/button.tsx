type buttonVariant = 'success' | 'info' | 'warning' | 'danger'

interface buttonProps {
    children: React.ReactNode
    variant: buttonVariant
    onClick?: () => void
}
export function Button({ children, variant, onClick }: buttonProps) {

    const success = 'bg-emerald-500 text-emerald-800 hover:bg-emerald-200'
    const info = 'bg-blue-500 text-blue-800 hover:bg-blue-400'
    const warning = 'bg-orange-500 text-orange-red hover:bg-orange-400'
    const danger = 'bg-red-500 text-emerald-red hover:bg-emerald-red'
    const normal = 'bg-stone-200 border-stone-800 hover:bg-stone-100'

    const handleVariant = (variant: buttonVariant) => {
        if (variant === 'success') {
            return success
        }
        if (variant === 'info') {
            return info
        }
        if (variant === 'warning') {
            return warning
        }
        if (variant === 'danger') {
            return danger
        }
        return normal
    }

    return (
        <button onClick={onClick} className={`${handleVariant(variant)} text-md font-semibold rounded-md px-2 py-1 hover:cursor-pointer`}>
            {children}
        </button>
    )
}