// const Podcast = require("../models/Podcast", PodcastSchema)

// ///////////////////////////////////
// // Controller Functions
// ///////////////////////////////////
// // INDEX - Display a list of all products
// const index = async (req, res) => {
//     // gets all the podcasts
//     const Podcasts = await Podcast.find({})
//     // render the view
//     res.render('/podcasts', {
//       podcasts: Podcasts
//     })
//   }

//   // new - Show form to add new products
// const newPodcast = async (req, res) => {
//     res.render('podcast/new')
//   }

// // DESTROY - delete a particular product, then redirect to index "/product/:id"
// const destroy = async (req, res) => {
//     const id = req.params.id
//     await Podcast.findByIdAndDelete(id)
//     res.redirect('/podcasts')
//   }

// // UPDATE -  update a particular product, then redirect to index
// const update = async (req, res) => {
//     // grab the ID from params
//     const id = req.params.id
//     // update the product
//     await Podcast.findByIdAndUpdate(id, req.body, {new: true})
//     // redirect back to show page for that product
//     res.redirect(`/podcast/${id}`)
//   }

// // CREATE - Add new podcast to database, then redirect to index
// const create = async (req, res) => {
//     // create the new product
//     await Podcast.create(req.body)
//     // redirect to the main page
//     res.redirect('/podcasts')
//   }

// // EDIT - show edit form of one product "/podcast/:id/edit"
// const edit = async (req, res) => {
//     // get the id param
//     const id = req.params.id
//     // get a podcast
//     const podcast = await Podcast.findById(id)
//     // render a view
//     res.render('podcast/edit', {
//       podcast
//     })
// }

// // show - show info about one product
// const show = async (req, res) => {
//     // get the id param
//     const id = req.params.id
//     // get a podcast
//     const podcast = await Podcast.findById(id)
//     // render a view
//     res.render('podcast/show', {
//       podcast
//     })
//   }

// // export controller so it's bundled by object
// module.exports = {
//     index, 
//     new: newPodcast,
//     destroy,
//     update,
//     create,
//     edit,
//     show
//   }
