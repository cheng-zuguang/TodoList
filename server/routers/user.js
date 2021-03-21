const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'czg' && user.password === 'czg') {
    ctx.session.user = {
      username: 'czg'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'czg'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
