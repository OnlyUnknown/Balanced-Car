class CreateGroupsAndGroupItems < ActiveRecord::Migration[7.0]
  def change

    # Create the groups table
    create_table :groups do |t|
      t.string :name, null: false
      t.string :group_type, null: false # Can be 'cars' or 'drivers'
      t.boolean :public, default: false
      t.string :description
      t.string :location
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end

    # Create the group_items table
    create_table :group_items do |t|
      t.references :group, null: false, foreign_key: true
      t.references :item, polymorphic: true, null: false # Polymorphic for cars or drivers
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end

  end
end
