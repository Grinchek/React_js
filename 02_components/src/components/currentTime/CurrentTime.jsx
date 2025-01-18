
const checkTime = (i) => {
    if (i < 10) { i = "0" + i };
    return i;
}
const CurrentTime = ((digit) => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    return (
        <div >
            <p  >{`${h}  :  ${m}  :  ${s}`}</p>
        </div>

    );


});

export default CurrentTime;