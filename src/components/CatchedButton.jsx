export const CatchedButton = ({isCatched, onClick}) => {

    const src = isCatched ? "../../public/buttons/master-on.png" : "../../public/buttons/master-off.png"

    return(
        <div>
            <img src={src} alt="Catched" style={{width: "100px"}}/>
        </div>
    )

}

