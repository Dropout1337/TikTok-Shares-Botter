const qs = require('querystring');
const { default: Axios } = require('axios');
const chalk = require("chalk");
let title = '[TikTok Shares Botter] By Slay Leaked By Dropout';
var reqs = 0;
var video_id = "6858618034777574657";
var keepGoing = true;
makeRequest();
function makeRequest() {
    process.title = title;
    reqs++;
    console.log(chalk.green('Sent: ') + reqs + ('      | ') + chalk.green('ID: ') + video_id);
    Axios.post('https://api16-core-c-useast1a.tiktokv.com/aweme/v1/aweme/stats/?ac=WIFI&op_region=US&app_skin=white&',
        qs.stringify({
            action_time: Date.now(),
            item_id: video_id,
            item_type: '1',
            share_delta: '1',
            stats_channel: 'copy'
        }),
        {
            headers: {
                'ContentType': 'x-www-form-urlencoded',
                'x-common-params-v2': 'version_code=16.6.5&app_name=musical_ly&channel=App%20Store&device_id=' + Math.random() * 10000000000000000000 + '&aid=1233&os_version=13.5.1&device_platform=iphone&device_type=iPhone10,5'
            }
        }
    ).then(res => {
    }).catch(err => {
        keepGoing = false;
        console.log('REQUEST ERRORED! WAITING 10 SECONDS');
        setTimeout(() => {
            keepGoing = true;
			makeRequest();
        }, 10000);
    });
    if (keepGoing)
        setTimeout(() => makeRequest(), 5);
}
