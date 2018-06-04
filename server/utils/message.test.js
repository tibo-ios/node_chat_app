const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'from@example.com';
        var text = 'This is a test';

        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Location Test';
        var lat = 1;
        var lng = 1;
        var url = `https://www.google.de/maps?q=1,1`;

        var locationMessage = generateLocationMessage(from, lat, lng);

        expect(typeof locationMessage.createdAt).toBe('number');
        expect(locationMessage).toMatchObject({from, url});
    });
});