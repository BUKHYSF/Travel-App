import {information} from "./handler";
import "babel-polyfill"


describe('information for checking this fun if appear (null or not)', () => {
    test('shoul be', async () => {
        expect(information).not.toBe(null);
    });
});


describe('information for checking this fun if appear (null or not)', () => {
    test('shoul be', async () => {
        expect(typeof information).not.toBe(null);
    });
});

