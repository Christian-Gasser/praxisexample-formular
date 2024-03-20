import 'bootstrap/dist/css/bootstrap.min.css';

import InputField from './form-elements/InputField.js';
import InputText from './form-elements/InputText.js';
import InputRadio from './form-elements/InputRadio.js';
import DoubleInputField from './form-elements/DoubleInputField.js';
import CheckBox from './form-elements/CheckBox.js';
import Alert from './form-elements/Alert.js';

export default function Formular(props) {


    
return(
    <div>
        <form onSubmit={props.handleSubmit}>
        {/*Teilnehmer*/}
                <div class="row gy-2">
                    <h3>Teilnehmer</h3>
                    <InputField type="text" placeholder="Name" name="name" input={props.name} giveback={props.updateName}></InputField>
                    <InputField type="text" placeholder="Vorame" name="prename" input={props.prename} giveback={props.updatePrename}></InputField>
                    <InputField type="text" placeholder="Ceviname" name="ceviname" input={props.ceviName} giveback={props.updateCeviName}></InputField>
                    <InputField type="text" placeholder="Addresse" name="addresse" input={props.address} giveback={props.updateAddress}></InputField>
                    <DoubleInputField 
                        type1="number" placeholder1="PLZ" name1="plz" input1={props.plz} giveback1={props.updatePlz}
                        type2="text" placeholder2="Ort" name2="city" input2={props.city} giveback2={props.updateCity}
                    ></DoubleInputField>
                </div>
                <br />
                <br />

                {/*Notfallkontakt*/}
                <div class="row gy-2">
                    <h3>Notfallkontakt</h3>
                    <InputField type="text" placeholder="Name" name="contactName" input={props.contactName} giveback={props.updateContactName}></InputField>
                    <InputField type="text" placeholder="Vorname" name="contactPrename" input={props.contactPrename} giveback={props.updateContactPrename}></InputField>
                    <InputField type="tel" placeholder="Telefon" name="name" input={props.contactNum} giveback={props.updateContactNum}></InputField>
                    <div>
                        <CheckBox text="Hiermit bestätige ich, dass der hier angegebene Notfallkontakt eine erziehungsberechtigte Person des Teilnehmers ist." name="validation" input={props.validation} giveback={props.updateValidation}></CheckBox>
                    </div>
                </div>
                <br />
                <br />

                {/*Essen*/}
                <div class="row gy-2">
                    <h3>Essen</h3>
                    <div>
                        <InputRadio group="essen" name="meet" placeholder="Fleisch" input={props.food} giveback={props.updateFood}></InputRadio>
                        <InputRadio group="essen" name="vegi" placeholder="Vegetarisch" input={props.food} giveback={props.updateFood}></InputRadio>
                    </div>
                    <InputText placeholder="Allergien" name="allergies" input={props.allergies} giveback={props.updateAllergies}></InputText>
                </div>
                <br />
                <br />

                {/*Bemerkungen */}
                <div class="row gy-2">
                    <h3>Bemerkungen</h3>
                <InputText placeholder="Krankheiten, regelmässige Medikamente, etc." name="comment" input={props.comment} giveback={props.updateComment}></InputText>
                </div>
                <br />
                {(() => {
                    if (props.alert) {
                        return <Alert 
                            message="Das eingereichte Formular ist unvollständig. Bitte überprüfen Sie, ob Sie in alle Felder bis auf Allergien und Bemerkungen mindestens ein Zeichen eingegeben und die erziehungsberechtigte Person bestätigt haben und versuchen Sie es danach erneut zu Senden."
                        ></Alert>
                    }
                })()} 
                <br />

                <button class="btn btn-primary btn-lg" type="submit">Weiter</button>
        </form>
    </div>
)};