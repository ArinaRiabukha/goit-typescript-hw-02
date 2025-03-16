import { ProgressBar } from "react-loader-spinner";
import s from "./Loader.module.css"

const Loader: React.FC = () =>{
    return(
        <div className={s.loader}>
            <ProgressBar
            visible={true}
            height="80"
            width="80"
            barColor="rgb(98, 177, 250)"
            borderColor="whitesmoke"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""/>
        </div>
    );
};

export default Loader;