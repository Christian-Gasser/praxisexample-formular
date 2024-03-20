import 'bootstrap/dist/css/bootstrap.min.css';

export default function Alert(props) {    return (
    <div class="alert alert-danger" role="alert">
        {props.message}
    </div>
    )
}