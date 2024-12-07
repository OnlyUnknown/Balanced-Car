class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.references :car, null: true, foreign_key: true
      t.references :driver, null: true, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
    add_index :groups, :id
  end
end
