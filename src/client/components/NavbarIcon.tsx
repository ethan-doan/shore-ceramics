type NavIconProps = {
    className?: string;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
    onKeyDown?: React.KeyboardEventHandler<SVGSVGElement>;
};

function NavbarIcon({ className, children, onClick, onKeyDown }: NavIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={0}
            role="button"
        >
            {children}
        </svg>
    );
}

export default NavbarIcon;
