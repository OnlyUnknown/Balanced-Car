class Group < ApplicationRecord
  belongs_to :user
  has_many :group_items, dependent: :destroy
  has_many :cars, through: :group_items, source: :item, source_type: 'Car'
  has_many :drivers, through: :group_items, source: :item, source_type: 'Driver'

  GROUP_TYPES = %w[cars drivers].freeze

  validates :name, presence: true
  validates :group_type, presence: true, inclusion: { in: GROUP_TYPES }
  validate :validate_group_items_type

  private

  def validate_group_items_type
    group_items.each do |group_item|
      if group_type == 'cars' && group_item.item_type != 'Car'
        errors.add(:base, 'This group can only contain cars.')
      elsif group_type == 'drivers' && group_item.item_type != 'Driver'
        errors.add(:base, 'This group can only contain drivers.')
      end
    end
  end
end
