class AddDriverIdToCars < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :cars, :drivers, column: :driver_id 
  end
end
