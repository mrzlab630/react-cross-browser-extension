function getDateTimeFromTimestamp(unixTime) {

    const d = new Date(unixTime);

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();

    const h = (d.getHours().toString().length == 1) ? ('0' + d.getHours()) : d.getHours();
    const m = (d.getMinutes().toString().length == 1) ? ('0' + d.getMinutes()) : d.getMinutes();
    const s = (d.getSeconds().toString().length == 1) ? ('0' + d.getSeconds()) : d.getSeconds();


    const time = `${year}-${month}-${date} ${h}:${m}`;

    return time;

};


export default getDateTimeFromTimestamp;