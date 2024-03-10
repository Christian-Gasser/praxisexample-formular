export default function BaseRadio(props) {
    return (
        <div>
            <div>
                <label>{props.name}:</label>
                <input type={props.type} name={props.id} id={props.id}/>
            </div>
        </div>
    );
};