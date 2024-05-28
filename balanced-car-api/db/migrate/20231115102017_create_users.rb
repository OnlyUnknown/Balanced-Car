class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.index :id, unique: true
      t.string :name
      t.integer :phone_number
      t.integer :number_of_cars
      t.string :cars, array: true, default: []

      t.timestamps
    end
  end
end
