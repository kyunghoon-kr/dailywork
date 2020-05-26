const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


// ctx: Context, 웹 요청과 응답에 대한 정보
// next: 현재 처리 중인 미들웨어의 다음 미들웨어를 호출

app.use(async (ctx, next) => { // 미들웨어 파라미터로 ctx, next 전달
    console.log(ctx.url);
    console.log(1);
    if(ctx.query.authorized !== '1') {
        ctx.status = 401; // unauthorized
        return;
    }
    await next();
    console.log('END');
});

app.use((ctx, next) => {
    console.log(2);
    next();
});

app.use(ctx => {
    ctx.body = 'hello world';
});

app.listen(4000, () => {
    console.log('Listeing to port 4000');
});