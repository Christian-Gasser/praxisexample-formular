import 'bootstrap/dist/css/bootstrap.min.css';

export default function Formular(props) {



    return (
        <div>
            <p>Vielen Dank für die Anmeldung!</p>
            <button class="btn btn-primary btn-lg" type="button" onClick={props.updatePage}>Okay</button>
        </div>
    )
}