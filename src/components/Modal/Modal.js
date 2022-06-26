export const Modal = ({ state, children }) => {
    return (
        <div className={`modal-container overflow-y-hidden ${state ? 'block' : 'hidden'}`}>
            {children}
        </div>
    )
}
