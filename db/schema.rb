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

ActiveRecord::Schema.define(version: 2021_05_05_145817) do

  create_table "aahomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "menu"
    t.bigint "ahome_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "link"
    t.string "mainmenu"
    t.index ["ahome_id"], name: "index_aahomes_on_ahome_id"
  end

  create_table "action_text_rich_texts", charset: "utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.text "body", size: :long
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", charset: "utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8mb4", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "ahomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.string "discribe"
    t.string "button_right"
    t.string "button_left"
    t.text "url_right"
    t.text "url_left"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "title2"
    t.text "logo"
    t.string "adress"
  end

  create_table "bbhomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.string "discribe"
    t.bigint "bhome_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bhome_id"], name: "index_bbhomes_on_bhome_id"
  end

  create_table "bhomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.string "title2"
    t.string "discribe"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "blogs", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.string "discribe"
    t.text "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "chomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.string "title2"
    t.text "discribe"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contacts", charset: "utf8mb4", force: :cascade do |t|
    t.string "btitle"
    t.string "bdiscribe"
    t.string "cutile"
    t.string "cuiscribe"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dhomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.text "discribe"
    t.string "title2"
    t.text "discribe2"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "eehomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.text "discribe"
    t.text "image"
    t.bigint "ehome_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ehome_id"], name: "index_eehomes_on_ehome_id"
  end

  create_table "ehomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.text "discribe"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ffhomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.string "discribe"
    t.bigint "bhome_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "fhome_id"
    t.index ["bhome_id"], name: "index_ffhomes_on_bhome_id"
    t.index ["fhome_id"], name: "index_ffhomes_on_fhome_id"
  end

  create_table "fhomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.string "title2"
    t.string "discribe"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "homes", charset: "utf8mb4", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ihomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.string "title2"
    t.string "title3"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "iihomes", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.string "discribe"
    t.string "colum1"
    t.string "colum2"
    t.string "colum3"
    t.string "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "ihome_id"
    t.index ["ihome_id"], name: "index_iihomes_on_ihome_id"
  end

  create_table "inquiries", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "conpany"
    t.text "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "interviews", charset: "utf8mb4", force: :cascade do |t|
    t.string "question"
    t.string "answer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "home_id"
    t.index ["home_id"], name: "index_interviews_on_home_id"
  end

  create_table "users", charset: "utf8mb4", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin", default: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "aahomes", "ahomes"
  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "eehomes", "ehomes"
  add_foreign_key "ffhomes", "fhomes"
  add_foreign_key "iihomes", "ihomes"
  add_foreign_key "interviews", "homes"
end
