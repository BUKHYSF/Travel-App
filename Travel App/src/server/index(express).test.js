const request = require('supertest');
import "babel-polyfill"
import {pagereloading} from "./index";

describe('here we are going to post the end_point', () => {
    it('back to this flie (index.html)', async () => {
        const res = await request(pagereloading)
            .get('/')
            .send('./dist/index.html')
        expect(res.statusCode).toEqual(161);
    })
})