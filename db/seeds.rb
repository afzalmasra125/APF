# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# employees = Employee.create([{first_name: 'Afzal'},{last_name: 'Masra'},{email: 'afzal.masra@csgi.com'},{manager_id:0},{manager_status:false}])


 # reviews = Review.create([{ reviewer_id: 1, reviewee_id: 1, relationship:1, judgement:1, teamwork: 1, leadership: 1, technical: 1}])

employees = Employee.create([{first_name: 'Afzal',last_name: 'Masra', email: 'a@grr.la', manager_id:1 , manager_status: true, password_digest:'test'}, {first_name: 'A',last_name: 'Masra', email: 'b@grr.la', manager_id:1 , manager_status: false, password_digest:'test'}])