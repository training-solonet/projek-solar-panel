const Button = ({ children, oc, customStyles }) => {
    return (
        <button
        className={`${customStyles} bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 duration-500 ease-in-out`}
        onClick={oc}>
            {children}
        </button>
    )
}