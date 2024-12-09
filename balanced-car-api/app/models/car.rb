class Car < ApplicationRecord
  validates :name, presence: true
  has_many :bills
  has_many :revenues
  belongs_to :user
  has_one :driver
  has_many :group_items, as: :item, dependent: :destroy
  has_many :groups, through: :group_items
end
