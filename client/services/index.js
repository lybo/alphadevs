export function login(email, password) {
    return new Promise(function(resolve, reject) {
        dpd.users.login({
            'username': email, 
            'password': password
        }, function(user, err) {
            if(err) {
                console.error(err);
                reject(err);
                return;
            };
            dpd.users.me(function(me) {
                me.email = me.username;
                console.log(me);
                resolve(me);
            });
        });
    });
}
