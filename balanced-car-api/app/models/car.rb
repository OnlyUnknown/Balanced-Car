class Car < ApplicationRecord
  validates :name, presence: true
  has_many :bills
  has_many :revenues
  belongs_to :user
  has_one :driver
end
