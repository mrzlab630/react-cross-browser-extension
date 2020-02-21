import  {apiUrl} from '../config';


export default class ApiServiceFretch {

    async getResurce(url,method = 'POST',action = false,body = false){
        try {
            const nocache = new Date().getTime();
            const res = await fetch(url, {
                method: method,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Cache-Control': 'no-cache',
                    'Content-Encoding': 'gzip, deflate'
                },
                body: method === 'POST' ? `action=${action}&json=${JSON.stringify(body)}&nocache=${nocache}` : null
            });


            if (!res.ok) {
                throw new Error(`💩 Oops! Could not fetch`)

            }
            return await res.text();

        }catch (error) {

            return {
                    id:parseInt(new Date().getTime()/1000),
                    type:'error',
                    name:error.name,
                    message:error.message
                    };
        }

    }
    getPageData(page){



        const pageUrl = `${apiUrl}/public/assets/data/pages/${page}.json`;

        return this.getResurce(pageUrl,`GET`);
    }

}
