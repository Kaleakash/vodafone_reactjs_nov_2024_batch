import { useSelector } from "react-redux";

function ViewTask() {
let tasks = useSelector(gs=>gs.tasks);

    return(
        <div>
            <h3>View All Task Details</h3>
            {
                tasks.map((t)=>
                <div key={t.id}>Task is {t.name} Status is {t.status}</div>
                )
            }
        </div>
    )
}

export default ViewTask;