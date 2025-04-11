class AddForeignKeyToCars < ActiveRecord::Migration[7.0]
  def change
    add_reference :cars, :driver, index: true, foreign_key: true, null: true
  end
end
