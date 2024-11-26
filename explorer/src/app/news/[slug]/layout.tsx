const NewsSlugLayout:React.FunctionComponent<{children:React.ReactNode, modal: React.ReactNode}> = ({children,modal})=>{

    return <>
        {modal}
        {children}
    </>
}

export default NewsSlugLayout