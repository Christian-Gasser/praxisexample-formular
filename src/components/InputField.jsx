import 'bootstrap/dist/css/bootstrap.min.css'


export default function InputField(props) {
    return (
        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type={props.type} class="form-control" placeholder={props.placeholder} name={props.name} aria-label="name" aria-describedby="addon-wrapping" />
        </div>
    )};
