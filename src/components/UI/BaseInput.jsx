export default function BaseRadio(props) {
    return (
        <div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input type={props.type} class="form-control" placeholder={props.name} aria-label={props.name} aria-describedby="addon-wrapping" />
            </div>
        </div>

    );
};