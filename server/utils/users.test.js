const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Tobi',
            room: 'Test'
        }, {
            id: '2',
            name: 'Jenny',
            room: 'Bla'
        }, {
            id: '3',
            name: 'Chris',
            room: 'Test'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Tobi',
            room: 'WM Tippspiel'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for room', () => {
        var userList = users.getUserList('Test');

        expect(userList.length).toBe(2);
        expect(userList).toEqual(['Tobi', 'Chris']);
    });

    it('should return user for id', () => {
        var user = users.getUser('2');

        expect(user.id).toBe('2');
        expect(user).toMatchObject({
            name: 'Jenny', 
            room: 'Bla'
        });
    });

    it('should not find user for id', () => {
        var user = users.getUser('4');

        expect(user).toBe(undefined);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');

        expect(users.users.length).toBe(2);
        expect(user.id).toBe('1');
    });

    it('should not remove user', () => {
        var user = users.removeUser('5');

        expect(users.users.length).toBe(3);
        expect(user).toBeFalsy();
    });
});