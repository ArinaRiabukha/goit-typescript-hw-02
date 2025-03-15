import s from "./ErrorMessage.module.css"

const ErrorMessage = () =>{
    return(
        <>
            <p className={s.error}>An unknown problem occurred! Please try again later</p>
        </>
    );
};

export default ErrorMessage;