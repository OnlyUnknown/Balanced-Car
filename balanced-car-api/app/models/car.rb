class Car < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  has_many :bills, dependent: :destroy
  has_many :revenues, dependent: :destroy
  has_one :driver, dependent: :nullify
  has_many :group_items, as: :item, dependent: :destroy
  has_many :groups, through: :group_items
end
