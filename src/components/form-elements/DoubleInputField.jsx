import 'bootstrap/dist/css/bootstrap.min.css'


export default function InputField(props) {
    return (
        <div class="input-group">
            <span class="input-group-text">@</span>
            <input type={props.type1} aria-label={props.name1} placeholder={props.placeholder1} class="form-control" onClick={props.giveback1}/>
            <input type={props.type2} aria-label={props.name2} placeholder={props.placeholder2} class="form-control" onClick={props.giveback2}/>
        </div>
    )
};