import { redirect } from 'redux-router-director'
let urlAttempt = null;
export const auth = (ctx, next) => {
    console.log(ctx.state);
    if (!ctx.state.authUser.id) {
        urlAttempt = ctx.state.router.pattern;
        redirect('/login');
    } else if (urlAttempt) {
        redirect(urlAttempt);
        urlAttempt = null;
    }

    next();
};
