export default function BaseRadio(props) {
    return (
        <div class="form-check">
            <input class="form-check-input" type="radio" name={props.radioGroup} id={props.id} />
            <label class="form-check-label" for={props.id}>
                {props.name}
            </label>
        </div>
    );
};