export function getAuthUser() {
    return new Promise(function(resolve, reject) {
        dpd.users.me((user, err) => {
            if(err) {
                console.error(err);
                reject(err);
                return;
            };
            console.log(user);
            resolve(user ? {
                id: user.id,
                name: user.name,
                avatar: user.profile._json.avatar_url,
                role: 'admin'
            } : {
                id: 0,
                name: '',
                avatar: '',
                role: ''
            });
        });
    });
}

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

export function logout() {
    return new Promise(function(resolve, reject) {
        dpd.users.logout(function(user, err) {
            if(err) {
                console.error(err);
                reject(err);
                return;
            };
            document.cookie = 'sid=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            resolve({});
        });
    });
}
