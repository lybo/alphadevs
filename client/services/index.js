export function getAuthUser() {
    return new Promise(function(resolve, reject) {
        dpd.users.me((user, err) => {
            if(err) {
                console.error(err);
                reject(err);
                return;
            };
            resolve(user ? {
                id: user.id,
                name: user.name,
                avatar: user.profile._json.avatar_url,
                role: 'admin',
                skills: user.skills,
            } : {
                id: 0,
                name: '',
                avatar: '',
                role: '',
                skills: [],
            });
        });
    });
}

export function updateAuthUser(user) {
    return new Promise(function(resolve, reject) {
        dpd.users.put(user.id, {
            skills: user.skills 
        }, function(me, err) {
            if(err) {
                console.error(err);
                reject(err);
                return;
            };
            resolve(me);
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

export function getTags() {
    return new Promise(function(resolve, reject) {
        dpd.tags.get((tags, err) => {
            if(err) {
                console.error(err);
                reject(err);
                return;
            };
            resolve(tags);
        });
    });
}

export function addTag(tag) {
    return new Promise(function(resolve, reject) {
        dpd.tags.post(tag, (tag, err) => {
            if(err) {
                console.error(err);
                reject(err);
                return;
            };
            resolve(tag);
        });
    });
}

export const tags = {
    on: (onAdd, onRemove) => {
        onAdd && dpd.tags.on('add', onAdd);
        onRemove && dpd.tags.on('remove', onRemove);
    },
    off: () => {
        dpd.tags.off('add');
        dpd.tags.off('remove');
    }
}
