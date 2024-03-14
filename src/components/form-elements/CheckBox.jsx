import 'bootstrap/dist/css/bootstrap.min.css'


export default function InputField(props) {
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id={props.name} onChange={props.giveback} />
            <label class="form-check-label" for={props.name}>
                {props.text}
            </label>
        </div>
    )
};