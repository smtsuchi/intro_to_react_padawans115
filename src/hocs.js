import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function withParams ( Component ) {
    return props => <Component {...props} params={useParams()} />
}


export function withRedirect ( Component ) {
    return props => <Component {...props} redirect={useNavigate()} />
}