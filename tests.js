// write all tests here
import {Selector} from 'testcafe';

fixture `Electron page`
    .page('./index.html');

// test to check for header
test('Check page content', async t => {
    var header = await t.eval(() => document.querySelector('body > h1').textContent);

    await t.expect(header).eql('TEST ME');
});

// IPC test to check for button click and communication
test('Button click to text', async t => {
    await t.click('#sendSyncMsgBtn')
    Selector('syncReply').withText('Synchronous message reply: Message Received!');   
});

// test to check if a button exists using text
test('Test Button exists', async t => {

    const buttonExists = Selector('button').withText('Sign in with Google').exists;
    await t.expect(buttonExists).ok();
});

