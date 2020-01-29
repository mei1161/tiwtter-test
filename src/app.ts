import * as Twitter from 'twitter';
import * as dotenv from 'dotenv';

dotenv.config()

const {
    TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET,
    ACCESS_TOKEN_KEY,
    ACCESS_TOKEN_SECRET
} = process.env as { [key: string]: string };

let client = new Twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token_key: ACCESS_TOKEN_KEY,
    access_token_secret: ACCESS_TOKEN_SECRET,
});

async function main(){
    const result = await client.get('followers/list', {user_id: '8P2aZMskK2FdUbF'});
    console.log(result)
    /*const tweets = await client.get('search/tweets', {q: 'from:8P2aZMskK2FdUbF'});
     const statuses = tweets.statuses;
    for(let key in statuses){
        // console.log(statuses[key])
        console.log(`[${statuses[key].created_at}] ${statuses[key].user.name}: ${statuses[key].text}`)
    }
    */
}

main();