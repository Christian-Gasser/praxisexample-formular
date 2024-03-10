export default function BaseRadio(props) {
    return (
        <div class="guide-type">
            <input class="form-check-input" type="radio" name="guide-type" id={props.id} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};