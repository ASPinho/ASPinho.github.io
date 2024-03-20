export function getPreviousSiblingYCoord(currElementId : string)  {

    const currElement : HTMLElement | null = document.getElementById(currElementId);

    if (currElement === null) {
        return
    }

    const prevElement : Element | null = currElement.previousElementSibling;

    if (prevElement === null) {
        return
    }

    return prevElement.getBoundingClientRect().bottom;
}

export function setMaxHeightFromSibling(divId : string) {

    const previousSiblingYCoord = getPreviousSiblingYCoord(divId);

    const currElement  = document.getElementById(divId);

    if (previousSiblingYCoord !== undefined) {

        currElement!.setAttribute("style", "max-height: " + (window.innerHeight - previousSiblingYCoord - 20) + "px");
    }
}

export function convertAndPadTime (time: number) {

    let convertedTime = time.toString().padStart(2, "0");

    return convertedTime;
}