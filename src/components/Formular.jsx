import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';

import InputField from './form-elements/InputField.jsx';
import InputText from './form-elements/InputText.jsx';
import InputRadio from './form-elements/InputRadio.jsx';
import DoubleInputField from './form-elements/DoubleInputField.jsx';
import CheckBox from './form-elements/CheckBox.jsx';
import FormularInput from './FormularInput.jsx';

export default function Formular(props) {
    //State
    const [name, setName] = useState("");
    const [prename, setPrename] = useState("");
    const [ceviName, setCeviName] = useState("");
    const [address, setAddress] = useState("");
    const [plz, setPlz] = useState("");
    const [city, setCity] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactPrename, setContactPrename] = useState("");
    const [contactNum, setContactNum] = useState("");
    const [validation, setValidation] = useState("");
    const [food, setFood] = useState("");
    const [allergies, setAllergies] = useState("");
    const [comment, setComment] = useState("");

    //Functions
    const updateName = (e) => setName(e.target.value);
    const updatePrename = (e) => setPrename(e.target.value);
    const updateCeviName = (e) => setCeviName(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updatePlz = (e) => setPlz(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateContactName = (e) => setContactName(e.target.value);
    const updateContactPrename = (e) => setContactPrename(e.target.value);
    const updateContactNum = (e) => setContactNum(e.target.value);
    const updateValidation = (e) => setValidation(e.target.value);
    const updateFood = (e) => setFood(e.target.value);
    const updateAllergies = (e) => setAllergies(e.target.value);
    const updateComment = (e) => setComment(e.target.value);


    const changeFood = e => {
        setFood(e.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert('Name: ' + prename + ' ' + name + ' v/o ' + ceviName + ' Addresse: ' + address + ', ' + plz + ' ' + city + ' ');

    }
    return (
        <div class="container">
            <h1>Anmeldung zum Cevi-Lager</h1>
            <br />
            <FormularInput
                updateName={updateName}
                updatePrename={updatePrename}
                updateCeviName={updateCeviName}
                updateAddress={updateAddress}
                updatePlz={updatePlz}
                updateCity={updateCity}
                updateContactName={updateContactName}
                updateContactPrename={updateContactPrename}
                updateContactNum={updateContactNum}
                updateValidation={updateValidation}
                updateAllergies={updateAllergies}
            ></FormularInput>

            <form onSubmit={handleSubmit}>



                {/*Teilnehmer*/}
                <div class="row gy-2">
                    <h3>Teilnehmer</h3>
                    <InputField type="text" placeholder="Name" name="name" giveback={updateName}></InputField>
                    <InputField type="text" placeholder="Vorame" name="prename" giveback={updatePrename}></InputField>
                    <InputField type="text" placeholder="Ceviname" name="ceviname" giveback={updateCeviName}></InputField>
                    <InputField type="text" placeholder="Addresse" name="addresse" giveback={updateAddress}></InputField>
                    <DoubleInputField
                        type1="text" placeholder1="PLZ" name1="plz" giveback1={updatePlz}
                        type2="text" placeholder2="Ort" name2="city" giveback2={updateCity}
                    ></DoubleInputField>
                </div>
                <br />
                <br />

                {/*Notfallkontakt*/}
                <div class="row gy-2">
                    <h3>Notfallkontakt</h3>
                    <InputField type="text" placeholder="Name" name="contactName" giveback={updateContactName}></InputField>
                    <InputField type="text" placeholder="Vorname" name="contactPrename" giveback={updateContactPrename}></InputField>
                    <InputField type="tel" placeholder="Telefon" name="name" giveback={updateName}></InputField>
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
                    <InputText placeholder="Allergien" name="allergies" giveback={updateAllergies}></InputText>
                </div>
                <br />
                <br />

                {/*Bemerkungen */}
                <div class="row gy-2">
                    <h3>Bemerkungen</h3>
                    <InputText placeholder="Krankheiten, regelmässige Medikamente, etc." name="comment" giveback={updateComment}></InputText>
                </div>
                <br />
                <br />

                <button class="btn btn-primary btn-lg" type="submit">Senden</button>
            </form>
        </div>
    );
}