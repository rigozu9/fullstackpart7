const router = require("express").Router()
const Blog = require("../models/blog")

const { userExtractor } = require("../utils/middleware")

router.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 })
  response.json(blogs)
})

router.post("/", userExtractor, async (request, response) => {
  const { title, author, url, likes } = request.body
  const blog = new Blog({
    title,
    author,
    url,
    likes: likes ? likes : 0,
  })

  const user = request.user

  if (!user) {
    return response.status(401).json({ error: "operation not permitted" })
  }

  blog.user = user._id

  const createdBlog = await blog.save()

  user.blogs = user.blogs.concat(createdBlog._id)
  await user.save()

  response
    .status(201)
    .json(await createdBlog.populate("user", { username: 1, name: 1 }))
})

router.put("/:id", async (request, response) => {
  const blog = request.body
  const id = request.params.id

  const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true })

  response
    .status(200)
    .json(await updatedBlog.populate("user", { username: 1, name: 1 }))
})

router.delete("/:id", userExtractor, async (request, response) => {
  const blog = await Blog.findById(request.params.id)

  const user = request.user

  if (!user || blog.user.toString() !== user.id.toString()) {
    return response.status(401).json({ error: "operation not permitted" })
  }

  user.blogs = user.blogs.filter((b) => b.toString() !== blog.id.toString())

  await user.save()
  await Blog.findByIdAndRemove(blog.id)

  response.status(204).end()
})

router.post("/:id/comments", async (request, response) => {
  const { comment } = request.body
  const id = request.params.id
  const blog = await Blog.findById(id)

  blog.comments = [...blog.comments, comment]
  const updatedBlog = await blog.save()

  response
    .status(201)
    .json(await updatedBlog.populate("user", { username: 1, name: 1 }))
})

module.exports = router
