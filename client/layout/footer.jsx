import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: '程祖广'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>{this.author}的个人待办事项表</span>
      </div>
    )
  }
}
