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

ActiveRecord::Schema.define(version: 20180405191946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.bigint "trip_id"
    t.bigint "user_id"
    t.index ["trip_id"], name: "index_attendances_on_trip_id"
    t.index ["user_id", "trip_id"], name: "index_attendances_on_user_id_and_trip_id", unique: true
    t.index ["user_id"], name: "index_attendances_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.bigint "trip_id"
    t.decimal "expense"
    t.string "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address", null: false
    t.string "name", null: false
    t.time "time", null: false
    t.date "date", null: false
    t.float "lat"
    t.float "lng"
    t.index ["trip_id"], name: "index_events_on_trip_id"
  end

  create_table "hosts", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_hosts_on_email", unique: true
    t.index ["reset_password_token"], name: "index_hosts_on_reset_password_token", unique: true
  end

  create_table "lodgings", force: :cascade do |t|
    t.bigint "trip_id"
    t.decimal "expense"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address", null: false
    t.string "name", null: false
    t.time "check_in_time", null: false
    t.date "check_in_date", null: false
    t.time "check_out_time", null: false
    t.date "check_out_date", null: false
    t.float "lat"
    t.float "lng"
    t.index ["trip_id"], name: "index_lodgings_on_trip_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "name", default: "My Trip", null: false
    t.datetime "start_date", null: false
    t.datetime "end_date", null: false
    t.decimal "expenses"
    t.bigint "host_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password"
    t.string "image_link"
    t.index ["host_id"], name: "index_trips_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
