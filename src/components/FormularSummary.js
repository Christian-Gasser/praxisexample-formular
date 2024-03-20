import 'bootstrap/dist/css/bootstrap.min.css';

export default function Formular(props) {

    function comment() {
        if (props.comment === "") {
            return "Kein Kommentar";
        } else {
            return props.comment;
        }
    }

    function allergies() {
        if (props.allergies === "") {
            return "Keine Allergien";
        } else {
            return props.allergies;
        }
    }

    function food() {
        if (props.comment === "meet") {
            return "Fleisch";
        } else {
            return "Vegetarisch";
        }
    }

    return (
        <div>
            <div class="row gy-2">
                <h3>Teilnehmer</h3>
                <p>Name: {props.prename} {props.name} v/o {props.ceviName} </p>
                <p>Addresse: {props.address}</p>
                <p>Ort: {props.plz} {props.city}</p>
            </div>
            <br />


            {/*Notfallkontakt*/}
            <div class="row gy-2">
                <h3>Notfallkontakt</h3>
                <p>Name: {props.contactPrename} {props.contactName}</p>
                <p>Nummer: {props.contactNum}</p>
            </div>
            <br />


            {/*Essen*/}
            <div class="row gy-2">
                <h3>Essen</h3>
                <p>Typ: {food()}</p>
                <p>Allergien: {allergies()}</p>
            </div>
            <br />


            {/*Bemerkungen */}
            <div class="row gy-2">
                <h3>Bemerkungen</h3>
                <p>{comment()}</p>
            </div>
            <br />

            <div class="btn-group" role="group" aria-label="Basic example">
                <button class="btn btn-primary btn-lg" type="button" onClick={props.updatePage}>Zurück</button>
                <button class="btn btn-primary btn-lg" type="button" onClick={props.submittForm}>Senden</button>
            </div>
        </div>
    )
}