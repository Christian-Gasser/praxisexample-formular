export default function GuideType(props) {
    <div class="card" style="width: 18rem;">
        <p>test paragraph</p>
        <img class="card-img-top" src={props.picture} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">
                <input class="form-check-input" type="radio" name="guide-type" id={props.id} />
                {props.title}
            </h5>
            <p class="card-text">{props.description}</p>
        </div>
    </div>
};




