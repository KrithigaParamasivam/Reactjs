const LabelDisplay=(props)=>{
    console.log(props.value);
    return(
        <div>
            <label for="disp"> UserName:</label>
            <input type="text" value={props.value}/>
        </div>
    );
}
export default LabelDisplay;