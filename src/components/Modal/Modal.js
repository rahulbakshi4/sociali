export const Modal = ({ state, children }) => {
    return (
        <div className={`modal-container  ${state ? 'block' : 'hidden'}`}>
            {children}
        </div>
    )
}
