class Group < ApplicationRecord
  belongs_to :user
  has_many :group_items, dependent: :destroy
  has_many :cars, through: :group_items, source: :item, source_type: 'Car'
  has_many :drivers, through: :group_items, source: :item, source_type: 'Driver'
  has_many :Bills, through: :group_items, source: :item, source_type: 'Bill'
  has_many :revenues, through: :group_items, source: :item, source_type: 'Revenue'

  validates :name, presence: true
  validates :group_type, presence: true, inclusion: { in: GROUP_TYPES }
  validate :validate_group_items_type
  validate :validate_group_items_uniqueness
end
