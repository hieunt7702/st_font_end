interface IProps {
    label: string;
}

export const ButtonBase = ({ label }: IProps) => {
    return (<button
        rel="nofollow"
        className="flex items-center justify-center p-3 font-medium text-white rounded bg-brand-500 text-theme-sm hover:bg-brand-600"
    >
        {label}
    </button>)
}