# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_05_27_103341) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.float "total"
    t.text "note"
    t.bigint "car_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["car_id"], name: "index_bills_on_car_id"
    t.index ["id"], name: "index_bills_on_id", unique: true
    t.index ["user_id"], name: "index_bills_on_user_id"
  end

  create_table "cars", force: :cascade do |t|
    t.string "name"
    t.string "tires_age"
    t.integer "oil"
    t.integer "auto_oil"
    t.text "note"
    t.integer "model"
    t.string "car_type"
    t.string "transmission_type"
    t.boolean "for_bidding"
    t.integer "last_bid"
    t.integer "buy_limit"
    t.boolean "commercial"
    t.boolean "public"
    t.string "chassis_number"
    t.string "bills", default: [], array: true
    t.integer "revenues", default: [], array: true
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["id"], name: "index_cars_on_id", unique: true
    t.index ["user_id"], name: "index_cars_on_user_id"
  end

  create_table "revenues", force: :cascade do |t|
    t.text "note"
    t.float "revenue"
    t.bigint "car_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["car_id"], name: "index_revenues_on_car_id"
    t.index ["id"], name: "index_revenues_on_id", unique: true
    t.index ["user_id"], name: "index_revenues_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "phone_number"
    t.integer "number_of_cars"
    t.string "cars", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["id"], name: "index_users_on_id", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "bills", "cars"
  add_foreign_key "bills", "users"
  add_foreign_key "cars", "users"
  add_foreign_key "revenues", "cars"
  add_foreign_key "revenues", "users"
end
