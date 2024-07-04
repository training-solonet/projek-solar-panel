const Button = (props) => {
    const { children, oc, customStyles } = props;
    return (
        <button
        className={`${customStyles} px-8 py-3 font-semibold rounded-3xl duration-500 ease-in-out`}
        onClick={oc}>
            {children}
        </button>
    )
}

export default Button