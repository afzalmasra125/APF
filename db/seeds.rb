# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# employees = Employee.create([{first_name: 'Afzal'},{last_name: 'Masra'},{email: 'afzal.masra@csgi.com'},{manager_id:0},{manager_status:false}])


 # reviews = Review.create([{ reviewer_id: 1, reviewee_id: 1, relationship:1, judgement:1, teamwork: 1, leadership: 1, technical: 1}])

# employees = Employee.create([
# 	{first_name: 'Afzal',last_name: 'Masra', email: 'a@grr.la', manager_id:1 , manager_status: false, password:'test'}, 
# 	{first_name: 'Wanda',last_name: 'Vanphou', email: 'v@a.com', manager_id:1 , manager_status: false, password:'test'},
# 	{first_name: 'Pritam',last_name: 'Halder', email: 'p@a.com', manager_id:1 , manager_status: false, password:'test'}, 
# 	{first_name: 'Ashish',last_name: '', email: 'n@a.com', manager_id:1 , manager_status: false, password:'test'}])


# reviews = Review.create([
# 	{reviewer_id: 2, reviewee_id: 1, relationship:1, judgement:1, teamwork: 1, leadership: 1, technical: 1},
# 	{reviewer_id: 3, reviewee_id: 1, relationship:1, judgement:1, teamwork: 1, leadership: 1, technical: 1},
# 	{reviewer_id: 4, reviewee_id: 1, relationship:1, judgement:1, teamwork: 1, leadership: 1, technical: 1}])

Employee.create([
  {first_name: 'Greg', last_name: 'Hobday', email: 'gh@grr.la', manager_id: 2, manager_status: true, password: 'test'},
  {first_name: 'Wanda', last_name: 'Vanphou', email: 'wv@gmail.com', manager_id: 1, manager_status: true, password: 'test'},
  {first_name: 'Afzal', last_name: 'Masra', email: 'am@grr.la', manager_id: 2, manager_status: true, password: 'test'},
  {first_name: 'Vijay Kumar', last_name: 'Sheroan', email: 'vks@grr.la', manager_id: 2, manager_status: true, password: 'test'},
  {first_name: 'Prtam', last_name: 'Halder', email: 'ph@grr.la', manager_id: 2, manager_status: false, password: 'test'},
  {first_name: 'Ashish', last_name: 'Keshri', email: 'ak@grr.la', manager_id: 2, manager_status: false, password: 'test'},
  {first_name: 'Greg', last_name: 'Dabkey', email: 'gd@grr.la', manager_id: 2, manager_status: false, password: 'test'},
  {first_name: 'Denis', last_name: 'Doci', email: 'dd@grr.la', manager_id: 2, manager_status: false, password: 'test'},
  {first_name: 'Kiran', last_name: 'Chandran', email: 'kc@grr.la', manager_id: 2, manager_status: false, password: 'test'},
  {first_name: 'Paurav', last_name: 'Patel', email: 'pp@grr.la', manager_id: 1, manager_status: false, password: 'test'}
])

Review.create([
  {reviewer_id: 8, reviewee_id: 4, relationship: 0, judgement: 0, teamwork: 1, leadership: nil, technical: nil, positive_feedback: 'He is awesome', needs_improvement: 'He can do better'},
  {reviewer_id: 4, reviewee_id: 4, relationship: 1, judgement: 3, teamwork: 3, leadership: 3, technical: 3, positive_feedback: 'I am so good', needs_improvement: 'I need improvement'},
  {reviewer_id: 2, reviewee_id: 4, relationship: 0, judgement: 3, teamwork: 3, leadership: 3, technical: 3, positive_feedback: 'good', needs_improvement: 'bad'},
  {reviewer_id: 5, reviewee_id: 4, relationship: 0, judgement: 3, teamwork: 3, leadership: 3, technical: 3, positive_feedback: 'good', needs_improvement: 'bad'}
])