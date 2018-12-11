# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# employees = Employee.create([{first_name: 'Afzal'},{last_name: 'Masra'},{email: 'afzal.masra@csgi.com'},{manager_id:0},{manager_status:false}])


 # reviews = Review.create([{ reviewer_id: 1, reviewee_id: 1, relationship:1, judgement:1, teamwork: 1, leadership: 1, technical: 1}])

employees = Employee.create([
	{first_name: 'Afzal',last_name: 'Masra', email: 'a@grr.la', manager_id:1 , manager_status: false, password:'test'}, 
	{first_name: 'Wanda',last_name: 'Vanphou', email: 'v@a.com', manager_id:1 , manager_status: false, password:'test'},
	{first_name: 'Pritam',last_name: 'Halder', email: 'p@a.com', manager_id:1 , manager_status: false, password:'test'}, 
	{first_name: 'Ashish',last_name: '', email: 'n@a.com', manager_id:1 , manager_status: false, password:'test'}])


reviews = Review.create([
	{reviewer_id: 2, reviewee_id: 1, relationship:1, judgement:1, teamwork: 1, leadership: 1, technical: 1},
	{reviewer_id: 3, reviewee_id: 1, relationship:1, judgement:1, teamwork: 1, leadership: 1, technical: 1},
	{reviewer_id: 4, reviewee_id: 1, relationship:1, judgement:1, teamwork: 1, leadership: 1, technical: 1}])