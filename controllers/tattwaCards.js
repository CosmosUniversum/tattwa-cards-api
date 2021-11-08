import { TattwaCard } from "../models/tattwaCard.js"

function index(req, res) {
  TattwaCard.find({}).then(function(tattwaCards) {
    res.status(200).json(tattwaCards);
  });
}



function show(req, res){
  TattwaCard.findById(req.params.id)
  .then(tattwaCard => {
      res.json(tattwaCard)
  })
  .catch(err => {
    res.json(err)
})
}

function create(req, res) {
  TattwaCard.create(req.body)
  .then(tattwaCard => {
    res.json(tattwaCard)
  })
  .catch(err => {
    res.json(err)
  })
}

function update(req, res){
  TattwaCard.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(tattwaCard => {
      res.json(tattwaCard)
  })
  .catch(err => {
      res.json(err)
  })
}

function deleteTattwaCard(req, res) {
  TattwaCard.findByIdAndDelete(req.params.id)
  .then(tattwaCard => {
    res.json(tattwaCard)
  })
  .catch(err => {
    res.json(err)
  })
}

export {
  index,
  show,
  create,
  update,
  deleteTattwaCard as delete
}