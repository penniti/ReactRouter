import { useLocation ,useHistory} from "react-router-dom" 
export const Page1DetailA=()=>{
    const history =useHistory();
    const {state}=useLocation();
    const onClickBack=()=>history.goBack();
    console.log(state);
    return(
        <div>
            <h1>Page1DetailAです</h1>
            <button onClick={onClickBack}>戻る</button>
        </div>
    )
}