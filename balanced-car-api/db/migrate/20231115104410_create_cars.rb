class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.index :id, unique: true
      t.string :name
      t.string :tires_age
      t.integer :oil_milage
      t.integer :transmission_milage
      t.text :note
      t.integer :model
      t.string :car_type
      t.string :transmission_type
      t.boolean :for_bidding, default: false
      t.integer :last_bid
      t.integer :buy_limit
      t.boolean :commercial, default: false
      t.boolean :public, default: false
      t.boolean :different_driver, default: false
      t.string :chassis_number
      t.string :bills, array: true, default: []
      t.integer :revenues, array: true, default: []
      t.references :user, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
