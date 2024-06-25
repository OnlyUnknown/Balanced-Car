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

ActiveRecord::Schema[7.0].define(version: 2024_06_14_125932) do
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
    t.boolean "for_bidding", default: false
    t.integer "last_bid"
    t.integer "buy_limit"
    t.boolean "commercial", default: false
    t.boolean "public", default: false
    t.boolean "different_driver", default: false
    t.string "chassis_number"
    t.string "bills", default: [], array: true
    t.integer "revenues", default: [], array: true
    t.bigint "user_id", null: false
    t.bigint "driver_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["driver_id"], name: "index_cars_on_driver_id"
    t.index ["id"], name: "index_cars_on_id", unique: true
    t.index ["user_id"], name: "index_cars_on_user_id"
  end

  create_table "devise_api_tokens", force: :cascade do |t|
    t.string "resource_owner_type", null: false
    t.bigint "resource_owner_id", null: false
    t.string "access_token", null: false
    t.string "refresh_token"
    t.integer "expires_in", null: false
    t.datetime "revoked_at"
    t.string "previous_refresh_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["access_token"], name: "index_devise_api_tokens_on_access_token"
    t.index ["previous_refresh_token"], name: "index_devise_api_tokens_on_previous_refresh_token"
    t.index ["refresh_token"], name: "index_devise_api_tokens_on_refresh_token"
    t.index ["resource_owner_type", "resource_owner_id"], name: "index_devise_api_tokens_on_resource_owner"
  end

  create_table "drivers", force: :cascade do |t|
    t.string "name"
    t.integer "identification"
    t.integer "phone_number"
    t.string "nationality"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
  add_foreign_key "cars", "drivers"
  add_foreign_key "cars", "users"
  add_foreign_key "revenues", "cars"
  add_foreign_key "revenues", "users"
end
