const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()
const PORT = 4000

app.use(cors())

app.get("/", (req, res) => res.send("Express Server"))

app.get("/images", async (req, res) => {
  let { tags, pageSize, currentPage } = req.query
  currentPage = +currentPage // convert string to number
  pageSize = +pageSize
  const startAt = currentPage === 1 ? 0 : pageSize * currentPage - 1 // initiate index start item of array
  try {
    const response = await axios(
      `https://www.flickr.com/services/feeds/photos_public.gne?format=json&${
        tags && `&tags=${tags}`
      }`
    ) // hit flickr api to get public images
    let { data } = response
    data = data.replace("jsonFlickrFeed(", "") // remove unneeded string so can parse to json
    data = data.substring(0, data.length - 1) // remove unneeded string so can parse to json
    data = JSON.parse(data) // parse to json
    const images = data.items.slice(startAt, startAt + pageSize) // trim array to paginated data
    const totalData = data.items.length // get total items
    const totalPage =
      ~~(totalData / pageSize) === 0 ? 1 : ~~(totalData / pageSize) // get total pages
    const { modified } = data // get modified date of public images
    res.json({
      data: images,
      meta: {
        currentPage,
        totalPage,
        pageSize,
        totalData,
        modified,
      },
    })
  } catch (error) {
    console.log(error.message)
    res.json({ error })
  }
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
