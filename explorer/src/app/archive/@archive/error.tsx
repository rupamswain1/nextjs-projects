"use client"
const ErrorPage = ({error}:{error:{message:string}}) =>{
    return <div id="error">
        <h2>An Error Occured</h2>
        <p>{error.message}</p>
    </div>
}

export default ErrorPage;