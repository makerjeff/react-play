/**
 * Created by jeffersonwu on 10/9/17.
 */
// ES6 Promises:
// http://www.datchley.name/es6-promises/


module.exports.timed_promise_gen = (range, delay) => {

    return new Promise((resolve, reject) => {

        var num = Math.floor(Math.random() * range);

        console.log(`Promise generated for ${num}, awaiting fulfillment.`);

        setTimeout( function() {
            if (num > range/2) {
                resolve(`The number ${num} was greater than ${range/2}. (resolved.)`);
            } else {
                reject(`The number ${num} was less than ${range/2}. (rejected).`);
            }
        }, delay);
    });

};