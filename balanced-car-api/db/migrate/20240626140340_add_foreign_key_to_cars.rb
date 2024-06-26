class AddForeignKeyToCars < ActiveRecord::Migration[7.0]
  def change
    add_reference :cars, :driver, index: true
    add_foreign_key :cars, :drivers
  end
end
