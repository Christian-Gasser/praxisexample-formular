import InputField from './form-elements/InputField.jsx';
import InputText from './form-elements/InputText.jsx';
import InputRadio from './form-elements/InputRadio.jsx';
import DoubleInputField from './form-elements/DoubleInputField.jsx';
import CheckBox from './form-elements/CheckBox.jsx';

export default function Formular(props) {
return(
    <div>
        <form></form>
        {/*Teilnehmer*/}
                <div class="row gy-2">
                    <h3>Teilnehmer</h3>
                    <InputField type="text" placeholder="Name" name="name" giveback={props.updateName}></InputField>
                    <InputField type="text" placeholder="Vorame" name="prename" giveback={props.updatePrename}></InputField>
                    <InputField type="text" placeholder="Ceviname" name="ceviname" giveback={props.updateCeviName}></InputField>
                    <InputField type="text" placeholder="Addresse" name="addresse" giveback={props.updateAddress}></InputField>
                    <DoubleInputField 
                        type1="text" placeholder1="PLZ" name1="plz" giveback1={props.updatePlz}
                        type2="text" placeholder2="Ort" name2="city" giveback2={props.updateCity}
                    ></DoubleInputField>
                </div>
                <br />
                <br />

                {/*Notfallkontakt*/}
                <div class="row gy-2">
                    <h3>Notfallkontakt</h3>
                    <InputField type="text" placeholder="Name" name="contactName" giveback={props.updateContactName}></InputField>
                    <InputField type="text" placeholder="Vorname" name="contactPrename" giveback={props.updateContactPrename}></InputField>
                    <InputField type="tel" placeholder="Telefon" name="name" giveback={props.updateContactNum}></InputField>
                    <div>
                        <CheckBox text="Hiermit bestätige ich, dass der hier angegebene Notfallkontakt eine erziehungsberechtigte Person des Teilnehmers ist." name="validation" giveback={updateValidation}></CheckBox>
                    </div>
                </div>
                <br />
                <br />

                {/*Essen*/}
                <div class="row gy-2">
                    <h3>Essen</h3>
                    <div>
                        <InputRadio group="essen" name="meet" placeholder="Fleisch" ></InputRadio>
                        <InputRadio group="essen" name="vegi" placeholder="Vegetarisch" ></InputRadio>
                    </div>
                    <InputText placeholder="Allergien" name="allergies" giveback={props.updateAllergies}></InputText>
                </div>
                <br />
                <br />

                {/*Bemerkungen */}
                <div class="row gy-2">
                    <h3>Bemerkungen</h3>
                <InputText placeholder="Krankheiten, regelmässige Medikamente, etc." name="comment" giveback={props.updateComment}></InputText>
                </div>
                <br />
                <br />

                <button class="btn btn-primary btn-lg" type="submit">Senden</button>
    </div>
)};