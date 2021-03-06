# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190226053104) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "employees", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.integer "manager_id"
    t.boolean "manager_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.boolean "admin_status"
    t.string "coach"
    t.string "job_title"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "reviewer_id"
    t.integer "reviewee_id"
    t.integer "relationship"
    t.integer "judgement"
    t.integer "teamwork"
    t.integer "leadership"
    t.integer "technical"
    t.text "positive_feedback"
    t.text "needs_improvement"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "dependability"
  end

end
