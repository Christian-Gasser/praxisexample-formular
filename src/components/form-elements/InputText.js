import 'bootstrap/dist/css/bootstrap.min.css'


export default function InputText(props) {
    return (
        <div class="input-group flex-nowrap">
            <textarea type="text" class="form-control" placeholder={props.placeholder} aria-label={props.name} aria-describedby="addon-wrapping" value={props.input} onChange={props.giveback}/>
        </div>
    )
};