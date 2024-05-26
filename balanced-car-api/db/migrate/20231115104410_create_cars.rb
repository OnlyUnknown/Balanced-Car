class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.index :id, unique: true
      t.string :name
      t.string :tires_age
      t.integer :oil
      t.integer :auto_oil
      t.text :note
      t.integer :model
      t.references :user, null: false, foreign_key: true
      t.string :car_type
      t.string :transmission_type
      t.boolean :for_bidding
      t.integer :last_bid
      t.integer :buy_limit
      t.integer :revenue
      t.boolean :commercial
      t.boolean :public
      t.string :chassis_number
      t.string :bills, array: true, default: []

      t.timestamps
    end
  end
end
