export const HomeIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518
         9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            </path>
        </svg>
    )
}

export const ExploreIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
    )
}
export const CloseIcon = ({ size }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size !== undefined ? size : 24} height={size !== undefined ? size : 24} viewBox="0 0 24 24" fill="none" stroke="black"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    )
}

export const BookmarkIcon = ({ size }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size !== undefined ? size : 24} height={size !== undefined ? size : 24} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
    )
}

export const ListIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
    )
}

export const HeartIcon = ({ size }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size !== undefined ? size : 24} height={size !== undefined ? size : 24} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    )
}
export const CommentIcon = ({ size }) => {
    return (
        <svg width={size !== undefined ? size : 24} height={size !== undefined ? size : 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" stroke="rgba(0,0,0,0.95)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    )
}

export const OptionsIcon = ({ size }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size !== undefined ? size : 24} height={size !== undefined ? size : 24} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
        </svg>
    )
}

export const EditIcon = ({ size }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size !== undefined ? size : 24} height={size !== undefined ? size : 24} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>)
}

export const TrashIcon = ({ size }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size !== undefined ? size : 24} height={size !== undefined ? size : 24} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
    )
}
