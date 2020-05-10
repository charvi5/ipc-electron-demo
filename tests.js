// write all tests here
// import {Selector} from 'testcafe';

// import { testPage } from '../config';


fixture `Electron page`
    .page('./index.html');

test('Check page content', async t => {
    var header = await t.eval(() => document.querySelector('body > h1').textContent);

    await t.expect(header).eql('TEST ME');
});