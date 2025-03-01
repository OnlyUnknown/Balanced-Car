class Driver < ApplicationRecord
  belongs_to :car, optional: true, dependent: :destroy
  belongs_to :user
  has_many :group_items, as: :item, dependent: :destroy
  has_many :groups, through: :group_items
end
