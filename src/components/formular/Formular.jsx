import BaseInput from "../UI/BaseInput";
import BaseCheckBox from "../UI/BaseCheckBox";
import BaseRadio from "../UI/BaseRadio";
import BaseButton from "../UI/BaseButton";



export default function Formular(props) {
    const inputs = [

    ];
    const guideTypes = [
        {
            id: 'masoala',
            title: 'Masoala Regenwald',
            description: 'Begeben Sie sich auf eine Tour auf den Erlebniswegen durch den Masoala Regenwald. Sie lernen die Vielfalt der Pflanzen und Tiere des Masoala Regenwaldes kennen und erhalten Einblick in das Naturschutzprojekt des Zoo Zürich auf der Halbinsel Masoala in Madagaskar. So wird verständlich, warum uns allen die nachhaltige Nutzung des Regenwaldes am Herzen liegen sollte.'
        },
        {
            id: 'kaeng-krachan',
            title: 'Hinter den Kulissen des Kaeng Krachan Elefantenpark',
            description: 'In dieser Führung begeben Sie sich in die Bereiche des Kaeng Krachan Elefantenpark, die man als normaler Besucher nicht sieht. Sie werden dabei viel über die Haltung der Elefanten und können selbst das vorbereitete Futter zu einer der Futterstationen bringen und dieser Auffüllen. Ausserdem erhalten Sie einen Einblick in die Aufgaben des Zoos.'
        },
        {
            id: 'communication-in-animal-kingdom',
            title: 'Kommunikation im Tierreich',
            description: 'Es singt, trommelt, imponiert, grinst, duftet, gurgelt, vibriert und tanzt im Zoo. Dies alles sind verschiedene Arten der Kommunikation. Begeben Sie sich auf eine Tour durch den Zoo Zürich und lernen sie verschiedene Tiere und ihre Art der Kommunikation kennen. Ausserdem erhalten Sie einen Einblick in die Aufgaben des Zoos.'
        },
        {
            id: 'records-in-animal-kingdom',
            title: 'Rekorde im Tierreich',
            description: 'Im Laufe von Jahrmillionen hat die Evolution in Tieren Fähigkeiten hervorgebracht, bei denen wir Menschen kaum mithalten kann. Begeben Sie sich auf eine Tour durch den Zoo Zürich und lernen sie verschiedene Tiere und ihre Rekorde kennen. Ausserdem erhalten Sie einen Einblick in die Aufgaben des Zoos.'
        },
        {
            id: 'conservation',
            title: 'Naturschutz',
            description: 'Experten schätzen, dass pro Tag bis zu 150 Pflanzen- und Tierarten von der Erde verschwinden. Dies ist eine ernorm grosse menge und wir als Menschen müssen dagegen unternehmen. Erfahren Sie auf einem spannenden Rundgang durch den Zoo die Geschichten von bedrohten Tierarten und wie der Zoo sie schützt. Dabei lernen sie auch die Tierarten kennen, welche nur durch Zoos überlebt haben.'
        },{
            id: 'biodiversity',
            title: 'Biodiversität',
            description: 'Auf dieser Welt gibt es 1.8 Millionen beschriebene Tierarten. Bei diesem Rundgang werden Ihnen konkreten Beispielen vorgestellt, was Biodiversität bedeutet und wieso sie grundlegend für intakte Ökosysteme ist. Ausserdem erfahren sie, welche Massnahmen der Zoo unternimmt um die Biodiversität aufrecht zu erhalten und was Sie als Besucher tun können.'
        }
        
    ];
    return (
        <div>
            <form>
                <BaseInput id="name" name="Name" type="text"></BaseInput>
                <BaseInput id="prename" name="Vorname" type="text"></BaseInput>
                <BaseInput id="email" name="Email-Adresse" type="text"></BaseInput>
                <BaseInput id="tel" name="Telefonnummer" type="tel"></BaseInput>
                <BaseInput id="date" name="Datum" type="date"></BaseInput>
                <br/>

                    <div class="">
                        <input type="radio" id="masoala" name="guide-type" />
                        <h2>Masoala Regenwald</h2>
                        <p>Begeben Sie sich auf eine Tour auf den Erlebniswegen durch den Masoala Regenwald. Sie lernen die Vielfalt der Pflanzen und Tiere des Masoala Regenwaldes kennen und erhalten Einblick in das Naturschutzprojekt des Zoo Zürich auf der Halbinsel Masoala in Madagaskar. So wird verständlich, warum uns allen die nachhaltige Nutzung des Regenwaldes am Herzen liegen sollte.</p>
                    </div>
                    <div class="">
                        <input type="radio" id="kaeng-krachan" name="guide-type" />
                        <h2>Hinter den Kulissen des Kaeng Krachan Elefantenpark</h2>
                        <p>Begeben Sie sich auf eine Tour auf den Erlebniswegen durch den Masoala Regenwald. Sie lernen die Vielfalt der Pflanzen und Tiere des Masoala Regenwaldes kennen und erhalten Einblick in das Naturschutzprojekt des Zoo Zürich auf der Halbinsel Masoala in Madagaskar. So wird verständlich, warum uns allen die nachhaltige Nutzung des Regenwaldes am Herzen liegen sollte.</p>
                    </div>
                    <div class="">
                        <input type="radio" id="naturschutz" name="guide-type" />
                        <h2>Naturschutz</h2>
                        <p>Begeben Sie sich auf eine Tour auf den Erlebniswegen durch den Masoala Regenwald. Sie lernen die Vielfalt der Pflanzen und Tiere des Masoala Regenwaldes kennen und erhalten Einblick in das Naturschutzprojekt des Zoo Zürich auf der Halbinsel Masoala in Madagaskar. So wird verständlich, warum uns allen die nachhaltige Nutzung des Regenwaldes am Herzen liegen sollte.</p>
                    </div>
                    <div class="">
                        <input type="radio" id="kommunikation-im-tierreich" name="guide-type" />
                        <h2>Kommunokation im Tierreich</h2>
                        <p>Begeben Sie sich auf eine Tour auf den Erlebniswegen durch den Masoala Regenwald. Sie lernen die Vielfalt der Pflanzen und Tiere des Masoala Regenwaldes kennen und erhalten Einblick in das Naturschutzprojekt des Zoo Zürich auf der Halbinsel Masoala in Madagaskar. So wird verständlich, warum uns allen die nachhaltige Nutzung des Regenwaldes am Herzen liegen sollte.</p>
                    </div>
                    <div class="">
                        <input type="radio" id="rekorde-im-tierreich" name="guide-type" />
                        <h2>Rekorde im Tierreich</h2>
                        <p>Begeben Sie sich auf eine Tour auf den Erlebniswegen durch den Masoala Regenwald. Sie lernen die Vielfalt der Pflanzen und Tiere des Masoala Regenwaldes kennen und erhalten Einblick in das Naturschutzprojekt des Zoo Zürich auf der Halbinsel Masoala in Madagaskar. So wird verständlich, warum uns allen die nachhaltige Nutzung des Regenwaldes am Herzen liegen sollte.</p>
                    </div>
                    <div class="">
                        <input type="radio" id="rekorde-im-tierreich" name="guide-type" />
                        <h2>Rekorde im Tierreich</h2>
                        <p>Begeben Sie sich auf eine Tour auf den Erlebniswegen durch den Masoala Regenwald. Sie lernen die Vielfalt der Pflanzen und Tiere des Masoala Regenwaldes kennen und erhalten Einblick in das Naturschutzprojekt des Zoo Zürich auf der Halbinsel Masoala in Madagaskar. So wird verständlich, warum uns allen die nachhaltige Nutzung des Regenwaldes am Herzen liegen sollte.</p>
                    </div>
                    <div class="">
                        <input type="radio" id="biodiversity" name="guide-type" />
                        <h2>Biodiversität</h2>
                        <p>Begeben Sie sich auf eine Tour auf den Erlebniswegen durch den Masoala Regenwald. Sie lernen die Vielfalt der Pflanzen und Tiere des Masoala Regenwaldes kennen und erhalten Einblick in das Naturschutzprojekt des Zoo Zürich auf der Halbinsel Masoala in Madagaskar. So wird verständlich, warum uns allen die nachhaltige Nutzung des Regenwaldes am Herzen liegen sollte.</p>
                    </div>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="duration" id="1h" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            1 Stunde
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="duration" id="1.5h" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            1.5 Stunden
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
}