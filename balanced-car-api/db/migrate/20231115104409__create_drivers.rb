class CreateDrivers < ActiveRecord::Migration[7.0]
  def change
    create_table :drivers do |t|
      t.string :name
      t.integer :identification
      t.integer :phone_number
      t.string :nationality

      t.timestamps
    end
  end
end
