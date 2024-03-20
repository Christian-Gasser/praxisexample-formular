
import 'bootstrap/dist/css/bootstrap.min.css'


export default function InputField(props) {


    return (
        <div class="form-check">
            <input class="form-check-input" type="radio" name={props.group} id={props.name} value={props.name} checked={props.input === props.name} onChange={props.giveback}/>
            <label class="form-check-label" for="flexRadioDefault1">
                {props.placeholder}
            </label>
        </div>
    )
};