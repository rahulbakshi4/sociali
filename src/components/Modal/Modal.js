export const Modal = ({ state, children }) => {
    console.log(children)
    return (
        <div className={`modal-container  ${state ? 'block' : 'hidden'}`}>
            {children}
        </div>
    )
}
