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

ActiveRecord::Schema.define(version: 2021_06_07_061401) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "short_story_id"
    t.index ["short_story_id"], name: "index_bookmarks_on_short_story_id"
  end

  create_table "bookshelves", force: :cascade do |t|
    t.string "isbn"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookstore_books", force: :cascade do |t|
    t.integer "price"
    t.string "book_title"
    t.string "book_isbn"
    t.string "cover"
    t.bigint "bookstore_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bookstore_id"], name: "index_bookstore_books_on_bookstore_id"
  end

  create_table "bookstore_rate_reviews", force: :cascade do |t|
    t.integer "rating"
    t.text "review"
    t.bigint "bookstore_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bookstore_id"], name: "index_bookstore_rate_reviews_on_bookstore_id"
  end

  create_table "bookstores", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "kind"
    t.string "img"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.text "body"
    t.bigint "short_stories_chapter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["short_stories_chapter_id"], name: "index_comments_on_short_stories_chapter_id"
  end

  create_table "downloads", force: :cascade do |t|
    t.string "isbn"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genres", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notifications", force: :cascade do |t|
    t.string "type"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "short_stories", force: :cascade do |t|
    t.string "title"
    t.string "cover"
    t.string "target_audiance"
    t.text "summary"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "short_stories_chapters", force: :cascade do |t|
    t.string "title"
    t.text "summary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "story_rate_reviews", force: :cascade do |t|
    t.integer "rating"
    t.text "review"
    t.bigint "short_story_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["short_story_id"], name: "index_story_rate_reviews_on_short_story_id"
  end

  add_foreign_key "bookmarks", "short_stories"
  add_foreign_key "bookstore_books", "bookstores"
  add_foreign_key "bookstore_rate_reviews", "bookstores"
  add_foreign_key "comments", "short_stories_chapters"
  add_foreign_key "story_rate_reviews", "short_stories"
end