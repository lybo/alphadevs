// Example On Get: Hide Secret Properties
if (!me || me.id !== this.id) {
    cancel("You are not authorized to do that", 401);
} else {
    emit('user:update', this);
}