class CreateBills < ActiveRecord::Migration[7.0]
  def change
    create_table :bills do |t|
      t.index :id, unique: true
      t.float :total
      t.text :note
      t.references :car, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
