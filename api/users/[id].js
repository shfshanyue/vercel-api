module.exports = (req, res) => {
  const { id } = req.query
  res.json({
    id: id || 10086,
    name: 'shanyue',
    mobilePhone: '18800008888',
    email: 'me@shanyue.tech'
  })
}

1. 如果 3000 已经被监听，则监听 3001 这个端口号
