import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';

import FormularInput from './FormularInput.js';
import FormularSummary from './FormularSummary.js';
import FormularSended from './FormularSended.js';

export default function Formular() {
    //State
    const [alert, setAlert] = useState(false)
    const [page, setPage] = useState("input")
    const [name, setName] = useState("");
    const [prename, setPrename] = useState("");
    const [ceviName, setCeviName] = useState("");
    const [address, setAddress] = useState("");
    const [plz, setPlz] = useState(null);
    const [city, setCity] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactPrename, setContactPrename] = useState("");
    const [contactNum, setContactNum] = useState("");
    const [validation, setValidation] = useState(false);
    const [food, setFood] = useState(null);
    const [allergies, setAllergies] = useState("");
    const [comment, setComment] = useState("");


    //Functions
    const updateName = (e) => setName(e.target.value.trim());
    const updatePrename = (e) => setPrename(e.target.value.trim());
    const updateCeviName = (e) => setCeviName(e.target.value.trim());
    const updateAddress = (e) => setAddress(e.target.value);
    const updatePlz = (e) => setPlz(e.target.value);
    const updateCity = (e) => setCity(e.target.value.trim());
    const updateContactName = (e) => setContactName(e.target.value.trim());
    const updateContactPrename = (e) => setContactPrename(e.target.value.trim());
    const updateContactNum = (e) => setContactNum(e.target.value);
    const updateValidation = (e) => setValidation(!validation);
    const updateFood = (e) => setFood(e.target.value);
    const updateAllergies = (e) => setAllergies(e.target.value.trim());
    const updateComment = (e) => setComment(e.target.value.trim());
    const backToForm = () => setPage('input');

    function submittForm() {
        //fetch data
        setName('');
        setPrename('');
        setCeviName('');
        setAddress('');
        setPlz(null);
        setCity('');
        setContactName('');
        setContactPrename('');
        setContactNum('');
        setValidation(false);
        setFood(null);
        setAllergies('');
        setComment('');
        setPage('sended');
    }

    function checkValidation() {
        if (
            validation === false ||
            name === "" ||
            prename === "" ||
            ceviName === "" ||
            address.trim() === "" ||
            plz === null ||
            city === "" ||
            contactName === "" ||
            contactPrename === "" ||
            contactNum.trim() === "" ||
            food === null
        ) {
            setAlert(true);
            return false;
        } else {
            setAlert(false);
            return true;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (checkValidation() === true) {
            setPage('summary');
            console.log(page)
        } else {
            console.log('Validation failed!');
            console.log('Name: '+prename+' '+name+' v/o '+ceviName);
            console.log('Address: '+address+', '+plz+' '+city);
            console.log('Contact: '+contactPrename+' '+contactName+' '+contactNum);
            console.log('Validation: '+validation)
            console.log('Food: '+food)
            console.log('Allergien: '+allergies)
            console.log('Bemerkungen: '+comment)
        }
        
    }
    return (
        <div class="container">
            <h1>Anmeldung zum Cevi-Lager</h1>
            <br />
             {(() => {
                if (page === 'input') {
                     return (
                        <FormularInput
                            name={name}
                            prename={prename}
                            ceviName={ceviName}
                            address={address}
                            plz={plz}
                            city={city}
                            contactName={contactName}
                            contactPrename={contactPrename}
                            contactNum={contactNum}
                            food={food}
                            allergies={allergies}
                            comment={comment}
                            validation={validation}
                            alert={alert}
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
                            updateFood={updateFood}
                            updateAllergies={updateAllergies}
                            updateComment={updateComment}
                            handleSubmit={handleSubmit}
                        ></FormularInput>
                    )
                } else if (page === 'summary') {
                      return (
                        <FormularSummary
                            name={name}
                            prename={prename}
                            ceviName={ceviName}
                            address={address}
                            plz={plz}
                            city={city}
                            contactName={contactName}
                            contactPrename={contactPrename}
                            contactNum={contactNum}
                            food={food}
                            allergies={allergies}
                            comment={comment}
                            updatePage={backToForm}
                            submittForm={submittForm}
                        ></FormularSummary>
                    )
                } else {
                    return (
                        <FormularSended
                            updatePage={backToForm}
                        ></FormularSended>
                    )
                }
            })()} 
        </div>
    );
}