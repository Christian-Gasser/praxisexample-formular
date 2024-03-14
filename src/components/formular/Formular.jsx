import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect, useState} from 'react';

export default function Formular(props) {
    //State
    const[name, setName]= useState("");
    const[prename, setPrename]= useState("");
    const[ceviName, setCeviName]= useState("");
    const[contactName, setContactName]= useState("");
    const[contactPrename, setContactPrename]= useState("");
    const[contactNum, setContactNum]= useState("");
    const[checkbox, setCheckbox]= useState("");
    const[food, setFood]= useState("");
    const[allergies, setAllergies]= useState("");
    const[comment, setComment]= useState("");

    //Functions
    const changeFood = e => {
        setFood(e.target.value)
      }
    function onSubmit(){
        console.log(prename+" "+name+" v/o "+ceviName);
        console.log(contactPrename+" "+contactName+" with "+contactNum+" veryfied "+checkbox);
        console.log(food+" with following allergies "+allergies);
        console.log("following comment: "+ comment)
      } 
    return (
        <div class="container">
            <form onSubmit={onSubmit()}>
                <h1>Anmeldung zum Cevi-Lager</h1>

                {/*Teilnehmer*/}
                <div class="row gy-2">
                    <h3>Teilnehmer</h3>
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" class="form-control" placeholder="Name" aria-label="name" aria-describedby="addon-wrapping" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" class="form-control" placeholder="Vorname" aria-label="prename" aria-describedby="addon-wrapping" value={prename} onChange={(e)=> setPrename(e.target.value)}/>
                    </div>
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" class="form-control" placeholder="Ceviname" aria-label="ceviName" aria-describedby="addon-wrapping" value={ceviName} onChange={(e)=> setCeviName(e.target.value)}/>
                    </div>
                </div>
                <br />
                <br/>

                {/*Notfallkontakt*/}
                <div class="row gy-2">
                    <h3>Notfallkontakt</h3>
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" class="form-control" placeholder="Name" aria-label="contactName" aria-describedby="addon-wrapping" value={contactName} onChange={(e)=> setContactName(e.target.value)}/>
                    </div>
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" class="form-control" placeholder="Vorname" aria-label="contactPrename" aria-describedby="addon-wrapping" value={contactPrename} onChange={(e)=> setContactPrename(e.target.value)}/>
                    </div>
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">@</span>
                        <input type="tel" class="form-control" placeholder="Telefon" aria-label="contactNum" aria-describedby="addon-wrapping" value={contactNum} onChange={(e)=> setContactNum(e.target.value)}/>
                    </div>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckDefault" onChange={(e)=> setCheckbox(e.target.value)}/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Hiermit bestätige ich, dass der hier angegebene Notfallkontakt eine erziehungsberechtigte Person des Teilnehmers ist.
                            </label>
                        </div>
                    </div>
                </div>
                <br />
                <br />

                {/*Essen*/}
                <div class="row gy-2">
                    <h3>Essen</h3>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="essen" id="fleisch" value="Fleisch" onChange={changeFood}/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Fleisch
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="essen" id="vegi" value="Vegetarisch" onChange={changeFood}/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Vegetarisch
                            </label>
                        </div>
                    </div>
                    <div class="input-group flex-nowrap">
                        <textarea type="text" class="form-control" placeholder="Allergien" aria-label="bemerkungen" name="allergies" aria-describedby="addon-wrapping" value={allergies} onChange={(e)=> setAllergies(e.target.value)}/>
                    </div>
                </div>
                <br />
                <br />

                {/*Bemerkungen */}
                <div class="row gy-2">
                    <h3>Bemerkungen</h3>
                    <div class="input-group flex-nowrap">
                        <textarea type="text" class="form-control" placeholder="Krankheiten, Regelmässige Medikamente, etc." aria-label="bemerkungen" name="comment" aria-describedby="addon-wrapping" value={comment} onChange={(e)=> setComment(e.target.value)}/>
                    </div>
                </div>
                <br />
                <br />

                <button class="btn btn-primary" type="submit">Senden</button>
            </form>
        </div>
    );
}