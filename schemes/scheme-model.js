const db = require ('../data/dbConfig')

function find (){
    return db('schemes');

}

function findById (id){
return db ('schemes')
.where ({id})
.first ();

}

function findSteps (id){
    return db ('steps')
    .join('schemes','schemes.id','scheme_id')
    .where('scheme_id', id)
    .select('steps.id', 'scheme_name', 'step_number', 'instructions')
    .orderBy('step_number');
}

function add (scheme) {
    return db('schemes')
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update (changes, id){
        return db('schemes')
        .where({ id })
        .update(changes);
}

function remove (id){
    return db ('schemes')
    .where({id})
    .del();
}
module.exports = {find, findById, findSteps, add, update, remove}

