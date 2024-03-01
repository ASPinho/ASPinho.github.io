import React, {useEffect} from "react";
import {setMaxHeightFromSibling} from "../../scripts/utilities";

type PageContentProps = {
    children : React.ReactNode;
}

const PageContent = (props : PageContentProps) => {

    const divId = "page-content"
    const setMaxHeight = () => {
        setMaxHeightFromSibling(divId)
    }

    useEffect(() => {
        setMaxHeight();
        window.addEventListener("resize", setMaxHeight, false);
    }, []);

    return (
        <div id={divId}>
            {props.children}
        </div>
    )
}

export default PageContent