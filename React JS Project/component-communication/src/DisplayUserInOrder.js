function DisplayUserInOrder(props) {

    return(
        <div>
            <h3>User Details in Order format</h3>
            <ol>
            {props.dataUser.map(u=>
                <li>{u}</li>
            )}
            </ol>
        </div>
    )
}

export default DisplayUserInOrder;