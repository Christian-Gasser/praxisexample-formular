export default function BaseRadio(props) {
    return (
        <div class="card">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
    );
};