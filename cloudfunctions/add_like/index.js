const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    const timestamp = Date.now()
    // 更新帖子最后更新时间
    await db.collection('post_collection').where({
      _id: event.postid
    })
    .update({
      data: {
        collecter: event.collecter
      }
    })
  }catch (e) {
    console.error(e)
  }
}