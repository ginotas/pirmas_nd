

function Traukiniai(props) {
    return (
        <div className="trains">

           <img src={props.img} alt={props.desc} />
           <span>{props.desc}</span>

        </div>
    );
}

export default Traukiniai;
